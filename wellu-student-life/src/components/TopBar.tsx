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
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex-shrink-0 relative z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Visible on mobile only */}
          <button
            onClick={handleMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle menu"
            type="button"
          >
            <FaBars className="text-gray-600 text-xl" />
          </button>
          
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center text-white font-bold text-xs">
              W
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
              WellU
            </span>
          </Link>

          {/* Desktop Logo */}
          <Link to="/" className="hidden lg:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
              WellU
            </span>
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
            <FaBell className="text-gray-600 text-lg" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:block text-sm text-gray-600">Today</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center text-white text-xs font-medium shadow-md">
              A
            </div>
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