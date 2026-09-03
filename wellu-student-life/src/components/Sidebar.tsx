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
  FaRobot,
  FaTimes
} from 'react-icons/fa';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const currentItems = [
  { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
  { icon: FaChartLine, label: 'Mood Tracker', path: '/mood-tracker' },
  { icon: FaBook, label: 'Journal', path: '/journal' },
  { icon: FaHeart, label: 'Affirmations', path: '/affirmations' },
  { icon: FaLightbulb, label: 'Wellness Tips', path: '/wellness-tips' },
  { icon: FaBell, label: 'Reminders', path: '/calendar-reminders' },
  { icon: FaUser, label: 'Profile', path: '/profile' },
  { icon: FaRobot, label: 'AI Companion', path: '/ai-companion' },
];

const upcomingItems = [
  { icon: FaWind, label: 'Breathing' },
  { icon: FaUser, label: 'Campus Groups' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose = () => undefined }) => {
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
          w-60 h-screen
          bg-white border-r border-gray-100 
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:flex-shrink-0
          shadow-xl lg:shadow-none
        `}
      >
        {/* Header with Close Button */}
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={onClose}>
            <img src="/wellu-logo.png" alt="WellU" className="h-12 w-auto object-contain" />
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
        
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Current</p>
          {currentItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all no-underline ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 font-medium shadow-sm'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                  <span className={`text-lg ${isActive ? 'text-emerald-600' : ''}`}>
                  <Icon />
                </span>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
          <p className="px-3 pt-6 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Coming soon</p>
          {upcomingItems.map(({ icon: Icon, label }) => (
            <button key={label} disabled className="flex w-full cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-gray-400 opacity-60">
              <span className="text-lg"><Icon /></span>
              <span className="text-sm">{label}</span>
              <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-400">Soon</span>
            </button>
          ))}
          <p className="px-3 pt-6 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Friends</p>
          {[
            { name: 'Maya Chen', initials: 'MC', color: 'bg-emerald-100 text-emerald-700' },
            { name: 'Jordan Lee', initials: 'JL', color: 'bg-sky-100 text-sky-700' },
            { name: 'Sam Rivera', initials: 'SR', color: 'bg-amber-100 text-amber-700' },
          ].map((friend) => (
            <div key={friend.name} className="flex items-center gap-3 px-3 py-2 text-gray-600">
              <span className={`w-7 h-7 rounded-full ${friend.color} flex items-center justify-center text-[9px] font-bold`}>{friend.initials}</span>
              <span className="text-xs">{friend.name}</span>
            </div>
          ))}
          <p className="px-3 pt-6 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Settings</p>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold shadow-sm">A</div>
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