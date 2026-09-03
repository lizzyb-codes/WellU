import React, { useState } from 'react';
import { Sparkle } from './Sparkle';
import { Check, Heart, Droplets, Moon, Sun, Flame, Zap } from 'lucide-react';

export const ScreensShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'morning' | 'flow' | 'night'>('flow');

  return (
    <section id="product" className="py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden bg-white border-t border-slate-200/60">
      
      {/* Radiant Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#E0F2FE]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF08A] border border-[#FDE047] text-[#854D0E] text-[12px] font-black tracking-wide uppercase mb-5 shadow-xs rotate-1">
            <span>✦ EXPERIENCE THE GROOVE</span>
          </div>
          
          <h2 className="font-display text-[40px] sm:text-[52px] md:text-[60px] font-black tracking-[-0.04em] text-[#0F172A] leading-[1.05]">
            Every screen feels like <br />
            a tactile{' '}
            <span className="relative inline-block px-4 py-1 my-1 rounded-full bg-[#F472B6] text-white font-black text-[30px] sm:text-[42px] md:text-[46px] -rotate-2 shadow-sm border border-pink-400">
              WORK OF ART
            </span>
          </h2>
          
          <p className="mt-5 text-neutral-600 text-[17px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto font-normal">
            No dense medical jargon or sterile lists. Designed with tactile haptics and rhythmic micro-moments.
          </p>
        </div>

        {/* 3 Physical Grooved Scallop Phone Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 items-end max-w-6xl mx-auto">
          
          {/* Phone 1: Mint Scalloped Device Frame (07:00 AM) */}
          <div className="flex flex-col items-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#A7F3D0] text-emerald-950 font-black text-[12px] uppercase tracking-wider mb-5 -rotate-2 border border-emerald-300 shadow-xs">
              07:00 AM • MORNING SYNC
            </span>

            {/* Mint Scalloped Groove Backdrop */}
            <div className="relative w-full max-w-[320px] aspect-[320/460] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_16px_35px_rgba(52,211,153,0.25)]" viewBox="0 0 320 460" fill="none">
                <defs>
                  <linearGradient id="scallopMintPhone" x1="160" y1="0" x2="160" y2="460" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D1FAE5" />
                    <stop offset="100%" stopColor="#A7F3D0" />
                  </linearGradient>
                  <clipPath id="mintPhoneClip">
                    <path d="M 0,30 C 10,-6 54,-6 64,30 C 74,-6 118,-6 128,30 C 138,-6 182,-6 192,30 C 202,-6 246,-6 256,30 C 266,-6 310,-6 320,30 L 320,430 C 310,466 266,466 256,430 C 246,466 202,466 192,430 C 182,466 138,466 128,430 C 118,466 74,466 64,430 C 54,466 10,466 0,430 Z" />
                  </clipPath>
                </defs>
                <path d="M 0,30 C 10,-6 54,-6 64,30 C 74,-6 118,-6 128,30 C 138,-6 182,-6 192,30 C 202,-6 246,-6 256,30 C 266,-6 310,-6 320,30 L 320,430 C 310,466 266,466 256,430 C 246,466 202,466 192,430 C 182,466 138,466 128,430 C 118,466 74,466 64,430 C 54,466 10,466 0,430 Z" fill="url(#scallopMintPhone)" />
              </svg>

              <Sparkle size={18} className="top-4 right-4" color="#FFFFFF" delay={0.2} withDot={true} />
              <Sparkle size={16} className="bottom-8 left-4" color="#FFFFFF" delay={0.8} />

              {/* Clipped Phone sitting inside Scalloped Groove */}
              <div 
                className="relative z-10 w-full h-full flex items-center justify-center"
                style={{ clipPath: 'url(#mintPhoneClip)', WebkitClipPath: 'url(#mintPhoneClip)' }}
              >
                <div className="w-[250px] bg-slate-950 rounded-[32px] p-2.5 border-[3px] border-slate-800 shadow-2xl transform translate-y-6">
                  <div className="bg-white rounded-[26px] p-3.5 text-slate-900 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-black text-slate-400">
                      <span>9:41</span>
                      <span className="w-10 h-3 bg-slate-900 rounded-full" />
                      <span>100%</span>
                    </div>

                    <div>
                      <div className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Morning Protocol</div>
                      <div className="text-[15px] font-black font-display text-slate-900">Rise & Circadian</div>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between font-bold text-slate-800">
                        <span>☀️ 15m Morning Sun</span>
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      </div>
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between font-bold text-slate-800">
                        <span>💧 500ml Electrolytes</span>
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-500 font-medium">
                        <span>🧘 5m Breath Reset</span>
                        <span className="w-3 h-3 rounded-full border-2 border-slate-300" />
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-900 text-[#4ADE80] text-[10.5px] font-black text-center">
                      2/3 Anchors Completed 🔥
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2: Rose Scalloped Device Frame (01:15 PM - Hero Centerpiece) */}
          <div className="flex flex-col items-center md:-translate-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F472B6] text-white font-black text-[12px] uppercase tracking-wider mb-5 rotate-2 border border-pink-300 shadow-md">
              ✦ REAL-TIME BIOMETRICS
            </span>

            {/* Rose Scalloped Groove Backdrop */}
            <div className="relative w-full max-w-[340px] aspect-[340/490] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_20px_45px_rgba(244,114,182,0.3)]" viewBox="0 0 340 490" fill="none">
                <defs>
                  <linearGradient id="scallopRosePhone" x1="170" y1="0" x2="170" y2="490" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FCE7F3" />
                    <stop offset="40%" stopColor="#FBCFE8" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                  <clipPath id="rosePhoneClip">
                    <path d="M 0,32 C 12,-6 56,-6 68,32 C 80,-6 124,-6 136,32 C 148,-6 192,-6 204,32 C 216,-6 260,-6 272,32 C 284,-6 328,-6 340,32 L 340,458 C 328,496 284,496 272,458 C 260,496 216,496 204,458 C 192,496 148,496 136,458 C 124,496 80,496 68,458 C 56,496 12,496 0,458 Z" />
                  </clipPath>
                </defs>
                <path d="M 0,32 C 12,-6 56,-6 68,32 C 80,-6 124,-6 136,32 C 148,-6 192,-6 204,32 C 216,-6 260,-6 272,32 C 284,-6 328,-6 340,32 L 340,458 C 328,496 284,496 272,458 C 260,496 216,496 204,458 C 192,496 148,496 136,458 C 124,496 80,496 68,458 C 56,496 12,496 0,458 Z" fill="url(#scallopRosePhone)" />
              </svg>

              <Sparkle size={20} className="top-4 left-4" color="#FFFFFF" delay={0.4} withDot={true} />
              <Sparkle size={18} className="bottom-10 right-4" color="#FFFFFF" delay={1.1} withDot={true} />

              {/* Clipped Centerpiece Phone */}
              <div 
                className="relative z-10 w-full h-full flex items-center justify-center"
                style={{ clipPath: 'url(#rosePhoneClip)', WebkitClipPath: 'url(#rosePhoneClip)' }}
              >
                <div className="w-[270px] bg-slate-950 rounded-[34px] p-2.5 border-[3px] border-slate-800 shadow-2xl transform translate-y-7">
                  <div className="bg-white rounded-[28px] p-4 text-slate-900 space-y-3">
                    <div className="flex items-center justify-between text-[10.5px] font-black text-slate-400">
                      <span>1:15 PM</span>
                      <span className="w-12 h-3.5 bg-slate-900 rounded-full" />
                      <span>98%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10.5px] font-black uppercase text-pink-600 tracking-wider">Strain & Fuel</div>
                        <div className="text-[16.5px] font-black font-display text-slate-900">Afternoon Peak</div>
                      </div>
                      <div className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-black text-[10.5px]">
                        OPTIMAL
                      </div>
                    </div>

                    {/* Water gauge */}
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 border border-pink-200 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-500 font-black uppercase">Hydration Target</div>
                        <div className="text-[19px] font-black text-slate-900 font-display">1.8 / 2.5 L</div>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center font-black text-[13px] shadow-sm">
                        72%
                      </div>
                    </div>

                    <img src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=600&q=80" alt="A restorative wellness moment" className="h-16 w-full rounded-xl object-cover" referrerPolicy="no-referrer" />

                    <div className="p-2.5 rounded-xl bg-slate-900 text-white text-[11.5px] flex items-center justify-between font-black">
                      <span>Resting Pulse: 52 bpm</span>
                      <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3: Lavender Scalloped Device Frame (09:30 PM) */}
          <div className="flex flex-col items-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#DDD6FE] text-purple-950 font-black text-[12px] uppercase tracking-wider mb-5 -rotate-1 border border-purple-300 shadow-xs">
              09:30 PM • MELATONIN PREP
            </span>

            {/* Lavender Scalloped Groove Backdrop */}
            <div className="relative w-full max-w-[320px] aspect-[320/460] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_16px_35px_rgba(167,139,250,0.25)]" viewBox="0 0 320 460" fill="none">
                <defs>
                  <linearGradient id="scallopLavenderPhone" x1="160" y1="0" x2="160" y2="460" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EDE9FE" />
                    <stop offset="100%" stopColor="#DDD6FE" />
                  </linearGradient>
                  <clipPath id="lavenderPhoneClip">
                    <path d="M 0,30 C 10,-6 54,-6 64,30 C 74,-6 118,-6 128,30 C 138,-6 182,-6 192,30 C 202,-6 246,-6 256,30 C 266,-6 310,-6 320,30 L 320,430 C 310,466 266,466 256,430 C 246,466 202,466 192,430 C 182,466 138,466 128,430 C 118,466 74,466 64,430 C 54,466 10,466 0,430 Z" />
                  </clipPath>
                </defs>
                <path d="M 0,30 C 10,-6 54,-6 64,30 C 74,-6 118,-6 128,30 C 138,-6 182,-6 192,30 C 202,-6 246,-6 256,30 C 266,-6 310,-6 320,30 L 320,430 C 310,466 266,466 256,430 C 246,466 202,466 192,430 C 182,466 138,466 128,430 C 118,466 74,466 64,430 C 54,466 10,466 0,430 Z" fill="url(#scallopLavenderPhone)" />
              </svg>

              <Sparkle size={18} className="top-4 right-4" color="#FFFFFF" delay={0.3} withDot={true} />
              <Sparkle size={16} className="bottom-8 left-4" color="#FFFFFF" delay={0.9} />

              {/* Clipped Phone */}
              <div 
                className="relative z-10 w-full h-full flex items-center justify-center"
                style={{ clipPath: 'url(#lavenderPhoneClip)', WebkitClipPath: 'url(#lavenderPhoneClip)' }}
              >
                <div className="w-[250px] bg-slate-950 rounded-[32px] p-2.5 border-[3px] border-slate-800 shadow-2xl transform translate-y-6">
                  <div className="bg-slate-900 rounded-[26px] p-3.5 text-white space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-black text-slate-400">
                      <span>9:41</span>
                      <span className="w-10 h-3 bg-slate-950 rounded-full" />
                      <span>88%</span>
                    </div>

                    <div>
                      <div className="text-[10px] font-black uppercase text-purple-400 tracking-wider">Night Protocol</div>
                      <div className="text-[15px] font-black font-display text-white">Deep Sleep Wind-Down</div>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded-xl bg-purple-950/70 border border-purple-800/80 flex items-center justify-between text-purple-200 font-semibold">
                        <span>📵 Screen Off 60m</span>
                        <Check className="w-3.5 h-3.5 text-purple-400 stroke-[3]" />
                      </div>
                      <div className="p-2 rounded-xl bg-purple-950/70 border border-purple-800/80 flex items-center justify-between text-purple-200 font-semibold">
                        <span>🍵 Magnesium Glycinate</span>
                        <Check className="w-3.5 h-3.5 text-purple-400 stroke-[3]" />
                      </div>
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between text-slate-400 font-medium">
                        <span>❄️ Room at 66°F</span>
                        <Moon className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                    </div>

                    <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80" alt="A calm evening reflection" className="h-14 w-full rounded-xl object-cover opacity-90" referrerPolicy="no-referrer" />

                    <div className="p-2 rounded-xl bg-purple-600 text-white text-[10.5px] font-black text-center">
                      Sleep Readiness: 96% 🌙
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
