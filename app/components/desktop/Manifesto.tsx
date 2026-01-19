'use client';

import { motion, Variants } from 'framer-motion';
import ScalingWrapper from '../ScalingWrapper';

const MANIFESTO_TEXT = "We believe in the quiet power of space. In a city defined by noise, true luxury is the absence of it. Our curated collection represents not just real estate, but a return to essential living. Where architecture breathes and light dances.";

const wordVariants: Variants = {
  hidden: { opacity: 0.1, filter: 'blur(8px)', y: '20px' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.2, 0.65, 0.3, 0.9] 
    } 
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

export default function Manifesto() {
  const words = MANIFESTO_TEXT.split(' ');

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      <ScalingWrapper height={850}>
        <div className="relative w-full h-full">
            {/* HUD Label */}
            <span className="absolute top-[80px] left-1/2 -translate-x-1/2 text-[12px] font-sans text-zinc-600 uppercase tracking-[0.4em] font-bold">
                The Philosophy
            </span>

            {/* Centered Manifesto Body */}
            <div className="absolute top-[200px] left-[150px] right-[150px] text-center">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-[60px] font-display text-zinc-900 leading-[1.4] flex flex-wrap justify-center"
                >
                  {words.map((word, i) => (
                    <motion.span 
                      key={i} 
                      variants={wordVariants}
                      className="inline-block mr-[0.3em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
            </div>

            {/* Decorative Line - Increased spacing from text */}
            <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9], delay: 1 }}
                className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[1px] h-[100px] bg-zinc-300 origin-top"
            />
        </div>
      </ScalingWrapper>
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-200" />
    </section>
  );
}
