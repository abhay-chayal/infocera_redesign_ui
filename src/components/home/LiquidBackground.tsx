import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export const LiquidBackground = () => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable heavy mouse tracking on mobile
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const springConfig = { damping: 30, stiffness: 40, mass: 2 };
  
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set(mousePos.x * 200);
    mouseY.set(mousePos.y * 200);
  }, [mousePos, mouseX, mouseY]);

  // Colors adapted for both themes
  const color1 = theme === 'dark' ? 'bg-[#0ea5e9]' : 'bg-[#0ea5e9]';
  const color2 = theme === 'dark' ? 'bg-indigo-600' : 'bg-blue-400';
  const color3 = theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-300';
  const color4 = theme === 'dark' ? 'bg-purple-900' : 'bg-indigo-200';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-1000 isolate">
      
      {/* SVG Filter for Liquid "Gooey" Effect - Only rendered on Desktop for performance */}
      {!isMobile && (
        <svg className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -20" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      )}

      <div 
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000" 
        style={!isMobile ? { filter: 'url(#goo)' } : undefined}
      >
        
        {/* Blob 1: Interacts with pointer */}
        <motion.div 
          className={`absolute w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full blur-3xl opacity-80 ${color1} transition-colors duration-1000`}
          style={{ 
            x: mouseX, 
            y: mouseY,
            top: '20%',
            left: '20%',
          }}
        />

        {/* Blob 2: Moves inversely to pointer */}
        <motion.div 
          className={`absolute w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] rounded-full blur-3xl opacity-80 ${color2} transition-colors duration-1000`}
          style={{ 
            x: useTransform(mouseX, (v) => -v * 1.5), 
            y: useTransform(mouseY, (v) => -v * 1.5),
            bottom: '10%',
            right: '10%',
          }}
        />

        {/* Blob 3: Slow autonomous floating */}
        <motion.div 
          className={`absolute w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-full blur-3xl opacity-60 ${color3} transition-colors duration-1000`}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            top: '40%',
            left: '40%',
            x: useTransform(mouseX, (v) => v * 0.5),
            y: useTransform(mouseY, (v) => v * 0.5)
          }}
        />

        {/* Blob 4: Background ambient filler */}
        <motion.div 
          className={`absolute w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] rounded-full blur-3xl opacity-50 ${color4} transition-colors duration-1000`}
          animate={{
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            top: '0%',
            right: '0%'
          }}
        />
      </div>

    </div>
  );
};
