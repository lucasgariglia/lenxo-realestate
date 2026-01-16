'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  }
};

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]); 
  
  return (
    <div data-theme="dark" ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-obsidian">
      
      {/* LEFT COLUMN: Content & Typography (40%) */}
      <div className="relative z-20 w-full md:w-[40%] h-auto md:h-screen flex flex-col pt-40 md:pt-48 px-6 md:px-12 bg-obsidian text-alabaster">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <span className="text-[10px] md:text-xs font-sans font-medium tracking-[0.3em] uppercase text-zinc-300 flex items-center gap-4">
             <span className="w-8 h-[1px] bg-zinc-500"></span>
             Est. 2026
          </span>
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12 text-white"
        >
          <span className="block overflow-hidden">
            <motion.span variants={wordVariants} className="inline-block mr-3">Real</motion.span>
            <motion.span variants={wordVariants} className="inline-block">Estate</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={wordVariants} className="inline-block mr-3 italic text-zinc-400 font-light">in</motion.span>
            <motion.span variants={wordVariants} className="inline-block">Dubai</motion.span>
          </span>
          <span className="block overflow-hidden">
             <motion.span variants={wordVariants} className="inline-block">Redefined.</motion.span>
          </span>
        </motion.h1>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-zinc-300 font-sans text-sm leading-relaxed mb-12 max-w-sm"
        >
            Experience the pinnacle of desert living. We curate exclusive off-market properties for the world's most discerning investors.
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6"
        >
            <button className="group flex items-center gap-4 bg-white text-zinc-950 px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300">
                <span className="text-xs uppercase tracking-widest font-sans font-medium">Contact Agent</span>
                <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
        </motion.div>

      </div>

      {/* RIGHT COLUMN: Video Visual (60%) */}
      <div className="relative w-full md:w-[60%] h-[50vh] md:h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <video
            src="/videos/lenxo-home-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          />
          {/* Subtle overlay to blend edges if needed, mostly clean */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Floating Catalog Button (Right Side) */}
        <div className="absolute bottom-32 right-8 z-20 hidden md:block">
            <button className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="text-left">
                    <span className="block text-[10px] uppercase text-zinc-400 tracking-wider">Catalog</span>
                    <span className="block text-sm font-bold text-zinc-900">Download</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center">
                    <ArrowDownRight size={14} className="text-zinc-900" />
                </div>
            </button>
        </div>
      </div>

      {/* Springs-Inspired Info Rail - Anchored Data */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden md:flex absolute bottom-0 left-0 w-full z-40 border-t border-white/10 bg-obsidian/80 backdrop-blur-md"
      >
        <div className="w-[40%] flex items-center justify-between border-r border-white/10 px-12 py-6">
             <span className="text-[10px] uppercase tracking-widest text-zinc-500">Project Status</span>
             <span className="text-sm font-display text-white">Pre-Launch</span>
        </div>
        
        <div className="flex-1 flex bg-black/40">
            <div className="flex-1 border-r border-white/10 p-6 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Location</span>
                <span className="text-sm font-display text-white">Palm Jumeirah</span>
            </div>
            <div className="flex-1 border-r border-white/10 p-6 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Yield</span>
                <span className="text-sm font-display text-white">~8.5% Net</span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Completion</span>
                <span className="text-sm font-display text-white">Q4 2028</span>
            </div>
        </div>
      </motion.div>

    </div>
  );
}