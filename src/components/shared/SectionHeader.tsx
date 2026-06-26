import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  eyebrow?: string | React.ReactNode;
  eyebrowColor?: string; // Tailwind text color class, e.g., 'text-cyan-400'
  align?: 'left' | 'center';
  className?: string; // Optional wrapper class
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  eyebrow, 
  eyebrowColor = 'text-blue-400', 
  align = 'center',
  className = ''
}: SectionHeaderProps) => {
  
  const alignmentClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const subtitleMaxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <motion.div 
      className={`flex flex-col ${alignmentClass} ${className} mb-12 lg:mb-16`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <motion.span 
          variants={fadeInUp}
          className={`${eyebrowColor} text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2`}
        >
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-[1.2]"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={fadeInUp}
          className={`text-lg md:text-xl text-zinc-400 leading-relaxed ${subtitleMaxWidth}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
