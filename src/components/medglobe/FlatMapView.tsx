import { useEffect, useRef, useState, useCallback, useMemo, type WheelEvent as ReactWheelEvent } from "react";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { geoNaturalEarth1, geoPath, geoContains, type GeoPermissibleObjects } from "d3-geo";
import { Delaunay } from "d3-delaunay";
import { getLanguageFamilyColor } from "@/data/countries";
import {
  numericToAlpha2,
  numericToName,
  countryLanguageFamily,
  regionalLanguages,
} from "@/data/languageMap";

interface FlatMapViewProps {
  focusLat?: number;
  focusLng?: number;
  onCountryClick?: (isoCode: string) => void;
  selectedCountry?: string | null;
}

const WORLD_ATLAS_URL = "https://unpkg.com/world-atlas@2/countries-110m.json";

export default function FlatMapView({
  onCountryClick,
  selectedCountry,
}: FlatMapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [hoverD, setHoverD] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
    alpha2: string | null;
  } | null>(null);
  const [dimensions, setDimensions] = useState({ w: 900, h: 500 });

  // Load world topology
  useEffect(() => {
    fetch(WORLD_ATLAS_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const geo = feature(topology, topology.objects.countries as any);
        setPolygons((geo as any).features);
      });
  }, []);

  // Responsive sizing
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ w, h: Math.max(w * 0.52, 300) });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Projection and path generator
  const projection = useMemo(() => {
    return geoNaturalEarth1()
      .fitSize([dimensions.w, dimensions.h], {
        type: "FeatureCollection",
        features: polygons,
      } as any)
      .translate([dimensions.w / 2, dimensions.h / 2]);
  }, [dimensions.w, dimensions.h, polygons]);

  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  const getAlpha2 = useCallback((feat: any) => {
    return numericToAlpha2[feat.id] || null;
  }, []);

  const getFillColor = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (!alpha2) return "hsl(200,10%,75%)";
      const family = countryLanguageFamily[alpha2];
      if (!family) return "hsl(200,10%,75%)";
      return getLanguageFamilyColor(family);
    },
    [getAlpha2]
  );

  const getOpacity = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (alpha2 === hoverD) return 1;
      if (selectedCountry && alpha2 === selectedCountry.toLowerCase()) return 1;
      return 0.85;
    },
    [getAlpha2, hoverD, selectedCountry]
  );

  const getStrokeWidth = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (alpha2 === hoverD) return 1.5;
      if (selectedCountry && alpha2 === selectedCountry.toLowerCase()) return 1.5;
      return 0.4;
    },
    [getAlpha2, hoverD, selectedCountry]
  );

  // Build Voronoi-based sub-national regions for multilingual countries
  const voronoiRegions = useMemo(() => {
    if (!polygons.length) return [];
    const result: {
      clipId: string;
      countryPath: string;
      cells: { path: string; color: string; label: string }[];
      featId: string;
    }[] = [];

    for (const feat of polygons) {
      const alpha2 = numericToAlpha2[feat.id];
      if (!alpha2 || !regionalLanguages[alpha2] || regionalLanguages[alpha2].length < 2) continue;

      const countryPath = pathGenerator(feat as GeoPermissibleObjects);
      if (!countryPath) continue;

      const regions = regionalLanguages[alpha2];
      const projectedPoints = regions.map((r) => {
        const p = projection([r.lng, r.lat]);
        return p ? [p[0], p[1]] as [number, number] : [0, 0] as [number, number];
      }).filter((p) => p[0] !== 0 || p[1] !== 0);

      if (projectedPoints.length < 2) continue;

      // Get bounding box of the country
      const bounds = pathGenerator.bounds(feat as GeoPermissibleObjects);
      if (!bounds) continue;
      const [[x0, y0], [x1, y1]] = bounds;
      const pad = Math.max(x1 - x0, y1 - y0) * 0.1;

      const delaunay = Delaunay.from(projectedPoints);
      const voronoi = delaunay.voronoi([x0 - pad, y0 - pad, x1 + pad, y1 + pad]);

      const cells: { path: string; color: string; label: string }[] = [];
      for (let i = 0; i < projectedPoints.length; i++) {
        const cellPath = voronoi.renderCell(i);
        if (cellPath) {
          cells.push({
            path: cellPath,
            color: getLanguageFamilyColor(regions[i].languageFamily),
            label: `${regions[i].region}: ${regions[i].language}`,
          });
        }
      }

      if (cells.length > 0) {
        result.push({
          clipId: `clip-${alpha2}`,
          countryPath,
          cells,
          featId: feat.id,
        });
      }
    }

    return result;
  }, [polygons, pathGenerator, projection]);

  // Set of country IDs that have Voronoi regions (skip solid fill for these)
  const voronoiCountryIds = useMemo(() => {
    return new Set(voronoiRegions.map((v) => v.featId));
  }, [voronoiRegions]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, feat: any) => {
      const alpha2 = getAlpha2(feat);
      const name = numericToName[feat.id] || alpha2 || "Unknown";
      const family = alpha2 ? countryLanguageFamily[alpha2] : null;
      const familyLabel = family
        ? family.charAt(0).toUpperCase() + family.slice(1)
        : "";

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      setHoverD(alpha2);
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        content: `${name}${familyLabel ? ` — ${familyLabel}` : ""}`,
        alpha2,
      });
    },
    [getAlpha2]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverD(null);
    setTooltip(null);
  }, []);

  const handleClick = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (alpha2 && onCountryClick) {
        onCountryClick(alpha2);
      }
    },
    [getAlpha2, onCountryClick]
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        width={dimensions.w}
        height={dimensions.h}
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        className="w-full h-auto"
      >
        {/* Ocean background */}
        <rect
          width={dimensions.w}
          height={dimensions.h}
          className="fill-[hsl(200,40%,92%)] dark:fill-[hsl(210,40%,10%)]"
          rx={8}
        />

        {/* Clip paths for Voronoi countries */}
        <defs>
          {voronoiRegions.map((vr) => (
            <clipPath key={vr.clipId} id={vr.clipId}>
              <path d={vr.countryPath} />
            </clipPath>
          ))}
        </defs>

        {/* Country polygons — solid fill for non-Voronoi countries */}
        <g>
          {polygons.map((feat) => {
            if (voronoiCountryIds.has(feat.id)) return null;
            const d = pathGenerator(feat as GeoPermissibleObjects);
            if (!d) return null;
            return (
              <path
                key={feat.id}
                d={d}
                fill={getFillColor(feat)}
                fillOpacity={getOpacity(feat)}
                stroke="hsl(var(--border))"
                strokeWidth={getStrokeWidth(feat)}
                className="cursor-pointer transition-opacity duration-150"
                onMouseMove={(e) => handleMouseMove(e, feat)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(feat)}
              />
            );
          })}
        </g>

        {/* Voronoi language regions — clipped to country boundaries */}
        <g>
          {voronoiRegions.map((vr) => {
            const feat = polygons.find((f) => f.id === vr.featId);
            const alpha2 = feat ? getAlpha2(feat) : null;
            const isHovered = alpha2 === hoverD;
            const isSelected = selectedCountry && alpha2 === selectedCountry.toLowerCase();
            const opacity = isHovered || isSelected ? 1 : 0.85;
            const strokeW = isHovered || isSelected ? 1.5 : 0.4;

            return (
              <g key={vr.clipId}>
                {/* Voronoi cells clipped to country shape */}
                <g clipPath={`url(#${vr.clipId})`}>
                  {vr.cells.map((cell, i) => (
                    <path
                      key={i}
                      d={cell.path}
                      fill={cell.color}
                      fillOpacity={opacity}
                      stroke={cell.color}
                      strokeWidth={0.5}
                      strokeOpacity={0.3}
                    />
                  ))}
                </g>
                {/* Country border on top for interaction */}
                {feat && (
                  <path
                    d={vr.countryPath}
                    fill="transparent"
                    stroke="hsl(var(--border))"
                    strokeWidth={strokeW}
                    className="cursor-pointer"
                    onMouseMove={(e) => handleMouseMove(e, feat)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(feat)}
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-50 bg-card border border-border text-card-foreground px-3 py-2 rounded-lg shadow-lg text-xs font-medium"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 8,
            transform: "translateY(-100%)",
          }}
        >
          {tooltip.content}
          {tooltip.alpha2 && regionalLanguages[tooltip.alpha2] && (
            <div className="mt-1 pt-1 border-t border-border text-[10px]">
              <div className="font-semibold text-muted-foreground mb-0.5">
                Regional languages:
              </div>
              {regionalLanguages[tooltip.alpha2].map((r, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: getLanguageFamilyColor(r.languageFamily),
                    }}
                  />
                  {r.region}: {r.language}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
