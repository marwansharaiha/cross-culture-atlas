import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
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
      return 0.82;
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

  // Regional language markers projected
  const markers = useMemo(() => {
    const result: any[] = [];
    Object.entries(regionalLanguages).forEach(([, regions]) => {
      regions.forEach((r) => {
        const pos = projection([r.lng, r.lat]);
        if (pos) {
          result.push({
            cx: pos[0],
            cy: pos[1],
            color: getLanguageFamilyColor(r.languageFamily),
            label: r.region,
            language: r.language,
          });
        }
      });
    });
    return result;
  }, [projection]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, feat: any) => {
      const alpha2 = getAlpha2(feat);
      const name = numericToName[feat.id] || alpha2 || "Unknown";
      const family = alpha2 ? countryLanguageFamily[alpha2] : null;
      const familyLabel = family
        ? family.charAt(0).toUpperCase() + family.slice(1)
        : "";
      const regions = alpha2 ? regionalLanguages[alpha2] : null;

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

        {/* Country polygons */}
        <g>
          {polygons.map((feat) => {
            const d = pathGenerator(feat as GeoPermissibleObjects);
            if (!d) return null;
            const alpha2 = getAlpha2(feat);
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

        {/* Regional language markers */}
        <g>
          {markers.map((m, i) => (
            <circle
              key={i}
              cx={m.cx}
              cy={m.cy}
              r={3}
              fill={m.color}
              stroke="hsl(var(--background))"
              strokeWidth={0.8}
              opacity={0.9}
            />
          ))}
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
