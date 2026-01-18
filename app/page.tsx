import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ListingFeed from './components/ListingFeed';
import Navbar from './components/Navbar';
import PropertyTypeGrid from './components/PropertyTypeGrid';
import ScalingWrapper from './components/ScalingWrapper';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-alabaster selection:bg-zinc-900 selection:text-white">
      
      <ScalingWrapper>
        <Navbar />
        <Hero />
        <Manifesto />
        <PropertyTypeGrid />
        
        {/* Dark Mode Portfolio Section */}
        <div data-theme="dark" className="bg-zinc-950 text-white">
          <ListingFeed />
        </div>
      
        {/* Minimal Footer */}
        <footer className="py-12 border-t border-zinc-800 bg-zinc-950 text-center relative z-10">
          <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
            © 2026 Lenxo Estates. All Rights Reserved.
          </p>
        </footer>
      </ScalingWrapper>
    </main>
  );
}