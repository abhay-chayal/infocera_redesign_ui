import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  eyebrow?: string | React.ReactNode;
  eyebrowColor?: string; // Tailwind text color class, e.g., 'text-indigo-400'
  titleColor?: string;
  align?: 'left' | 'center';
  className?: string; // Optional wrapper class
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  eyebrow, 
  eyebrowColor = 'text-zinc-500', 
  titleColor = 'text-slate-900 dark:text-white',
  align = 'center',
  className = ''
}: SectionHeaderProps) => {
  
  const alignmentClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const subtitleMaxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <motion.div 
      className={`flex flex-col ${alignmentClass} ${className} mb-16 lg:mb-24`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <motion.span 
          variants={fadeInUp}
          className={`${eyebrowColor} text-[11px] font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2`}
        >
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2 
        variants={fadeInUp}
        className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.05] transition-colors duration-700 ${titleColor}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={fadeInUp}
          className={`text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed font-medium transition-colors duration-700 ${subtitleMaxWidth}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
