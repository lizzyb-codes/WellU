import React, { useState } from 'react';
import { Sparkle } from './Sparkle';
import { Check, Plus, Sun, Droplets, Moon, Coffee, Heart, Zap, Sparkles as SparklesIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HabitItem {
  id: string;
  name: string;
  category: 'morning' | 'focus' | 'evening';
  time: string;
  icon: string;
  desc: string;
  points: number;
}

const AVAILABLE_HABITS: HabitItem[] = [
  { id: 'sun', name: '15m Morning Sunlight', category: 'morning', time: '7:30 AM', icon: '☀️', desc: 'Circadian clock calibration', points: 30 },
  { id: 'water', name: '500ml Cold Electrolytes', category: 'morning', time: '7:45 AM', icon: '💧', desc: 'Cellular re-hydration', points: 25 },
  { id: 'delay_caffeine', name: '90-Min Caffeine Delay', category: 'morning', time: '9:00 AM', icon: '☕', desc: 'Prevents afternoon adenosine crash', points: 35 },
  { id: 'walk', name: '20m Post-Meal Walk', category: 'focus', time: '1:30 PM', icon: '🚶‍♂️', desc: 'Blunts glucose spike by 40%', points: 30 },
  { id: 'breath', name: '2-Min Box Breathing', category: 'focus', time: '3:00 PM', icon: '🧘‍♀️', desc: 'Resets vagal tone', points: 20 },
  { id: 'screens', name: 'Screens Off 60m Prior', category: 'evening', time: '9:30 PM', icon: '📵', desc: 'Protects natural melatonin surge', points: 40 },
  { id: 'cold_room', name: 'Bedroom at 66°F (19°C)', category: 'evening', time: '10:00 PM', icon: '❄️', desc: 'Maximizes Deep REM architecture', points: 25 },
];

export const InteractiveGrooveBuilder: React.FC = () => {
  const [selectedHabits, setSelectedHabits] = useState<string[]>(['sun', 'water', 'walk', 'screens']);

  const toggleHabit = (id: string) => {
    if (selectedHabits.includes(id)) {
      if (selectedHabits.length > 2) {
        setSelectedHabits(selectedHabits.filter((h) => h !== id));
      }
    } else {
      setSelectedHabits([...selectedHabits, id]);
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#4ADE80', '#F472B6', '#38BDF8'],
      });
    }
  };

  const totalPoints = selectedHabits.reduce((acc, id) => {
    const item = AVAILABLE_HABITS.find((h) => h.id === id);
    return acc + (item ? item.points : 0);
  }, 0);

  const selectedHabitObjects = AVAILABLE_HABITS.filter((h) => selectedHabits.includes(h.id));

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Subtle Tech Graph Grid */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#7DD3FC] text-[#0369A1] text-[12px] font-black tracking-wide uppercase mb-5 shadow-xs rotate-1">
            <span>✦ INTERACTIVE GROOVE STACKER</span>
          </div>

          <h2 className="font-display text-[40px] sm:text-[52px] md:text-[60px] font-black tracking-[-0.04em] text-[#0F172A] leading-[1.05]">
            Craft your personalized <br />
            Daily{' '}
            <span className="relative inline-block px-4 py-1 my-1 rounded-full bg-[#4ADE80] text-black font-black text-[30px] sm:text-[42px] md:text-[46px] -rotate-2 shadow-sm border border-emerald-400">
              GROOVE PASS
            </span>
          </h2>
          
          <p className="mt-5 text-neutral-600 text-[17px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto font-normal">
            Select habits below to build your low-friction daily protocol. Watch your biological consistency score calibrate live.
          </p>
        </div>

        {/* 2-Column Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Habit Picker Buttons (5 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[13px] font-black uppercase text-slate-500 tracking-wider mb-2">
              Tap to add or remove micro-habits:
            </div>

            {AVAILABLE_HABITS.map((habit) => {
              const isSelected = selectedHabits.includes(habit.id);
              return (
                <button
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-emerald-400 shadow-md translate-x-1'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-[24px]">{habit.icon}</span>
                    <div>
                      <div className="font-black text-[15px] text-slate-900">{habit.name}</div>
                      <div className="text-[12px] text-slate-500 font-medium">{habit.desc}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      +{habit.points} pts
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: The Tactile Scalloped Groove Pass (6 cols) */}
          <div className="lg:col-span-6 flex justify-center sticky top-28">
            <div className="relative w-full max-w-[420px] aspect-[420/540]">
              
              {/* SVG Scalloped Ticket with genuine paper-cut bezier curves */}
              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_20px_45px_rgba(34,197,94,0.22)]" viewBox="0 0 420 540" fill="none">
                <defs>
                  <linearGradient id="ticketScallopGrad" x1="210" y1="0" x2="210" y2="540" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#DCFCE7" />
                    <stop offset="25%" stopColor="#C4F7D7" />
                    <stop offset="75%" stopColor="#D4F8E2" />
                    <stop offset="100%" stopColor="#E2FDEB" />
                  </linearGradient>
                  <clipPath id="groovePassClip">
                    <path
                      d="
                        M 0,36
                        C 12,-10 60,-10 70,36
                        C 82,-10 130,-10 140,36
                        C 152,-10 200,-10 210,36
                        C 222,-10 270,-10 280,36
                        C 292,-10 340,-10 350,36
                        C 362,-10 410,-10 420,36
                        L 420,504
                        C 410,550 362,550 350,504
                        C 340,550 292,550 280,504
                        C 270,550 222,550 210,504
                        C 200,550 152,550 140,504
                        C 130,550 82,550 70,504
                        C 60,550 12,550 0,504
                        Z
                      "
                    />
                  </clipPath>
                </defs>
                <path
                  d="
                    M 0,36
                    C 12,-10 60,-10 70,36
                    C 82,-10 130,-10 140,36
                    C 152,-10 200,-10 210,36
                    C 222,-10 270,-10 280,36
                    C 292,-10 340,-10 350,36
                    C 362,-10 410,-10 420,36
                    L 420,504
                    C 410,550 362,550 350,504
                    C 340,550 292,550 280,504
                    C 270,550 222,550 210,504
                    C 200,550 152,550 140,504
                    C 130,550 82,550 70,504
                    C 60,550 12,550 0,504
                    Z
                  "
                  fill="url(#ticketScallopGrad)"
                />
              </svg>

              {/* Sparkles */}
              <Sparkle size={20} className="top-4 right-6" color="#FFFFFF" delay={0.2} withDot={true} />
              <Sparkle size={18} className="bottom-8 left-6" color="#FFFFFF" delay={0.9} withDot={true} />

              {/* Clipped Content of the Pass */}
              <div
                className="relative z-10 w-full h-full p-8 pt-14 pb-12 flex flex-col justify-between"
                style={{ clipPath: 'url(#groovePassClip)', WebkitClipPath: 'url(#groovePassClip)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-[#4ADE80] font-black text-[11px] uppercase tracking-wider -rotate-2">
                      ✦ OFFICIAL DAILY PASS
                    </span>
                    <span className="text-[12px] font-black text-slate-800">
                      ID: #WELLU-{Math.min(999, totalPoints * 7)}
                    </span>
                  </div>

                  <h3 className="font-display text-[26px] font-black text-slate-950 tracking-tight leading-none mb-1">
                    Your Circadian Groove
                  </h3>
                  <div className="text-[13px] text-slate-700 font-medium">
                    {selectedHabits.length} Anchors Stood • Compound Consistency
                  </div>

                  {/* Habit List in Pass */}
                  <div className="mt-4 space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {selectedHabitObjects.map((h) => (
                      <div
                        key={h.id}
                        className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 px-3 border border-emerald-300/80 flex items-center justify-between text-[13px]"
                      >
                        <div className="flex items-center gap-2 font-bold text-slate-900">
                          <span>{h.icon}</span>
                          <span>{h.name}</span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Consistency Score Box */}
                <div className="bg-slate-950 rounded-2xl p-4 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-[10.5px] font-bold text-emerald-400 uppercase tracking-wider">
                      Circadian Readiness Rating
                    </div>
                    <div className="font-display text-[24px] font-black text-white">
                      {totalPoints} / 100 <span className="text-[13px] font-normal text-slate-400 font-sans">pts</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      confetti({
                        particleCount: 60,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#4ADE80', '#38BDF8', '#F472B6', '#FBBF24'],
                      });
                    }}
                    className="px-4 py-2 rounded-full bg-[#4ADE80] hover:bg-[#22c55e] text-slate-950 font-black text-[12px] uppercase tracking-wider transition-all active:scale-95 shadow-sm"
                  >
                    Sync Pass 🚀
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
