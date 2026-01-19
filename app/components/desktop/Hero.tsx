'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import ScalingWrapper from '../ScalingWrapper';

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '40px' },
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]); 
  
  return (
    <section className="relative w-full bg-black overflow-hidden">
      
      {/* FULL BLEED BACKGROUND - OUTSIDE SCALING */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y }}
            className="absolute -inset-[5%] w-[110%] h-[120%]"
          >
            <video
                src="/videos/lenxo-real-estate-hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full opacity-60 scale-[1.1]"
            />
            {/* Editorial Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          </motion.div>
      </div>

      {/* SCALED CONTENT STAGE */}
      <ScalingWrapper height={1000}>
          <div className="relative w-full h-full">
              {/* Date Label */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-[280px] left-[80px] z-30"
              >
                  <span className="text-[12px] font-sans font-medium tracking-[0.4em] uppercase text-zinc-300 flex items-center gap-[16px]">
                    <span className="w-[40px] h-[1px] bg-zinc-600"></span>
                    Est. 2026
                  </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="absolute top-[340px] left-[80px] z-30 font-display text-[100px] leading-[1.0] tracking-tight text-white flex flex-col gap-2"
              >
                  <div className="flex overflow-hidden">
                    <motion.span variants={wordVariants} className="inline-block mr-[0.3em]">Real</motion.span>
                    <motion.span variants={wordVariants} className="inline-block">Estate</motion.span>
                  </div>
                  <div className="flex overflow-hidden">
                    <motion.span variants={wordVariants} className="inline-block italic text-zinc-300 font-light mr-[0.3em]">in</motion.span>
                    <motion.span variants={wordVariants} className="inline-block">Dubai</motion.span>
                  </div>
                  <div className="flex overflow-hidden">
                    <motion.span variants={wordVariants} className="inline-block">Redefined.</motion.span>
                  </div>
              </motion.h1>

              {/* Subtext - Positioned with more room */}
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute top-[720px] left-[80px] z-30 text-zinc-200 font-sans text-[18px] leading-relaxed max-w-[450px] opacity-90"
              >
                  Experience the pinnacle of desert living. We curate exclusive off-market properties for the world&apos;s most discerning investors.
              </motion.p>

              {/* CTA Button - Shifted down for better balance */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute top-[860px] left-[80px] z-30"
              >
                  <button 
                    style={{ padding: '24px 56px' }}
                    className="group flex items-center gap-[20px] bg-white text-black rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-2xl"
                  >
                      <span className="text-[16px] uppercase tracking-[0.2em] font-sans font-bold">Contact Agent</span>
                      <ArrowDownRight size={24} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </button>
              </motion.div>

              {/* Catalog Floating HUD */}
              <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-[100px] right-[80px] z-30"
              >
                  <button 
                    style={{ padding: '24px 32px' }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] flex items-center gap-[24px] hover:bg-white/20 transition-all"
                  >
                      <div className="text-left">
                          <span className="block text-[10px] uppercase text-zinc-300 tracking-widest mb-[4px] font-bold">Portfolio</span>
                          <span className="block text-[16px] font-bold text-white tracking-tight">Download Catalog</span>
                      </div>
                      <div className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center text-black">
                          <ArrowDownRight size={20} />
                      </div>
                  </button>
              </motion.div>
          </div>
      </ScalingWrapper>

      {/* Bottom Rail Overlay - Stays at bottom of section */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-30" />
    </section>
  );
}
