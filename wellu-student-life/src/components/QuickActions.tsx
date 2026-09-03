// components/QuickActions.tsx
import React from 'react';
import { 
  FaBook, 
  FaWind, 
  FaHeart, 
  FaLightbulb,
  FaChevronRight 
} from 'react-icons/fa';

const actions = [
  { icon: FaBook, label: 'Journal', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: FaWind, label: 'Breathing', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: FaHeart, label: 'Affirmations', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: FaLightbulb, label: 'Wellness Tips', color: 'text-yellow-500', bg: 'bg-yellow-50' },
];

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            className={`flex items-center justify-between p-4 rounded-xl ${action.bg} hover:shadow-md transition-all hover:scale-[1.02]`}
          >
            <span className="flex items-center gap-3">
              <span className={action.color}>
                <Icon />
              </span>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </span>
            <span className="text-gray-400 text-sm">
              <FaChevronRight />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;