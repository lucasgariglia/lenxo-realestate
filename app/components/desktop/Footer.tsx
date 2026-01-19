'use client';

import ScalingWrapper from '../ScalingWrapper';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      <ScalingWrapper height={650}>
        <div className="relative w-full h-full">
            {/* Top Border */}
            <div className="absolute top-0 left-[80px] right-[80px] h-[1px] bg-zinc-900" />
            
            {/* 4-Column Header Row */}
            <div className="absolute top-[140px] left-[80px] right-[80px] flex items-end">
                {/* Brand */}
                <div className="w-[360px]">
                    <div className="flex flex-col">
                        <span className="text-[44px] font-display tracking-wider uppercase font-bold leading-none text-white">Lenxo</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-80 pl-[4px] text-zinc-400 font-bold">Real Estate</span>
                    </div>
                </div>
                {/* Contact Header */}
                <div className="w-[360px] pb-[6px]">
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-zinc-300 font-bold">Contact</span>
                </div>
                {/* Social Header */}
                <div className="w-[360px] pb-[6px]">
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-zinc-300 font-bold">Social</span>
                </div>
                {/* Inquiries Header */}
                <div className="w-[360px] pb-[6px]">
                    <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-zinc-300 font-bold pl-[4px]">Inquiries</span>
                </div>
            </div>

            {/* 4-Column Content Row */}
            <div className="absolute top-[280px] left-[80px] right-[80px] flex items-start">
                {/* Mission */}
                <div className="w-[360px]">
                    <p className="text-[15px] font-sans text-zinc-400 leading-relaxed opacity-90 max-w-[280px] m-0">
                        The premier destination for off-market luxury assets in Dubai. 
                        Curated for the world's most discerning investors.
                    </p>
                </div>
                {/* Contact Content */}
                <div className="w-[360px] flex flex-col gap-[24px] text-[15px] text-zinc-400 font-sans">
                    <a href="mailto:concierge@lenxo.ae" className="hover:text-white transition-colors">concierge@lenxo.ae</a>
                    <a href="tel:+9714000000" className="hover:text-white transition-colors">+971 4 000 0000</a>
                </div>
                {/* Social Content */}
                <div className="w-[360px] flex flex-col gap-[24px] text-[15px] text-zinc-400 font-sans">
                    <a href="#" className="hover:text-white transition-colors italic font-display text-[18px]">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors italic font-display text-[18px]">LinkedIn</a>
                </div>
                {/* Inquiries Content */}
                <div className="w-[360px]">
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Private Email" 
                            style={{ padding: '22px 140px 22px 32px' }}
                            className="w-full bg-white/5 border border-white/10 rounded-full text-[14px] font-sans text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-zinc-600"
                        />
                        <button 
                            style={{ padding: '14px 32px', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                            className="absolute text-[10px] uppercase tracking-[0.2em] text-black bg-white hover:bg-zinc-200 transition-colors font-bold rounded-full"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-[120px] left-[80px] right-[80px] h-[1px] bg-zinc-900" />

            {/* Legal Rail - Symmetrical and Centered */}
            <div className="absolute bottom-0 left-[80px] right-[80px] h-[120px] flex justify-between items-center">
                <p className="m-0 p-0 text-[11px] text-zinc-500 font-mono tracking-[0.2em] uppercase leading-none">
                    © 2026 Lenxo Estates. All Rights Reserved.
                </p>
                <div className="flex gap-[64px] text-[11px] text-zinc-500 font-mono tracking-[0.2em] uppercase leading-none">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </ScalingWrapper>
    </footer>
  );
}
