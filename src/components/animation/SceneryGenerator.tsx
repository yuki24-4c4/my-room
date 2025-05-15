import React, { useState, useEffect, useRef } from 'react';
import { Trees as Tree, Palmtree, Wrench as Bench } from 'lucide-react';

// Define types of scenery elements
type ElementType = 'tree' | 'palm' | 'bench' | 'branch';

interface SceneryElement {
  id: string;
  type: ElementType;
  positionX: number;
  positionY: number;
  scale: number;
  speed: number;
  rotation: number;
  opacity: number;
}

const SceneryGenerator: React.FC = () => {
  const [elements, setElements] = useState<SceneryElement[]>([]);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const animationRef = useRef<number | null>(null);

  // Generate a random element
  const generateElement = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const types: ElementType[] = ['tree', 'palm', 'bench', 'branch'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Randomize vertical position, but keep trees and palms more often at the bottom
    let positionY;
    if (type === 'tree' || type === 'palm') {
      positionY = 65 + Math.random() * 15; // Bottom 65-80% of screen
    } else if (type === 'bench') {
      positionY = 70 + Math.random() * 10; // Bottom 70-80% of screen
    } else {
      positionY = 20 + Math.random() * 60; // More range for branches 20-80%
    }
    
    return {
      id,
      type,
      positionX: 110, // Start just off screen
      positionY, 
      scale: 0.5 + Math.random() * 1, // Random size
      speed: 0.5 + Math.random() * 1, // Random speed
      rotation: Math.random() * 10 - 5, // Slight rotation -5 to 5 degrees
      opacity: 0.5 + Math.random() * 0.5, // Random opacity
    };
  };

  const updateElementPositions = () => {
    setElements(prevElements => 
      prevElements
        .map(element => ({
          ...element,
          positionX: element.positionX - element.speed, // Move from right to left
        }))
        .filter(element => element.positionX > -10) // Remove elements that have gone offscreen
    );
    
    animationRef.current = requestAnimationFrame(updateElementPositions);
  };

  useEffect(() => {
    // Start the animation loop
    animationRef.current = requestAnimationFrame(updateElementPositions);
    
    // Generate initial elements
    const initialElements = [];
    for (let i = 0; i < 5; i++) {
      const element = generateElement();
      // Distribute initial elements across the screen
      element.positionX = Math.random() * 100;
      initialElements.push(element);
    }
    setElements(initialElements);
    
    // Schedule new elements to appear
    const createNewElement = () => {
      const timeoutId = setTimeout(() => {
        setElements(prev => {
          // Check for overlap (avoid placing elements too close to each other)
          const element = generateElement();
          
          // Simple check to ensure elements aren't too close vertically
          const tooClose = prev.some(existing => 
            Math.abs(existing.positionY - element.positionY) < 10 && 
            Math.abs(existing.positionX - element.positionX) < 30
          );
          
          return tooClose ? prev : [...prev, element];
        });
        
        // Schedule next element
        createNewElement();
      }, 2000 + Math.random() * 4000); // Random interval between 2-6 seconds
      
      timeoutRefs.current.push(timeoutId);
    };
    
    createNewElement();
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

  const renderElement = (element: SceneryElement) => {
    const style = {
      position: 'absolute' as const,
      left: `${element.positionX}%`,
      bottom: `${element.positionY}%`,
      transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
      opacity: element.opacity,
      transition: 'opacity 0.3s ease',
    };
    
    switch (element.type) {
      case 'tree':
        return <Tree style={style} size={60} className="text-[#5a3e2a] fill-[#526b47]" />;
      case 'palm':
        return <Palmtree style={style} size={70} className="text-[#5a3e2a] fill-[#628b69]" />;
      case 'bench':
        return <Bench style={style} size={40} className="text-[#5a3e2a]" />;
      case 'branch':
        return (
          <div style={style} className="w-24 h-1 bg-[#5a3e2a] rounded-full">
            <div className="w-1 h-16 bg-[#5a3e2a] rounded-full transform -translate-x-1/2"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(element => (
        <div key={element.id}>
          {renderElement(element)}
        </div>
      ))}
    </div>
  );
};

export default SceneryGenerator;
