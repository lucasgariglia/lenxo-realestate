'use client';

import { useProperties } from '@/hooks/useProperties';
import PropertyCard from './PropertyCard';

export default function ListingFeed() {
  const { properties, loading } = useProperties();

  if (loading) return (
    <div className="py-32 flex flex-col items-center justify-center bg-obsidian">
        <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin mb-4" />
        <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px]">Curating Collection</span>
    </div>
  );

  return (
    <section className="w-full py-40 px-8 bg-obsidian">
      <div className="text-center mb-24">
        <span className="block text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-bold mb-4">The Portfolio</span>
        <h2 className="text-3xl font-display text-white italic">Selected Works</h2>
      </div>
      <div className="flex flex-col gap-20">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      <div className="mt-32 text-center">
        <button className="px-10 py-4 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500">
            Discover Full Portfolio
        </button>
      </div>
    </section>
  );
}