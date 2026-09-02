import React from 'react';

interface AnimatedTechGridProps {
  className?: string;
  cellSize?: number;
  highlightColor?: 'slate' | 'emerald' | 'cyan' | 'pink' | 'orange' | 'amber' | 'purple';
  cells?: { col: number; row: number; type: 'darken' | 'accent' }[];
}

export const AnimatedTechGrid: React.FC<AnimatedTechGridProps> = ({
  className = '',
  cellSize = 40,
  highlightColor = 'slate',
  cells = [],
}) => {
  const colorStylesMap: Record<string, { darken: string; accent: string }> = {
    slate: {
      darken: 'bg-slate-900/10 border border-slate-700/15',
      accent: 'bg-slate-700/8 border border-slate-600/15',
    },
    emerald: {
      darken: 'bg-emerald-700/10 border border-emerald-600/15',
      accent: 'bg-emerald-500/8 border border-emerald-400/15',
    },
    cyan: {
      darken: 'bg-cyan-700/10 border border-cyan-600/15',
      accent: 'bg-sky-500/8 border border-sky-400/15',
    },
    pink: {
      darken: 'bg-pink-700/10 border border-pink-600/15',
      accent: 'bg-rose-500/8 border border-rose-400/15',
    },
    orange: {
      darken: 'bg-orange-700/10 border border-orange-600/15',
      accent: 'bg-amber-500/8 border border-amber-400/15',
    },
    amber: {
      darken: 'bg-amber-700/10 border border-amber-600/15',
      accent: 'bg-amber-500/8 border border-amber-400/15',
    },
    purple: {
      darken: 'bg-purple-700/10 border border-purple-600/15',
      accent: 'bg-indigo-500/8 border border-indigo-400/15',
    },
  };

  const currentStyles = colorStylesMap[highlightColor] || colorStylesMap.slate;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Static Crisp Tech Graph Grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #CBD5E1 1px, transparent 1px),
            linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />

      {/* Render only explicitly passed static squares */}
      {cells.length > 0 && (
        <div className="absolute inset-0">
          {cells.map((cell, idx) => (
            <div
              key={`cell-${idx}-${cell.col}-${cell.row}`}
              className={`absolute rounded-[3px] ${
                cell.type === 'darken' ? currentStyles.darken : currentStyles.accent
              }`}
              style={{
                width: `${cellSize - 2}px`,
                height: `${cellSize - 2}px`,
                left: `${cell.col * cellSize + 1}px`,
                top: `${cell.row * cellSize + 1}px`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
