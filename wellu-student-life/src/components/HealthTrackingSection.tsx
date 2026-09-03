import React from 'react';
import { Sparkle } from './Sparkle';
import { 
  BookOpen, 
  CheckCircle2, 
  Smile, 
  Maximize2,
} from 'lucide-react';
import { AnimatedTechGrid } from './AnimatedTechGrid';

export const HealthTrackingSection: React.FC = () => {
  return (
    <section id="product" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#FAFBFD] relative overflow-hidden">
      
      {/* Background Static Tech Grid with 2 static squares */}
      <AnimatedTechGrid 
        highlightColor="emerald" 
        className="opacity-70"
        cells={[
          { col: 5, row: 3, type: 'darken' },
          { col: 20, row: 5, type: 'accent' },
        ]}
      />

      {/* Ambient Gradient Glow Fades */}
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Large Flatter Scalloped Mint Green Section Container */}
        <div className="relative w-full select-none">
          
          {/* Seamless Flatter Scalloped SVG Background Container (Zero Glitch) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="none" 
            fill="none"
          >
            <defs>
              <linearGradient id="mintSectionGrad" x1="600" y1="0" x2="600" y2="800" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DCFCE7" />
                <stop offset="45%" stopColor="#C4F7D7" />
                <stop offset="100%" stopColor="#D4F8E2" />
              </linearGradient>
            </defs>

            {/* Deep scalloped outer path matching Section 2 ridge style (24 ridges, 50px step, 30px depth) */}
            <path
              d="M 0,24 C 8,-6 42,-6 50,24 C 58,-6 92,-6 100,24 C 108,-6 142,-6 150,24 C 158,-6 192,-6 200,24 C 208,-6 242,-6 250,24 C 258,-6 292,-6 300,24 C 308,-6 342,-6 350,24 C 358,-6 392,-6 400,24 C 408,-6 442,-6 450,24 C 458,-6 492,-6 500,24 C 508,-6 542,-6 550,24 C 558,-6 592,-6 600,24 C 608,-6 642,-6 650,24 C 658,-6 692,-6 700,24 C 708,-6 742,-6 750,24 C 758,-6 792,-6 800,24 C 808,-6 842,-6 850,24 C 858,-6 892,-6 900,24 C 908,-6 942,-6 950,24 C 958,-6 992,-6 1000,24 C 1008,-6 1042,-6 1050,24 C 1058,-6 1092,-6 1100,24 C 1108,-6 1142,-6 1150,24 C 1158,-6 1192,-6 1200,24 L 1200,776 C 1192,806 1158,806 1150,776 C 1142,806 1108,806 1100,776 C 1092,806 1058,806 1050,776 C 1042,806 1008,806 1000,776 C 992,806 958,806 950,776 C 942,806 908,806 900,776 C 892,806 858,806 850,776 C 842,806 808,806 800,776 C 792,806 758,806 750,776 C 742,806 708,806 700,776 C 692,806 658,806 650,776 C 642,806 608,806 600,776 C 592,806 558,806 550,776 C 542,806 508,806 500,776 C 492,806 458,806 450,776 C 442,806 408,806 400,776 C 392,806 358,806 350,776 C 342,806 308,806 300,776 C 292,806 258,806 250,776 C 242,806 208,806 200,776 C 192,806 158,806 150,776 C 142,806 108,806 100,776 C 92,806 58,806 50,776 C 42,806 8,806 0,776 Z"
              fill="url(#mintSectionGrad)"
            />
          </svg>

          {/* Sparkles on the scalloped green section */}
          <Sparkle size={26} className="top-14 left-8" color="#FFFFFF" delay={0.2} withDot={true} />
          <Sparkle size={24} className="top-16 right-10" color="#FFFFFF" delay={0.7} withDot={true} />
          <Sparkle size={20} className="top-[45%] left-6" color="#FFFFFF" delay={1.2} />
          <Sparkle size={22} className="top-[42%] right-8" color="#FFFFFF" delay={1.5} withDot={true} />

          {/* Inner Content Container */}
          <div className="relative z-10 pt-10 sm:pt-14 px-6 sm:px-10 lg:px-16 pb-12">
            
            {/* TOP HALF: Text, Tabs, Badges & Headline */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
              
              {/* 1. Top Pill Tabs */}
              <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/70 backdrop-blur-md rounded-full border border-emerald-300/80 shadow-xs mb-6 sm:mb-8">
                {['Daily Overview', 'Academic Progress', 'Wellness Insights'].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-bold transition-all ${
                      idx === 1
                        ? 'bg-white text-slate-900 shadow-xs border border-emerald-200'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-emerald-100/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* 2. Main Title */}
              <h2 className="font-display text-[32px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.08] mb-5">
                Open the app and know where you stand today
              </h2>

              {/* 3. Description Text */}
              <p className="text-slate-700 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl font-normal mb-8">
                Your daily overview brings together your schedule, tasks, deadlines, affirmation, student news, wellness tips, mood, and progress in one calm dashboard.
              </p>

              {/* 4. Metric Badges Row — all identical vanilla pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl mb-6">
                {/* Study Hours */}
                <div className="bg-white rounded-xl p-3 px-4 border border-slate-200 flex items-center justify-center gap-2.5 text-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-[13.5px] text-slate-900 leading-tight text-center">Study Hours</span>
                </div>

                {/* Tasks Done */}
                <div className="bg-white rounded-xl p-3 px-4 border border-slate-200 flex items-center justify-center gap-2.5 text-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-[13.5px] text-slate-900 leading-tight text-center">Tasks Done</span>
                </div>

                {/* Mood Score */}
                <div className="bg-white rounded-xl p-3 px-4 border border-slate-200 flex items-center justify-center gap-2.5 text-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-[13.5px] text-slate-900 leading-tight text-center">Mood Score</span>
                </div>

              </div>

              {/* 5. Live status row — shorter, punchier, not a giant generic pill */}
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white shadow-sm"></span>
                </span>
                <span>Daily overview</span>
                <span className="text-slate-400 mx-0.5">·</span>
                <span className="text-emerald-700">synced</span>
              </div>
            </div>

            {/* LOWER HALF: PC Dashboard (no bottom, fades into mint) */}
            <div className="relative z-10 w-full max-w-5xl mx-auto">

              {/* Outer mask: rounded top + fade out bottom into mint section */}
              <div
                className="relative"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 65%, #000 78%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 65%, #000 78%, transparent 100%)',
                }}
              >

                {/* Screen top frame + content: rounded top ONLY, no bottom frame, no stand */}
                <div
                  className="relative overflow-hidden
                             rounded-t-[22px] sm:rounded-t-[26px] rounded-b-none
                             p-[6px] sm:p-[10px] pb-0
                             bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950
                             shadow-[0_30px_80px_rgba(15,23,42,0.4),0_10px_25px_rgba(0,0,0,0.25)]
                             border border-b-0 border-slate-700/80"
                >

                  {/* Webcam notch top-center */}
                  <div className="absolute top-[6px] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Screen body (no bottom border, no bottom rounding) */}
                  <div className="w-full
                                  rounded-t-[14px] sm:rounded-t-[18px] rounded-b-none
                                  bg-[#FAFBFD]
                                  overflow-hidden flex flex-col
                                  border border-b-0 border-slate-200
                                  text-slate-900">

                    {/* 1. Window title bar */}
                    <div className="h-10 bg-slate-100/90 backdrop-blur-md border-b border-slate-200/80 px-4 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/40" />
                      </div>

                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] text-slate-600 font-medium w-64 sm:w-80 justify-center shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <div className="w-32 h-2.5 bg-slate-200 rounded-full" />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-16 h-5 rounded-full bg-emerald-100/80" />
                        <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>

                    {/* 2. Dashboard grid */}
                    <div className="flex flex-col md:flex-row min-h-[440px]">

                      <div className="hidden md:flex w-16 bg-white border-r border-slate-100 p-3 flex-col items-center justify-between shrink-0">
                        <div className="space-y-4">
                          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-[13px] shadow-sm">G</div>
                          <div className="w-8 h-8 rounded-xl bg-emerald-50" />
                          <div className="w-8 h-8 rounded-xl bg-slate-100" />
                          <div className="w-8 h-8 rounded-xl bg-slate-100" />
                          <div className="w-8 h-8 rounded-xl bg-slate-100" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-emerald-400" />
                      </div>

                      <div className="flex-1 p-4 sm:p-6 space-y-4 bg-[#FAFBFD]">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                          <div className="space-y-1.5">
                            <div className="w-48 h-4 bg-slate-300/80 rounded-full" />
                            <div className="w-72 h-2.5 bg-slate-200/80 rounded-full" />
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                            <div className="w-20 h-6 bg-white rounded-lg shadow-2xs" />
                            <div className="w-20 h-6 bg-transparent" />
                            <div className="w-20 h-6 bg-transparent" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {['bg-rose-100', 'bg-emerald-100', 'bg-cyan-100', 'bg-amber-100'].map((dot, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="w-16 h-2 bg-slate-200 rounded-full" />
                                <div className={`w-4 h-4 rounded-full ${dot}`} />
                              </div>
                              <div className="w-20 h-6 bg-slate-300 rounded-lg" />
                              <div className="w-24 h-2 bg-emerald-200 rounded-full" />
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
                          <div className="flex items-center justify-between mb-4">
                            <div className="space-y-1">
                              <div className="w-48 h-3.5 bg-slate-300 rounded-full" />
                              <div className="w-64 h-2 bg-slate-200 rounded-full" />
                            </div>
                            <div className="w-28 h-5 bg-emerald-100/80 rounded-full" />
                          </div>

                          <div className="relative h-44 sm:h-52 w-full">
                            <svg className="w-full h-full" viewBox="0 0 600 160" fill="none" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="blankPcChartGrad2" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                                  <stop offset="60%" stopColor="#22C55E" stopOpacity="0.06" />
                                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <line x1="0" y1="35" x2="600" y2="35" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                              <line x1="0" y1="75" x2="600" y2="75" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                              <line x1="0" y1="115" x2="600" y2="115" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                              <path d="M 0,130 L 45,115 L 90,95 L 140,55 L 190,75 L 240,40 L 290,58 L 340,30 L 390,48 L 440,24 L 490,42 L 540,28 L 600,20 L 600,160 L 0,160 Z" fill="url(#blankPcChartGrad2)" />
                              <path d="M 0,130 L 45,115 L 90,95 L 140,55 L 190,75 L 240,40 L 290,58 L 340,30 L 390,48 L 440,24 L 490,42 L 540,28 L 600,20" stroke="#22C55E" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="140" cy="55" r="3.5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="1.5" />
                              <circle cx="240" cy="40" r="3.5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="1.5" />
                              <circle cx="340" cy="30" r="4" fill="#15803D" stroke="#FFFFFF" strokeWidth="2" />
                              <circle cx="440" cy="24" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
                              <circle cx="540" cy="28" r="3.5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="1.5" />
                            </svg>
                          </div>

                          <div className="flex justify-between mt-3 pt-3 border-t border-slate-100">
                            <div className="w-12 h-2 bg-slate-200 rounded-full" />
                            <div className="w-12 h-2 bg-slate-200 rounded-full" />
                            <div className="w-12 h-2 bg-slate-200 rounded-full" />
                            <div className="w-12 h-2 bg-slate-200 rounded-full" />
                            <div className="w-12 h-2 bg-slate-200 rounded-full" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                          <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/80 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-emerald-500 shrink-0" />
                            <div className="space-y-1 flex-1">
                              <div className="w-36 h-3 bg-slate-800/80 rounded-full" />
                              <div className="w-48 h-2 bg-slate-600/60 rounded-full" />
                            </div>
                          </div>
                          <div className="bg-sky-50/80 rounded-2xl p-4 border border-sky-200/80 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-sky-500 shrink-0" />
                            <div className="space-y-1 flex-1">
                              <div className="w-36 h-3 bg-slate-800/80 rounded-full" />
                              <div className="w-48 h-2 bg-slate-600/60 rounded-full" />
                            </div>
                          </div>
                        </div>

                        <div className="relative h-24 overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs">
                          <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80" alt="A calm wellness moment" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
                          <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Make space for your next small win</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra soft fade band beneath the open bottom to blend into mint */}
                <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#C4F7D7]/60 to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
