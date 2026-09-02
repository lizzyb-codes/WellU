import React from 'react';

interface LaurelWreathProps {
  children: React.ReactNode;
  subContent: React.ReactNode;
  className?: string;
}

export const LaurelWreath: React.FC<LaurelWreathProps> = ({
  children,
  subContent,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="flex items-center justify-center gap-3">
        {/* Left Laurel Branch */}
        <svg
          width="34"
          height="64"
          viewBox="0 0 34 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#CBD5E1] shrink-0"
        >
          {/* Stem curve */}
          <path
            d="M26 6C18 18 10 34 16 58"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path
            d="M26 6C23 3 17 5 19 9C21 13 27 9 26 6Z"
            fill="currentColor"
          />
          <path
            d="M21 16C16 14 12 18 15 21C18 24 23 19 21 16Z"
            fill="currentColor"
          />
          <path
            d="M29 18C27 13 32 10 34 14C36 18 31 20 29 18Z"
            fill="currentColor"
          />
          <path
            d="M15 28C10 27 7 32 11 35C15 38 18 31 15 28Z"
            fill="currentColor"
          />
          <path
            d="M24 30C21 26 27 23 29 27C31 31 26 33 24 30Z"
            fill="currentColor"
          />
          <path
            d="M12 42C7 43 6 49 11 50C16 51 16 44 12 42Z"
            fill="currentColor"
          />
          <path
            d="M22 43C18 41 22 36 26 39C29 42 25 46 22 43Z"
            fill="currentColor"
          />
          <path
            d="M14 54C10 56 12 62 17 61C21 60 19 54 14 54Z"
            fill="currentColor"
          />
        </svg>

        {/* Center Main Text */}
        <div className="font-bold text-[#1E293B] text-[15px] sm:text-[16px] tracking-tight whitespace-nowrap">
          {children}
        </div>

        {/* Right Laurel Branch (Mirrored) */}
        <svg
          width="34"
          height="64"
          viewBox="0 0 34 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#CBD5E1] shrink-0 scale-x-[-1]"
        >
          {/* Stem curve */}
          <path
            d="M26 6C18 18 10 34 16 58"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path
            d="M26 6C23 3 17 5 19 9C21 13 27 9 26 6Z"
            fill="currentColor"
          />
          <path
            d="M21 16C16 14 12 18 15 21C18 24 23 19 21 16Z"
            fill="currentColor"
          />
          <path
            d="M29 18C27 13 32 10 34 14C36 18 31 20 29 18Z"
            fill="currentColor"
          />
          <path
            d="M15 28C10 27 7 32 11 35C15 38 18 31 15 28Z"
            fill="currentColor"
          />
          <path
            d="M24 30C21 26 27 23 29 27C31 31 26 33 24 30Z"
            fill="currentColor"
          />
          <path
            d="M12 42C7 43 6 49 11 50C16 51 16 44 12 42Z"
            fill="currentColor"
          />
          <path
            d="M22 43C18 41 22 36 26 39C29 42 25 46 22 43Z"
            fill="currentColor"
          />
          <path
            d="M14 54C10 56 12 62 17 61C21 60 19 54 14 54Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subcontent underneath */}
      <div className="mt-1 text-[13.5px] sm:text-[14px] font-semibold text-[#475569] tracking-tight">
        {subContent}
      </div>
    </div>
  );
};
