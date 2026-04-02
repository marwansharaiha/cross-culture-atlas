import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, Tooltip } from "react-leaflet";
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

/** Converts TopoJSON features to GeoJSON FeatureCollection with alpha2/name props */
function buildGeoJSON(polygons: any[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: polygons.map((feat) => {
      const alpha2 = numericToAlpha2[feat.id] || null;
      const name = numericToName[feat.id] || alpha2 || "Unknown";
      const family = alpha2 ? countryLanguageFamily[alpha2] : null;
      return {
        ...feat,
        properties: {
          ...feat.properties,
          alpha2,
          name,
          family,
        },
      };
    }),
  };
}

/** Build sub-national region polygons for multilingual countries as approximate circles */
function buildRegionFeatures(polygons: any[]): GeoJSON.FeatureCollection {
  const features: GeoJSON.Feature[] = [];

  for (const feat of polygons) {
    const alpha2 = numericToAlpha2[feat.id];
    if (!alpha2 || !regionalLanguages[alpha2] || regionalLanguages[alpha2].length < 2) continue;

    const regions = regionalLanguages[alpha2];
    const countryName = numericToName[feat.id] || alpha2;

    for (const region of regions) {
      // Create a small polygon (approximate circle) for each region marker
      const r = 1.5; // radius in degrees
      const steps = 24;
      const coords: [number, number][] = [];
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * 2 * Math.PI;
        coords.push([
          region.lng + r * Math.cos(angle),
          region.lat + r * 0.8 * Math.sin(angle),
        ]);
      }

      features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [coords],
        },
        properties: {
          alpha2,
          countryName,
          regionName: region.region,
          language: region.language,
          languageFamily: region.languageFamily,
          color: getLanguageFamilyColor(region.languageFamily),
          isRegion: true,
        },
      });
    }
  }

  return { type: "FeatureCollection", features };
}

/** Component to handle map focus changes */
function MapFocus({ lat, lng }: { lat?: number; lng?: number }) {
  const map = useMap();
  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      map.flyTo([lat, lng], 5, { duration: 1.2 });
    }
  }, [lat, lng, map]);
  return null;
}

