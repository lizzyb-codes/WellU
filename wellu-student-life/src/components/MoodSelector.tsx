// components/MoodSelector.tsx
import React from 'react';
import { FaFrown, FaMeh, FaSmile, FaLaugh, FaGrinStars } from 'react-icons/fa';

interface MoodSelectorProps {
  selectedMood: number | null;
  onSelectMood: (value: number) => void;
}

const moods = [
  { value: 1, label: 'Very Bad', icon: FaFrown, color: 'text-red-500', bg: 'bg-red-50 hover:bg-red-100' },
  { value: 2, label: 'Bad', icon: FaFrown, color: 'text-orange-400', bg: 'bg-orange-50 hover:bg-orange-100' },
  { value: 3, label: 'Okay', icon: FaMeh, color: 'text-yellow-400', bg: 'bg-yellow-50 hover:bg-yellow-100' },
  { value: 4, label: 'Good', icon: FaSmile, color: 'text-green-400', bg: 'bg-green-50 hover:bg-green-100' },
  { value: 5, label: 'Very Good', icon: FaGrinStars, color: 'text-purple-400', bg: 'bg-purple-50 hover:bg-purple-100' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelectMood }) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {moods.map((mood) => {
        const Icon = mood.icon;
        const isSelected = selectedMood === mood.value;
        return (
          <button
            key={mood.value}
            onClick={() => onSelectMood(mood.value)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
              isSelected
                ? 'bg-green-100 ring-2 ring-green-400 shadow-md scale-105'
                : mood.bg
            }`}
          >
            <span className={`text-3xl ${isSelected ? 'text-green-600' : mood.color}`}>
              <Icon />
            </span>
            <span className={`text-xs font-medium ${
              isSelected ? 'text-green-700' : 'text-gray-600'
            }`}>
              {mood.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MoodSelector;