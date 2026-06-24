import React from 'react';
import { cn } from './Button';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  return (
    <div className={cn('mx-auto px-6 md:px-12 w-full', sizes[size], className)}>
      {children}
    </div>
  );
};
