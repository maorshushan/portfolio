import React from 'react';

interface GradientGameBlockProps {
  color: string;
  isSelected: boolean;
  isCorner: boolean;
  isCorrect: boolean;
  onClick: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  index: number;
}

const GradientGameBlock: React.FC<GradientGameBlockProps> = ({
  color,
  isSelected,
  isCorner,
  isCorrect,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
  index
}) => {
  return (
    <div
      className={`
        w-16 h-16 rounded-lg cursor-pointer transition-all duration-200
        ${isSelected ? 'ring-4 ring-xanthous ring-offset-2 scale-105' : ''}
        ${isCorner ? 'ring-2 ring-black ring-offset-1' : ''}
        ${isCorrect ? 'ring-2 ring-green-500 ring-offset-1' : ''}
        hover:scale-105 hover:shadow-lg
      `}
      style={{ backgroundColor: color }}
      onClick={onClick}
      draggable={!isCorner}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      data-index={index}
    >
      {isCorner && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default GradientGameBlock;
