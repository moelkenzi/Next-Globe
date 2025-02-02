"use client"

import React, { useRef, useEffect, useState } from 'react'
import createGlobe from 'cobe'

interface GlobeConfig {
  phi?: number;
  theta?: number;
  width?: number;
  height?: number;
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
}

interface GlobeProps {
  config?: GlobeConfig;
}

export default function Globe({ config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [globeParams, setGlobeParams] = useState<Required<GlobeConfig>>({
    phi: config.phi ?? 0,
    theta: config.theta ?? 0,
    width: config.width ?? 500,
    height: config.height ?? 500,
    mapSamples: config.mapSamples ?? 17000,
    mapBrightness: config.mapBrightness ?? 10,
    mapBaseBrightness: config.mapBaseBrightness ?? 0.00,
    diffuse: config.diffuse ?? 2,
    dark: config.dark ?? 1,
    baseColor: config.baseColor ?? '#0060c7',
    markerColor: config.markerColor ?? '#000',
    markerSize: config.markerSize ?? 0.1,
    glowColor: config.glowColor ?? '#fff',
    scale: config.scale ?? 1,
    offsetX: config.offsetX ?? 0,
    offsetY: config.offsetY ?? 0,
    opacity: config.opacity ?? 1,
    ...config
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const initialPhi = globeParams.phi
    const initialTheta = globeParams.theta
    let globe: ReturnType<typeof createGlobe> | null = null

    // Hex to RGB conversion function
    const hexToRgb = (hex: string): [number, number, number] => {
      const bigint = parseInt(hex.slice(1), 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return [r/255, g/255, b/255]
    }

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: globeParams.width * 2,
        height: globeParams.height * 2,
        phi: initialPhi,
        theta: initialTheta,
        dark: globeParams.dark,
        diffuse: globeParams.diffuse,
        scale: globeParams.scale,
        mapSamples: globeParams.mapSamples,
        mapBrightness: globeParams.mapBrightness,
        baseColor: hexToRgb(globeParams.baseColor),  
        markerColor: hexToRgb(globeParams.markerColor),  
        glowColor: hexToRgb(globeParams.glowColor),  
        offset: [globeParams.offsetX, globeParams.offsetY],
        markers: [
          { location: [37.7595, -122.4367], size: globeParams.markerSize },  
          { location: [40.7128, -74.006], size: globeParams.markerSize * 3 }  
        ],
        onRender: (state) => {
          // Animate the globe
          state.phi += 0.01
          
          // Use state update instead of direct mutation
          setGlobeParams(prev => ({
            ...prev,
            phi: prev.phi + 0.01
          }))
        }
      })
    }

    return () => {
      if (globe) globe.destroy()
    }
  }, [globeParams])  

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - mousePosition.x
    const deltaY = e.clientY - mousePosition.y

    setGlobeParams(prev => ({
      ...prev,
      phi: prev.phi + deltaX * 0.01,
      theta: prev.theta + deltaY * 0.01
    }))

    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: `${globeParams.width}px`, 
        height: `${globeParams.height}px`, 
        cursor: isDragging ? 'grabbing' : 'grab' 
      }}
      width={globeParams.width * 2}
      height={globeParams.height * 2}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  )
}
