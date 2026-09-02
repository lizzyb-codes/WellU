import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Sparkle } from './Sparkle';

export const ScallopedCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[510px] aspect-[500/590] mx-auto flex items-center justify-center select-none">
      
      {/* Background Soft Glow Fade */}
      <div className="absolute inset-0 bg-radial from-emerald-200/40 via-emerald-100/10 to-transparent blur-2xl pointer-events-none" />

      {/* Background SVG with deep prominent paper-like scalloped arches */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-[0_24px_50px_rgba(34,197,94,0.18)]"
        viewBox="0 0 500 590"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="scallopMintGradient" x1="250" y1="0" x2="250" y2="590" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DCFCE7" />
            <stop offset="25%" stopColor="#C4F7D7" />
            <stop offset="70%" stopColor="#D4F8E2" />
            <stop offset="100%" stopColor="#E2FDEB" />
          </linearGradient>
          <radialGradient id="mintInnerGlow" cx="50%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          {/* Deep Paper-like Scalloped Wave Clipping */}
          <clipPath id="scallopCardClip">
            <path
              d="
                M 0,44
                C 12,-10 72,-10 83.33,44
                C 95,-10 155,-10 166.66,44
                C 178,-10 238,-10 250,44
                C 262,-10 322,-10 333.33,44
                C 345,-10 405,-10 416.66,44
                C 428,-10 488,-10 500,44
                L 500,546
                C 488,600 428,600 416.66,546
                C 405,600 345,600 333.33,546
                C 322,600 262,600 250,546
                C 238,600 178,600 166.66,546
                C 155,600 95,600 83.33,546
                C 72,600 12,600 0,546
                Z
              "
            />
          </clipPath>
        </defs>

        {/* Outer Mint Shape with 6 prominent deep wave arches */}
        <path
          d="
            M 0,44
            C 12,-10 72,-10 83.33,44
            C 95,-10 155,-10 166.66,44
            C 178,-10 238,-10 250,44
            C 262,-10 322,-10 333.33,44
            C 345,-10 405,-10 416.66,44
            C 428,-10 488,-10 500,44
            L 500,546
            C 488,600 428,600 416.66,546
            C 405,600 345,600 333.33,546
            C 322,600 262,600 250,546
            C 238,600 178,600 166.66,546
            C 155,600 95,600 83.33,546
            C 72,600 12,600 0,546
            Z
          "
          fill="url(#scallopMintGradient)"
        />

        {/* Soft radial highlight in upper center */}
        <ellipse cx="250" cy="210" rx="190" ry="190" fill="url(#mintInnerGlow)" />
      </svg>

      {/* Glitter / Sparkles positioned exactly matching the composition */}
      {/* 1. Top Left Sparkle with companion micro dot */}
      <Sparkle
        size={24}
        className="top-[4%] left-[6%]"
        color="#FFFFFF"
        delay={0}
        withDot={true}
        dotOffset={{ x: 10, y: -4 }}
      />

      {/* 2. Top Right Sparkle with companion micro dot */}
      <Sparkle
        size={22}
        className="top-[5%] right-[7%]"
        color="#FFFFFF"
        delay={0.7}
        withDot={true}
        dotOffset={{ x: -8, y: 7 }}
      />

      {/* 3. Upper Right Outer Sparkle */}
      <Sparkle
        size={24}
        className="top-[20%] -right-[3.5%]"
        color="#FFFFFF"
        delay={1.4}
      />

      {/* 4. Mid Left Sparkle near phone edge */}
      <Sparkle
        size={19}
        className="top-[44%] left-[5%]"
        color="#FFFFFF"
        delay={1.1}
      />

      {/* 5. Lower Left Sparkle */}
      <Sparkle
        size={22}
        className="bottom-[13%] left-[7%]"
        color="#FFFFFF"
        delay={2.0}
        withDot={true}
        dotOffset={{ x: 9, y: -6 }}
      />

      {/* 6. Lower Right Sparkle */}
      <Sparkle
        size={24}
        className="bottom-[12%] right-[6%]"
        color="#FFFFFF"
        delay={0.9}
      />

      {/* 7. Mid Right Sparkle */}
      <Sparkle
        size={17}
        className="top-[38%] right-[4%]"
        color="#FFFFFF"
        delay={1.6}
      />

      {/* Phone Mockup Container - Shifted down with bottom clipped cleanly by the green scalloped boundary */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          clipPath: 'url(#scallopCardClip)',
          WebkitClipPath: 'url(#scallopCardClip)',
        }}
      >
        <div className="transform translate-y-[68px] sm:translate-y-[78px] md:translate-y-[88px] pointer-events-auto drop-shadow-xl">
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
};
