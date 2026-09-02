import React from 'react';

interface ScallopWaveDividerProps {
  color?: string;
  bgColor?: string;
  direction?: 'down' | 'up';
  className?: string;
}

export const ScallopWaveDivider: React.FC<ScallopWaveDividerProps> = ({
  color = '#DCFCE7',
  bgColor = 'transparent',
  direction = 'down',
  className = '',
}) => {
  // SVG Scallop repeating wave pattern
  return (
    <div className={`w-full overflow-hidden leading-none select-none relative ${className}`} style={{ backgroundColor: bgColor }}>
      <svg
        viewBox="0 0 1200 40"
        className={`w-full h-7 sm:h-10 text-[${color}] fill-current block ${direction === 'up' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,0 
            Q30,36 60,0 
            Q90,36 120,0 
            Q150,36 180,0 
            Q210,36 240,0 
            Q270,36 300,0 
            Q330,36 360,0 
            Q390,36 420,0 
            Q450,36 480,0 
            Q510,36 540,0 
            Q570,36 600,0 
            Q630,36 660,0 
            Q690,36 720,0 
            Q750,36 780,0 
            Q810,36 840,0 
            Q870,36 900,0 
            Q930,36 960,0 
            Q990,36 1020,0 
            Q1050,36 1080,0 
            Q1110,36 1140,0 
            Q1170,36 1200,0 
            L1200,0 L0,0 Z
          "
          fill={color}
        />
      </svg>
    </div>
  );
};
