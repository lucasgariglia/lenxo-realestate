'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: '1', label: 'Luxury Villas', count: 12, image: '/images/lenxo-listing-villa.jpg' },
  { id: '2', label: 'Penthouse Suites', count: 5, image: '/images/lenxo-listing-loft.jpg' },
  { id: '4', label: 'Investment', count: 24, image: '/images/lenxo-home-hero.jpg' }
];

export default function PropertyTypeGrid() {
  return (
    <section className="w-full py-40 px-8 bg-alabaster">
      <div className="text-center mb-24">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-4">Collections</span>
        <h2 className="text-3xl font-display text-zinc-900 italic">Curated Portfolios</h2>
      </div>
      <div className="flex flex-col gap-16">
        {CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={cat.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative w-full h-[400px] rounded-3xl overflow-hidden group shadow-2xl"
          >
            <Image 
              src={cat.image} 
              alt={cat.label} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-2 block">
                {cat.count} listings
              </span>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-display text-white">{cat.label}</h3>
                <span className="text-white/40 text-xs font-sans">View All</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}