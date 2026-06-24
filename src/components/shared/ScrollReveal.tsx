import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  width?: "fit-content" | "100%";
  once?: boolean;
  amount?: "some" | "all" | number;
  delay?: number;
}

export const ScrollReveal = ({ 
  children, 
  variants = fadeInUp, 
  className = "", 
  width = "100%",
  once = true,
  amount = 0.1,
  delay = 0
}: ScrollRevealProps) => {
  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
