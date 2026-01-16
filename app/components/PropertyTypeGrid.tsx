'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const CATEGORIES = [
  { id: '1', label: 'Luxury Villas', count: 12, image: '/images/lux-listing-villa.jpg', colSpan: 'md:col-span-1' },
  { id: '2', label: 'Penthouse Suites', count: 5, image: '/images/lux-listing-loft.jpg', colSpan: 'md:col-span-1' },
  { id: '3', label: 'Waterfront Homes', count: 8, image: '/images/lux-listing-pool.jpg', colSpan: 'md:col-span-2' },
  { id: '4', label: 'Investment', count: 24, image: '/images/lux-home-hero.jpg', colSpan: 'md:col-span-1' },
  { id: '5', label: 'Off-Plan', count: 15, image: '/images/lux-listing-offplan.jpg', colSpan: 'md:col-span-1' } 
];

export default function PropertyTypeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "center center"]
  });

  // Slowed down: Scale finishes (1) when element is nearly at center.
  // Range expanded to [0, 0.8] for a longer, heavier feel.
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  return (
    <motion.section 
        data-theme="light"
        ref={containerRef}
        style={{ scale, opacity }}
        className="bg-alabaster py-24 px-4 md:px-12 origin-center"
    >
      <div className="container mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
            <span className="block text-xs font-sans text-zinc-600 uppercase tracking-[0.2em] mb-4">Browse by Category</span>
            <h2 className="text-4xl md:text-6xl font-display text-zinc-950 mb-4 leading-[0.9]">
                Find Your <br/> <span className="italic text-zinc-600">Perfect</span> Match
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[800px] hover:hover:has-[:hover]:opacity-50 transition-opacity duration-500">
            {CATEGORIES.map((cat, i) => (
                <motion.div
                    key={cat.id}
                    className={`
                        relative group overflow-hidden rounded-2xl ${cat.colSpan} h-[300px] md:h-auto cursor-pointer
                        hover:!opacity-100 transition-opacity duration-500
                    `}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                    <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                        <div>
                            <span className="text-[10px] font-sans font-medium text-zinc-300 mb-3 block tracking-[0.2em] uppercase">
                                0{i+1} — {cat.count} listings
                            </span>
                            <h3 className="text-3xl md:text-4xl font-display text-white leading-none tracking-tight">
                                {cat.label}
                            </h3>
                        </div>
                        
                        <div className="
                            w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md 
                            flex items-center justify-center text-white 
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-500 delay-100
                            hover:!bg-white hover:!text-black
                        ">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
