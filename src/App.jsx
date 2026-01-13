import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { LucideMenu, LucideSearch, LucideArrowRight, LucideMapPin, LucideBed, LucideBath, LucideMaximize, LucideArrowUpRight } from 'lucide-react';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 text-white mix-blend-difference">
      <div className="text-2xl font-serif tracking-tighter">LUXE.ESTATE</div>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
        {['Buy', 'Rent', 'Sell', 'Journal'].map((item) => (
          <a key={item} href="#" className="relative group overflow-hidden">
            <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-in-out">{item}</span>
            <span className="absolute top-full left-0 block translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-in-out">{item}</span>
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <LucideSearch className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
        <div className="group cursor-pointer flex flex-col gap-1.5 w-8 items-end">
            <span className="w-8 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
            <span className="w-5 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></span>
        </div>
      </div>
    </nav>
  );
};

const MagneticButton = ({ children, className = "" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.1, y: y * 0.1 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.button>
    );
};


const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <header className="relative w-full h-[120vh] overflow-hidden bg-obsidian text-alabaster">
      <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
        >
            <source src="https://cdn.dribbble.com/userupload/13861946/file/original-34b3b1bf3a8a8b7ce8c3d28e40d9f03f.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />

      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-32 left-6 md:left-12 w-full max-w-[90vw] md:max-w-[80vw] z-10"
      >
        <div className="overflow-hidden">
            <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[12vw] md:text-[8vw] font-serif leading-[0.85] tracking-tight mb-8"
            >
            Beyond <br/> <span className="italic font-light ml-[10vw]">Expectation</span>
            </motion.h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end border-t border-white/20 pt-8 mt-12 w-full md:w-3/4">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="text-lg md:text-xl font-light max-w-md text-zinc-300"
          >
            Curating the world's most exceptional properties. Where architectural mastery meets unrivaled living.
          </motion.p>
          
          <MagneticButton className="group flex items-center gap-4 text-sm uppercase tracking-widest hover:text-white/80 transition-colors px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
             Explore Collection
             <LucideArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>
      </motion.div>
    </header>
  );
};

const PropertyCard = ({ property, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-[85vw] md:w-[35vw] flex-shrink-0 cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden mb-6 relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs text-white uppercase tracking-widest border border-white/20 rounded-full">
          {property.status}
        </div>
        
        {/* HUD Trigger */}
        <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
             <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                <LucideArrowUpRight className="w-5 h-5" />
             </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start border-b border-black/10 pb-6 group-hover:border-black/30 transition-colors">
        <div>
          <h3 className="text-3xl font-serif mb-2 group-hover:italic transition-all duration-300">{property.title}</h3>
          <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4 font-light">
            <LucideMapPin className="w-4 h-4" />
            {property.location}
          </div>
          <div className="flex gap-4 text-xs text-zinc-400 uppercase tracking-wider">
            <span className="flex items-center gap-1"><LucideBed className="w-3 h-3" /> {property.beds}</span>
            <span className="flex items-center gap-1"><LucideBath className="w-3 h-3" /> {property.baths}</span>
            <span className="flex items-center gap-1"><LucideMaximize className="w-3 h-3" /> {property.sqft}</span>
          </div>
        </div>
        <div className="text-xl font-light tracking-wide font-serif">
          {property.price}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCollection = () => {
    // Mock Data - In real app, fetch from Supabase
    // Using high-res Unsplash images for editorial feel
    const properties = [
        {
        id: 1,
        title: "The Glass House",
        location: "Beverly Hills, CA",
        price: "$12.5M",
        image: "https://images.unsplash.com/photo-1600596542815-27b88e54e60d?q=80&w=2600&auto=format&fit=crop",
        beds: 5,
        baths: 6,
        sqft: "6,500",
        status: "For Sale"
        },
        {
        id: 2,
        title: "Coastal Zenith",
        location: "Malibu, CA",
        price: "$28M",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
        beds: 6,
        baths: 8,
        sqft: "8,200",
        status: "Exclusive"
        },
        {
        id: 3,
        title: "Urban Sanctuary",
        location: "Tribeca, NY",
        price: "$8.9M",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop",
        beds: 3,
        baths: 3.5,
        sqft: "3,100",
        status: "New"
        },
        {
        id: 4,
        title: "Alpine Retreat",
        location: "Aspen, CO",
        price: "$15.2M",
        image: "https://images.unsplash.com/photo-1513584685908-2274fc0a0604?q=80&w=2600&auto=format&fit=crop",
        beds: 5,
        baths: 5,
        sqft: "5,400",
        status: "Sold"
        }
    ];

  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: carouselRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Horizontal scroll effect on vertical scroll if desired, but here we use native overflow for magnetic snap

  return (
    <section className="py-24 md:py-32 bg-alabaster overflow-hidden">
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-4">Curated Selection</span>
          <h2 className="text-5xl md:text-7xl font-serif text-obsidian leading-none">Featured <br/> Residences</h2>
        </div>
        <MagneticButton className="hidden md:flex items-center gap-3 text-sm uppercase tracking-widest border border-black/10 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
          View All <LucideArrowRight className="w-4 h-4" />
        </MagneticButton>
      </div>

      <div ref={carouselRef} className="overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-12 snap-x snap-mandatory">
        <motion.div 
            className="flex gap-6 md:gap-12 w-max"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }} // Simple constraint example
        >
          {properties.map((property, index) => (
            <div key={property.id} className="snap-center">
                <PropertyCard property={property} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-obsidian text-alabaster py-24 px-6 md:px-12 border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5">
          <h2 className="text-4xl font-serif mb-6 tracking-tighter">LUXE.ESTATE</h2>
          <p className="text-zinc-400 max-w-sm mb-8 font-light text-lg">
            Redefining luxury real estate through a lens of architectural excellence and curated living experiences.
          </p>
          <div className="flex gap-4 text-zinc-500">
             {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                 <div key={social} className="px-4 py-2 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-xs uppercase tracking-widest">
                     {social}
                 </div>
             ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-light text-zinc-300">
            {['Buy Properties', 'Sell Your Home', 'New Developments', 'Market Reports'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-light text-zinc-300">
             {['About Us', 'Agents', 'Careers', 'Contact'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
           <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Newsletter</h4>
           <div className="flex flex-col gap-4">
             <input type="email" placeholder="Email Address" className="bg-transparent border-b border-zinc-700 pb-2 outline-none text-white w-full placeholder-zinc-600 font-light focus:border-white transition-colors" />
             <button className="self-start text-xs uppercase tracking-widest hover:text-zinc-300 border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">Subscribe</button>
           </div>
        </div>
      </div>
      <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-xs text-zinc-600 uppercase tracking-wider items-center gap-6">
        <div>© 2024 Luxe Estate. All Rights Reserved.</div>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-zinc-400">Privacy Policy</span>
          <span className="cursor-pointer hover:text-zinc-400">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans antialiased selection:bg-zinc-900 selection:text-white bg-alabaster">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Footer />
    </div>
  );
};

export default App;
