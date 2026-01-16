'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MANIFESTO_TEXT = "We believe in the quiet power of space. In a city defined by noise, true luxury is the absence of it. Our curated collection represents not just real estate, but a return to essential living. Where architecture breathes and light dances.";

const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: any }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
};

export default function Manifesto() {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = MANIFESTO_TEXT.split(' ');

  return (
    <section data-theme="light" className="bg-alabaster py-32 md:py-48 px-6 md:px-12 flex justify-center">
      <div className="max-w-4xl text-center">
        <span className="block text-xs font-sans text-zinc-400 uppercase tracking-[0.3em] mb-12">The Philosophy</span>
        
        <p 
            ref={element}
            className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.2] md:leading-[1.1] text-zinc-950 flex flex-wrap justify-center"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16"
        >
             <span className="inline-block w-px h-16 bg-zinc-300"></span>
        </motion.div>
      </div>
    </section>
  );
}
