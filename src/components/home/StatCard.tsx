import { type ElementType, useEffect, useRef } from 'react';
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
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center mb-6 text-zinc-500">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
          <AnimatedCounter value={value} />
        </h3>
        
        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.25em] mb-2">
          {label}
        </p>
        
        {suffix && (
          <p className="text-sm text-zinc-500 font-medium">
            {suffix}
          </p>
        )}
      </div>
    </div>
  );
};
