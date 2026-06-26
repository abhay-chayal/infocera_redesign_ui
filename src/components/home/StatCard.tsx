import { type ElementType, useEffect, useRef } from 'react';
import { Card } from '../shared/Card';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  // Extract number and non-numeric parts from string like "500+" or "$50M"
  const numericMatch = value.match(/[\d,.]+/);
  const numericString = numericMatch ? numericMatch[0].replace(/,/g, '') : "0";
  const numericValue = parseFloat(numericString);
  
  const prefix = value.substring(0, numericMatch ? value.indexOf(numericMatch[0]) : 0);
  const postSuffix = value.substring(numericMatch ? value.indexOf(numericMatch[0]) + numericMatch[0].length : value.length);
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return numericString.includes('.') ? latest.toFixed(1) : Math.floor(latest).toString();
  });

  useEffect(() => {
    if (isInView && numericMatch) {
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, numericMatch, count]);

  if (!numericMatch) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}<motion.span>{rounded}</motion.span>{postSuffix}
    </span>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon: ElementType;
  suffix?: string;
}

export const StatCard = ({ value, label, icon: Icon, suffix }: StatCardProps) => {
  return (
    <Card variant="standard" themeColor="purple" className="group p-8 flex flex-col items-center justify-center h-full">
      {/* Decorative gradient orb on hover */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-fuchsia-500/10 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:bg-blue-500/20 group-hover:text-cyan-400 group-hover:border-blue-500/30 transition-all duration-300 text-zinc-400 shadow-inner">
          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-3 tracking-tight">
          <AnimatedCounter value={value} />
        </h3>
        
        <p className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-1">
          {label}
        </p>
        
        {suffix && (
          <p className="text-xs text-zinc-400 font-medium">
            {suffix}
          </p>
        )}
      </div>
    </Card>
  );
};
