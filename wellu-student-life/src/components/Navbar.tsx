import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogin, onSignup }) => {
  const [activeTab, setActiveTab] = useState('Features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['How it works', 'Features', 'Community'];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none select-none">
      <div 
        className={`w-full transition-all duration-500 ease-out px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${
          isScrolled ? 'pt-3 pb-2' : 'pt-5 sm:pt-7 pb-2'
        }`}
      >
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out p-2.5 px-5 sm:px-6 rounded-[22px] bg-white/65 backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.1),0_2px_6px_rgba(0,0,0,0.04)] ${isScrolled ? 'scale-[0.98]' : ''}`}
        >
          {/* Top specular highlight when glass is active */}
          {isScrolled && (
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
          )}

          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              id="navbar-logo"
              className="group flex items-center gap-3.5 font-display text-[30px] sm:text-[34px] font-black tracking-[-0.03em] text-[#0F172A] hover:opacity-90 transition-all"
            >
              <img 
                src="/image-removebg-preview.png" 
                alt="WellU Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform"
              />
              <span>WellU</span>
            </a>
          </div>

          {/* Center Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-slate-100/70 backdrop-blur-md border border-slate-200/60'
                : 'bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-xs'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                id={`nav-link-${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveTab(item)}
                className={`relative px-4 sm:px-5 py-1.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
                  activeTab === item
                    ? 'text-slate-900 bg-white shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right CTA Buttons: Log in + Sign up */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onLogin}
              className="hidden sm:inline-flex items-center px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[13.5px] font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Log in
            </button>

            <button
              type="button"
              onClick={onSignup}
              id="signup-btn"
              className={`group relative inline-flex items-center gap-1.5 px-4.5 sm:px-5.5 py-2 rounded-full text-[13px] sm:text-[13.5px] font-bold text-white active:scale-[0.98] transition-all whitespace-nowrap shadow-sm border border-emerald-600/30 ${
                isScrolled ? 'shadow-md' : 'shadow-md'
              }`}
              style={{ background: 'linear-gradient(135deg, #4cad84 0%, #318766 100%)' }}
            >
              <span>Sign up</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/80 border border-slate-200/80 text-slate-700 hover:bg-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-xl space-y-1.5 max-w-6xl mx-auto pointer-events-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setActiveTab(item);
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-2.5 rounded-2xl text-[14px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogin?.();
                }}
                className="w-full text-center py-2.5 rounded-2xl bg-slate-100 text-slate-800 font-bold text-[13.5px]"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSignup?.();
                }}
                className="w-full text-center py-2.5 rounded-2xl text-white font-bold text-[13.5px] shadow-sm border border-emerald-600/30"
                style={{ background: 'linear-gradient(135deg, #4cad84 0%, #318766 100%)' }}
              >
                Sign up for WellU
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


