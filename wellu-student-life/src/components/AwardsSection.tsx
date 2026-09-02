import React from 'react';
import {
  LayoutDashboard,
  Bot,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#F3FAF6] text-[#0F172A] border-y border-emerald-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(76,173,132,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(76,173,132,0.12) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="max-w-[1240px] mx-auto relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-end mb-14">
          <div>
            <p className="text-[#318766] text-[12px] font-bold uppercase tracking-[0.16em] mb-4">How it works</p>
            <h2 className="font-display text-[38px] sm:text-[52px] font-black tracking-[-0.035em] leading-[1.03]">
              One place for the whole student day.
            </h2>
          </div>
          <p className="text-slate-600 text-[16px] sm:text-[18px] leading-relaxed max-w-xl lg:pb-1">
            WellU turns the scattered parts of university life into a simple rhythm: open your overview, make a plan, then check in with yourself as the day changes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-emerald-200">
          <article className="pt-7 md:pr-8 md:border-r border-emerald-200 bg-white/55 md:bg-transparent md:pr-8">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-[46px] leading-none text-[#318766]">01</span>
              <LayoutDashboard className="w-6 h-6 text-[#318766]" />
            </div>
            <h3 className="font-display text-[23px] font-black mb-3">Open your overview</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">See classes, tasks, deadlines, news, affirmation, mood, wellness tips, and progress at a glance.</p>
          </article>

          <article className="pt-7 md:px-8 md:border-r border-emerald-200 bg-white/55 md:bg-transparent">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-[46px] leading-none text-[#C98A1C]">02</span>
              <CalendarCheck className="w-6 h-6 text-[#C98A1C]" />
            </div>
            <h3 className="font-display text-[23px] font-black mb-3">Make the day yours</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">Bring classes, assignments, exams, events, reminders, goals, and habits into one plan that can flex with you.</p>
          </article>

          <article className="pt-7 md:pl-8 bg-white/55 md:bg-transparent">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-[46px] leading-none text-[#318766]">03</span>
              <Bot className="w-6 h-6 text-[#318766]" />
            </div>
            <h3 className="font-display text-[23px] font-black mb-3">Keep moving forward</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">Ask the AI assistant for help, reflect in your journal, track your mood, and build momentum one small win at a time.</p>
          </article>
        </div>

        <a href="#features" className="inline-flex items-center gap-2 mt-12 text-[14px] font-bold text-[#318766] hover:text-[#0F172A] transition-colors">
          Explore what is inside WellU <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
