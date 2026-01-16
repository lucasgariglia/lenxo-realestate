'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bed, Bath, Square } from 'lucide-react';
import { Property } from '@/lib/types';
import Image from 'next/image';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div 
      className="group relative min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] h-[60vh] md:h-[70vh] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl select-none"
      whileHover="hover"
      initial="initial"
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={property.image_url}
          alt={property.title}
          fill
          draggable={false}
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Strong Gradient Overlay for Legibility - Enhanced for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating HUD Label */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-sans font-medium drop-shadow-md">
                {property.location.split(',')[0]}
            </span>
        </div>
      </div>

      {/* Content Overlay - Interactive Reveal */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end z-20 text-white">
        <motion.div>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-2 leading-[0.9] drop-shadow-lg">
              {property.title}
            </h3>
            
            {/* Hidden Details that Reveal on Hover */}
            <motion.div 
                variants={{
                    initial: { height: 0, opacity: 0 },
                    hover: { height: 'auto', opacity: 1 }
                }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
            >
                <p className="text-sm text-zinc-200 font-sans max-w-[90%] line-clamp-2 mb-6 pt-2 font-medium">
                  {property.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                    <div className="flex gap-6 text-white">
                        <div className="flex items-center gap-2">
                            <Bed size={16} strokeWidth={1} />
                            <span className="text-xs font-sans tracking-wider">{property.specs.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Bath size={16} strokeWidth={1} />
                            <span className="text-xs font-sans tracking-wider">{property.specs.baths} Baths</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <Square size={16} strokeWidth={1} />
                            <span className="text-xs font-sans tracking-wider">{property.specs.sqft} sqft</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                        <span className="text-xl font-display text-white italic">
                            ${(property.price / 1000000).toFixed(1)}M
                        </span>
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
