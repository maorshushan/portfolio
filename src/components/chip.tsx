import React from 'react';

interface ChipProps {
  label: string;
  className?: string;
  color?: string; // Tailwind class or hex
}

// Helper to determine if a color is dark
function isColorDark(color: string): boolean {
  let c = color.trim();
  if (c.startsWith('var(')) return false; // fallback for CSS vars
  if (c.startsWith('#')) {
    c = c.slice(1);
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    // Perceived brightness
    return (r * 0.299 + g * 0.587 + b * 0.114) < 150;
  }
  return false;
}

export const Chip: React.FC<ChipProps> = ({ label, className = '', color }) => {
  const textColor = color && isColorDark(color) ? 'text-white' : 'text-black';
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${textColor} ${className}`}
      style={{ background: color || 'var(--color-xanthous)' }}
    >
      {label}
    </span>
  );
};
