import React from 'react';
import { Sparkle } from './Sparkle';
import { 
  BookOpen, 
  CheckCircle2, 
  Smile, 
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
                  <img
                    src="/dashboard.png"
                    alt="Dashboard mockup"
                    className="w-full h-auto object-cover rounded-t-[14px] sm:rounded-t-[18px]"
                  />
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
