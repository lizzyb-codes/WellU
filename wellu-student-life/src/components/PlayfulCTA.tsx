import React from 'react';
import { Sparkle } from './Sparkle';

export const PlayfulCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 bg-[#FAFBFD] relative overflow-hidden">
      
      {/* Background Subtle Tech Graph Grid */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Giant Scalloped Card Container */}
        <div className="relative w-full rounded-[40px] p-10 sm:p-16 lg:p-20 text-center flex flex-col items-center justify-center overflow-hidden shadow-[0_24px_50px_rgba(34,197,94,0.2)]">
          
          {/* SVG Scalloped Background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 480" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="ctaScallopGrad" x1="450" y1="0" x2="450" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DCFCE7" />
                <stop offset="30%" stopColor="#C4F7D7" />
                <stop offset="70%" stopColor="#D4F8E2" />
                <stop offset="100%" stopColor="#E2FDEB" />
              </linearGradient>
            </defs>
            <path
              d="
                M 0,40
                Q 75,-16 150,40
                Q 225,-16 300,40
                Q 375,-16 450,40
                Q 525,-16 600,40
                Q 675,-16 750,40
                Q 825,-16 900,40
                L 900,440
                Q 825,496 750,440
                Q 675,496 600,440
                Q 525,496 450,440
                Q 375,496 300,440
                Q 225,496 150,440
                Q 75,496 0,440
                Z
              "
              fill="url(#ctaScallopGrad)"
            />
          </svg>

          {/* Floating Sparkles matching Hero */}
          <Sparkle size={24} className="top-8 left-[10%]" color="#FFFFFF" delay={0.2} withDot={true} />
          <Sparkle size={22} className="top-10 right-[12%]" color="#FFFFFF" delay={0.7} withDot={true} />
          <Sparkle size={20} className="bottom-10 left-[14%]" color="#FFFFFF" delay={1.2} />
          <Sparkle size={24} className="bottom-8 right-[10%]" color="#FFFFFF" delay={0.9} withDot={true} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-950 text-[12px] font-black tracking-wide uppercase mb-6 shadow-xs -rotate-2 border border-emerald-300">
              <span>✦ START YOUR GROOVE TODAY</span>
            </div>

            <h2 className="font-display text-[40px] sm:text-[56px] md:text-[64px] font-black tracking-[-0.04em] text-[#0F172A] leading-[1.03]">
              Your future self will thank you for getting in the{' '}
              <span className="relative inline-block px-4 py-1 my-1 rounded-full bg-[#4ADE80] text-black font-black text-[32px] sm:text-[48px] md:text-[56px] -rotate-2 shadow-sm border border-emerald-400">
                GROOVE
              </span>
            </h2>

            <p className="mt-5 text-slate-800 text-[17px] sm:text-[19px] leading-relaxed font-medium">
              Join 48,000+ members building frictionless, lifelong health routines. Free on iOS & Android.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
