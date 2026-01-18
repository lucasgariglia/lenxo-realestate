'use client';

import { motion } from 'framer-motion';

const MANIFESTO_TEXT = "We believe in the quiet power of space. In a city defined by noise, true luxury is the absence of it. Our curated collection represents not just real estate, but a return to essential living. Where architecture breathes and light dances.";

const wordVariants = {
  hidden: { opacity: 0.1, filter: 'blur(10px)', y: 20 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.2, 0.65, 0.3, 0.9] // Sophisticated Soft Ease
    } 
  }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // Deliberate reading pace
      delayChildren: 0.2
    }
  }
};

export default function Manifesto() {
  const words = MANIFESTO_TEXT.split(' ');

  return (
    <section 
        data-theme="light" 
        className="min-h-[70vh] bg-alabaster py-32 md:py-48 px-6 md:px-12 flex justify-center items-center border-b border-zinc-200"
    >
      <div className="max-w-4xl text-center">
        <span className="block text-xs font-sans text-zinc-600 uppercase tracking-[0.3em] mb-12 font-medium">
          The Philosophy
        </span>
        
        <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-15%" }} // Replays when re-entering
            variants={containerVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.15] md:leading-[1.1] text-zinc-950 flex flex-wrap justify-center"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordVariants}
              className="mr-[0.25em] inline-block will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9], delay: 1 }}
            className="mt-16 mx-auto w-px h-16 bg-zinc-300 origin-top"
        />
      </div>
    </section>
  );
}
