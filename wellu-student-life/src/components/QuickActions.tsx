// components/QuickActions.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, 
  FaWind, 
  FaHeart, 
  FaLightbulb,
  FaChevronRight 
} from 'react-icons/fa';

const actions = [
  { icon: FaBook, label: 'Journal', path: '/journal', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: FaWind, label: 'Breathing', path: '/mood-tracker', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: FaHeart, label: 'Affirmations', path: '/affirmations', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: FaLightbulb, label: 'Wellness Tips', path: '/wellness-tips', color: 'text-yellow-500', bg: 'bg-yellow-50' },
];

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            to={action.path}
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
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;