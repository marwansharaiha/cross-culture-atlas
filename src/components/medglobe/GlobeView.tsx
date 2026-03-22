import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { countries, getLanguageFamilyColor } from "@/data/countries";

interface GlobeViewProps {
  focusLat?: number;
  focusLng?: number;
  onCountryClick?: (isoCode: string) => void;
  selectedCountry?: string | null;
}

function latLngToAngles(lat: number, lng: number): [number, number] {
  return [
    (Math.PI * (90 - lat)) / 180,
    (Math.PI * (180 + lng)) / 180,
  ];
}

export default function GlobeView({ focusLat, focusLng, onCountryClick, selectedCountry }: GlobeViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const focusRef = useRef<[number, number] | null>(null);
  const widthRef = useRef(0);

  const onClickRef = useRef(onCountryClick);
  onClickRef.current = onCountryClick;

  useEffect(() => {
    if (focusLat != null && focusLng != null) {
      focusRef.current = latLngToAngles(focusLat, focusLng);
    } else {
      focusRef.current = null;
    }
  }, [focusLat, focusLng]);

  const markers = countries.map((c) => ({
    location: [c.lat, c.lng] as [number, number],
    size: selectedCountry === c.isoCode ? 0.12 : 0.06,
    color: getLanguageFamilyColor(c.primaryLanguageFamily),
    isoCode: c.isoCode,
  }));

  useEffect(() => {
    let currentPhi = phiRef.current;
    let currentTheta = thetaRef.current;

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const isDark = document.documentElement.classList.contains("dark");

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      phi: currentPhi,
      theta: currentTheta,
      dark: isDark ? 1 : 0.1,
      diffuse: 2,
      mapSamples: 24000,
      mapBrightness: isDark ? 2.5 : 8,
      baseColor: isDark ? [0.15, 0.2, 0.25] : [0.88, 0.92, 0.95],
      markerColor: [0.06, 0.47, 0.43],
      glowColor: isDark ? [0.06, 0.3, 0.3] : [0.82, 0.9, 0.92],
      markers: markers.map((m) => ({
        location: m.location,
        size: m.size,
      })),
      onRender: (state) => {
        if (!pointerInteracting.current) {
          if (focusRef.current) {
            const [targetPhi, targetTheta] = focusRef.current;
            currentPhi += (targetPhi - currentPhi) * 0.05;
            currentTheta += (targetTheta - currentTheta) * 0.05;
          } else {
            currentPhi += 0.003;
          }
        }
        state.phi = currentPhi;
        state.theta = currentTheta;
        phiRef.current = currentPhi;
        thetaRef.current = currentTheta;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [selectedCountry]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const handlePointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      phiRef.current += delta / 200;
      pointerInteracting.current = e.clientX;
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (Math.abs(pointerInteractionMovement.current) > 5) {
      pointerInteractionMovement.current = 0;
      return;
    }
    pointerInteractionMovement.current = 0;

    // Find closest marker to click position on the canvas
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const clickAngleX = ((x - cx) / cx) * Math.PI;
    const clickAngleY = ((y - cy) / cy) * Math.PI;

    // Find closest country marker (simplified approach)
    let closestDist = Infinity;
    let closestCode: string | null = null;
    for (const m of markers) {
      const [phi, theta] = latLngToAngles(m.location[0], m.location[1]);
      const dPhi = phi - phiRef.current - clickAngleY;
      const dTheta = theta - (thetaRef.current + clickAngleX);
      const dist = dPhi * dPhi + dTheta * dTheta;
      if (dist < closestDist && dist < 0.15) {
        closestDist = dist;
        closestCode = m.isoCode;
      }
    }
    if (closestCode && onClickRef.current) {
      onClickRef.current(closestCode);
    }
  }, [markers]);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto globe-glow rounded-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        style={{ contain: "layout paint size", borderRadius: "50%" }}
      />
    </div>
  );
}
