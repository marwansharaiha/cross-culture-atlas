import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import GlobeGL from "react-globe.gl";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import { getLanguageFamilyColor } from "@/data/countries";
import {
  numericToAlpha2,
  numericToName,
  countryLanguageFamily,
  regionalLanguages,
} from "@/data/languageMap";

interface GlobeViewProps {
  focusLat?: number;
  focusLng?: number;
  onCountryClick?: (isoCode: string) => void;
  selectedCountry?: string | null;
}

const WORLD_ATLAS_URL =
  "https://unpkg.com/world-atlas@2/countries-110m.json";

export default function GlobeView({
  focusLat,
  focusLng,
  onCountryClick,
  selectedCountry,
}: GlobeViewProps) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [hoverD, setHoverD] = useState<any>(null);
  const [dimensions, setDimensions] = useState({ w: 550, h: 550 });

  // ── Load world topology ────────────────────────────────────────────
  useEffect(() => {
    fetch(WORLD_ATLAS_URL)
      .then((r) => r.json())
      .then((topology: Topology) => {
        const geo = feature(topology, topology.objects.countries as any);
        setPolygons((geo as any).features);
      });
  }, []);

  // ── Responsive sizing ──────────────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ w, h: w });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ── Auto-rotate + initial POV ──────────────────────────────────────
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    const controls = globe.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = true;
    }
  }, [polygons]); // run after data loads

  // ── Focus on country ───────────────────────────────────────────────
  useEffect(() => {
    if (focusLat != null && focusLng != null && globeRef.current) {
      globeRef.current.pointOfView(
        { lat: focusLat, lng: focusLng, altitude: 1.5 },
        1000
      );
    }
  }, [focusLat, focusLng]);

  // ── Helpers ────────────────────────────────────────────────────────
  const getAlpha2 = useCallback((feat: any) => {
    return numericToAlpha2[feat.id] || null;
  }, []);

  const getCapColor = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (!alpha2) return "hsl(200,10%,75%)";
      const family = countryLanguageFamily[alpha2];
      if (!family) return "hsl(200,10%,75%)";

      const base = getLanguageFamilyColor(family);

      // Highlight hovered
      if (feat === hoverD) {
        return base.replace(/\)$/, " / 0.95)").replace("hsl(", "hsl(");
      }
      // Highlight selected
      if (selectedCountry && alpha2 === selectedCountry.toLowerCase()) {
        return base;
      }

      // Slightly transparent for depth
      return base.replace("hsl(", "hsla(").replace(")", ",0.82)");
    },
    [getAlpha2, hoverD, selectedCountry]
  );

  const getSideColor = useCallback(
    (feat: any) => {
      if (feat === hoverD) return "rgba(255,255,255,0.25)";
      return "rgba(0,0,0,0.08)";
    },
    [hoverD]
  );

  const getAltitude = useCallback(
    (feat: any) => {
      if (feat === hoverD) return 0.025;
      const alpha2 = getAlpha2(feat);
      if (selectedCountry && alpha2 === selectedCountry.toLowerCase())
        return 0.02;
      return 0.005;
    },
    [hoverD, selectedCountry, getAlpha2]
  );

  const getLabel = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      const name = numericToName[feat.id] || alpha2 || "Unknown";
      const family = alpha2 ? countryLanguageFamily[alpha2] : null;
      const familyLabel = family
        ? family.charAt(0).toUpperCase() + family.slice(1)
        : "";

      // Check for regional languages
      const regions = alpha2 ? regionalLanguages[alpha2] : null;
      const regionHtml = regions
        ? `<div style="margin-top:4px;border-top:1px solid rgba(255,255,255,0.2);padding-top:4px;font-size:10px;">
            <div style="font-weight:600;margin-bottom:2px;">Regional languages:</div>
            ${regions
              .map(
                (r) =>
                  `<div style="display:flex;align-items:center;gap:4px;">
                    <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${getLanguageFamilyColor(
                      r.languageFamily
                    )};"></span>
                    ${r.region}: ${r.language}
                  </div>`
              )
              .join("")}
          </div>`
        : "";

      return `<div style="background:hsl(200,30%,12%);color:white;padding:8px 12px;border-radius:8px;font-size:12px;font-family:system-ui;box-shadow:0 4px 12px rgba(0,0,0,0.3);max-width:220px;">
        <div style="font-weight:700;font-size:13px;">${name}</div>
        ${familyLabel ? `<div style="color:hsl(173,60%,60%);margin-top:2px;">Primary: ${familyLabel}</div>` : ""}
        ${regionHtml}
      </div>`;
    },
    [getAlpha2]
  );

  // ── Regional language markers ──────────────────────────────────────
  const markers = useMemo(() => {
    const result: any[] = [];
    Object.entries(regionalLanguages).forEach(([, regions]) => {
      regions.forEach((r) => {
        result.push({
          lat: r.lat,
          lng: r.lng,
          color: getLanguageFamilyColor(r.languageFamily),
          label: r.region,
          language: r.language,
          size: 0.25,
          alt: 0.012,
        });
      });
    });
    return result;
  }, []);

  const handlePolygonClick = useCallback(
    (feat: any) => {
      const alpha2 = getAlpha2(feat);
      if (alpha2 && onCountryClick) {
        onCountryClick(alpha2);
      }
    },
    [getAlpha2, onCountryClick]
  );

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[600px] mx-auto globe-glow rounded-full overflow-hidden"
    >
      {polygons.length > 0 && (
        <GlobeGL
          ref={globeRef}
          width={dimensions.w}
          height={dimensions.h}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor={
            isDark ? "rgba(15,118,110,0.25)" : "rgba(15,118,110,0.15)"
          }
          atmosphereAltitude={0.2}
          globeImageUrl=""
          showGlobe={true}
          animateIn={true}
          polygonsData={polygons}
          polygonCapColor={getCapColor}
          polygonSideColor={getSideColor}
          polygonStrokeColor={() =>
            isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"
          }
          polygonAltitude={getAltitude}
          polygonCapCurvatureResolution={5}
          polygonLabel={getLabel}
          onPolygonClick={handlePolygonClick}
          onPolygonHover={(d: any) => setHoverD(d)}
          pointsData={markers}
          pointLat={(d: any) => d.lat}
          pointLng={(d: any) => d.lng}
          pointColor={(d: any) => d.color}
          pointAltitude={(d: any) => d.alt}
          pointRadius={(d: any) => d.size}
          pointLabel={(d: any) =>
            `<div style="background:hsl(200,30%,12%);color:white;padding:4px 8px;border-radius:6px;font-size:11px;font-family:system-ui;box-shadow:0 2px 8px rgba(0,0,0,0.3);">
              <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${d.color};margin-right:4px;"></span>
              ${d.label}: ${d.language}
            </div>`
          }
        />
      )}
    </div>
  );
}
