'use client';

import Navbar from './desktop/Navbar';
import Hero from './desktop/Hero';
import Manifesto from './desktop/Manifesto';
import PropertyTypeGrid from './desktop/PropertyTypeGrid';
import ListingFeed from './desktop/ListingFeed';
import Footer from './desktop/Footer';

export default function DesktopPageContent() {
  return (
    <div className="relative w-full">
      <Navbar />
      <Hero />
      <Manifesto />
      <PropertyTypeGrid />
      <ListingFeed />
      <Footer />
    </div>
  );
}