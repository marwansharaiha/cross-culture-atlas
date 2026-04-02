import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
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

const WORLD_ATLAS_URL = "https://unpkg.com/world-atlas@2/countries-50m.json";

export default function FlatMapView({
  focusLat,
  focusLng,
  onCountryClick,
  onRegionClick,
  selectedCountry,
}: FlatMapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const countryLayerRef = useRef<L.GeoJSON | null>(null);
  const regionLayerRef = useRef<L.LayerGroup | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Store callbacks in refs so Leaflet event handlers always see latest
  const onCountryClickRef = useRef(onCountryClick);
  const onRegionClickRef = useRef(onRegionClick);
  const selectedCountryRef = useRef(selectedCountry);
  onCountryClickRef.current = onCountryClick;
  onRegionClickRef.current = onRegionClick;
  selectedCountryRef.current = selectedCountry;

  // Initialize map
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

    // OpenStreetMap tiles — shows state/province/city borders natively
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      opacity: 0.35,
    }).addTo(map);

    mapRef.current = map;

    // Load and render country GeoJSON overlay
    fetch(WORLD_ATLAS_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const geo = feature(topology, topology.objects.countries as any) as any;

        const countryLayer = L.geoJSON(geo, {
          style: (feat: any) => {
            const alpha2 = numericToAlpha2[feat.id] || null;
            const family = alpha2 ? countryLanguageFamily[alpha2] : null;
            const color = family ? getLanguageFamilyColor(family) : "hsl(200,10%,78%)";
            return {
              fillColor: color,
              fillOpacity: 0.65,
              color: "#64748b",
              weight: 0.5,
              opacity: 0.7,
            };
          },
          onEachFeature: (feat: any, layer: L.Layer) => {
            const alpha2 = numericToAlpha2[feat.id] || null;
            const name = numericToName[feat.id] || alpha2 || "Unknown";
            const family = alpha2 ? countryLanguageFamily[alpha2] : null;
            const familyLabel = family ? family.charAt(0).toUpperCase() + family.slice(1) : "";

            let tooltipContent = `<div style="font-weight:600">${name}</div>`;
            if (familyLabel) {
              tooltipContent += `<div style="font-size:11px;opacity:0.7">${familyLabel}</div>`;
            }
            if (alpha2 && regionalLanguages[alpha2] && regionalLanguages[alpha2].length >= 2) {
              tooltipContent += `<div style="font-size:10px;margin-top:4px;border-top:1px solid #ddd;padding-top:4px">`;
              tooltipContent += `<div style="font-weight:500;margin-bottom:2px">Regional languages:</div>`;
              for (const r of regionalLanguages[alpha2].slice(0, 6)) {
                const c = getLanguageFamilyColor(r.languageFamily);
                tooltipContent += `<div style="display:flex;align-items:center;gap:4px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};flex-shrink:0"></span><span>${r.region}: ${r.language}</span></div>`;
              }
              if (regionalLanguages[alpha2].length > 6) {
                tooltipContent += `<div style="opacity:0.5">+${regionalLanguages[alpha2].length - 6} more</div>`;
              }
              tooltipContent += `</div>`;
            }

            (layer as L.Path).bindTooltip(tooltipContent, {
              sticky: true,
              direction: "top",
              className: "medglobe-tooltip",
            });

            layer.on({
              mouseover: (e) => {
                const l = e.target as L.Path;
                l.setStyle({ fillOpacity: 0.9, weight: 2, color: "#1e293b" });
                l.bringToFront();
              },
              mouseout: (e) => {
                const l = e.target as L.Path;
                const sel = selectedCountryRef.current;
                const isSelected = sel && alpha2 === sel.toLowerCase();
                l.setStyle({
                  fillOpacity: isSelected ? 0.85 : 0.65,
                  weight: isSelected ? 2 : 0.5,
                  color: isSelected ? "#1e293b" : "#64748b",
                });
              },
              click: () => {
                if (alpha2 && onCountryClickRef.current) {
                  onCountryClickRef.current(alpha2);
                }
              },
            });
          },
        }).addTo(map);

        countryLayerRef.current = countryLayer;

        // Add regional language circle markers for multilingual countries
        const regionGroup = L.layerGroup().addTo(map);
        regionLayerRef.current = regionGroup;

        for (const feat of geo.features) {
          const alpha2 = numericToAlpha2[feat.id];
          if (!alpha2 || !regionalLanguages[alpha2] || regionalLanguages[alpha2].length < 2) continue;

          const regions = regionalLanguages[alpha2];
          const countryName = numericToName[feat.id] || alpha2;

          for (const region of regions) {
            const color = getLanguageFamilyColor(region.languageFamily);
            const marker = L.circleMarker([region.lat, region.lng], {
              radius: 6,
              fillColor: color,
              fillOpacity: 0.8,
              color: "#fff",
              weight: 1.5,
              opacity: 0.9,
            });

            marker.bindTooltip(
              `<div style="font-weight:600">${countryName} — ${region.region}</div><div style="font-size:11px">${region.language}</div>`,
              { sticky: true, direction: "top", className: "medglobe-tooltip" }
            );

            marker.on("click", () => {
              if (onRegionClickRef.current) {
                onRegionClickRef.current(alpha2, region.region);
              } else if (onCountryClickRef.current) {
                onCountryClickRef.current(alpha2);
              }
            });

            marker.on("mouseover", () => {
              marker.setStyle({ fillOpacity: 1, radius: 8, weight: 2 });
            });
            marker.on("mouseout", () => {
              marker.setStyle({ fillOpacity: 0.8, radius: 6, weight: 1.5 });
            });

            regionGroup.addLayer(marker);
          }
        }

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
    if (!countryLayerRef.current) return;
    countryLayerRef.current.eachLayer((layer: any) => {
      if (!layer.feature) return;
      const alpha2 = numericToAlpha2[layer.feature.id] || null;
      const isSelected = selectedCountry && alpha2 === selectedCountry.toLowerCase();
      const family = alpha2 ? countryLanguageFamily[alpha2] : null;
      const color = family ? getLanguageFamilyColor(family) : "hsl(200,10%,78%)";
      layer.setStyle({
        fillColor: color,
        fillOpacity: isSelected ? 0.85 : 0.65,
        weight: isSelected ? 2 : 0.5,
        color: isSelected ? "#1e293b" : "#64748b",
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
          <div className="text-sm text-muted-foreground animate-pulse">Loading map...</div>
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
