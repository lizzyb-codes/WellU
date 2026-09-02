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
            
            {/* Phone 1: Left Phone (Blanked) */}
            <div className="hidden md:block relative w-full max-w-[250px] mx-auto aspect-[9/18.5]">
              {/* Bottom fade mask to blend into peach section */}
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                }}
              >
                {/* Phone chassis: rounded top ONLY, no bottom, no bottom bezel */}
                <div
                  className="relative w-full h-full
                                  rounded-t-[38px] rounded-b-none
                                  p-[7px] pb-0
                                  bg-slate-900
                                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                  border border-b-0 border-slate-700/60"
                >
                  <div className="w-full h-full rounded-t-[32px] rounded-b-none bg-[#FAFBFD] p-3.5 pt-3 flex flex-col justify-between text-slate-800 overflow-hidden">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <div className="w-8 h-2.5 bg-slate-300 rounded-full" />
                        <div className="w-14 h-3.5 bg-black rounded-full" />
                      </div>
                      <div className="w-24 h-3 bg-slate-300 rounded-full" />
                      <div className="w-32 h-2 bg-slate-200 rounded-full" />

                      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs space-y-2">
                        <div className="w-20 h-2 bg-slate-200 rounded-full" />
                        <div className="h-16 w-full">
                          <svg className="w-full h-full" viewBox="0 0 140 50" fill="none">
                            <path d="M 10,34 L 35,22 L 60,18 L 85,22 L 110,16 L 130,24" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="60" cy="18" r="2.5" fill="#16A34A" />
                            <circle cx="110" cy="16" r="2" fill="#22C55E" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full h-6 bg-rose-50 rounded-lg border border-rose-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2: Center Hero Phone (Elevated & Blanked) */}
            <div className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto aspect-[9/18.5] z-20">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 94%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 94%, transparent 100%)',
                }}
              >
                <div
                  className="relative w-full h-full
                                  rounded-t-[44px] rounded-b-none
                                  p-[10px] pb-0
                                  bg-slate-950
                                  shadow-[0_35px_80px_rgba(0,0,0,0.38)]
                                  border border-b-0 border-slate-800/60"
                >
                  <div className="w-full h-full rounded-t-[36px] rounded-b-none bg-[#FAFBFD] p-4 pt-3.5 flex flex-col justify-between text-slate-800 overflow-hidden">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <div className="w-8 h-2.5 bg-slate-300 rounded-full" />
                        <div className="w-18 h-4 bg-black rounded-full" />
                        <div className="w-10 h-3 bg-emerald-100 rounded-full" />
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-200 border border-emerald-400" />
                        <div className="space-y-1">
                          <div className="w-16 h-2 bg-slate-200 rounded-full" />
                          <div className="w-28 h-3 bg-slate-300 rounded-full" />
                        </div>
                      </div>

                      <div className="w-48 h-2 bg-slate-200 rounded-full" />

                      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs space-y-2">
                        <div className="flex justify-between">
                          <div className="w-4 h-1.5 bg-slate-200 rounded-full" />
                          <div className="w-4 h-1.5 bg-slate-200 rounded-full" />
                          <div className="w-4 h-1.5 bg-slate-200 rounded-full" />
                          <div className="w-4 h-1.5 bg-slate-200 rounded-full" />
                          <div className="w-4 h-1.5 bg-slate-200 rounded-full" />
                        </div>
                        <div className="h-16 w-full relative">
                          <svg className="w-full h-full" viewBox="0 0 160 40" fill="none">
                            <path d="M 10,30 L 35,24 L 60,18 L 85,8 L 110,18 L 135,12 L 150,22" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="85" cy="8" r="3" fill="#16A34A" />
                          </svg>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="h-6 rounded-lg bg-rose-50" />
                        <div className="h-6 rounded-lg bg-amber-50" />
                        <div className="h-6 rounded-lg bg-emerald-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 3: Right Phone (Blanked) */}
            <div className="hidden md:block relative w-full max-w-[250px] mx-auto aspect-[9/18.5]">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 80%, #000 92%, transparent 100%)',
                }}
              >
                <div
                  className="relative w-full h-full
                                  rounded-t-[38px] rounded-b-none
                                  p-[7px] pb-0
                                  bg-slate-900
                                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                  border border-b-0 border-slate-700/60"
                >
                  <div className="w-full h-full rounded-t-[32px] rounded-b-none bg-[#FAFBFD] p-3.5 pt-3 flex flex-col justify-between text-slate-800 overflow-hidden">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <div className="w-8 h-2.5 bg-slate-300 rounded-full" />
                        <div className="w-14 h-3.5 bg-black rounded-full" />
                      </div>
                      <div className="w-24 h-3 bg-slate-300 rounded-full" />
                      <div className="w-32 h-2 bg-slate-200 rounded-full" />

                      <div className="bg-slate-100 rounded-xl p-3 border border-slate-200/80 shadow-2xs h-24 relative overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-2 bg-slate-300 rounded-full z-10" />
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                          <path d="M 0,30 Q 30,50 60,20 T 100,70" stroke="#0EA5E9" strokeWidth="3" fill="none" />
                        </svg>
                      </div>
                      <div className="w-full h-6 bg-sky-50 rounded-lg border border-sky-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
