import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ScallopedCard } from '../components/ScallopedCard';
import { AwardsSection } from '../components/AwardsSection';
import { FeatureCardsScalloped } from '../components/FeatureCardsScalloped';
import { HealthTrackingSection } from '../components/HealthTrackingSection';
import { CommunityFAQ } from '../components/CommunityFAQ';
import { YourHealthJourneyCTA } from '../components/YourHealthJourneyCTA';
import { CleanFooter } from '../components/CleanFooter';
import { Sparkle } from '../components/Sparkle';
import { AnimatedTechGrid } from '../components/AnimatedTechGrid';
import { LoginSignupModal, AuthMode } from '../components/LoginSignupModal';
import { ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#FAFBFD] relative overflow-x-hidden flex flex-col selection:bg-cyan-200 text-[#111827]">
      {/* Ambient Glows & Graph Grid Background for Hero */}
      <div className="absolute inset-0 h-[1150px] overflow-hidden pointer-events-none z-0">
        {/* Soft top-center radiant glow & edge fades */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[800px] bg-radial from-white via-white/60 to-transparent opacity-90 blur-3xl" />
        <div className="absolute top-[20%] right-[-5%] w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[-5%] w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl" />

        {/* Tech Grid Background with 2 subtle static squares */}
        <AnimatedTechGrid 
          highlightColor="slate" 
          className="opacity-80"
          cells={[
            { col: 4, row: 5, type: 'darken' },
            { col: 18, row: 8, type: 'accent' },
          ]}
        />

        {/* Ambient background sparkles */}
        <Sparkle size={16} className="top-[18%] left-[42%]" color="#BAE6FD" delay={0.6} />
        <Sparkle size={14} className="top-[28%] left-[8%]" color="#BAE6FD" delay={1.9} />
        <Sparkle size={18} className="top-[60%] left-[46%]" color="#BAE6FD" delay={1.1} />
      </div>

      {/* Sticky Top Glass Navigation */}
      <Navbar onLogin={() => setAuthMode('login')} onSignup={() => setAuthMode('signup')} />

      {/* Main Hero Container */}
      <section className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center pt-24 pb-14 sm:pt-28 sm:pb-18 lg:pt-32 lg:pb-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center w-full">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline with Sticker Badges exactly matching image.png */}
            <div className="font-display font-extrabold text-[#0F172A] text-[44px] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[76px] leading-[1.04] tracking-[-0.035em] select-none">
              
              {/* Row 1: Mastering — plain, no sticker */}
              <div className="relative inline-block w-fit">
                <span>Mastering</span>
              </div>

              {/* Row 2: Student Life - — SMART Pink Badge */}
              <div className="relative inline-flex items-center gap-2.5 sm:gap-3.5 w-fit">
                <span>Student Life -</span>
                <div className="absolute left-[-10px] sm:left-[-14px] bottom-[-8px] sm:bottom-[-12px] z-20 inline-flex items-center justify-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F472B6] text-white font-extrabold text-[9px] sm:text-[10.5px] tracking-wider uppercase -rotate-[12deg] shadow-[0_4px_14px_rgba(244,114,182,0.45)] pointer-events-none select-none">
                  SMART
                </div>
              </div>

              {/* Row 3: One Day — FOCUSED orange badge */}
              <div className="relative inline-block w-fit">
                <div className="absolute right-0 sm:right-3 -top-2 sm:-top-3 z-20 inline-flex items-center justify-center px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#F59E0B] text-white font-extrabold text-[9px] sm:text-[10.5px] tracking-wider uppercase -rotate-[6deg] shadow-[0_4px_14px_rgba(245,158,11,0.45)] pointer-events-none select-none">
                  FOCUSED
                </div>
                <span>One Day</span>
              </div>

              {/* Row 4: at a Time — BALANCED deep-blue sticker */}
              <div className="relative inline-block w-fit">
                <div className="absolute left-6 sm:left-10 bottom-[-10px] sm:bottom-[-14px] z-20 inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#0EA5E9] text-white font-extrabold text-[9px] sm:text-[10.5px] tracking-wider uppercase rotate-[9deg] shadow-[0_4px_14px_rgba(14,165,233,0.45)] pointer-events-none whitespace-nowrap">
                  <span className="text-[9px] sm:text-[10px] leading-none">✦</span>
                  <span>BALANCED</span>
                </div>
                <span>at a Time</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[#4B5563] text-[15.5px] sm:text-[17px] font-normal mt-5 sm:mt-6 max-w-lg leading-relaxed tracking-tight">
              Your student life, in one place. See what you need to do, what you need to know, and how you are doing today, from classes and deadlines to wellness, news, and community.
            </p>

            {/* Hero CTA Button Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className="px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-[15px] transition-all shadow-[0_10px_25px_rgba(15,23,42,0.25)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join WellU</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#product"
                className="px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-800 font-bold text-[14.5px] transition-all border border-slate-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer hover:border-slate-300"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>View Live Demo</span>
              </a>
            </div>

            {/* Social Proof Stack */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="User 1"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="User 2"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                  alt="User 3"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                  referrerPolicy="no-referrer"
                />
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  +48k
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-slate-900">4.9/5</span>
                <span className="text-slate-400">•</span>
                <span>No credit card required</span>
              </div>
            </div>

          </div>

          {/* Right Column: Scalloped Mint Card with Mobile Phone App */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center relative">
            <ScallopedCard />
          </div>
        </div>
      </section>

      {/* 1. Awards Section with Laurels */}
      <div className="relative z-20">
        <AwardsSection />
      </div>

      {/* 2. How WellU fits into a student's day */}
      <FeatureCardsScalloped />

      {/* 3. Large Mint Health Tracking Section with Live Biometrics & PC Screen */}
      <HealthTrackingSection />

      {/* 4. Community FAQ with Ribbons & Accordion */}
      <CommunityFAQ />

      {/* 5. "Your Health. Your Journey." Peach Banner with 3 Phones */}
      <YourHealthJourneyCTA />

      {/* 6. Complete Footer */}
      <CleanFooter />

      <LoginSignupModal
        open={authMode !== null}
        initialMode={authMode ?? 'login'}
        onClose={() => setAuthMode(null)}
      />
    </div>
  );
}
