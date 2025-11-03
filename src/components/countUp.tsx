import React, { useState, useEffect, useRef } from "react";

// --- TypeScript Interfaces ---
interface Milestone {
  year: number;
  data: number;
  description: string;
}

interface CountUpProps {
  endValue: number;
  duration?: number;
}

interface MilestoneDisplayProps {
  milestones?: Milestone[];
}

// --- Mock Data ---
const mockMilestones: Milestone[] = [
  { year: 2020, data: 15000, description: "Projects Delivered" },
  { year: 2022, data: 98, description: "Client Satisfaction Rate (%)" },
  { year: 2024, data: 12, description: "Global Offices" },
  { year: 2025, data: 55, description: "Team Members" },
];

// --- CountUp Component ---
const CountUp: React.FC<CountUpProps> = ({ endValue, duration = 1000 }) => {
  const [count, setCount] = useState<number>(0);
  // State to track if the element has entered the viewport
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  
  // Ref to attach to the element for Intersection Observer
  const elementRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const stepRef = useRef<number | null>(null);

  // --- 1. Intersection Observer Logic (Trigger) ---
  useEffect(() => {
    // If we have already animated, there is no need to observe anymore
    if (hasAnimated) return;

    // We must ensure IntersectionObserver exists (it's standard, but good practice)
    if (!('IntersectionObserver' in window)) {
        setHasAnimated(true); // Fallback: just run the animation immediately
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (visible)
        if (entry.isIntersecting) {
          setHasAnimated(true); 
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // Viewport is the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the item is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  // --- 2. Animation Logic (Effect) ---
  useEffect(() => {
    const target = Number(endValue);
    
    // Condition 1: Must be visible to animate
    if (!hasAnimated || isNaN(target) || target <= 0) {
      // If not yet animated or invalid target, display the final value instantly
      if (target > 0) setCount(target);
      return;
    }
    
    // Reset counter to 0 before starting animation
    setCount(0);

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const newCount = Math.floor(progress * target);

      setCount(newCount);
      if (progress < 1) stepRef.current = requestAnimationFrame(step);
      else setCount(target);
    };

    stepRef.current = requestAnimationFrame(step);
    
    return () => {
      if (stepRef.current) cancelAnimationFrame(stepRef.current);
    };
  }, [endValue, duration, hasAnimated]); // hasAnimated is the trigger dependency

  // The ref is attached to the wrapper div to enable observation
  return <div ref={elementRef}>{count.toLocaleString()}</div>;
};

// --- Main Milestone Display Component ---
const MilestoneDisplay: React.FC<MilestoneDisplayProps> = ({
  milestones = mockMilestones,
}) => {
  return (
    <div className="flex w-full max-w-sm justify-between gap-4">
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className="relative flex flex-1 flex-col items-center text-center"
        >
          {/* Animated CountUp value */}
          <div className="mb-2 hover:scale-150 duration-300 transition-all text-3xl font-bold text-primary">
            {/* The CountUp component now handles its own visibility trigger */}
            <CountUp endValue={milestone.data || milestone.year} duration={1000} />
          </div>

          {/* Description */}
          <div className="text-sm text-foreground/80">
            {milestone.description}
          </div>

          {/* Connecting line */}
          {index < milestones.length - 1 && (
            <div className="absolute left-full top-4 h-0.5 w-full -translate-x-1/2 bg-border" />
          )}
        </div>
      ))}
    </div>
  );
};

// --- Main App Component ---
// Reverted to minimal wrapper to match original UI intent
// Added min-h-[150vh] temporarily to the wrapper div for testing the scroll functionality
// You may remove min-h-[150vh] if this component is part of a larger, already scrollable page
const Count: React.FC = () => {
  return (
      <MilestoneDisplay />
  );
};

export default Count;
