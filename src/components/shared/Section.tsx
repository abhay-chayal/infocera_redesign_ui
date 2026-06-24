import React from 'react';
import { cn } from './Button';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

const spacingStyles = {
  none: '',
  sm: 'py-16 md:py-24',
  md: 'py-20 md:py-28',
  lg: 'py-28 md:py-32', // Enterprise spacing
  xl: 'py-32 md:py-48', // Ultra generous whitespace
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  spacing = 'xl',
}) => {
  return (
    <section id={id} className={cn('relative w-full', spacingStyles[spacing], className)}>
      {children}
    </section>
  );
};
