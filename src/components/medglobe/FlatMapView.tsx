import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { getLanguageFamilyColor } from "@/data/countries";
import {
  countryLanguageFamily,
  regionalLanguages,
} from "@/data/languageMap";
import { ArrowLeft } from "lucide-react";

interface FlatMapViewProps {
  focusLat?: number;
  focusLng?: number;
  onCountryClick?: (isoCode: string) => void;
  onRegionClick?: (isoCode: string, regionName: string) => void;
  selectedCountry?: string | null;
}

const ADMIN1_URL = "/admin1-subdivisions.topojson";

function findRegionLanguageFamily(iso: string, subdivisionName: string) {
  const regions = regionalLanguages[iso];
  if (!regions || regions.length < 2) return null;
  const subLower = subdivisionName.toLowerCase();
  for (const r of regions) {
    const rLower = r.region.toLowerCase();
    if (subLower.includes(rLower) || rLower.includes(subLower)) return r;
  }
  return null;
}

export default function FlatMapView({
  focusLat,
  focusLng,
  onCountryClick,
  onRegionClick,
  selectedCountry,
}: FlatMapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const worldLayerRef = useRef<L.GeoJSON | null>(null);
  const drillLayerRef = useRef<L.GeoJSON | null>(null);
  const geoDataRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [drilledCountry, setDrilledCountry] = useState<string | null>(null);
  const [drilledCountryName, setDrilledCountryName] = useState<string>("");

  const onCountryClickRef = useRef(onCountryClick);
  const onRegionClickRef = useRef(onRegionClick);
  onCountryClickRef.current = onCountryClick;
  onRegionClickRef.current = onRegionClick;

  // Build world-level layer (countries as single-color blocks, no internal borders)
  const buildWorldLayer = useCallback((map: L.Map, geo: any) => {
    // Group features by country iso
    const countryGroups: Record<string, any[]> = {};
    for (const feat of geo.features) {
      const iso = (feat.properties.iso_a2 || "").toLowerCase();
      if (!iso) continue;
      if (!countryGroups[iso]) countryGroups[iso] = [];
      countryGroups[iso].push(feat);
    }

    const layer = L.geoJSON(geo, {
      style: (feat: any) => {
        const iso = (feat.properties.iso_a2 || "").toLowerCase();
        const family = countryLanguageFamily[iso] || null;
        const color = family ? getLanguageFamilyColor(family) : "hsl(200,10%,78%)";
        return {
          fillColor: color,
          fillOpacity: 0.55,
          color: "#94a3b8",
          weight: 0.3,
          opacity: 0.5,
        };
      },
      onEachFeature: (feat: any, lyr: L.Layer) => {
        const iso = (feat.properties.iso_a2 || "").toLowerCase();
        const countryName = feat.properties.admin || iso.toUpperCase();
        const family = countryLanguageFamily[iso] || null;
        const familyLabel = family ? family.charAt(0).toUpperCase() + family.slice(1) : "";

        let tooltip = `<div style="font-weight:600">${countryName}</div>`;
        if (familyLabel) {
          const c = getLanguageFamilyColor(family!);
          tooltip += `<div style="display:flex;align-items:center;gap:4px;margin-top:2px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};flex-shrink:0"></span><span style="font-size:10px;opacity:0.7">${familyLabel}</span></div>`;
        }
        tooltip += `<div style="font-size:10px;opacity:0.5;margin-top:2px">Click to explore regions</div>`;

        (lyr as L.Path).bindTooltip(tooltip, {
          sticky: true,
          direction: "top",
          className: "medglobe-tooltip",
        });

        lyr.on({
          mouseover: (e) => {
            // Highlight all subdivisions of same country
            worldLayerRef.current?.eachLayer((l: any) => {
              if (l.feature && (l.feature.properties.iso_a2 || "").toLowerCase() === iso) {
                l.setStyle({ fillOpacity: 0.8, weight: 0.8, color: "#475569" });
                l.bringToFront();
              }
            });
          },
          mouseout: () => {
            worldLayerRef.current?.eachLayer((l: any) => {
              if (l.feature && (l.feature.properties.iso_a2 || "").toLowerCase() === iso) {
                const f = countryLanguageFamily[iso] || null;
                const col = f ? getLanguageFamilyColor(f) : "hsl(200,10%,78%)";
                l.setStyle({ fillColor: col, fillOpacity: 0.55, weight: 0.3, color: "#94a3b8" });
              }
            });
          },
          click: () => {
            if (!iso) return;
            // Drill into this country
            drillIntoCountry(iso, countryName);
          },
        });
      },
    }).addTo(map);

    worldLayerRef.current = layer;
  }, []);

  // Drill into a specific country
  const drillIntoCountry = useCallback((iso: string, countryName: string) => {
    const map = mapRef.current;
    const geo = geoDataRef.current;
    if (!map || !geo) return;

    // Remove world layer
    if (worldLayerRef.current) {
      map.removeLayer(worldLayerRef.current);
      worldLayerRef.current = null;
    }

    // Filter features for this country
    const countryFeatures = geo.features.filter(
      (f: any) => (f.properties.iso_a2 || "").toLowerCase() === iso
    );

    if (countryFeatures.length === 0) return;

    const countryGeo = { type: "FeatureCollection", features: countryFeatures };

    const drillLayer = L.geoJSON(countryGeo as any, {
      style: (feat: any) => {
        const name = feat.properties.name || "";
        const regionMatch = findRegionLanguageFamily(iso, name);
        const family = regionMatch
          ? regionMatch.languageFamily
          : countryLanguageFamily[iso] || null;
        const color = family ? getLanguageFamilyColor(family) : "hsl(200,10%,78%)";
        return {
          fillColor: color,
          fillOpacity: 0.65,
          color: "#64748b",
          weight: 1,
          opacity: 0.8,
        };
      },
      onEachFeature: (feat: any, lyr: L.Layer) => {
        const subdivisionName = feat.properties.name || "Unknown";
        const regionMatch = findRegionLanguageFamily(iso, subdivisionName);
        const family = regionMatch
          ? regionMatch.languageFamily
          : countryLanguageFamily[iso] || null;
        const familyLabel = family ? family.charAt(0).toUpperCase() + family.slice(1) : "";

        let tooltip = `<div style="font-weight:600">${subdivisionName}</div>`;
        if (regionMatch) {
          tooltip += `<div style="font-size:11px;margin-top:2px">${regionMatch.language}</div>`;
        }
        if (familyLabel) {
          const c = getLanguageFamilyColor(family!);
          tooltip += `<div style="display:flex;align-items:center;gap:4px;margin-top:2px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};flex-shrink:0"></span><span style="font-size:10px;opacity:0.7">${familyLabel}</span></div>`;
        }

        (lyr as L.Path).bindTooltip(tooltip, {
          sticky: true,
          direction: "top",
          className: "medglobe-tooltip",
        });

        lyr.on({
          mouseover: (e) => {
            (e.target as L.Path).setStyle({
              fillOpacity: 0.9,
              weight: 2,
              color: "#1e293b",
            });
            (e.target as L.Path).bringToFront();
          },
          mouseout: (e) => {
            const name = feat.properties.name || "";
            const rm = findRegionLanguageFamily(iso, name);
            const f = rm ? rm.languageFamily : countryLanguageFamily[iso] || null;
            const col = f ? getLanguageFamilyColor(f) : "hsl(200,10%,78%)";
            (e.target as L.Path).setStyle({
              fillColor: col,
              fillOpacity: 0.65,
              weight: 1,
              color: "#64748b",
            });
          },
          click: () => {
            if (regionMatch && onRegionClickRef.current) {
              onRegionClickRef.current(iso, regionMatch.region);
            } else if (onCountryClickRef.current) {
              onCountryClickRef.current(iso);
            }
          },
        });
      },
    }).addTo(map);

    drillLayerRef.current = drillLayer;

    // Zoom to country bounds
    const bounds = drillLayer.getBounds();
    if (bounds.isValid()) {
      map.flyToBounds(bounds, { padding: [40, 40], duration: 1, maxZoom: 7 });
    }

    setDrilledCountry(iso);
    setDrilledCountryName(countryName);

    // Also notify parent
    if (onCountryClickRef.current) {
      onCountryClickRef.current(iso);
    }
  }, []);

  // Return to world view
  const backToWorld = useCallback(() => {
    const map = mapRef.current;
    const geo = geoDataRef.current;
    if (!map || !geo) return;

    if (drillLayerRef.current) {
      map.removeLayer(drillLayerRef.current);
      drillLayerRef.current = null;
    }

    buildWorldLayer(map, geo);
    map.flyTo([20, 0], 2, { duration: 1 });
    setDrilledCountry(null);
    setDrilledCountryName("");
  }, [buildWorldLayer]);

  // Init map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 10,
      scrollWheelZoom: true,
      zoomControl: true,
      maxBounds: [[-85, -180], [85, 180]],
      maxBoundsViscosity: 1.0,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
        opacity: 0.4,
      }
    ).addTo(map);

    mapRef.current = map;

    fetch(ADMIN1_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const geo = feature(
          topology,
          topology.objects.subdivisions as any
        ) as any;

        geoDataRef.current = geo;
        buildWorldLayer(map, geo);
        setLoaded(true);
      });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [buildWorldLayer]);

  // Focus on searched country
  useEffect(() => {
    if (mapRef.current && focusLat !== undefined && focusLng !== undefined) {
      mapRef.current.flyTo([focusLat, focusLng], 5, { duration: 1.2 });
    }
  }, [focusLat, focusLng]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg">
      <div
        ref={containerRef}
        className="w-full z-0"
        style={{ height: "min(65vh, 600px)" }}
      />

      {/* Back button when drilled in */}
      {drilledCountry && (
        <button
          onClick={backToWorld}
          className="absolute top-3 left-3 z-[1000] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur border border-border shadow-md text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{drilledCountryName || "Back to World"}</span>
        </button>
      )}

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="text-sm text-muted-foreground animate-pulse">
            Loading map…
          </div>
        </div>
      )}
      <style>{`
        .medglobe-tooltip {
          background: white !important;
          border: 1px solid #e2e8f0 !important;
          color: #1e293b !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
          font-size: 12px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12) !important;
          max-width: 240px !important;
          font-family: inherit !important;
        }
        .medglobe-tooltip::before {
          border-top-color: #e2e8f0 !important;
        }
        .leaflet-control-zoom {
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #1e293b !important;
          border-color: #e2e8f0 !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #f1f5f9 !important;
        }
      `}</style>
    </div>
  );
}
