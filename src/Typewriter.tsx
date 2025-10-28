import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export interface TypewriterProps {
  text: string | string[];     // Single text or an array of texts to loop through
  speed?: number;              // Typing speed in ms (default: 50)
  delay?: number;              // Delay before starting (ms)
  loop?: boolean;              // If true, loops typing and deleting
  cursor?: boolean;            // Show blinking cursor
  cursorChar?: string;         // Cursor character, default '|'
  className?: string;          // Optional class name for styling
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  cursor = true,
  cursorChar = '|',
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStarted = useRef(false);

  // Convert text to array for consistent handling
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentTextIndex] || '';

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Reset animation when text prop changes
  useEffect(() => {
    setDisplayText('');
    setCurrentTextIndex(0);
    setIsTyping(false);
    setIsDeleting(false);
    hasStarted.current = false;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [text]);

  // Main animation effect
  useEffect(() => {
    if (!textArray.length || !currentText) return;

    const animate = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        // Typing forward
        setDisplayText(currentText.slice(0, displayText.length + 1));
        setIsTyping(true);
        timeoutRef.current = setTimeout(animate, speed);
      } else if (!isDeleting && displayText.length === currentText.length) {
        // Finished typing current text
        setIsTyping(false);
        
        if (loop) {
          // Wait before starting to delete (if looping)
          timeoutRef.current = setTimeout(() => {
            if (textArray.length > 1) {
              // Multiple texts: delete and move to next
              setIsDeleting(true);
              timeoutRef.current = setTimeout(animate, speed);
            } else {
              // Single text: delete and restart
              setIsDeleting(true);
              timeoutRef.current = setTimeout(animate, speed);
            }
          }, 1000); // Pause at end before deleting
        }
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(displayText.slice(0, -1));
        timeoutRef.current = setTimeout(animate, speed / 2); // Delete faster
      } else if (isDeleting && displayText.length === 0) {
        // Finished deleting
        setIsDeleting(false);
        
        if (textArray.length > 1) {
          // Move to next text in array
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }
        
        // Start typing next text
        timeoutRef.current = setTimeout(animate, 500); // Brief pause before next text
      }
    };

    if (!hasStarted.current) {
      // Initial delay before starting
      hasStarted.current = true;
      timeoutRef.current = setTimeout(() => {
        animate();
      }, delay);
    } else {
      animate();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentText, currentTextIndex, isDeleting, isTyping, speed, delay, loop, textArray]);

  const containerClass = `typerly-container ${className}`.trim();

  return (
    <span className={containerClass}>
      {displayText}
      {cursor && (
        <span className="typerly-cursor">
          {cursorChar}
        </span>
      )}
    </span>
  );
};
