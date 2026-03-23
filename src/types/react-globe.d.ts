declare module 'react-globe.gl' {
  import { Component } from 'react';

  interface GlobeProps {
    ref?: any;
    width?: number;
    height?: number;
    backgroundColor?: string;
    globeImageUrl?: string;
    showGlobe?: boolean;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    
    // Polygons layer
    polygonsData?: any[];
    polygonCapColor?: string | ((d: any) => string);
    polygonSideColor?: string | ((d: any) => string);
    polygonStrokeColor?: string | ((d: any) => string);
    polygonAltitude?: number | ((d: any) => number);
    polygonCapCurvatureResolution?: number;
    polygonLabel?: string | ((d: any) => string);
    onPolygonClick?: (polygon: any, event: MouseEvent, coords: any) => void;
    onPolygonHover?: (polygon: any | null, prevPolygon: any | null) => void;
    
    // Points layer
    pointsData?: any[];
    pointColor?: string | ((d: any) => string);
    pointAltitude?: number | ((d: any) => number);
    pointRadius?: number | ((d: any) => number);
    pointLabel?: string | ((d: any) => string);
    pointLat?: string | ((d: any) => number);
    pointLng?: string | ((d: any) => number);
    onPointClick?: (point: any, event: MouseEvent, coords: any) => void;
    
    // Labels layer
    labelsData?: any[];
    labelText?: string | ((d: any) => string);
    labelLat?: string | ((d: any) => number);
    labelLng?: string | ((d: any) => number);
    labelColor?: string | ((d: any) => string);
    labelSize?: number | ((d: any) => number);
    labelAltitude?: number | ((d: any) => number);
    labelDotRadius?: number | ((d: any) => number);
    labelResolution?: number;

    // Animation
    animateIn?: boolean;

    [key: string]: any;
  }

  export default class Globe extends Component<GlobeProps> {
    pointOfView(pov: { lat?: number; lng?: number; altitude?: number }, transitionMs?: number): void;
    controls(): any;
    scene(): any;
    camera(): any;
    renderer(): any;
  }
}
