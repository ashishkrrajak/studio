
// src/components/animate-on-scroll-wrapper.tsx
'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';

interface AnimateOnScrollWrapperProps {
  children: React.ReactNode;
  initialClassName?: string; // Class for the initial (hidden) state
  animationClassName?: string; // Class to toggle for visibility
  rootMargin?: string; // IntersectionObserver rootMargin
  threshold?: number; // IntersectionObserver threshold
  className?: string; // Optional additional classes for the wrapper div itself
}

const AnimateOnScrollWrapper: React.FC<AnimateOnScrollWrapperProps> = ({
  children,
  initialClassName = 'scroll-fade-trigger',
  animationClassName = 'visible',
  rootMargin = '0px 0px -100px 0px', // Trigger when element is 100px from bottom of viewport
  threshold = 0.1, // Trigger when 10% of the element is visible
  className, // Pass through className for the wrapper div
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Ensure the initial class is applied
    currentRef.classList.add(initialClassName);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add(animationClassName);
        } else {
          // Remove the animation class when it leaves the viewport to allow re-triggering
          currentRef.classList.remove(animationClassName);
        }
      },
      {
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [initialClassName, animationClassName, rootMargin, threshold]);

  return (
    // The `initialClassName` is applied here.
    // The `animationClassName` (e.g., 'visible') is toggled by JS.
    // The passed `className` is for any other styling the wrapper div itself might need.
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimateOnScrollWrapper;
