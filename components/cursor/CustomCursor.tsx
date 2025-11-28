'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Much faster, more responsive springs
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      setIsDark(theme === 'dark');
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const theme = localStorage.getItem('theme') || 'dark';
      setIsDark(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot - follows precisely */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div
          className={`rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
          animate={{
            width: isPointer ? 40 : 8,
            height: isPointer ? 40 : 8,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      {/* Trail dot 1 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHidden ? 0 : 0.4,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
        />
      </motion.div>

      {/* Trail dot 2 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 35, stiffness: 300 }),
          y: useSpring(cursorY, { damping: 35, stiffness: 300 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHidden ? 0 : 0.2,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
        />
      </motion.div>
    </>
  );
}
