import React, { useState, useEffect } from 'react';
import GradientGameBoard from './gradient-game-board';

interface GradientGameProps {
  className?: string;
}

const GradientGame: React.FC<GradientGameProps> = ({ className = '' }) => {
  const [level, setLevel] = useState(3);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [colors, setColors] = useState<string[]>([]);
  const [shuffledColors, setShuffledColors] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Generate gradient colors between corner colors
  const generateGradientColors = (size: number) => {
    const cornerColors = [
      '#ffbc42', // xanthous
      '#E63274', // razzmatazz
      '#73D2DE', // nonphotoblue
      '#296E6B'  // caribbeancurrent
    ];

    const totalBlocks = size * size;
    const colors: string[] = [];

    // Helper function to interpolate between two colors
    const interpolateColor = (color1: string, color2: string, factor: number) => {
      const r1 = parseInt(color1.slice(1, 3), 16);
      const g1 = parseInt(color1.slice(3, 5), 16);
      const b1 = parseInt(color1.slice(5, 7), 16);
      
      const r2 = parseInt(color2.slice(1, 3), 16);
      const g2 = parseInt(color2.slice(3, 5), 16);
      const b2 = parseInt(color2.slice(5, 7), 16);
      
      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);
      
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    // Generate colors for each position
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const x = col / (size - 1);
        const y = row / (size - 1);
        
        // Interpolate between corner colors
        const topLeft = cornerColors[0];
        const topRight = cornerColors[1];
        const bottomLeft = cornerColors[2];
        const bottomRight = cornerColors[3];
        
        const top = interpolateColor(topLeft, topRight, x);
        const bottom = interpolateColor(bottomLeft, bottomRight, x);
        const finalColor = interpolateColor(top, bottom, y);
        
        colors.push(finalColor);
      }
    }

    return colors;
  };

  // Shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize level
  useEffect(() => {
    const newColors = generateGradientColors(level);
    setColors(newColors);
    
    // Create shuffled array with corners in place
    const shuffled = [...newColors];
    const cornerIndices = [0, level - 1, level * (level - 1), level * level - 1];
    
    // Get non-corner colors to shuffle
    const nonCornerColors = newColors.filter((_, index) => !cornerIndices.includes(index));
    const shuffledNonCorner = shuffleArray(nonCornerColors);
    
    // Place shuffled non-corner colors back in their positions
    let shuffledIndex = 0;
    for (let i = 0; i < shuffled.length; i++) {
      if (!cornerIndices.includes(i)) {
        shuffled[i] = shuffledNonCorner[shuffledIndex];
        shuffledIndex++;
      }
    }
    
    setShuffledColors(shuffled);
    setIsComplete(false);
  }, [level]);

  const handleMove = (fromIndex: number, toIndex: number) => {
    setMoves(prev => prev + 1);
    
    // Update shuffled colors
    const newShuffled = [...shuffledColors];
    [newShuffled[fromIndex], newShuffled[toIndex]] = [newShuffled[toIndex], newShuffled[fromIndex]];
    setShuffledColors(newShuffled);
  };

  const handleComplete = () => {
    setIsComplete(true);
    const levelScore = Math.max(1000 - moves * 10, 100);
    setScore(prev => prev + levelScore);
    
    // Show completion message and advance to next level
    setTimeout(() => {
      setLevel(prev => prev + 1);
      setMoves(0);
    }, 2000);
  };

  const resetLevel = () => {
    // Create shuffled array with corners in place
    const shuffled = [...colors];
    const cornerIndices = [0, level - 1, level * (level - 1), level * level - 1];
    
    // Get non-corner colors to shuffle
    const nonCornerColors = colors.filter((_, index) => !cornerIndices.includes(index));
    const shuffledNonCorner = shuffleArray(nonCornerColors);
    
    // Place shuffled non-corner colors back in their positions
    let shuffledIndex = 0;
    for (let i = 0; i < shuffled.length; i++) {
      if (!cornerIndices.includes(i)) {
        shuffled[i] = shuffledNonCorner[shuffledIndex];
        shuffledIndex++;
      }
    }
    
    setShuffledColors(shuffled);
    setMoves(0);
    setIsComplete(false);
  };

  return (
    <div className={`flex flex-col items-center space-y-6 p-8 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-2">Gradient Puzzle</h2>
        <p className="text-gray-600 mb-4">Arrange the colors to create a perfect gradient</p>
        
        <div className="flex justify-center space-x-8 text-sm">
          <div>
            <span className="font-semibold">Level:</span> {level}x{level}
          </div>
          <div>
            <span className="font-semibold">Moves:</span> {moves}
          </div>
          <div>
            <span className="font-semibold">Score:</span> {score}
          </div>
        </div>
      </div>

      <div className="relative">
        <GradientGameBoard
          size={level}
          colors={colors}
          shuffledColors={shuffledColors}
          cornerColors={[colors[0], colors[level - 1], colors[level * (level - 1)], colors[level * level - 1]]}
          onMove={handleMove}
          onComplete={handleComplete}
        />
        
        {isComplete && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Level Complete!</h3>
              <p className="text-gray-600">Moving to level {level + 1}...</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={resetLevel}
          className="px-4 py-2 bg-razzmatazz text-white rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Reset Level
        </button>
        <button
          onClick={() => setLevel(3)}
          className="px-4 py-2 bg-nonphotoblue text-white rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default GradientGame;
