import React from 'react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[270px] md:w-[290px] aspect-[9/18.5] select-none">
      {/* Side physical buttons */}
      <div className="absolute -left-[2px] top-[90px] w-[3px] h-[22px] bg-[#94A3B8] rounded-l-sm" />
      <div className="absolute -left-[2px] top-[125px] w-[3px] h-[38px] bg-[#94A3B8] rounded-l-sm" />
      <div className="absolute -left-[2px] top-[175px] w-[3px] h-[38px] bg-[#94A3B8] rounded-l-sm" />
      <div className="absolute -right-[2px] top-[140px] w-[3px] h-[58px] bg-[#94A3B8] rounded-r-sm" />

      {/* Bottom-fade mask so phone fades cleanly into section background */}
      <div
        className="relative w-full h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, #000 92%, transparent 100%)',
        }}
      >
        {/* Phone Outer Chassis (REMOVED BOTTOM BEZEL + bottom chassis open-ended */}
        <div
          className="relative w-full h-full
                          rounded-t-[44px] rounded-b-none
                          p-[8px] pb-0
                          bg-gradient-to-b from-[#334155] via-[#1E293B] to-[#0F172A]
                          shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)]
                          border border-b-0 border-slate-700/60"
        >

          {/* Inner Bezel — no bottom border */}
          <div className="relative w-full h-full
                          rounded-t-[38px] rounded-b-none
                          bg-black
                          p-[2px] pb-0
                          overflow-hidden">

            {/* Glass Screen Display */}
            <div
              className="relative w-full h-full
                              rounded-t-[36px] rounded-b-none
                              bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-[#F1F5F9]
                              overflow-hidden flex flex-col justify-between">

              {/* Diagonal gloss */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 z-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%)',
                }}
              />

              {/* Ambient glow */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-300/25 rounded-full blur-2xl pointer-events-none" />

              {/* Status Bar */}
              <div className="relative z-30 flex items-center justify-between px-6 pt-3.5 text-slate-800">
                <div className="w-8 h-2.5 bg-slate-300/80 rounded-full" />

                {/* Dynamic Island */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[76px] h-[22px] bg-black rounded-full flex items-center justify-end pr-2 gap-1.5 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A]" />
                  <div className="w-2 h-2 rounded-full bg-[#0D1527] ring-1 ring-[#1E293B]" />
                </div>

                {/* Status Icons */}
                <div className="flex items-center gap-1.5 opacity-60">
                  <div className="w-3.5 h-2 bg-slate-400/80 rounded-xs" />
                  <div className="w-4 h-2.5 border border-slate-400/80 rounded-[2.5px] p-[1px] flex items-center">
                    <div className="w-full h-full bg-slate-400/80 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* UI Canvas */}
              <div className="flex-1 w-full relative px-4 pt-4 pb-2 flex flex-col justify-between z-10">

                {/* Top Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="w-20 h-3 bg-slate-200/90 rounded-full" />
                    </div>
                    <div className="w-12 h-4 bg-emerald-100/80 rounded-full" />
                  </div>

                  {/* Hero Wave Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 border border-slate-200/70 shadow-xs space-y-2.5">
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-3 bg-slate-200 rounded-full" />
                      <div className="w-10 h-3 bg-emerald-100 rounded-full" />
                    </div>

                    <div className="h-20 w-full relative pt-2">
                      <svg className="w-full h-full" viewBox="0 0 180 50" fill="none">
                        <line x1="0" y1="12" x2="180" y2="12" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="28" x2="180" y2="28" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="44" x2="180" y2="44" stroke="#F1F5F9" strokeWidth="1" />

                        <path
                          d="M 5,38 L 30,30 L 60,20 L 90,8 L 120,24 L 150,14 L 175,22"
                          stroke="#22C55E"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="90" cy="8" r="3.5" fill="#16A34A" />
                        <circle cx="150" cy="14" r="2.5" fill="#22C55E" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-emerald-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* 2 Grid Cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 space-y-2">
                      <div className="w-5 h-5 rounded-lg bg-rose-100/80" />
                      <div className="w-14 h-4 bg-slate-200 rounded-md" />
                      <div className="w-10 h-2 bg-slate-100 rounded-full" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 space-y-2">
                      <div className="w-5 h-5 rounded-lg bg-amber-100/80" />
                      <div className="w-14 h-4 bg-slate-200 rounded-md" />
                      <div className="w-10 h-2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2.5 border border-slate-200/80 flex items-center justify-around">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100/90" />
                  <div className="w-5 h-5 rounded-lg bg-slate-100" />
                  <div className="w-5 h-5 rounded-lg bg-slate-100" />
                  <div className="w-5 h-5 rounded-lg bg-slate-100" />
                </div>
              </div>

              {/* REMOVED home indicator bar — no bottom bezel bar */}
              {/* REMOVED bottom bezel frame bottom padding */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
