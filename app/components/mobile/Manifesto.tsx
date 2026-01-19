'use client';

import { motion, Variants } from 'framer-motion';

const MANIFESTO_TEXT = "We believe in the quiet power of space. In a city defined by noise, true luxury is the absence of it. Our curated collection represents not just real estate, but a return to essential living.";

const wordVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0,
    transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }
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
    <section className="w-full py-32 px-8 bg-alabaster text-zinc-950">
      <div className="max-w-[340px] mx-auto text-center">
        <span className="block text-[10px] font-sans uppercase tracking-[0.4em] text-zinc-400 font-bold mb-12">
          The Philosophy
        </span>
        <motion.div 
          className="text-2xl font-display leading-[1.6] text-zinc-900 flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariants}
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordVariants}
              className="inline-block mr-[0.3em] mb-[0.1em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-16 flex justify-center">
          <div className="w-12 h-[1px] bg-zinc-200"></div>
        </div>
      </div>
    </section>
  );
}