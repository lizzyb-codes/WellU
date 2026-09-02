import React from 'react';
import { Maximize2 } from 'lucide-react';

interface PCDashboardMockupProps {
  className?: string;
}

export const PCDashboardMockup: React.FC<PCDashboardMockupProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[560px] mx-auto select-none ${className}`}>
      
      {/* Outer Monitor Frame */}
      <div className="relative rounded-[20px] p-[8px] sm:p-[10px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_30px_70px_rgba(15,23,42,0.35),0_10px_20px_rgba(0,0,0,0.2)] border border-slate-700/60">
        
        {/* Top subtle webcam notch */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700/80 flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-sky-500/80" />
        </div>

        {/* Screen Window Container */}
        <div className="relative w-full aspect-[16/10.5] rounded-[14px] bg-[#FAFBFD] overflow-hidden flex flex-col border border-slate-200/90 shadow-inner">
          
          {/* 1. PC Window Title Bar */}
          <div className="h-8 bg-slate-100/90 backdrop-blur-md border-b border-slate-200/80 px-3 flex items-center justify-between shrink-0">
            {/* macOS-style Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-rose-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/40" />
            </div>

            {/* Window Search / URL Bar (Blanked) */}
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/90 border border-slate-200/70 text-[9.5px] text-slate-500 font-medium w-44 justify-center shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <div className="w-24 h-2 bg-slate-200 rounded-full" />
            </div>

            {/* Window action */}
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-8 h-3.5 bg-emerald-100/80 rounded-full" />
              <Maximize2 className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* 2. PC Dashboard Body: Sidebar + Main Content Grid (Blanked) */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* Mini Sidebar */}
            <div className="w-12 sm:w-14 bg-white border-r border-slate-100 p-2 flex flex-col items-center justify-between shrink-0">
              <div className="space-y-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-black text-[11px] shadow-xs">
                  G
                </div>
                <div className="w-6 h-6 rounded-lg bg-emerald-50" />
                <div className="w-6 h-6 rounded-lg bg-slate-100" />
                <div className="w-6 h-6 rounded-lg bg-slate-100" />
              </div>

              <div className="w-6 h-6 rounded-full bg-slate-200 border border-emerald-400" />
            </div>

            {/* Main PC Content Dashboard (Blanked Wireframe UI) */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#FAFBFD]">
              
              {/* Header inside Dashboard */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="w-32 h-3.5 bg-slate-300/80 rounded-full" />
                  <div className="w-48 h-2 bg-slate-200/80 rounded-full" />
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-14 h-5 bg-slate-900 rounded-full" />
                  <div className="w-14 h-5 bg-slate-100 rounded-full" />
                </div>
              </div>

              {/* Top 3 Quick Metric Cards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-1.5">
                  <div className="w-12 h-2 bg-slate-200 rounded-full" />
                  <div className="w-16 h-4 bg-slate-300 rounded-md" />
                  <div className="w-10 h-1.5 bg-emerald-200 rounded-full" />
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-1.5">
                  <div className="w-12 h-2 bg-slate-200 rounded-full" />
                  <div className="w-16 h-4 bg-slate-300 rounded-md" />
                  <div className="w-10 h-1.5 bg-emerald-200 rounded-full" />
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-1.5">
                  <div className="w-12 h-2 bg-slate-200 rounded-full" />
                  <div className="w-16 h-4 bg-slate-300 rounded-md" />
                  <div className="w-10 h-1.5 bg-cyan-200 rounded-full" />
                </div>
              </div>

              {/* Main Waveform Area */}
              <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-28 h-2.5 bg-slate-200 rounded-full" />
                  <div className="w-16 h-3 bg-emerald-100 rounded-full" />
                </div>
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 300 80" fill="none">
                    <path
                      d="M 0,60 Q 40,20 80,45 T 160,25 T 240,50 T 300,15"
                      stroke="#22C55E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
