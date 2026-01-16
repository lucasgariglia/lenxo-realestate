'use client';

import { motion } from 'framer-motion';
import { useProperties } from '@/hooks/useProperties';
import PropertyCard from './PropertyCard';
import { useRef, useEffect, useState } from 'react';

export default function ListingFeed() {
  const { properties, loading } = useProperties();
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [properties]);

  if (loading) {
    return (
        <section className="relative w-full h-[50vh] flex items-center justify-center bg-zinc-950">
            <span className="text-zinc-300 font-sans animate-pulse tracking-[0.2em] text-xs uppercase">Loading Collection...</span>
        </section>
    )
  }

  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 bg-obsidian text-alabaster">
      <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-xl"
        >
            <motion.span 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="block text-xs font-sans text-zinc-300 uppercase tracking-[0.2em] mb-4"
            >
                Selected Works
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-display text-white mb-2 leading-[0.9]">
                <div className="overflow-hidden">
                    <motion.span 
                        variants={{ hidden: { y: "100%" }, visible: { y: 0 } }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                    >
                        Curated
                    </motion.span>
                    <motion.span 
                        variants={{ hidden: { y: "100%" }, visible: { y: 0 } }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="inline-block italic text-zinc-300 ml-3"
                    >
                        Living
                    </motion.span>
                </div>
                <div className="overflow-hidden">
                    <motion.span 
                        variants={{ hidden: { y: "100%" }, visible: { y: 0 } }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="inline-block"
                    >
                        Portfolio
                    </motion.span>
                </div>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
        >
            {['All', 'Villas', 'Penthouses', 'Off-Plan'].map((filter, i) => (
                <button 
                    key={filter} 
                    className={`
                        px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-sans transition-all border
                        ${i === 0 
                            ? 'bg-white text-zinc-950 border-white' 
                            : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'}
                    `}
                >
                    {filter}
                </button>
            ))}
        </motion.div>
      </div>

      {/* 
        Responsive Layout Logic:
        - Mobile (<700px): Vertical Stack (flex-col)
        - Desktop (>=700px): Magnetic Drag Carousel (framer-motion)
      */}
      <div className="md:hidden flex flex-col gap-6 px-4">
        {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div ref={carouselRef} className="hidden md:block w-full overflow-hidden pl-12 cursor-grab active:cursor-grabbing">
        <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-12"
        >
            {properties.map((property) => (
                <div key={property.id} className="min-w-max">
                    <PropertyCard property={property} />
                </div>
            ))}
            
             {/* Visual Endcap */}
            <div className="min-w-[200px] flex items-center justify-center opacity-40">
                <span className="text-xs font-sans tracking-[0.3em] uppercase rotate-90 whitespace-nowrap">View Collection</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
