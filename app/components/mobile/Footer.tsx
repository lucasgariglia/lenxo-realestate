'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full pt-40 pb-16 px-8 bg-black border-t border-zinc-900 flex flex-col gap-20">
      {/* Brand Section */}
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-display font-bold text-white uppercase tracking-[0.2em]">Lenxo</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold mt-2">Real Estate</span>
        </div>
        <p className="text-[15px] font-sans text-zinc-500 leading-relaxed max-w-[300px]">
          Curating the most prestigious off-market assets for a global elite. 
          The silence of true luxury.
        </p>
      </div>
      
      {/* Navigation Links */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
        <div className="flex flex-col gap-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Contact</span>
          <div className="flex flex-col gap-4">
            <a href="mailto:concierge@lenxo.ae" className="text-sm text-zinc-400 hover:text-white transition-colors">concierge@lenxo.ae</a>
            <a href="tel:+9714000000" className="text-sm text-zinc-400 hover:text-white transition-colors">+971 4 000 0000</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Follow</span>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg text-zinc-400 italic font-display hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-lg text-zinc-400 italic font-display hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col gap-8">
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold text-center">Private Inquiries</span>
        <div className="relative group">
          <input 
            type="email" 
            placeholder="Private Email" 
            className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-8 pr-32 text-sm font-sans text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-zinc-600"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Send
          </button>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="pt-16 border-t border-zinc-900 flex flex-col items-center gap-8">
        <div className="flex gap-12">
            <a href="#" className="text-[9px] text-zinc-700 uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[9px] text-zinc-700 uppercase tracking-[0.2em] hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-[9px] text-zinc-700 uppercase tracking-[0.2em] hover:text-white transition-colors">Cookies</a>
        </div>
        <p className="text-[9px] text-zinc-800 uppercase tracking-[0.3em]">© 2026 Lenxo Estates. All Rights Reserved.</p>
      </div>
    </footer>
  );
}