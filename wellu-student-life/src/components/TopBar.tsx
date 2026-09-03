// components/TopBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaBars } from 'react-icons/fa';

interface TopBarProps {
  onMenuClick?: () => void;  // Make it optional with default
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      console.warn('onMenuClick prop is not defined');
    }
  };

  return (
    <header className="relative z-30 flex-shrink-0 border-b border-lime-100 bg-white/95 px-3 py-2.5 backdrop-blur sm:px-6 sm:py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Visible on mobile only */}
          <button
            onClick={handleMenuClick}
            className="cursor-pointer rounded-xl p-2 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <FaBars className="text-xl text-gray-600" />
          </button>
          
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2">
            <img src="/wellu-logo.png" alt="WellU" className="h-10 w-auto object-contain" />
          </Link>

        </div>

        {/* Search - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search wellness..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <FaSearch className="text-gray-600 text-sm" />
          </button>
          
          <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <FaBell className="text-lg text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:block text-sm text-gray-600">Today</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700 shadow-sm">A</div>
          </div>
        </div>
      </div>
      
      {/* Mobile Search - Hidden on larger screens */}
      <div className="md:hidden mt-3">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search wellness..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all outline-none text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;