import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { getLanguageFamilyColor } from "@/data/countries";
import {
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

const ADMIN1_URL = "/admin1-subdivisions.topojson";

/** Try to find a matching regional language entry for a subdivision name */
function findRegionLanguageFamily(iso: string, subdivisionName: string) {
  const regions = regionalLanguages[iso];
  if (!regions || regions.length < 2) return null;

  const subLower = subdivisionName.toLowerCase();
  for (const r of regions) {
    const rLower = r.region.toLowerCase();
    if (subLower.includes(rLower) || rLower.includes(subLower)) {
      return r;
    }
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
  const layerRef = useRef<L.GeoJSON | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Keep callbacks in refs for Leaflet handlers
  const onCountryClickRef = useRef(onCountryClick);
  const onRegionClickRef = useRef(onRegionClick);
  const selectedCountryRef = useRef(selectedCountry);
  onCountryClickRef.current = onCountryClick;
  onRegionClickRef.current = onRegionClick;
  selectedCountryRef.current = selectedCountry;

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

    // CartoDB Positron tiles — clean, minimal style
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

        const layer = L.geoJSON(geo, {
          style: (feat: any) => {
            const iso = (feat.properties.iso_a2 || "").toLowerCase();
            const name = feat.properties.name || "";

            // Try to match a regional language first
            const regionMatch = findRegionLanguageFamily(iso, name);
            const family = regionMatch
              ? regionMatch.languageFamily
              : countryLanguageFamily[iso] || null;
            const color = family
              ? getLanguageFamilyColor(family)
              : "hsl(200,10%,78%)";

            return {
              fillColor: color,
              fillOpacity: 0.6,
              color: "#94a3b8",
              weight: 0.4,
              opacity: 0.6,
            };
          },
          onEachFeature: (feat: any, layer: L.Layer) => {
            const iso = (feat.properties.iso_a2 || "").toLowerCase();
            const subdivisionName = feat.properties.name || "Unknown";
            const countryName = feat.properties.admin || iso.toUpperCase();

            const regionMatch = findRegionLanguageFamily(iso, subdivisionName);
            const family = regionMatch
              ? regionMatch.languageFamily
              : countryLanguageFamily[iso] || null;
            const familyLabel = family
              ? family.charAt(0).toUpperCase() + family.slice(1)
              : "";

            let tooltip = `<div style="font-weight:600">${subdivisionName}</div>`;
            tooltip += `<div style="font-size:11px;opacity:0.6">${countryName}</div>`;
            if (regionMatch) {
              tooltip += `<div style="font-size:11px;margin-top:2px">${regionMatch.language}</div>`;
            }
            if (familyLabel) {
              const c = getLanguageFamilyColor(family!);
              tooltip += `<div style="display:flex;align-items:center;gap:4px;margin-top:2px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};flex-shrink:0"></span><span style="font-size:10px;opacity:0.7">${familyLabel}</span></div>`;
            }

            (layer as L.Path).bindTooltip(tooltip, {
              sticky: true,
              direction: "top",
              className: "medglobe-tooltip",
            });

            layer.on({
              mouseover: (e) => {
                (e.target as L.Path).setStyle({
                  fillOpacity: 0.85,
                  weight: 1.5,
                  color: "#1e293b",
                });
                (e.target as L.Path).bringToFront();
              },
              mouseout: (e) => {
                const sel = selectedCountryRef.current;
                const isSelected =
                  sel && iso === sel.toLowerCase();
                (e.target as L.Path).setStyle({
                  fillOpacity: isSelected ? 0.8 : 0.6,
                  weight: isSelected ? 1.5 : 0.4,
                  color: isSelected ? "#1e293b" : "#94a3b8",
                });
              },
              click: () => {
                if (!iso) return;
                // If we matched a regional language, trigger region click
                if (regionMatch && onRegionClickRef.current) {
                  onRegionClickRef.current(iso, regionMatch.region);
                } else if (onCountryClickRef.current) {
                  onCountryClickRef.current(iso);
                }
              },
            });
          },
        }).addTo(map);

        layerRef.current = layer;
        setLoaded(true);
      });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Focus on searched country
  useEffect(() => {
    if (mapRef.current && focusLat !== undefined && focusLng !== undefined) {
      mapRef.current.flyTo([focusLat, focusLng], 5, { duration: 1.2 });
    }
  }, [focusLat, focusLng]);

  // Update selected country styling
  useEffect(() => {
    if (!layerRef.current) return;
    layerRef.current.eachLayer((layer: any) => {
      if (!layer.feature) return;
      const iso = (layer.feature.properties.iso_a2 || "").toLowerCase();
      const isSelected =
        selectedCountry && iso === selectedCountry.toLowerCase();
      const name = layer.feature.properties.name || "";
      const regionMatch = findRegionLanguageFamily(iso, name);
      const family = regionMatch
        ? regionMatch.languageFamily
        : countryLanguageFamily[iso] || null;
      const color = family
        ? getLanguageFamilyColor(family)
        : "hsl(200,10%,78%)";
      layer.setStyle({
        fillColor: color,
        fillOpacity: isSelected ? 0.8 : 0.6,
        weight: isSelected ? 1.5 : 0.4,
        color: isSelected ? "#1e293b" : "#94a3b8",
      });
    });
  }, [selectedCountry]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg">
      <div
        ref={containerRef}
        className="w-full z-0"
        style={{ height: "min(65vh, 600px)" }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="text-sm text-muted-foreground animate-pulse">
            Loading subdivision map…
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
