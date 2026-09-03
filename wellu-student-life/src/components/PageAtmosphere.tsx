import React from 'react';
import { AnimatedTechGrid } from './AnimatedTechGrid';
import { Sparkle } from './Sparkle';

interface PageAtmosphereProps {
  accent?: 'emerald' | 'cyan' | 'pink' | 'amber';
}

const PageAtmosphere: React.FC<PageAtmosphereProps> = ({ accent = 'emerald' }) => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <AnimatedTechGrid
      cellSize={48}
      highlightColor={accent}
      className="opacity-70"
      cells={[]}
    />
    <Sparkle size={15} color="#BAE6FD" delay={0.4} className="left-[18%] top-28" withDot />
    <Sparkle size={19} color="#A7E8C2" delay={1.6} className="right-[15%] top-44" />
    <Sparkle size={13} color="#F9A8D4" delay={2.4} className="right-[35%] top-[62%]" withDot />
    <div className="absolute -right-24 top-24 h-48 w-48 rounded-full border-[18px] border-white/60" />
  </div>
);

export default PageAtmosphere;
