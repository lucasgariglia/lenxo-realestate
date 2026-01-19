'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bed, Bath, Square } from 'lucide-react';
import { Property } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full aspect-[4/5] flex-shrink-0 cursor-pointer overflow-hidden rounded-[24px] select-none shadow-2xl bg-zinc-900 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 50 : 1 }}
    >
      {/* Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={property.image_url}
          alt={property.title}
          fill
          sizes="500px"
          draggable={false}
          className={`object-cover transition-all duration-1000 ease-out ${
            isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
          }`}
        />
        
        {/* Strong Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`} />

        {/* Floating HUD Label */}
        <div 
          className="absolute top-[24px] right-[24px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full z-10"
          style={{ padding: '8px 16px' }}
        >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-sans font-bold">
                {property.location.split(',')[0]}
            </span>
        </div>
      </div>

      {/* Content Overlay */}
      <div 
        className="absolute inset-0 z-20 flex flex-col justify-end text-white"
        style={{ padding: '40px' }}
      >
        <motion.div 
            animate={{ y: isHovered ? 0 : 60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none"
        >
            <h3 className="text-[32px] font-display text-white mb-[8px] leading-[1.0] tracking-tight">
              {property.title}
            </h3>
            
            {/* Details Reveal */}
            <motion.div 
                initial={false}
                animate={{ 
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <p className="text-[14px] text-zinc-300 font-sans max-w-[95%] line-clamp-2 mb-[24px] opacity-80 leading-relaxed">
                  {property.description}
                </p>

                <div 
                  className="flex items-center justify-between border-t border-white/10"
                  style={{ paddingTop: '20px' }}
                >
                    <div className="flex gap-[16px] text-zinc-400">
                        <div className="flex items-center gap-[6px]">
                            <Bed size={14} strokeWidth={1.5} />
                            <span className="text-[11px] font-sans tracking-widest">{property.specs.beds}</span>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <Bath size={14} strokeWidth={1.5} />
                            <span className="text-[11px] font-sans tracking-widest">{property.specs.baths}</span>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <Square size={14} strokeWidth={1.5} />
                            <span className="text-[11px] font-sans tracking-widest">{property.specs.sqft}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-[16px]">
                        <span className="text-[18px] font-display text-white italic">
                            ${(property.price / 1000000).toFixed(1)}M
                        </span>
                        <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-500 ${
                            isHovered ? 'bg-white text-black' : 'bg-white/10 text-white'
                        }`}>
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}