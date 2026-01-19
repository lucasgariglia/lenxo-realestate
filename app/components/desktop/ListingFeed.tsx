'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useProperties } from '@/hooks/useProperties';
import PropertyCard from './PropertyCard';
import { useRef, useEffect, useState } from 'react';
import ScalingWrapper from '../ScalingWrapper';

export default function ListingFeed() {
  const { properties, loading } = useProperties();
  const containerRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const updateWidth = () => {
        if (containerRef.current) {
            setCarouselWidth(containerRef.current.scrollWidth - 1600);
        }
    };
    updateWidth();
    const timer = setTimeout(updateWidth, 500);
    return () => clearTimeout(timer);
  }, [properties, loading]);

  const handleDragEnd = (_: any, info: any) => {
    const cardWidth = 540; 
    const currentX = x.get();
    const predictedX = currentX + info.velocity.x * 0.2; 
    
    let nextIndex = Math.round(Math.abs(predictedX) / cardWidth);
    nextIndex = Math.max(0, Math.min(nextIndex, properties.length - 1));
    
    setActiveIndex(nextIndex);
    x.set(-nextIndex * cardWidth);
  };

  if (loading) {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center bg-black">
            <span className="text-zinc-400 font-sans animate-pulse tracking-[0.4em] text-[12px] uppercase">Loading Collection</span>
        </section>
    )
  }

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <ScalingWrapper height={1200}>
        <div className="relative w-full h-full">
            {/* Header HUD */}
            <div className="absolute top-[100px] left-[80px] z-20">
                <span className="block text-[12px] font-sans text-zinc-400 uppercase tracking-[0.4em] mb-[16px] font-bold">The Portfolio</span>
                <h2 className="text-[64px] font-display text-white leading-[0.9] tracking-tight">
                    Curated <span className="italic text-zinc-500 font-light">Living</span> Portfolio
                </h2>
            </div>

            {/* Filter HUD */}
            <div className="absolute top-[150px] right-[80px] z-20 flex gap-[16px]">
                {['All', 'Villas', 'Penthouses'].map((filter, i) => (
                    <button 
                        key={filter}
                        style={{ padding: '16px 36px' }}
                        className={`rounded-full text-[12px] uppercase tracking-widest font-bold border transition-all ${
                            i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-400'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Carousel Wrapper */}
            <div 
                ref={containerRef} 
                className="absolute top-[340px] left-0 w-[1600px] h-[750px] z-30 overflow-visible pl-[80px] active:cursor-grabbing cursor-grab"
            >
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -carouselWidth }}
                    dragElastic={0.05}
                    onDragEnd={handleDragEnd}
                    style={{ x: springX }}
                    className="flex gap-[40px] h-full items-start"
                >
                    {properties.map((property, index) => (
                        <motion.div 
                            key={property.id} 
                            className="shrink-0 w-[500px]"
                            // REMOVED SCALE ANIMATION to prevent hover glitches
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <PropertyCard property={property} />
                        </motion.div>
                    ))}
                    
                    <div className="shrink-0 w-[400px] h-[625px] flex items-center justify-center opacity-20">
                        <span className="text-[14px] font-sans tracking-[0.5em] uppercase rotate-90 text-zinc-500">End of Collection</span>
                    </div>
                </motion.div>
            </div>

            {/* Navigation Line */}
            {/* Removed redundant line to fix double-line issue above footer */}
        </div>
      </ScalingWrapper>
    </section>
  );
}