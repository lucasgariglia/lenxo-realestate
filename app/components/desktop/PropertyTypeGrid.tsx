'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import ScalingWrapper from '../ScalingWrapper';

const CATEGORIES = [
  { id: '1', label: 'Luxury Villas', count: 12, image: '/images/lenxo-listing-villa.jpg', x: 80, y: 320, w: 460, h: 460 },
  { id: '2', label: 'Penthouse Suites', count: 5, image: '/images/lenxo-listing-loft.jpg', x: 570, y: 320, w: 460, h: 460 },
  { id: '4', label: 'Investment', count: 24, image: '/images/lenxo-home-hero.jpg', x: 1060, y: 320, w: 460, h: 460 },
  { id: '3', label: 'Waterfront Homes', count: 8, image: '/images/lenxo-listing-pool.jpg', x: 80, y: 810, w: 950, h: 460 },
  { id: '5', label: 'Off-Plan', count: 15, image: '/images/lenxo-listing-offplan.jpg', x: 1060, y: 810, w: 460, h: 460 } 
];

export default function PropertyTypeGrid() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      <ScalingWrapper height={1400}>
          <div className="relative w-full h-full">
            {/* Header HUD */}
            <div className="absolute top-[100px] left-[80px] w-[1440px] text-center">
                <span className="block text-[12px] font-sans text-zinc-600 uppercase tracking-[0.3em] mb-[20px] font-bold">Collections</span>
                <h2 className="text-[72px] font-display text-zinc-950 leading-[0.9] tracking-tight">
                    Find Your <span className="italic text-zinc-600 font-light">Perfect</span> Match
                </h2>
            </div>

            {/* Absolute Positioned Cards */}
            {CATEGORIES.map((cat, i) => (
                <motion.div
                    key={cat.id}
                    style={{ 
                        left: `${cat.x}px`, 
                        top: `${cat.y}px`, 
                        width: `${cat.w}px`, 
                        height: `${cat.h}px` 
                    }}
                    className="absolute group overflow-hidden rounded-[24px] cursor-pointer bg-zinc-100 shadow-xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    <div className="absolute bottom-[40px] left-[40px] right-[40px] flex justify-between items-end translate-y-[10px] group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-col gap-[8px]">
                            <span className="text-[10px] font-sans font-bold text-zinc-400 tracking-[0.2em] uppercase">
                                {cat.count} listings
                            </span>
                            <h3 className="text-[32px] font-display text-white leading-none tracking-tight">
                                {cat.label}
                            </h3>
                        </div>
                        
                        <div className="w-[48px] h-[48px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </motion.div>
            ))}
          </div>
      </ScalingWrapper>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-200" />
    </section>
  );
}
