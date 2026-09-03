// components/MoodHistory.tsx
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const historyData = [
  { day: 'Mon', mood: 2 },
  { day: 'Tue', mood: 4 },
  { day: 'Wed', mood: 3 },
  { day: 'Thu', mood: 5 },
  { day: 'Fri', mood: 3 },
  { day: 'Sat', mood: 4 },
  { day: 'Today', mood: 5 },
];

const MoodHistory: React.FC = () => {
  const getMoodColor = (value: number) => {
    const colors = {
      1: 'bg-red-400',
      2: 'bg-orange-400',
      3: 'bg-yellow-400',
      4: 'bg-green-400',
      5: 'bg-purple-400',
    };
    return colors[value as keyof typeof colors] || 'bg-gray-300';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Mood History</h3>
        <button className="flex items-center gap-2 text-sm text-purple-500 hover:text-purple-600 transition-colors">
          <FaCalendarAlt />
          <span>View All</span>
        </button>
      </div>
      <div className="flex justify-between items-end gap-2">
        {historyData.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full flex justify-center">
              <div 
                className={`w-8 h-${item.mood * 6} rounded-t-lg ${getMoodColor(item.mood)} transition-all hover:scale-110`}
                style={{ height: `${item.mood * 12}px` }}
              />
            </div>
            <span className="text-xs text-gray-500 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodHistory;