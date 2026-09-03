// components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaChartLine, 
  FaBook, 
  FaWind, 
  FaHeart, 
  FaLightbulb,
  FaBell,
  FaUser,
  FaTimes
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: FaHome, label: 'Dashboard', path: '/' },
  { icon: FaChartLine, label: 'Mood Tracker', path: '/mood-tracker' },
  { icon: FaBook, label: 'Journal', path: '/journal' },
  { icon: FaWind, label: 'Breathing', path: '#' },
  { icon: FaHeart, label: 'Affirmations', path: '/affirmations' },
  { icon: FaLightbulb, label: 'Wellness Tips', path: '/wellness-tips' },
  { icon: FaBell, label: 'Reminders', path: '#' },
  { icon: FaUser, label: 'Profile', path: '#' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-50
          w-72 h-screen
          bg-white border-r border-gray-100 
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:flex-shrink-0
          shadow-xl lg:shadow-none
        `}
      >
        {/* Header with Close Button */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
              WellU
            </span>
          </Link>
          
          {/* Close Button - Visible on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close sidebar"
            type="button"
          >
            <FaTimes className="text-gray-500 text-lg" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return item.path === '#' ? (
              <button
                key={item.label}
                disabled
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-400 cursor-not-allowed opacity-60"
              >
                <span className="text-lg">
                  <Icon />
                </span>
                <span className="text-sm">{item.label}</span>
                <span className="ml-auto text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Soon</span>
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all no-underline ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-50 to-green-50 text-green-600 font-medium shadow-sm'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                <span className={`text-lg ${isActive ? 'text-green-600' : ''}`}>
                  <Icon />
                </span>
                <span className="text-sm">{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-8 bg-gradient-to-b from-green-500 to-yellow-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center text-white text-xs font-medium shadow-md">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">Alex</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;