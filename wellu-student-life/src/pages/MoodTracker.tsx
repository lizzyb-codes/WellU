// pages/MoodTracker.tsx
import React, { useState } from 'react';
import { FaCheck, FaChevronRight, FaHeart, FaLightbulb, FaWind } from 'react-icons/fa';
import MoodSelector from '../components/MoodSelector';
import MoodHistory from '../components/MoodHistory';
import QuickActions from '../components/QuickActions';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import PageAtmosphere from '../components/PageAtmosphere';
import confetti from 'canvas-confetti';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
  };

  const handleSaveMood = () => {
    if (selectedMood !== null) {
      console.log('Mood saved:', { mood: selectedMood, note });
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 }, colors: ['#4CAD84', '#A3E635', '#FDE68A'] });
      // Here you would save to your backend
      setSelectedMood(null);
      setNote('');
    }
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#FAFBFD]">
      <PageAtmosphere accent="pink" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="wellu-page-ridges wellu-dashboard-grid flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1500px] mx-auto">
            {/* Header */}
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#318766]">A small check-in</p>
                <h1 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">How are you feeling today?</h1>
                <p className="mt-1 text-sm text-slate-500">A moment to notice what is happening, without judgment.</p>
              </div>
              <div className="flex items-center gap-2 self-start rounded-full border border-[#A7E8C2] bg-[#E2FDEB] px-3 py-2 text-xs font-semibold text-[#318766] sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-[#4CAD84]" />
                7 day check-in streak
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Mood Selection */}
              <div className="lg:col-span-2 space-y-6">
                <div className="wellu-scallop-panel rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display text-2xl font-black tracking-tight text-slate-900">Your mood, right now</h2>
                      <p className="mt-1 text-sm text-slate-500">Choose the feeling that is closest.</p>
                    </div>
                    <span className="hidden text-right text-xs font-semibold text-slate-400 sm:block">No wrong answer<br />Just your answer</span>
                  </div>
                  
                  <MoodSelector 
                    selectedMood={selectedMood} 
                    onSelectMood={handleMoodSelect} 
                  />

                  {/* Note Input */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Add a short note (optional)
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="What's on your mind?"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#4CAD84] focus:ring-2 focus:ring-[#DCFCE7]"
                      rows={3}
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSaveMood}
                    disabled={selectedMood === null}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold transition-all ${
                      selectedMood !== null
                        ? 'bg-slate-900 text-white hover:bg-slate-700 hover:shadow-lg'
                        : 'cursor-not-allowed bg-slate-100 text-slate-400'
                    }`}
                  >
                    <FaCheck />
                    Save Mood
                  </button>
                </div>

                {/* Quick Actions */}
                <QuickActions />
              </div>

              {/* Right Column - Side Info */}
              <div className="space-y-6">
                {/* Stress Relief */}
                <div className="wellu-scallop-panel rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#318766]">
                    Stress Relief
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between rounded-xl border border-sky-100 bg-sky-50 p-3 text-left transition-colors hover:bg-sky-100">
                      <span className="flex items-center gap-3">
                        <span className="text-blue-500">
                          <FaWind />
                        </span>
                        <span className="text-gray-700">Quick Breathing</span>
                      </span>
                      <span className="text-blue-400 text-sm">
                        <FaChevronRight />
                      </span>
                    </button>
                    <button className="w-full flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-left transition-colors hover:bg-emerald-100">
                      <span className="flex items-center gap-3">
                        <span className="text-green-500">
                          <FaHeart />
                        </span>
                        <span className="text-gray-700">Mindfulness</span>
                      </span>
                      <span className="text-green-400 text-sm">
                        <FaChevronRight />
                      </span>
                    </button>
                    <button className="w-full flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50 p-3 text-left transition-colors hover:bg-amber-100">
                      <span className="flex items-center gap-3">
                        <span className="text-yellow-500">
                          <FaLightbulb />
                        </span>
                        <span className="text-gray-700">Affirmations</span>
                      </span>
                      <span className="text-yellow-400 text-sm">
                        <FaChevronRight />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Wellness Tips */}
                <div className="wellu-scallop-panel rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#318766]">
                    Wellness Tips
                  </h3>
                  <div className="rounded-xl border border-amber-100 bg-[#FFF8E7] p-4">
                    <p className="text-sm leading-relaxed text-slate-700">
                      "Take a moment to breathe deeply. Your feelings are valid and worthy of attention."
                    </p>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="wellu-scallop-panel rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCFCE7] font-display font-black text-[#318766]">
                      A
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Alex</h4>
                      <p className="text-sm text-gray-500">alex@myuniversity.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood History */}
            <div className="mt-8">
              <MoodHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MoodTracker;