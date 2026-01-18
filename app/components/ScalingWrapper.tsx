'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';

interface ScalingWrapperProps {
  children: React.ReactNode;
}

export default function ScalingWrapper({ children }: ScalingWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [scale, setScale] = useState(1);
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use useLayoutEffect to prevent visual flash of unscaled content
  useLayoutEffect(() => {
    if (!isMounted) return;

    const calculateScale = () => {
      const viewportWidth = document.documentElement.clientWidth; // Excludes scrollbar
      
      // Pivot Logic: Only scale if >= 700px
      // BASE DESIGN WIDTH: 1440px (Updated for balanced scaling on 2K monitors).
      if (viewportWidth >= 700) {
        const newScale = viewportWidth / 1440;
        setScale(newScale);
        
        // Update wrapper height based on scaled content
        if (contentRef.current) {
            const contentHeight = contentRef.current.offsetHeight;
            setWrapperHeight(contentHeight * newScale);
        }
      } else {
        setScale(1);
        setWrapperHeight('auto');
      }
    };

    calculateScale();

    // Observers
    const resizeObserver = new ResizeObserver(() => calculateScale());
    const mutationObserver = new MutationObserver(() => calculateScale());
    
    window.addEventListener('resize', calculateScale);
    
    if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
        mutationObserver.observe(contentRef.current, { childList: true, subtree: true, attributes: true });
    }

    return () => {
      window.removeEventListener('resize', calculateScale);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [isMounted]);

  if (!isMounted) {
    return <div className="w-full h-full opacity-0">{children}</div>;
  }

  const isDesktop = scale !== 1;

  return (
    <div 
        className="w-full relative overflow-x-hidden bg-obsidian"
        style={{ height: wrapperHeight }}
    >
        <div
            ref={contentRef}
            className={`origin-top-left ${isDesktop ? 'absolute top-0 left-0' : 'relative w-full'}`}
            style={{
                width: isDesktop ? '1440px' : '100%',
                transform: isDesktop ? `scale(${scale})` : 'none',
            }}
        >
            {children}
        </div>
    </div>
  );
}
