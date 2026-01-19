'use client';

import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[50] h-20 flex items-center justify-between px-6 bg-obsidian/80 backdrop-blur-md text-white border-b border-white/5">
      <div className="flex flex-col">
        <span className="text-lg font-display font-bold uppercase tracking-[0.2em]">Lenxo</span>
        <span className="text-[7px] uppercase tracking-[0.3em] text-zinc-500 font-medium">Real Estate</span>
      </div>
      <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10">
        <Menu size={18} className="text-zinc-300" />
      </button>
    </nav>
  );
}