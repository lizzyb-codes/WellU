import React from 'react';
import { Sparkle } from './Sparkle';
import { AnimatedTechGrid } from './AnimatedTechGrid';

export const YourHealthJourneyCTA: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-28 pb-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#FAFBFD] relative overflow-hidden">
      
      {/* Static Tech Grid with 1 static square */}
      <AnimatedTechGrid 
        highlightColor="orange" 
        className="opacity-70" 
        cells={[
          { col: 14, row: 5, type: 'darken' }
        ]}
      />

      {/* Ambient Gradient Glow Fades */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Giant Warm Peach/Cream Container */}
        <div className="relative w-full rounded-t-[44px] bg-gradient-to-b from-[#FED7AA]/50 via-[#FDBA74]/30 to-[#FED7AA]/40 pt-16 sm:pt-20 px-6 sm:px-12 border-t border-x border-orange-200/80 shadow-[0_20px_50px_rgba(251,146,60,0.15)] overflow-hidden">
          
          {/* Subtle Sparkles */}
          <Sparkle size={22} className="top-8 left-[12%]" color="#FFFFFF" delay={0.2} withDot={true} />
          <Sparkle size={20} className="top-10 right-[14%]" color="#FFFFFF" delay={0.8} withDot={true} />

          {/* Heading & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-[38px] sm:text-[54px] md:text-[60px] font-black tracking-[-0.04em] text-[#0F172A] leading-[1.05]">
              Make student life feel manageable.
            </h2>

            <p className="mt-4 text-slate-700 text-[16px] sm:text-[18px] leading-relaxed font-normal">
              One place for your classes, plans, habits, wellbeing, and the next step in your day.
            </p>

          </div>

          {/* 3 Rising Blanked Phones Mockup Container with clean minimalist UI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end pt-10 px-4 sm:px-8 translate-y-12 sm:translate-y-16">
            
            {/* Phone 1: Left Phone */}
            <div className="hidden md:block relative w-full max-w-[250px] mx-auto aspect-[9/18.5]">
              {/* Bottom fade mask to blend into peach section */}
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                }}
              >
                <img
                  src="/phone-mockup-2.png"
                  alt="Phone mockup"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Phone 2: Center Hero Phone (Elevated) */}
            <div className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto aspect-[9/18.5] z-20">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 94%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 94%, transparent 100%)',
                }}
              >
                <img
                  src="/phone-mockup.png"
                  alt="Phone mockup"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Phone 3: Right Phone */}
            <div className="hidden md:block relative w-full max-w-[250px] mx-auto aspect-[9/18.5]">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                }}
              >
                <img
                  src="/phone-mockup-3.png"
                  alt="Phone mockup"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
