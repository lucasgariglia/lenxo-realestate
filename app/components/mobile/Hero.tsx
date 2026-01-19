'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export default function MobileHero() {
  return (
    <div className="relative w-full flex flex-col bg-obsidian text-white overflow-hidden">
      
      {/* VIDEO LAYER - Forced Full Bleed */}
      <div className="relative w-full h-[65vh] overflow-hidden bg-black">
        <video
            src="/videos/lenxo-real-estate-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[101vw] min-h-full object-cover opacity-70 scale-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian" />
      </div>

      {/* TEXT LAYER */}
      <div className="px-8 py-24 flex flex-col gap-12 bg-obsidian relative z-10">
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
        >
            <span className="text-[11px] font-sans font-medium tracking-[0.4em] uppercase text-zinc-500 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-zinc-800"></span>
              Est. 2026
            </span>
        </motion.div>

        <motion.h1 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="font-display text-[48px] leading-[1.1] tracking-tight"
        >
            <div className="overflow-hidden">
                <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">Real</motion.span>
                <motion.span variants={wordVariants} className="inline-block">Estate</motion.span>
            </div>
            <div className="overflow-hidden">
                <motion.span variants={wordVariants} className="inline-block italic text-zinc-400 font-light mr-[0.25em]">in</motion.span>
                <motion.span variants={wordVariants} className="inline-block">Dubai</motion.span>
            </div>
            <div className="overflow-hidden">
                <motion.span variants={wordVariants} className="inline-block">Redefined.</motion.span>
            </div>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-zinc-500 font-sans text-[18px] leading-relaxed max-w-[320px]"
        >
            Experience the pinnacle of desert living. We curate exclusive off-market properties for the global elite.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <button 
                className="w-full bg-white text-zinc-950 rounded-full flex items-center justify-between px-10 py-6 shadow-2xl active:scale-[0.98] transition-all"
            >
                <span className="text-sm uppercase tracking-[0.2em] font-sans font-bold">Contact Agent</span>
                <ArrowDownRight size={22} />
            </button>
        </motion.div>
      </div>

    </div>
  );
}