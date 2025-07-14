import React, { useState, useEffect } from 'react';
import GradientGameBlock from './gradient-game-block';

interface GradientGameBoardProps {
  size: number;
  colors: string[];
  shuffledColors: string[];
  cornerColors: string[];
  onMove: (fromIndex: number, toIndex: number) => void;
  onComplete: () => void;
}

const GradientGameBoard: React.FC<GradientGameBoardProps> = ({
  size,
  colors,
  shuffledColors,
  onMove,
  onComplete
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentColors, setCurrentColors] = useState<string[]>(shuffledColors);

  useEffect(() => {
    setCurrentColors(shuffledColors);
  }, [shuffledColors]);

  const getCornerIndices = () => {
    return [0, size - 1, size * (size - 1), size * size - 1];
  };

  const isCorner = (index: number) => {
    return getCornerIndices().includes(index);
  };

  const isCorrect = (index: number) => {
    return currentColors[index] === colors[index];
  };

  const handleBlockClick = (index: number) => {
    if (isCorner(index)) return;

    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else if (selectedIndex !== index) {
      // Swap blocks
      const newColors = [...currentColors];
      [newColors[selectedIndex], newColors[index]] = [newColors[index], newColors[selectedIndex]];
      setCurrentColors(newColors);
      onMove(selectedIndex, index);
      setSelectedIndex(null);
    } else {
      setSelectedIndex(null);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    if (isCorner(index)) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text/plain', index.toString());
    setSelectedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (isCorner(dropIndex)) return;

    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    if (dragIndex !== dropIndex) {
      const newColors = [...currentColors];
      [newColors[dragIndex], newColors[dropIndex]] = [newColors[dropIndex], newColors[dragIndex]];
      setCurrentColors(newColors);
      onMove(dragIndex, dropIndex);
    }
    setSelectedIndex(null);
  };

  // Check if board is complete
  useEffect(() => {
    const isComplete = currentColors.every((color, index) => color === colors[index]);
    if (isComplete) {
      onComplete();
    }
  }, [currentColors, colors, onComplete]);

  return (
    <div 
      className="inline-grid gap-2 p-4 bg-white rounded-xl shadow-lg"
      style={{ 
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`
      }}
    >
      {currentColors.map((color, index) => (
        <GradientGameBlock
          key={index}
          color={color}
          isSelected={selectedIndex === index}
          isCorner={isCorner(index)}
          isCorrect={isCorrect(index)}
          onClick={() => handleBlockClick(index)}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default GradientGameBoard;
