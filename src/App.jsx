import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Search, MapPin, Menu, ArrowRight, Phone, Plus, Shield, Coins, Globe, Users, CheckCircle } from 'lucide-react';

// --- ANIMATION CONSTANTS ---
const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER_CHILDREN = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- IMAGES ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2600&auto=format&fit=crop",
  villa: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2600&auto=format&fit=crop",
  penthouse: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2600&auto=format&fit=crop",
  apartment: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2600&auto=format&fit=crop",
  waterfront: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2600&auto=format&fit=crop",
  golf: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2600&auto=format&fit=crop", 
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop",
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  team2: "https://images.unsplash.com/photo-1573496359-136d4755f324?q=80&w=200&auto=format&fit=crop",
  team3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2600&auto=format&fit=crop" // Abstract map feel
};

// --- COMPONENT: HERO SECTION ---
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row p-4 md:p-8 gap-4 bg-[#F9F9F7] overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-12 pt-20 md:pt-0 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={STAGGER_CHILDREN}>
          <motion.h3 variants={FADE_UP} className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gray-400"></span>
            Building Your Dreams
          </motion.h3>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-8xl font-sans font-medium text-[#1A1A1A] leading-[0.95] mb-8 tracking-tight">
            Real Estate <br />
            <span className="text-gray-300 italic font-serif pr-4">in Dubai:</span> <br />
            Ideal for Living
          </motion.h1>
          
          <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4 mt-8">
             <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group">
              Explore Properties
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </button>
             <div className="flex -space-x-3 items-center">
                <img src={IMAGES.team1} className="w-10 h-10 rounded-full border-2 border-[#F9F9F7]" alt="Agent" />
                <img src={IMAGES.team2} className="w-10 h-10 rounded-full border-2 border-[#F9F9F7]" alt="Agent" />
                <img src={IMAGES.team3} className="w-10 h-10 rounded-full border-2 border-[#F9F9F7]" alt="Agent" />
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold border-2 border-[#F9F9F7]">+4k</div>
             </div>
             <span className="text-sm font-medium text-gray-500 ml-2">Happy Clients</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10% round 40px)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 40px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 relative min-h-[500px]"
      >
        <img 
          src={IMAGES.hero}
          alt="Dubai Burj Al Arab"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Floating Catalog Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-xl p-5 rounded-[24px] flex items-center gap-5 shadow-2xl max-w-xs cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
            <ArrowRight size={20} className="-rotate-45" />
          </div>
          <div className="text-left">
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">New Catalog</p>
             <p className="text-base font-bold text-black leading-tight">Download Project <br/> Presentation PDF</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- COMPONENT: ADVANTAGE GRID (WHY DUBAI?) ---
const AdvantageCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="relative p-10 rounded-[3rem] bg-[#1a1a1a] text-white border border-gray-800 hover:border-gray-600 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-500 group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none transform group-hover:scale-110 duration-700">
       <Icon size={120} strokeWidth={1} />
    </div>
    
    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-inner">
      <Icon size={24} />
    </div>
    
    <h3 className="text-2xl font-medium mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed max-w-[85%] relative z-10">{desc}</p>
    
    <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
        <ArrowUpRight size={14} />
    </div>
  </motion.div>
);

const AdvantageSection = () => {
  return (
    <section className="py-32 px-4 md:px-12 bg-[#000000] text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[150px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-3"
              >
                <span className="w-6 h-[1px] bg-gray-500"></span>
                Explore Our Advantages
              </motion.h3>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight"
              >
                Why Dubai Stands <br /> <span className="text-gray-500 italic font-serif">Unrivalled?</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-sm text-sm leading-relaxed"
            >
              Discover a city where innovation meets tradition, offering a lifestyle of safety, stability, and limitless opportunity.
            </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdvantageCard 
            icon={Users} 
            title="Global Diversity" 
            desc="Join a vibrant community where 90% of the population are global citizens, creating a rich multicultural tapestry." 
            index={0}
          />
          <AdvantageCard 
            icon={Shield} 
            title="World-Class Safety" 
            desc="Experience peace of mind in one of the world's safest cities, consistently top-ranked for security and low crime rates." 
            index={1}
          />
          <AdvantageCard 
            icon={Coins} 
            title="Economic Stability" 
            desc="Invest with confidence. The AED is pegged to the USD, providing a stable financial environment for over two decades." 
            index={2}
          />
          <AdvantageCard 
            icon={Globe} 
            title="Golden Visa" 
            desc="Secure your future with long-term residency options for property investors, starting from AED 750k investments." 
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: PROCESS CIRCLES (SMART OWNERSHIP) ---
const ProcessSection = () => {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium mb-20">Path to Smart Ownership</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
          {/* Step 1 */}
          <div className="w-64 h-64 rounded-full border border-white/20 flex flex-col items-center justify-center p-8 hover:bg-white/5 transition-colors cursor-default">
             <h4 className="text-3xl font-bold mb-2">10%</h4>
             <p className="text-white/60 text-sm">Initial Payment</p>
          </div>
          
          {/* Connector */}
          <div className="hidden md:block w-24 h-[1px] bg-white/20"></div>

          {/* Step 2 (Highlighted) */}
          <div className="w-80 h-80 rounded-full border-2 border-white flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10">
             <h4 className="text-2xl font-bold mb-2">5 Years</h4>
             <p className="text-white/80 text-sm">Installment Plan</p>
             <span className="mt-2 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">0% Overpayment</span>
          </div>

          {/* Connector */}
          <div className="hidden md:block w-24 h-[1px] bg-white/20"></div>

          {/* Step 3 */}
          <div className="w-64 h-64 rounded-full border border-white/20 flex flex-col items-center justify-center p-8 hover:bg-white/5 transition-colors cursor-default">
             <h4 className="text-3xl font-bold mb-2">~15%</h4>
             <p className="text-white/60 text-sm">Rental Income</p>
          </div>
        </div>

        <div className="mt-20">
           <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
             Download Full Guide
           </button>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

// --- COMPONENT: BENTO GRID ---
const PropertyCard = ({ title, type, image, span }) => {
  return (
    <motion.div 
      variants={FADE_UP}
      className={`group relative rounded-[32px] overflow-hidden bg-gray-100 ${span} min-h-[300px] cursor-pointer`}
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

      <div className="absolute top-4 right-4 h-12 w-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg z-20">
        <ArrowUpRight size={20} className="text-black" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-bold tracking-widest opacity-80 uppercase mb-2 block">{type}</span>
        <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-2">{title}</h3>
        <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">Starting from AED 1.2M</p>
      </div>
    </motion.div>
  );
};

const PropertyGrid = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#F9F9F7]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-medium text-[#1A1A1A] max-w-xl leading-[1.1]">
            Discover Your Ideal <br /> Property Type
          </h2>
        </div>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          From waterfront villas to sky-high penthouses, explore our curated selection of Dubai's finest real estate.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[900px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
      >
        <PropertyCard 
          span="md:col-span-1 md:row-span-1"
          title="Luxury Villas"
          type="01"
          image={IMAGES.villa}
        />
        <PropertyCard 
          span="md:col-span-1 md:row-span-2"
          title="Penthouse Suites"
          type="02"
          image={IMAGES.penthouse}
        />
        <PropertyCard 
          span="md:col-span-1 md:row-span-1"
          title="Apartments"
          type="03"
          image={IMAGES.apartment}
        />
        <PropertyCard 
          span="md:col-span-1 md:row-span-1"
          title="Waterfront Homes"
          type="04"
          image={IMAGES.waterfront}
        />
        <PropertyCard 
          span="md:col-span-1 md:row-span-1"
          title="Golf Estates"
          type="05"
          image={IMAGES.golf}
        />
         <PropertyCard 
          span="md:col-span-1 md:row-span-1"
          title="Commercial"
          type="06"
          image={IMAGES.commercial}
        />
      </motion.div>
    </section>
  );
};

// --- COMPONENT: FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 rounded-t-[40px] mt-12 mx-2 md:mx-4 overflow-hidden relative">
       <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src={IMAGES.map} alt="Map" className="w-full h-full object-cover" />
       </div>

       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
           <div>
             <h2 className="text-5xl md:text-7xl font-medium mb-8">Build Your Future <br /> With Us</h2>
             <div className="flex flex-col gap-4 max-w-md">
               <div className="bg-white/10 backdrop-blur-md p-2 pl-6 rounded-full flex justify-between items-center border border-white/10">
                 <input type="email" placeholder="Enter your email" className="bg-transparent outline-none w-full text-white placeholder:text-white/40" />
                 <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                   Subscribe
                 </button>
               </div>
               <p className="text-white/40 text-xs ml-6">Join 12,000+ subscribers for weekly market insights.</p>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-8">
             <div>
               <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Quick Navigation</h4>
               <ul className="space-y-4 text-white/80">
                 <li><a href="#" className="hover:text-white">Home</a></li>
                 <li><a href="#" className="hover:text-white">Properties</a></li>
                 <li><a href="#" className="hover:text-white">Areas</a></li>
                 <li><a href="#" className="hover:text-white">Services</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
               <ul className="space-y-4 text-white/80">
                 <li>+971 4 123 4567</li>
                 <li>hello@monte-estate.ae</li>
                 <li>Downtown Dubai, Blvd Plaza, Tower 1</li>
               </ul>
               <div className="flex gap-4 mt-8">
                 <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Phone size={16} /></div>
                 <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><MapPin size={16} /></div>
               </div>
             </div>
           </div>
         </div>

         <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest gap-4">
           <p>© 2024 Monte Real Estate</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
         </div>
       </div>
    </footer>
  );
};

