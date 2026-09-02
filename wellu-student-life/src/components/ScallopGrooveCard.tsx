import React from 'react';

interface ScallopGrooveCardProps {
  variant?: 'mint' | 'lavender' | 'peach' | 'sky' | 'rose' | 'dark';
  children: React.ReactNode;
  className?: string;
  badgeText?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeRotation?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

export const ScallopGrooveCard: React.FC<ScallopGrooveCardProps> = ({
  variant = 'mint',
  children,
  className = '',
  badgeText,
  badgeColor = 'bg-white',
  badgeTextColor = 'text-slate-900',
  badgeRotation = '-rotate-2',
  aspectRatio = 'aspect-[400/520]',
  width = 400,
  height = 520,
}) => {
  const gradientId = `scallop-grad-${variant}-${Math.random().toString(36).substr(2, 6)}`;
  const clipId = `scallop-clip-${variant}-${Math.random().toString(36).substr(2, 6)}`;

  // Colors config
  const colorMap = {
    mint: {
      gradient: ['#DCFCE7', '#C4F7D7', '#D4F8E2', '#E2FDEB'],
      border: '#86EFAC',
      shadow: 'rgba(34, 197, 94, 0.16)',
      sparkle: '#FFFFFF',
    },
    lavender: {
      gradient: ['#EDE9FE', '#DDD6FE', '#E4DCFE', '#F3EEFE'],
      border: '#C4B5FD',
      shadow: 'rgba(139, 92, 246, 0.16)',
      sparkle: '#FFFFFF',
    },
    peach: {
      gradient: ['#FFEDD5', '#FED7AA', '#FEE2CA', '#FFF3E8'],
      border: '#FDBA74',
      shadow: 'rgba(249, 115, 22, 0.16)',
      sparkle: '#FFFFFF',
    },
    sky: {
      gradient: ['#E0F2FE', '#BAE6FD', '#CEEEFE', '#F0F9FF'],
      border: '#7DD3FC',
      shadow: 'rgba(14, 165, 233, 0.16)',
      sparkle: '#FFFFFF',
    },
    rose: {
      gradient: ['#FCE7F3', '#FBCFE8', '#FDE0EF', '#FFF1F8'],
      border: '#F472B6',
      shadow: 'rgba(236, 72, 153, 0.16)',
      sparkle: '#FFFFFF',
    },
    dark: {
      gradient: ['#0F172A', '#1E293B', '#1E293B', '#0F172A'],
      border: '#334155',
      shadow: 'rgba(15, 23, 42, 0.25)',
      sparkle: '#38BDF8',
    },
  };

  const currentTheme = colorMap[variant] || colorMap.mint;

  // 5 Scallop arches for 400px width: 400 / 5 = 80 per arch
  // Arch points:
  // 0 -> 80 -> 160 -> 240 -> 320 -> 400
  const topCut = 34;
  const bottomCut = height - 34;

  const scallopPath = `
    M 0,${topCut}
    C 10,-8 70,-8 80,${topCut}
    C 90,-8 150,-8 160,${topCut}
    C 170,-8 230,-8 240,${topCut}
    C 250,-8 310,-8 320,${topCut}
    C 330,-8 390,-8 400,${topCut}
    L 400,${bottomCut}
    C 390,${height + 8} 330,${height + 8} 320,${bottomCut}
    C 310,${height + 8} 250,${height + 8} 240,${bottomCut}
    C 230,${height + 8} 170,${height + 8} 160,${bottomCut}
    C 150,${height + 8} 90,${height + 8} 80,${bottomCut}
    C 70,${height + 8} 10,${height + 8} 0,${bottomCut}
    Z
  `;

  return (
    <div className={`relative w-full ${aspectRatio} flex flex-col justify-between select-none ${className}`}>
      {/* Background SVG with true paper-cut bezier scalloped grooves */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: `drop-shadow(0 20px 35px ${currentTheme.shadow})` }}
        viewBox={`0 0 400 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="200" y1="0" x2="200" y2={height} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={currentTheme.gradient[0]} />
            <stop offset="30%" stopColor={currentTheme.gradient[1]} />
            <stop offset="70%" stopColor={currentTheme.gradient[2]} />
            <stop offset="100%" stopColor={currentTheme.gradient[3]} />
          </linearGradient>

          <clipPath id={clipId}>
            <path d={scallopPath} />
          </clipPath>
        </defs>

        {/* Scallop Body */}
        <path d={scallopPath} fill={`url(#${gradientId})`} />

        {/* Inner glow highlight */}
        <ellipse cx="200" cy="120" rx="160" ry="120" fill="#FFFFFF" fillOpacity="0.6" />
      </svg>

      {/* Optional Badge Tag on top */}
      {badgeText && (
        <div className="absolute top-6 left-6 z-20">
          <span
            className={`inline-block px-3.5 py-1 rounded-full ${badgeColor} ${badgeTextColor} font-extrabold text-[11px] tracking-wider uppercase shadow-xs ${badgeRotation} border border-black/5`}
          >
            {badgeText}
          </span>
        </div>
      )}

      {/* Clipped Content Area */}
      <div
        className="relative z-10 w-full h-full flex flex-col justify-between p-7 pt-14 pb-10"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
