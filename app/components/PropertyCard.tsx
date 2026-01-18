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
      initial="initial"
      whileHover="hover"
      animate="initial"
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
        
        {/* Strong Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating HUD Label */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-sans font-medium drop-shadow-md">
                {property.location.split(',')[0]}
            </span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 text-white overflow-hidden">
        <motion.div
            variants={{
                initial: { y: 0 },
                hover: { y: -10 } 
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
            <h3 className="text-3xl md:text-4xl font-display text-white mb-2 leading-[0.9] drop-shadow-lg">
              {property.title}
            </h3>
            
            {/* Details Reveal using Max-Height for stability */}
            <motion.div 
                variants={{
                    initial: { opacity: 0, y: 20, maxHeight: 0 },
                    hover: { opacity: 1, y: 0, maxHeight: 200 } // Sufficient max-height
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
            >
                <div className="pt-2 pb-1"> {/* Padding wrapper */}
                    <p className="text-sm text-zinc-200 font-sans max-w-[90%] line-clamp-2 mb-6 font-medium">
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

                        <div className="flex items-center gap-4">
                            <span className="text-xl font-display text-white italic">
                                ${(property.price / 1000000).toFixed(1)}M
                            </span>
                            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