// --- COMPONENT: FAQ ACCORDION ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left hover:text-gray-600 transition-colors"
      >
        <span className="text-lg font-medium text-[#1A1A1A] pr-8">{question}</span>
        <div className={`flex-shrink-0 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45 bg-black text-white border-black' : 'text-gray-500'}`}>
          <Plus size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 leading-relaxed pr-8 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#F9F9F7] flex flex-col md:flex-row gap-16 max-w-7xl mx-auto">
      <div className="md:w-1/3">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Support</h3>
        <h2 className="text-4xl font-medium text-[#1A1A1A] mb-6">Frequently Asked <br /> Questions</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-8">
          Find answers to common questions about buying, selling, and renting property in Dubai.
        </p>
        <button className="text-black font-bold underline decoration-2 underline-offset-4 hover:text-gray-600">
          Contact Support
        </button>
      </div>
      <div className="md:w-2/3">
        <FAQItem 
          question="Can foreign nationals buy property in Dubai?" 
          answer="Yes, foreign nationals can buy property in Dubai in designated freehold areas. This grants them full ownership rights, including the ability to sell, lease, or occupy the property." 
        />
        <FAQItem 
          question="What are the payment options available?" 
          answer="Most developers offer flexible payment plans, often post-handover. You can also obtain mortgages from local banks if you meet the eligibility criteria." 
        />
        <FAQItem 
          question="Is there a residency visa included?" 
          answer="Investors purchasing property worth AED 750,000 or more may be eligible for a residency visa, subject to current government regulations." 
        />
        <FAQItem 
          question="What is the ROI on Dubai properties?" 
          answer="Dubai offers some of the highest rental yields in the world, typically ranging from 5% to 9% depending on the area and property type." 
        />
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] font-sans text-[#1A1A1A] overflow-x-hidden">
       {/* Navbar */}
       <nav className="flex justify-between items-center p-6 md:p-8 md:px-12 fixed w-full top-0 z-50 mix-blend-difference text-white">
         <div className="flex items-center gap-2">
           <div className="h-8 w-1 bg-white" />
           <span className="font-serif text-xl tracking-widest font-bold">MONTE</span>
         </div>
         <div className="hidden md:flex gap-2">
           <button className="h-12 w-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
             <Search size={18} />
           </button>
           <button className="h-12 w-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
             <Menu size={18} />
           </button>
         </div>
       </nav>

       <Hero />
       {/* Removed MarqueeLogos */}
       <AdvantageSection />
       <PropertyGrid />
       <ProcessSection />
       <FAQSection />
       <Footer />
    </div>
  );
}
