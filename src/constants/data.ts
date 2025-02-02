export interface GlobeConfig {
  phi?: number;
  theta?: number;
  mapSamples?: number;
  mapBrightness?: number;
  mapBaseBrightness?: number;
  diffuse?: number;
  dark?: number;
  baseColor?: string;
  markerColor?: string;
  markerSize?: number;
  glowColor?: string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  opacity?: number;
  markers?: Array<{ location: [number, number], size: number }>;
}

export const defaultGlobeConfig: GlobeConfig = {
  phi: 10,
  theta: 0,
  mapSamples: 17000,
  mapBrightness: 10,
  diffuse: 2,
  dark: 1,
  baseColor: '#0060c7',
  markerColor: '#000',
  markerSize: 0,  // Set marker size to 0
  glowColor: '#10231a',
  scale: 1,
  offsetX: 0,
  offsetY: 0,
  markers: [
    { location: [37.7595, -122.4367], size: 0 },
    { location: [40.7128, -74.006], size: 0 }
  ]
}