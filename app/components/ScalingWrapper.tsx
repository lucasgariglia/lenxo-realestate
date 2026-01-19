'use client';

import React from 'react';
import { useViewport } from '@/hooks/useViewport';

interface ScalingWrapperProps {
  children: React.ReactNode;
  width?: number;
  height?: number; // Optional: If provided, wrapper will have a fixed (scaled) height
  className?: string;
}

export default function ScalingWrapper({ children, width = 1600, height, className = "" }: ScalingWrapperProps) {
  const { width: winWidth, isMobile, isMounted } = useViewport();
  
  if (!isMounted) return null;

  const scale = isMobile ? 1 : winWidth / width;

  return (
    <div 
      className={className}
      style={{ 
        height: height ? `${height * scale}px` : 'auto',
        width: '100%',
        overflow: 'visible',
        position: 'relative'
      }}
    >
      <div
        style={{
          transform: isMobile ? 'none' : `scale(${scale})`,
          transformOrigin: 'top center',
          width: isMobile ? '100%' : `${width}px`,
          height: height ? `${height}px` : 'auto',
          position: isMobile ? 'relative' : 'absolute',
          left: isMobile ? '0' : '50%',
          marginLeft: isMobile ? '0' : `-${width / 2}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
