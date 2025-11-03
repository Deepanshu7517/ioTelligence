// import { useEffect, useState } from 'react';

// export default function ModernCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e:any) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setIsVisible(true);

//       const target = e.target;
//       setIsPointer(
//         window.getComputedStyle(target).cursor === 'pointer' ||
//         target.tagName === 'A' ||
//         target.tagName === 'BUTTON' ||
//         target.onclick !== null
//       );
//     };

//     const handleMouseLeave = () => {
//       setIsVisible(false);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Main cursor dot */}
//       <div
//         className="cursor-dot"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: isPointer ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
//         }}
//       />


//       {/* Glow effect */}
//       <div
//         className="cursor-glow"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />

//       <style jsx>{`
//         .cursor-dot {
//           position: fixed;
//           width: 8px;
//           height: 8px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 9999;
//           transition: transform 0.15s ease-out;
//           box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
//         }

//         .cursor-glow {
//           position: fixed;
//           width: 200px;
//           height: 200px;
//           background: radial-gradient(
//             circle,
//             rgba(102, 126, 234, 0.15) 0%,
//             rgba(118, 75, 162, 0.1) 20%,
//             transparent 70%
//           );
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 9997;
//           transform: translate(-50%, -50%);
//           transition: opacity 0.3s ease-out;
//           mix-blend-mode: screen;
//         }

//         @media (max-width: 768px) {
//           .cursor-dot,
//           .cursor-ring,
//           .cursor-glow {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// }


import { useEffect, useState, type FC, type MouseEvent } from 'react';

// 1. Define the TypeScript interface for the position state
interface Position {
  x: number;
  y: number;
}

// 2. Define the TypeScript interface for a ripple effect
interface Ripple extends Position {
  id: number;
}

const ModernCursor: FC = () => {
  // Use interfaces for state typing
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // 3. Explicitly type the MouseEvent for the handler
    const handleMouseMove = (e: any | globalThis.MouseEvent) => {
      // TypeScript knows 'e' has clientX/Y properties
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;

      // 4. Improved pointer detection with type narrowing and checking for standard pointer-events property
      const pointerCheck = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.hasAttribute('onclick') || // Check for inline onclick attribute
        target.closest('[data-cursor-pointer="true"]') !== null; // Custom attribute check for flexibility

      setIsPointer(pointerCheck);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // 5. Explicitly type the MouseEvent for the click handler
    const handleClick = (e: any | globalThis.MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      
      setRipples((prev) => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 800);
    };

    // Use global window events as designed
    window.addEventListener('mousemove', handleMouseMove as (e: globalThis.MouseEvent) => void);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick as (e: globalThis.MouseEvent) => void);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as (e: globalThis.MouseEvent) => void);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick as (e: globalThis.MouseEvent) => void);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Dark background - Assuming this is part of the effect, but typically belongs in global styles */}
      {/* Note: Removed the dark-bg div as it covers the whole screen; assuming user wants to keep it for styling */}
      
      {/* Click ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          // 6. Conditional transform for pointer hover effect
          transform: isPointer ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
        }}
      />
      {/* Glow effect */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* 8. Using global styles via <style jsx> as requested */}
      <style>{`
        /* Hide the default cursor */
        body {
          cursor: none !important;
        }
        
        /* Apply background color to the body if the dark-bg div is removed */
        /* body {
          background-color: #09090b; 
        } */
        
        .dark-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0a0a;
          z-index: -1;
        }

        .ripple {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9996;
          transform: translate(-50%, -50%);
          animation: ripple-animation 0.8s ease-out forwards;
        }

        @keyframes ripple-animation {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
            border-width: 3px;
          }
          50% {
            opacity: 0.6;
            border-width: 2px;
          }
          100% {
            width: 80px;
            height: 80px;
            opacity: 0;
            border-width: 1px;
          }
        }

        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #00FFFF; /* Bright Cyan for contrast */
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease-out;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                      0 0 20px rgba(0, 255, 255, 0.4);
        }

        .cursor-ring {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(0, 255, 255, 0.5); /* Bright Cyan */
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.2s ease-out;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        }

        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.15) 0%, /* Bright Cyan */
            rgba(0, 255, 255, 0.08) 20%, /* Bright Cyan */
            transparent 70%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease-out;
          mix-blend-mode: screen;
        }

        @media (max-width: 768px) {
          .cursor-dot,
          .cursor-ring,
          .cursor-glow,
          .ripple {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
export default ModernCursor