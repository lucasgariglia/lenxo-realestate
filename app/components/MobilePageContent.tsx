'use client';

import Navbar from './mobile/Navbar';
import Hero from './mobile/Hero';
import Manifesto from './mobile/Manifesto';
import PropertyTypeGrid from './mobile/PropertyTypeGrid';
import ListingFeed from './mobile/ListingFeed';
import Footer from './mobile/Footer';

export default function MobilePageContent() {
  return (
    <div className="bg-obsidian w-full overflow-x-hidden relative flex flex-col">
      <Navbar />
      <Hero />
      <Manifesto />
      <PropertyTypeGrid />
      <ListingFeed />
      <Footer />
    </div>
  );
}