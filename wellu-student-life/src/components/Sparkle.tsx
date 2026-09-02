import React from 'react';

interface SparkleProps {
  size?: number;
  className?: string;
  color?: string;
  delay?: number;
  withDot?: boolean;
  dotOffset?: { x: number; y: number };
}

export const Sparkle: React.FC<SparkleProps> = ({
  size = 20,
  className = '',
  color = '#FFFFFF',
  delay = 0,
  withDot = false,
  dotOffset = { x: 8, y: -6 },
}) => {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-twinkle filter drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          style={{
            animationDelay: `${delay}s`,
          }}
        >
          {/* Outer glow flare */}
          <path
            d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"
            fill={color}
          />
          {/* Inner bright core */}
          <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
        </svg>

        {withDot && (
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-white animate-twinkle shadow-[0_0_4px_#FFF]"
            style={{
              left: `${size / 2 + dotOffset.x}px`,
              top: `${size / 2 + dotOffset.y}px`,
              animationDelay: `${delay + 0.3}s`,
            }}
          />
        )}
      </div>
    </div>
  );
};

