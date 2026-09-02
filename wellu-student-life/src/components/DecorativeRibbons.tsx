import React from 'react';

interface RibbonProps {
  className?: string;
  variant?: 'cyan-loop' | 'peach-curl' | 'emerald-wave' | 'double-loop';
}

export const DecorativeRibbon: React.FC<RibbonProps> = ({ className = '', variant = 'cyan-loop' }) => {
  if (variant === 'cyan-loop') {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 650 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cyanRibbonInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="cyanRibbonOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="40%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>

        {/* Outer Halo / Border Stroke - Extra Large & Prominent */}
        <path
          d="M 30,580 C 160,650 340,520 290,290 C 240,90 70,180 160,380 C 250,540 480,480 620,390"
          stroke="url(#cyanRibbonOuter)"
          strokeWidth="78"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        />

        {/* Inner Core Stroke */}
        <path
          d="M 30,580 C 160,650 340,520 290,290 C 240,90 70,180 160,380 C 250,540 480,480 620,390"
          stroke="url(#cyanRibbonInner)"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Delicate inner shine line */}
        <path
          d="M 30,580 C 160,650 340,520 290,290 C 240,90 70,180 160,380 C 250,540 480,480 620,390"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (variant === 'peach-curl') {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 650 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="peachRibbonInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="peachRibbonOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEDD5" />
            <stop offset="40%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
        </defs>

        {/* Outer Halo */}
        <path
          d="M 600,150 C 480,50 240,170 290,400 C 340,610 510,500 420,310 C 330,150 110,220 30,330"
          stroke="url(#peachRibbonOuter)"
          strokeWidth="78"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        />

        {/* Inner Stroke */}
        <path
          d="M 600,150 C 480,50 240,170 290,400 C 340,610 510,500 420,310 C 330,150 110,220 30,330"
          stroke="url(#peachRibbonInner)"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Shine */}
        <path
          d="M 600,150 C 480,50 240,170 290,400 C 340,610 510,500 420,310 C 330,150 110,220 30,330"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (variant === 'emerald-wave') {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 750 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emeraldRibbonInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="emeraldRibbonOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DCFCE7" />
            <stop offset="40%" stopColor="#BBF7D0" />
            <stop offset="100%" stopColor="#86EFAC" />
          </linearGradient>
        </defs>

        <path
          d="M 20,280 C 180,370 360,150 490,200 C 620,250 670,430 730,330"
          stroke="url(#emeraldRibbonOuter)"
          strokeWidth="74"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.88"
        />
        <path
          d="M 20,280 C 180,370 360,150 490,200 C 620,250 670,430 730,330"
          stroke="url(#emeraldRibbonInner)"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
};
