import React, { useState, useEffect } from 'react';

interface AnimatingWordsProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  scribbleSpeed?: number;
  pauseBetweenWords?: number;
  highlightColor?: string;
}

const AnimatingWords: React.FC<AnimatingWordsProps> = ({ 
  words, 
  className = '', 
  typeSpeed = 100, 
  scribbleSpeed = 50, 
  pauseBetweenWords = 3000,
  highlightColor = '#ffbc42'
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isScribbling, setIsScribbling] = useState(false);
  const [scribbleText, setScribbleText] = useState('');
  const [highlightWidth, setHighlightWidth] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Type the word
      if (currentText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timer);
      } else {
        // Start highlighting
        setIsHighlighting(true);
        setHighlightWidth(0);
        
        // Animate highlight from left to right
        const highlightInterval = setInterval(() => {
          setHighlightWidth(prev => {
            if (prev >= 100) {
              clearInterval(highlightInterval);
              return 100;
            }
            return prev + 2;
          });
        }, 5);

        // After highlighting, start scribbling
        const timer = setTimeout(() => {
          setIsHighlighting(false);
          setIsTyping(false);
          setIsScribbling(true);
          setScribbleText(currentText);
        }, pauseBetweenWords);
        return () => clearTimeout(timer);
      }
    } else if (isScribbling) {
      // Scribble over the word
      if (scribbleText.length > 0) {
        const timer = setTimeout(() => {
          // Remove one character from the end
          setScribbleText(prev => prev.slice(0, -1));
        }, scribbleSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished scribbling, move to next word
        setIsScribbling(false);
        setIsTyping(true);
        setCurrentText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setHighlightWidth(0);
        setIsHighlighting(false);
      }
    }
  }, [currentText, isTyping, isScribbling, scribbleText, currentWordIndex, words, typeSpeed, scribbleSpeed, pauseBetweenWords]);

  const displayText = isScribbling ? scribbleText : currentText;

  return (
    <div className={`inline-block ${className}`}>
      <span className="relative">
        {displayText}
        {isHighlighting && (
          <div 
            className="absolute inset-0 -z-10 rounded-sm"
            style={{
              background: highlightColor,
              width: `${highlightWidth}%`,
              clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
              transform: 'rotate(-1deg)',
              opacity: 0.7
            }}
          />
        )}
      </span>
    </div>
  );
};

export default AnimatingWords;
