'use client';

import { Menu, Search, Heart, Lock } from 'lucide-react';
import ScalingWrapper from '../ScalingWrapper';

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-[100] pointer-events-none">
        <ScalingWrapper height={160}>
            <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[160px] pointer-events-none text-white">
                <div className="absolute top-[48px] left-[80px] right-[80px] h-[64px] flex items-center justify-between pointer-events-auto">
                    
                    {/* Logo Mark - Using mix-blend-difference for visibility on both light/dark */}
                    <div className="flex flex-col min-w-[200px] mix-blend-difference">
                        <span className="text-[32px] font-display tracking-wider uppercase font-bold leading-none text-white">Lenxo</span>
                        <span className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-80 pl-[2px] text-zinc-300">Real Estate</span>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-[48px]">
                        
                        <button 
                            style={{ padding: '12px 24px' }}
                            className="flex items-center gap-[12px] group rounded-full hover:bg-white/10 transition-colors mix-blend-difference"
                        >
                            <Search size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="text-[12px] font-sans uppercase tracking-widest font-medium">Search</span>
                        </button>

                        <div className="flex items-center gap-[24px]">
                            <button 
                                style={{ padding: '12px' }}
                                className="hover:opacity-70 transition-opacity rounded-full hover:bg-white/10 mix-blend-difference"
                            >
                                <Heart size={22} strokeWidth={1.5} />
                            </button>

                            <button 
                                style={{ padding: '12px' }}
                                className="hover:opacity-70 transition-opacity rounded-full hover:bg-white/10 mix-blend-difference"
                            >
                                <Lock size={22} strokeWidth={1.5} />
                            </button>
                            
                            <button 
                                style={{ padding: '16px 36px' }}
                                className="
                                    backdrop-blur-md border border-white/20 rounded-full flex items-center gap-[16px] 
                                    transition-all duration-300 ml-[8px] group
                                    bg-white/10 hover:bg-white/20
                                "
                            >
                                <span className="text-[12px] font-sans uppercase tracking-widest font-medium group-hover:tracking-[0.2em] transition-all">Menu</span>
                                <Menu size={22} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </ScalingWrapper>
    </div>
  );
}
