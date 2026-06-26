import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variantStyles = {
  primary: 'bg-white text-black shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] hover:bg-zinc-100 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]',
  secondary: 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-cyan-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]',
  outline: 'bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20',
  ghost: 'bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white',
  link: 'text-cyan-400 underline-offset-4 hover:text-blue-300 hover:underline',
};

export const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  icon: 'w-10 h-10 p-0',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, href, target, rel, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 ease-out font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[black]';
    // Add physical press feedback to all but link variants
    const pressStyles = variant !== 'link' ? 'active:scale-[0.98]' : '';
    
    const combinedClassName = cn(
      baseStyles,
      pressStyles,
      variantStyles[variant],
      sizeStyles[size],
      (disabled || isLoading) && 'opacity-50 cursor-not-allowed pointer-events-none',
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      const isExternal = href.startsWith('http');
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={rel}
            className={combinedClassName}
            {...(props as any)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={href}
          target={target}
          className={combinedClassName}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
