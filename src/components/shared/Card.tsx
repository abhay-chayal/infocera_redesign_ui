import React, { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CardVariant = 'standard' | 'interactive' | 'list' | 'featured';
export type ThemeColor = 'purple' | 'indigo' | 'fuchsia' | 'emerald' | 'blue' | 'white';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  themeColor?: ThemeColor;
  className?: string;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'standard', themeColor = 'white', className, children, ...props }, ref) => {
    
    // Base styles applied to all cards
    const baseStyles = "relative overflow-hidden border border-white/5 bg-[#1e293b]/20 backdrop-blur-xl transition-all duration-500";
    
    // Variant specific styles
    const variants = {
      standard: "rounded-2xl lg:hover:border-white/10 lg:hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.05)]",
      interactive: "rounded-2xl lg:hover:-translate-y-1.5",
      list: "rounded-2xl lg:hover:bg-white/5",
      featured: "rounded-2xl lg:hover:-translate-y-2"
    };

    // Theme specific interactive styles (hover borders and shadows)
    // Only applied heavily for interactive and featured variants
    const getThemeStyles = () => {
      if (variant === 'standard' || variant === 'list') return '';
      
      const shadowSpread = variant === 'featured' ? 'shadow-[0_20px_50px_-15px_' : 'shadow-[0_15px_40px_-15px_';
      
      switch (themeColor) {
        case 'purple':
          return `lg:hover:border-purple-500/40 lg:hover:${shadowSpread}rgba(168,85,247,0.2)]`;
        case 'indigo':
          return `lg:hover:border-indigo-500/40 lg:hover:${shadowSpread}rgba(99,102,241,0.2)]`;
        case 'fuchsia':
          return `lg:hover:border-fuchsia-500/40 lg:hover:${shadowSpread}rgba(217,70,239,0.2)]`;
        case 'emerald':
          return `lg:hover:border-emerald-500/40 lg:hover:${shadowSpread}rgba(16,185,129,0.2)]`;
        case 'blue':
          return `lg:hover:border-blue-500/40 lg:hover:${shadowSpread}rgba(59,130,246,0.2)]`;
        case 'white':
        default:
          return `lg:hover:border-white/40 lg:hover:${shadowSpread}rgba(255,255,255,0.2)]`;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          getThemeStyles(),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
