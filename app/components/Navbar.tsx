'use client';

import { Menu, Search, Heart, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the element at the center-top of the viewport (under the navbar)
      // We use y=20 to be safely within the navbar height but hitting the content below
      // (assuming navbar container is pointer-events-none)
      const el = document.elementFromPoint(window.innerWidth / 2, 20);
      
      if (el) {
        const section = el.closest('[data-theme]');
        if (section) {
          const theme = section.getAttribute('data-theme');
          setIsDarkSection(theme === 'dark');
        }
      }
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-start pointer-events-none">
      {/* Logo Mark - Independent & High Contrast - Scroll Aware */}
      <div 
        className={`flex flex-col pointer-events-auto transition-colors duration-500 ${isDarkSection ? 'text-white' : 'text-zinc-950'}`}
      >
        <span className="text-2xl md:text-3xl font-display tracking-wider uppercase font-bold leading-none">Lenxo</span>
        <span className={`text-[8px] md:text-[9px] font-sans uppercase tracking-[0.4em] opacity-80 pl-1 ${isDarkSection ? 'text-zinc-300' : 'text-zinc-800'}`}>Real Estate</span>
      </div>

      {/* Right Side Actions - Minimal, No Container, Matching Color Logic */}
      <div className={`pointer-events-auto flex items-center gap-6 transition-colors duration-500 ${isDarkSection ? 'text-white' : 'text-zinc-950'}`}>
        
        {/* Search Label (Desktop) */}
        <button className="hidden md:flex items-center gap-2 group">
          <Search size={14} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-sans uppercase tracking-widest font-medium">Search</span>
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4">
            <button className="flex items-center justify-center hover:opacity-70 transition-opacity">
                <Heart size={18} strokeWidth={1.5} />
            </button>

            <button className="flex items-center justify-center hover:opacity-70 transition-opacity">
                <Lock size={18} strokeWidth={1.5} />
            </button>
            
            <button className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform ml-2 shadow-lg ${isDarkSection ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'}`}>
                <Menu size={20} strokeWidth={1.5} />
            </button>
        </div>
      </div>
    </nav>
  );
}
