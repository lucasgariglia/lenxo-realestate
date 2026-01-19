'use client';

import { Property } from '@/lib/types';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-zinc-950 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image 
            src={property.image_url} 
            alt={property.title} 
            fill 
            className="object-cover transition-transform duration-1000 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="absolute top-6 left-6 flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-sans">Location</span>
            <span className="text-xs text-white font-sans font-medium">{property.location.split(',')[0]}</span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-display text-white">{property.title}</h3>
                <span className="text-xl font-display text-white/80 italic">${(property.price / 1000000).toFixed(1)}M</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-xl">
                <ArrowUpRight size={20} />
            </div>
        </div>
      </div>
    </motion.div>
  );
}