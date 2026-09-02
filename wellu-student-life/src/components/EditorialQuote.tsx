import React from 'react';
import { Sparkle } from './Sparkle';
import { ScallopWaveDivider } from './ScallopWaveDivider';

export const EditorialQuote: React.FC = () => {
  return (
    <section className="bg-[#FAFBFD] relative overflow-hidden">
      
      {/* Top Scallop Wave Ribbon */}
      <ScallopWaveDivider color="#DCFCE7" bgColor="#FAFBFD" direction="down" />

      <div className="py-20 sm:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Background Engineering Grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #CBD5E1 1px, transparent 1px),
              linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* Floating Accent Sparkles */}
          <Sparkle size={22} className="top-0 left-[8%]" color="#4ADE80" delay={0.3} withDot={true} />
          <Sparkle size={20} className="bottom-0 right-[10%]" color="#F472B6" delay={0.8} withDot={true} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[12px] font-black tracking-wider uppercase mb-8 shadow-xs -rotate-1">
            <span>✦ THE GROOVE PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-[36px] sm:text-[52px] md:text-[62px] font-black tracking-[-0.04em] text-[#0F172A] leading-[1.08]">
            "Health isn't about 4:00 AM ice baths. <br />
            It’s about finding the{' '}
            <span className="relative inline-block px-4 py-1 my-1 rounded-full bg-[#FB923C] text-white font-black text-[32px] sm:text-[46px] md:text-[54px] -rotate-2 shadow-sm border border-orange-400">
              GROOVE
            </span>{' '}
            you actually look forward to."
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 text-[14.5px] font-semibold">
            <span className="w-8 h-[2px] bg-slate-300 rounded-full" />
            <span>Designed in California & Berlin • 48,000+ Active Members</span>
            <span className="w-8 h-[2px] bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>

      {/* Bottom Scallop Wave Ribbon */}
      <ScallopWaveDivider color="#DCFCE7" bgColor="#FAFBFD" direction="up" />
    </section>
  );
};
