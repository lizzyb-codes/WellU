import React from 'react';
import { Sparkle } from './Sparkle';
import { Bot, LayoutDashboard, HeartHandshake, ChevronRight, BookOpen, CalendarClock, GraduationCap } from 'lucide-react';
import { AnimatedTechGrid } from './AnimatedTechGrid';

export const FeatureCardsScalloped: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden bg-[#FAFBFD]">
      {/* Tech Grid Background with 2 subtle static squares */}
      <AnimatedTechGrid 
        highlightColor="pink" 
        className="opacity-70" 
        cells={[
          { col: 8, row: 3, type: 'darken' },
          { col: 22, row: 6, type: 'accent' },
        ]}
      />

      {/* Ambient Soft Blur Fades */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header: Label on top, Title on left, Learn more on right */}
        <div className="mb-14">
          <div className="text-[13px] font-bold tracking-wide mb-2" style={{ color: '#4cad84' }}>
            Built for real semesters
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-[36px] sm:text-[46px] md:text-[52px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1] max-w-xl">
              Your whole university life, organised.
            </h2>

            <a
              href="#how-it-works"
              className="self-start sm:self-auto px-5 py-2 rounded-full border border-slate-300/80 bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 font-semibold text-[13.5px] transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>See every feature</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 3 Scallop Cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          
          {/* Card 1: Warm Peach/Sand Scallop — Dashboard preview */}
          <div className="relative aspect-[360/320] w-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_14px_30px_rgba(251,191,36,0.15)]" viewBox="0 0 360 320" fill="none">
              <defs>
                <linearGradient id="peachScallopGrad" x1="180" y1="0" x2="180" y2="320" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FEF3C7" />
                  <stop offset="100%" stopColor="#FDE68A" />
                </linearGradient>
              </defs>
              <path d="M 0,24 C 8,-6 44,-6 51.4,24 C 59,-6 95,-6 102.8,24 C 110,-6 146,-6 154.2,24 C 162,-6 198,-6 205.6,24 C 213,-6 249,-6 257,24 C 265,-6 301,-6 308.4,24 C 316,-6 352,-6 360,24 L 360,296 C 352,326 316,326 308.4,296 C 301,326 265,326 257,296 C 249,326 213,326 205.6,296 C 198,326 162,326 154.2,296 C 146,326 110,326 102.8,296 C 95,326 59,326 51.4,296 C 44,326 8,326 0,296 Z" fill="url(#peachScallopGrad)" />
            </svg>

            <Sparkle size={18} className="top-4 right-4" color="#FFFFFF" delay={0.3} withDot={true} />

            {/* Content: Today's Dashboard mini preview */}
            <div className="relative z-10 w-full px-7 flex flex-col items-center justify-center">
              <div className="w-full bg-white/95 backdrop-blur-xs rounded-2xl p-4 shadow-sm border border-amber-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: '#fbb43b' }}>
                    <CalendarClock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10.5px] text-slate-500 font-semibold">Today · Monday</div>
                  </div>
                </div>
                <div className="font-bold text-[14px] text-slate-900 leading-snug mb-1">
                  3 classes · 2 deadlines · 1 exam this week
                </div>
                <div className="space-y-1.5 mt-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-600">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4cad84' }} />Study 2h · Biochem</span>
                    <span className="font-bold text-[#4cad84]">streak 🔥 12</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#fbb43b' }} />Essay · due Thursday</span>
                    <span>40% done</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-amber-100 mt-1 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '40%', background: '#fbb43b' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Card 2: Soft Pink/Rose Scallop with SIDEWAYS ROTATED GROOVES */}
          <div className="relative aspect-[360/320] w-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_14px_30px_rgba(244,114,182,0.18)]" viewBox="0 0 360 320" fill="none">
              <defs>
                <linearGradient id="roseScallopGrad" x1="0" y1="160" x2="360" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FCE7F3" />
                  <stop offset="50%" stopColor="#FBCFE8" />
                  <stop offset="100%" stopColor="#F9A8D4" />
                </linearGradient>
              </defs>
              <path 
                d="M 24,0 L 336,0 C 366,8 366,44 336,53.3 C 366,61.3 366,97.3 336,106.7 C 366,114.7 366,150.7 336,160 C 366,168 366,204 336,213.3 C 366,221.3 366,257.3 336,266.7 C 366,274.7 366,310.7 336,320 L 24,320 C -6,310.7 -6,274.7 24,266.7 C -6,257.3 -6,221.3 24,213.3 C -6,204 -6,168 24,160 C -6,150.7 -6,114.7 24,106.7 C -6,97.3 -6,61.3 24,53.3 C -6,44 -6,8 24,0 Z" 
                fill="url(#roseScallopGrad)" 
              />
            </svg>

            <Sparkle size={18} className="top-4 right-6" color="#FFFFFF" delay={0.7} withDot={true} />

            {/* Content: AI Assistant mini chat card */}
            <div className="relative z-10 w-full px-8 flex flex-col items-center justify-center">
              <div className="w-full bg-white/95 backdrop-blur-xs rounded-2xl p-4 shadow-sm border border-pink-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4cad84] to-[#3a9a73] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-800">WellU · AI study buddy</div>
                </div>

                <div className="space-y-2">
                  <div className="bg-slate-50 rounded-xl p-2 text-[11px] text-slate-700 leading-snug border border-slate-100">
                    Summarise lecture 6 in 5 bullet points I can memorise for Friday?
                  </div>
                  <div className="rounded-xl p-2 text-[11px] text-slate-900 leading-snug" style={{ background: 'linear-gradient(180deg, rgba(76,173,132,0.08), rgba(76,173,132,0.16))' }}>
                    5 bullets ready. Added flashcards to your study list and scheduled 2x 20-min reviews this week.
                  </div>
                </div>

                {/* Mini activity graph */}
                <div className="relative h-16 w-full pt-2 mt-2">
                  <div className="absolute right-0 top-2 text-[8px] text-slate-400">Fri</div>
                  <svg className="w-[90%] h-full" viewBox="0 0 160 50" fill="none">
                    <line x1="0" y1="12" x2="160" y2="12" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="28" x2="160" y2="28" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="44" x2="160" y2="44" stroke="#F1F5F9" strokeWidth="1" />
                    <path
                      d="M 8,40 L 30,34 L 55,22 L 80,30 L 105,18 L 130,12 L 152,16"
                      stroke="#4cad84"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="55" cy="22" r="2.5" fill="#4cad84" />
                    <circle cx="105" cy="18" r="2.5" fill="#4cad84" />
                    <circle cx="130" cy="12" r="3" fill="#3a9a73" />
                  </svg>
                </div>

                <div className="flex justify-between text-[8px] text-slate-400 font-bold px-1 mt-0.5">
                  <span>Mon</span><span>Wed</span><span>Fri</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Light Cyan/Sky Blue Scallop with 3 reminders */}
          <div className="relative aspect-[360/320] w-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_14px_30px_rgba(56,189,248,0.18)]" viewBox="0 0 360 320" fill="none">
              <defs>
                <linearGradient id="cyanScallopGrad" x1="180" y1="0" x2="180" y2="320" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E0F2FE" />
                  <stop offset="50%" stopColor="#BAE6FD" />
                  <stop offset="100%" stopColor="#7DD3FC" />
                </linearGradient>
              </defs>
              <path d="M 0,24 C 8,-6 44,-6 51.4,24 C 59,-6 95,-6 102.8,24 C 110,-6 146,-6 154.2,24 C 162,-6 198,-6 205.6,24 C 213,-6 249,-6 257,24 C 265,-6 301,-6 308.4,24 C 316,-6 352,-6 360,24 L 360,296 C 352,326 316,326 308.4,296 C 301,326 265,326 257,296 C 249,326 213,326 205.6,296 C 198,326 162,326 154.2,296 C 146,326 110,326 102.8,296 C 95,326 59,326 51.4,296 C 44,326 8,326 0,296 Z" fill="url(#cyanScallopGrad)" />
            </svg>

            <Sparkle size={18} className="top-4 right-4" color="#FFFFFF" delay={1.1} withDot={true} />

            {/* Content: 3 Student Life Reminders */}
            <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center space-y-2">
              
              <div className="w-full bg-white/95 backdrop-blur-xs rounded-xl p-2 px-3 shadow-xs border border-sky-200 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[#4cad84]/15" style={{ color: '#3a9a73' }}>
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[12px] text-slate-900 leading-tight">CS101 · Midterm Friday</div>
                  <div className="text-[10px] text-slate-500 font-medium">10am · Lecture Hall B</div>
                </div>
              </div>

              <div className="w-full bg-white/95 backdrop-blur-xs rounded-xl p-2 px-3 shadow-xs border border-sky-200 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[#fbb43b]/20 text-[#c98a1c]">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[12px] text-slate-900 leading-tight">Essay draft · peer review today</div>
                  <div className="text-[10px] text-slate-500 font-medium">before 6pm · Eng 110</div>
                </div>
              </div>

              <div className="w-full bg-white/95 backdrop-blur-xs rounded-xl p-2 px-3 shadow-xs border border-sky-200 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-sky-200/60 text-sky-700">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[12px] text-slate-900 leading-tight">Take a 10-min walk</div>
                  <div className="text-[10px] text-slate-500 font-medium">wellness reminder · unwind</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Feature Blurb Text Grid underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Feature 1 */}
          <div>
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-3.5" style={{ color: '#4cad84' }}>
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-[18px] text-slate-900 mb-2">
              One daily dashboard
            </h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Your schedule, tasks, deadlines, affirmation, news, mood, and progress — laid out clearly the moment you open WellU.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-3.5" style={{ color: '#c98a1c' }}>
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-[18px] text-slate-900 mb-2">
              An AI sidekick for student life
            </h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Stuck, stressed, or swamped? Ask WellU's AI to plan your week, summarise a lecture, draft flashcards, or remind you to rest.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-3.5 text-sky-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-[18px] text-slate-900 mb-2">
              Wellness that fits student life
            </h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">
              Build streaks, journal privately, track your mood, and get practical tips for stress, study, sleep, and healthy routines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
