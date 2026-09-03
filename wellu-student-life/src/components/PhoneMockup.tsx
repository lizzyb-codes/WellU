import React from 'react';

export const PhoneMockup: React.FC<{ imageSrc?: string; className?: string }> = ({ 
  imageSrc = '/phone-mockup.png', 
  className = '' 
}) => {
  return (
    <div className={`relative mx-auto w-[240px] sm:w-[270px] md:w-[290px] aspect-[9/18.5] select-none ${className}`}>
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
                              overflow-hidden flex flex-col justify-between"
            >
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

              {/* Screenshot image as screen content */}
              <img
                src={imageSrc}
                alt="Phone screen"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
