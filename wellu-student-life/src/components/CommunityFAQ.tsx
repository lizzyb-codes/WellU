import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DecorativeRibbon } from './DecorativeRibbons';
import { AnimatedTechGrid } from './AnimatedTechGrid';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'ai_assistant',
    question: 'How does the AI Student Assistant help me?',
    answer:
      "WellU's AI can help you summarize lectures, draft study schedules, create flashcards, and even remind you to take breaks when you're overworking.",
  },
  {
    id: 'calendar_sync',
    question: 'Can I sync my university calendar?',
    answer:
      'Yes! WellU supports 2-way synchronization with Google Calendar, Outlook, and Apple Calendar, so your classes and personal plans are always in one place.',
  },
  {
    id: 'privacy',
    question: 'Is my journal private?',
    answer:
      'Absolutely. Your journal and mood data are encrypted and private to you. WellU is a safe space for your personal reflections and growth.',
  },
  {
    id: 'streaks',
    question: 'How do streaks work?',
    answer:
      "Streaks help you build consistency. Whether it's studying for 2 hours, journaling, or working toward a goal, WellU celebrates your daily commitment.",
  },
  {
    id: 'community',
    question: 'Can I find study groups here?',
    answer:
      'Yes! The Student Community feature allows you to connect with other students, join study groups for specific courses, and share useful resources.',
  },
];

export const CommunityFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('ai_assistant');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="community" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#FAFBFD] relative overflow-hidden">
      
      {/* Static Tech Graph Grid */}
      <AnimatedTechGrid highlightColor="cyan" className="opacity-70" />

      {/* Decorative Ribbons on left & right */}
      <DecorativeRibbon
        variant="cyan-loop"
        className="absolute -left-36 top-[30%] w-[360px] h-[460px] sm:w-[440px] sm:h-[520px] opacity-45 pointer-events-none"
      />
      <DecorativeRibbon
        variant="peach-curl"
        className="absolute -right-36 top-[34%] w-[360px] h-[460px] sm:w-[440px] sm:h-[520px] opacity-45 pointer-events-none"
      />

      {/* Ambient Glow Fades */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-orange-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="text-[13px] font-bold text-[#0EA5E9] tracking-wide mb-3">
            Frequently ask questions
          </div>

          <h2 className="font-display text-[34px] sm:text-[44px] md:text-[48px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1] mb-6">
            Here are answers to some questions our community often asks
          </h2>

          <button className="px-5 py-2 rounded-full border border-emerald-300/80 bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 font-semibold text-[13.5px] transition-all shadow-xs">
            Open community
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="relative">
          <div className="space-y-3.5 max-w-3xl mx-auto">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm'
                      : 'bg-white/80 backdrop-blur-sm border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 select-none"
                  >
                    <span className="font-bold text-[15px] sm:text-[16px] text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-[14px] text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

