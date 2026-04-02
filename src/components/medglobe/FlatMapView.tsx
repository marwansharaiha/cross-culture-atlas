import { useEffect, useRef, useState, useCallback, useMemo, type WheelEvent as ReactWheelEvent } from "react";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { feature, mesh } from "topojson-client";
import type { Topology } from "topojson-specification";
import { geoNaturalEarth1, geoPath, geoGraticule10, type GeoPermissibleObjects } from "d3-geo";
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
  onRegionClick?: (isoCode: string, regionName: string) => void;
  selectedCountry?: string | null;
}

// High-resolution 10m for detailed borders
const WORLD_ATLAS_URL = "https://unpkg.com/world-atlas@2/countries-10m.json";

export default function FlatMapView({
  onCountryClick,
  onRegionClick,
  selectedCountry,
}: FlatMapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [borderMesh, setBorderMesh] = useState<string | null>(null);
  const [hoverD, setHoverD] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
    alpha2: string | null;
  } | null>(null);
  const [dimensions, setDimensions] = useState({ w: 900, h: 500 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 12;

  // Load world topology — high resolution
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
        setDimensions({ w, h: Math.max(w * 0.55, 340) });
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

  // Build border mesh once polygons + projection ready
  useEffect(() => {
    if (!polygons.length) return;
    // Re-fetch topology just for mesh (lightweight since cached by browser)
    fetch(WORLD_ATLAS_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const borders = mesh(topology, topology.objects.countries as any, (a, b) => a !== b);
        const p = geoPath(projection)(borders as any);
        if (p) setBorderMesh(p);
      });
  }, [polygons, projection]);

  // Graticule
  const graticulePath = useMemo(() => {
    return pathGenerator(geoGraticule10() as any) || "";
  }, [pathGenerator]);

  const getAlpha2 = useCallback((feat: any) => {
    return numericToAlpha2[feat.id] || null;
  }, []);

  const getFillColor = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (!alpha2) return "hsl(200,10%,78%)";
      const family = countryLanguageFamily[alpha2];
      if (!family) return "hsl(200,10%,78%)";
      return getLanguageFamilyColor(family);
    },
    [getAlpha2]
  );

  const getOpacity = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (alpha2 === hoverD) return 1;
      if (selectedCountry && alpha2 === selectedCountry.toLowerCase()) return 1;
      return 0.88;
    },
    [getAlpha2, hoverD, selectedCountry]
  );

  // Build Voronoi-based sub-national regions for multilingual countries
  const voronoiRegions = useMemo(() => {
    if (!polygons.length) return [];
    const result: {
      clipId: string;
      countryPath: string;
      cells: { path: string; color: string; label: string; regionName: string }[];
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
        return p ? ([p[0], p[1]] as [number, number]) : ([0, 0] as [number, number]);
      }).filter((p) => p[0] !== 0 || p[1] !== 0);

      if (projectedPoints.length < 2) continue;

      const bounds = pathGenerator.bounds(feat as GeoPermissibleObjects);
      if (!bounds) continue;
      const [[x0, y0], [x1, y1]] = bounds;
      const pad = Math.max(x1 - x0, y1 - y0) * 0.15;

      const delaunay = Delaunay.from(projectedPoints);
      const voronoi = delaunay.voronoi([x0 - pad, y0 - pad, x1 + pad, y1 + pad]);

      const cells: { path: string; color: string; label: string; regionName: string }[] = [];
      for (let i = 0; i < projectedPoints.length; i++) {
        const cellPath = voronoi.renderCell(i);
        if (cellPath) {
          cells.push({
            path: cellPath,
            color: getLanguageFamilyColor(regions[i].languageFamily),
            label: `${regions[i].region}: ${regions[i].language}`,
            regionName: regions[i].region,
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

  // Set of country IDs that have Voronoi regions
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

  // Zoom & pan handlers
  const handleWheel = useCallback((e: ReactWheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z - e.deltaY * 0.002)));
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [pan]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setPan({ x: panStart.current.panX + dx, y: panStart.current.panY + dy });
  }, [isPanning]);

  const handlePointerUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Adaptive stroke widths based on zoom level
  const countryStroke = 0.5 / zoom;
  const borderStroke = 0.35 / zoom;
  const regionBorderStroke = 0.8 / zoom;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ cursor: isPanning ? "grabbing" : zoom > 1 ? "grab" : "default", touchAction: "none" }}
    >
      {/* Zoom controls */}
      <div className="absolute top-3 right-3 z-40 flex flex-col gap-1.5">
        <button
          onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z * 1.5))}
          className="p-1.5 rounded-md bg-card/90 border border-border text-foreground shadow-sm hover:bg-accent transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z / 1.5))}
          className="p-1.5 rounded-md bg-card/90 border border-border text-foreground shadow-sm hover:bg-accent transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={resetView}
          className="p-1.5 rounded-md bg-card/90 border border-border text-foreground shadow-sm hover:bg-accent transition-colors"
          aria-label="Reset view"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom level indicator */}
      {zoom > 1.05 && (
        <div className="absolute top-3 left-3 z-40 px-2 py-1 rounded-md bg-card/90 border border-border text-[10px] text-muted-foreground font-medium">
          {Math.round(zoom * 100)}%
        </div>
      )}

      <svg
        width={dimensions.w}
        height={dimensions.h}
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        className="w-full h-auto"
      >
        {/* Ocean background with subtle gradient */}
        <defs>
          <radialGradient id="ocean-gradient" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="hsl(205, 45%, 90%)" className="dark:stop-color-[hsl(210,35%,14%)]" />
            <stop offset="100%" stopColor="hsl(210, 40%, 85%)" className="dark:stop-color-[hsl(215,30%,8%)]" />
          </radialGradient>
        </defs>
        <rect
          width={dimensions.w}
          height={dimensions.h}
          fill="hsl(205,42%,88%)"
          className="dark:fill-[hsl(215,30%,10%)]"
          rx={12}
        />

        {/* Zoomable/pannable group */}
        <g transform={`translate(${dimensions.w / 2 + pan.x}, ${dimensions.h / 2 + pan.y}) scale(${zoom}) translate(${-dimensions.w / 2}, ${-dimensions.h / 2})`}>
          {/* Graticule grid lines */}
          <path
            d={graticulePath}
            fill="none"
            stroke="hsl(210,20%,80%)"
            strokeWidth={0.2 / zoom}
            strokeOpacity={0.4}
            className="dark:stroke-[hsl(210,20%,20%)]"
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
              const alpha2 = getAlpha2(feat);
              const isHovered = alpha2 === hoverD;
              const isSelected = selectedCountry && alpha2 === selectedCountry.toLowerCase();
              return (
                <path
                  key={feat.id}
                  d={d}
                  fill={getFillColor(feat)}
                  fillOpacity={getOpacity(feat)}
                  stroke="none"
                  className="cursor-pointer transition-opacity duration-150"
                  onMouseMove={(e) => handleMouseMove(e, feat)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(feat)}
                  filter={isHovered || isSelected ? "brightness(1.1)" : undefined}
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
              const opacity = isHovered || isSelected ? 1 : 0.88;

              return (
                <g key={vr.clipId}>
                  {/* Colored language regions */}
                  <g clipPath={`url(#${vr.clipId})`}>
                    {vr.cells.map((cell, i) => (
                      <path
                        key={i}
                        d={cell.path}
                        fill={cell.color}
                        fillOpacity={opacity}
                        stroke="none"
                      />
                    ))}
                  </g>
                  {/* Internal region border lines */}
                  <g clipPath={`url(#${vr.clipId})`}>
                    {vr.cells.map((cell, i) => (
                      <path
                        key={`border-${i}`}
                        d={cell.path}
                        fill="none"
                        stroke="hsl(0,0%,100%)"
                        strokeWidth={regionBorderStroke}
                        strokeOpacity={0.5}
                        strokeDasharray={`${2 / zoom} ${1.5 / zoom}`}
                        className="dark:stroke-[hsl(0,0%,30%)]"
                      />
                    ))}
                  </g>
                  {/* Clickable overlay per region */}
                  <g clipPath={`url(#${vr.clipId})`}>
                    {vr.cells.map((cell, i) => (
                      <path
                        key={`click-${i}`}
                        d={cell.path}
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseMove={(e) => {
                          const alpha2c = feat ? getAlpha2(feat) : null;
                          const name = feat ? (numericToName[feat.id] || alpha2c || "Unknown") : "Unknown";
                          const rect = containerRef.current?.getBoundingClientRect();
                          if (!rect) return;
                          setHoverD(alpha2c);
                          setTooltip({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                            content: `${name} — ${cell.label}`,
                            alpha2: alpha2c,
                          });
                        }}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                          if (feat) {
                            const alpha2c = getAlpha2(feat);
                            if (alpha2c && onRegionClick) {
                              onRegionClick(alpha2c, cell.regionName);
                            } else if (alpha2c && onCountryClick) {
                              onCountryClick(alpha2c);
                            }
                          }
                        }}
                      />
                    ))}
                  </g>
                  {/* Country outline on top */}
                  {feat && (
                    <path
                      d={vr.countryPath}
                      fill="transparent"
                      stroke="hsl(220,15%,40%)"
                      strokeWidth={countryStroke}
                      strokeOpacity={0.6}
                      className="pointer-events-none dark:stroke-[hsl(220,15%,65%)]"
                    />
                  )}
                </g>
              );
            })}
          </g>

          {/* Country border mesh — renders all borders as one crisp path */}
          {borderMesh && (
            <path
              d={borderMesh}
              fill="none"
              stroke="hsl(220,15%,40%)"
              strokeWidth={borderStroke}
              strokeOpacity={0.55}
              strokeLinejoin="round"
              className="pointer-events-none dark:stroke-[hsl(220,15%,65%)]"
            />
          )}
        </g>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-50 bg-card border border-border text-card-foreground px-3 py-2 rounded-lg shadow-lg text-xs font-medium backdrop-blur-sm"
          style={{
            left: Math.min(tooltip.x + 12, dimensions.w - 200),
            top: tooltip.y - 8,
            transform: "translateY(-100%)",
            maxWidth: 240,
          }}
        >
          {tooltip.content}
          {tooltip.alpha2 && regionalLanguages[tooltip.alpha2] && (
            <div className="mt-1.5 pt-1.5 border-t border-border text-[10px]">
              <div className="font-semibold text-muted-foreground mb-0.5">
                Regional languages:
              </div>
              <div className="max-h-20 overflow-y-auto space-y-0.5">
                {regionalLanguages[tooltip.alpha2].map((r, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: getLanguageFamilyColor(r.languageFamily),
                      }}
                    />
                    <span className="truncate">{r.region}: {r.language}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
