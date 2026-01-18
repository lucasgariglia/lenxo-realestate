'use client';

import { Menu, Search, Heart, Lock } from 'lucide-react';

export default function Navbar() {
  // mix-blend-mode: difference logic
  // The Logo is Pure White (#FFFFFF).
  // - On Black (#000000) BG: White - 0 = White.
  // - On White (#FFFFFF) BG: White - White = Black.
  // This ensures 7:1 contrast automatically without JS listeners.

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
      
      {/* Logo Mark */}
      <div className="flex flex-col pointer-events-auto">
        <span className="text-2xl md:text-3xl font-display tracking-wider uppercase font-bold leading-none">Lenxo</span>
        <span className="text-[8px] md:text-[9px] font-sans uppercase tracking-[0.4em] opacity-80 pl-1 text-zinc-300">Real Estate</span>
      </div>

      {/* Right Side Actions */}
      <div className="pointer-events-auto flex items-center gap-6">
        
        {/* Search Label (Desktop) */}
        <button className="hidden md:flex items-center gap-2 group">
          <Search size={14} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-sans uppercase tracking-widest font-medium">Search</span>
        </button>

        {/* Icons Group */}
        <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center hover:opacity-70 transition-opacity">
                <Heart size={18} strokeWidth={1.5} />
            </button>

            <button className="hidden md:flex items-center justify-center hover:opacity-70 transition-opacity">
                <Lock size={18} strokeWidth={1.5} />
            </button>
            
            {/* Menu Pill 
                For the pill background, we cannot use mix-blend-mode difference on the background itself easily without affecting the content.
                So we keep the text/icons in 'difference' mode (inherited) but might need to isolate the glass effect if it looks weird.
                However, for this specific request, we prioritize the text contrast.
                To maintain the glass effect *and* contrast is tricky with just CSS blend modes on one layer.
                We will trust the text to invert, and keep the glass simple.
            */}
            <button 
                className="
                    backdrop-blur-md border border-white/20 px-5 py-2 rounded-full flex items-center gap-3 
                    transition-all duration-300 ml-2 group
                    bg-white/10 hover:bg-white/20
                "
            >
                <span className="text-[10px] font-sans uppercase tracking-widest font-medium group-hover:tracking-[0.2em] transition-all">Menu</span>
                <Menu size={16} strokeWidth={1.5} />
            </button>
        </div>
      </div>
    </nav>
  );
}

