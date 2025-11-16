import React, { useState } from 'react';
import { getTechIcon } from '@/lib/techIcons';

interface TechIconProps {
  techName: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ techName, size = 32, className = '' }: TechIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const techConfig = getTechIcon(techName);

  // Fallback for unmapped technologies
  if (!techConfig) {
    const firstLetter = techName.charAt(0).toUpperCase();
    const fallbackColor = '#6B7280'; // gray-500

    return (
      <div
        className={`relative inline-flex items-center justify-center ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="img"
        aria-label={techName}
      >
        <div
          className="rounded-full flex items-center justify-center font-bold text-white transition-transform hover:scale-110"
          style={{
            width: size,
            height: size,
            backgroundColor: fallbackColor,
            fontSize: size * 0.5,
          }}
        >
          {firstLetter}
        </div>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs font-medium rounded-md shadow-lg border border-border whitespace-nowrap z-50 pointer-events-none">
            {techName}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover"></div>
          </div>
        )}
      </div>
    );
  }

  const Icon = techConfig.icon;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="img"
      aria-label={techConfig.name}
    >
      <Icon
        className="transition-transform hover:scale-110"
        style={{ width: size, height: size, color: techConfig.color }}
      />
      {showTooltip && (
        <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs font-medium rounded-md shadow-lg border border-border whitespace-nowrap z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-100">
          {techConfig.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover"></div>
        </div>
      )}
    </div>
  );
}
