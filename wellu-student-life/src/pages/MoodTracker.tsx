// pages/MoodTracker.tsx
import React, { useState } from 'react';
import { 
  FaHome, 
  FaChartLine, 
  FaBook, 
  FaWind, 
  FaHeart, 
  FaLightbulb,
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaCheck,
  FaChevronRight
} from 'react-icons/fa';
import MoodSelector from '../components/MoodSelector';
import MoodHistory from '../components/MoodHistory';
import QuickActions from '../components/QuickActions';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
  };

  const handleSaveMood = () => {
    if (selectedMood !== null) {
      console.log('Mood saved:', { mood: selectedMood, note });
      // Here you would save to your backend
      setSelectedMood(null);
      setNote('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Mood Tracker</h1>
              <p className="text-gray-500 mt-1">How are you feeling right now?</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Mood Selection */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Check-in</h2>
                    <span className="text-sm text-gray-400">There's no wrong answer</span>
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSaveMood}
                    disabled={selectedMood === null}
                    className={`mt-4 w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      selectedMood !== null
                        ? 'bg-linear-to-r from-green-500 to-yellow-400 text-white hover:shadow-lg hover:scale-[1.02]'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                    Stress Relief
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
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
                    <button className="w-full flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
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
                    <button className="w-full flex items-center justify-between p-3 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
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
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    Wellness Tips
                  </h3>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "Take a moment to breathe deeply. Your feelings are valid and worthy of attention."
                    </p>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-yellow-400 to-green-500 flex items-center justify-center text-white font-semibold">
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