export default function FlatMapView({
  focusLat,
  focusLng,
  onCountryClick,
  onRegionClick,
  selectedCountry,
}: FlatMapViewProps) {
  const [polygons, setPolygons] = useState<any[]>([]);
  const geoJsonRef = useRef<L.GeoJSON | null>(null);

  // Load world topology
  useEffect(() => {
    fetch(WORLD_ATLAS_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const geo = feature(topology, topology.objects.countries as any);
        setPolygons((geo as any).features);
      });
  }, []);

  const countryGeoJSON = useMemo(() => {
    if (!polygons.length) return null;
    return buildGeoJSON(polygons);
  }, [polygons]);

  const regionGeoJSON = useMemo(() => {
    if (!polygons.length) return null;
    return buildRegionFeatures(polygons);
  }, [polygons]);

  // Style for country polygons
  const countryStyle = useCallback((feature: any): L.PathOptions => {
    const alpha2 = feature?.properties?.alpha2;
    const family = feature?.properties?.family;
    const isSelected = selectedCountry && alpha2 === selectedCountry.toLowerCase();
    const color = family ? getLanguageFamilyColor(family) : "hsl(200,10%,78%)";

    return {
      fillColor: color,
      fillOpacity: isSelected ? 0.9 : 0.7,
      color: isSelected ? "#1e293b" : "#64748b",
      weight: isSelected ? 2 : 0.5,
      opacity: 0.8,
    };
  }, [selectedCountry]);

  // Style for region overlay dots
  const regionStyle = useCallback((feature: any): L.PathOptions => {
    const color = feature?.properties?.color || "hsl(200,10%,78%)";
    return {
      fillColor: color,
      fillOpacity: 0.75,
      color: "#fff",
      weight: 1,
      opacity: 0.8,
    };
  }, []);

  // Event handlers for country layer
  const onEachCountry = useCallback((feature: any, layer: L.Layer) => {
    const alpha2 = feature?.properties?.alpha2;
    const name = feature?.properties?.name || "Unknown";
    const family = feature?.properties?.family;
    const familyLabel = family ? family.charAt(0).toUpperCase() + family.slice(1) : "";

    // Build tooltip content
    let tooltipContent = `<div class="font-semibold">${name}</div>`;
    if (familyLabel) {
      tooltipContent += `<div class="text-xs opacity-75">${familyLabel}</div>`;
    }
    if (alpha2 && regionalLanguages[alpha2] && regionalLanguages[alpha2].length >= 2) {
      tooltipContent += `<div class="text-[10px] mt-1 border-t border-gray-200 pt-1 dark:border-gray-600">`;
      tooltipContent += `<div class="font-medium mb-0.5">Regional languages:</div>`;
      for (const r of regionalLanguages[alpha2].slice(0, 6)) {
        const c = getLanguageFamilyColor(r.languageFamily);
        tooltipContent += `<div class="flex items-center gap-1"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c}"></span>${r.region}: ${r.language}</div>`;
      }
      if (regionalLanguages[alpha2].length > 6) {
        tooltipContent += `<div class="opacity-60">+${regionalLanguages[alpha2].length - 6} more</div>`;
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
        const isSelected = selectedCountry && alpha2 === selectedCountry?.toLowerCase();
        l.setStyle({
          fillOpacity: isSelected ? 0.9 : 0.7,
          weight: isSelected ? 2 : 0.5,
          color: isSelected ? "#1e293b" : "#64748b",
        });
      },
      click: () => {
        if (alpha2 && onCountryClick) {
          onCountryClick(alpha2);
        }
      },
    });
  }, [selectedCountry, onCountryClick]);

  // Event handlers for region overlay
  const onEachRegion = useCallback((feature: any, layer: L.Layer) => {
    const props = feature?.properties;
    if (!props) return;

    const tooltipContent = `<div class="font-semibold">${props.countryName} — ${props.regionName}</div><div class="text-xs">${props.language}</div>`;
    
    (layer as L.Path).bindTooltip(tooltipContent, {
      sticky: true,
      direction: "top",
      className: "medglobe-tooltip",
    });

    layer.on({
      mouseover: (e) => {
        const l = e.target as L.Path;
        l.setStyle({ fillOpacity: 0.95, weight: 2 });
        l.bringToFront();
      },
      mouseout: (e) => {
        const l = e.target as L.Path;
        l.setStyle({ fillOpacity: 0.75, weight: 1 });
      },
      click: () => {
        if (props.alpha2 && onRegionClick) {
          onRegionClick(props.alpha2, props.regionName);
        } else if (props.alpha2 && onCountryClick) {
          onCountryClick(props.alpha2);
        }
      },
    });
  }, [onRegionClick, onCountryClick]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg" style={{ height: "min(65vh, 600px)" }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={10}
        scrollWheelZoom={true}
        zoomControl={true}
        className="w-full h-full z-0"
        style={{ background: "hsl(205,42%,88%)" }}
        maxBounds={[[-85, -180], [85, 180]]}
        maxBoundsViscosity={1.0}
      >
        {/* OpenStreetMap tiles — shows state/province/city borders natively */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0.3}
        />

        {/* Country overlay colored by language family */}
        {countryGeoJSON && (
          <GeoJSON
            ref={geoJsonRef as any}
            key={`countries-${selectedCountry}`}
            data={countryGeoJSON}
            style={countryStyle}
            onEachFeature={onEachCountry}
          />
        )}

        {/* Regional language overlay markers */}
        {regionGeoJSON && regionGeoJSON.features.length > 0 && (
          <GeoJSON
            key="regions"
            data={regionGeoJSON}
            style={regionStyle}
            onEachFeature={onEachRegion}
          />
        )}

        {/* Focus on searched country */}
        <MapFocus lat={focusLat} lng={focusLng} />
      </MapContainer>

      {/* Custom tooltip styles */}
      <style>{`
        .medglobe-tooltip {
          background: hsl(var(--card)) !important;
          border: 1px solid hsl(var(--border)) !important;
          color: hsl(var(--card-foreground)) !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
          font-size: 12px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          max-width: 240px !important;
        }
        .medglobe-tooltip::before {
          border-top-color: hsl(var(--border)) !important;
        }
        .leaflet-control-zoom {
          border: 1px solid hsl(var(--border)) !important;
          border-radius: 8px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          background: hsl(var(--card)) !important;
          color: hsl(var(--card-foreground)) !important;
          border-color: hsl(var(--border)) !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover {
          background: hsl(var(--accent)) !important;
        }
        .leaflet-container {
          font-family: inherit !important;
        }
      `}</style>
    </div>
  );
}
