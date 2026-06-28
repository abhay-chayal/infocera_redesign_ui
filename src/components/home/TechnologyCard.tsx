import { type ElementType, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface TechnologyCardProps {
  title: string;
  icon: ElementType;
  techs: string[];
  color?: string;
}

export const TechnologyCard = ({ title, icon: Icon, techs, color = "#ffffff" }: TechnologyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const flashlightColor = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.02)';
  const defaultIconColor = theme === 'dark' ? '#ffffff' : '#0F172A';

  return (
    <Link to="/services" className="block h-full group">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-8 lg:p-12 h-full flex flex-col rounded-3xl overflow-hidden backdrop-blur-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 transition-all duration-700 shadow-[0_4px_40px_rgba(0,0,0,0.03)] dark:shadow-none hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-none"
      >
        {/* Hover Flashlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${flashlightColor}, transparent 40%)`
          }}
        />

        {/* Ambient base glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-100/50 dark:from-white/[0.02] to-transparent z-0" />

        {/* Header */}
        <div className="relative z-10 flex items-center gap-6 mb-12">
          <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 transition-all duration-700 shadow-sm dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] group-hover:scale-110">
            <div 
              className="absolute inset-0 rounded-2xl transition-opacity duration-700 blur-md pointer-events-none"
              style={{
                backgroundColor: color,
                opacity: isHovered ? (theme === 'dark' ? 0.3 : 0.2) : 0
              }}
            />
            <Icon 
              className="relative z-10 w-7 h-7 transition-all duration-700" 
              style={{ color: isHovered ? color : defaultIconColor }}
            />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-700 group-hover:text-slate-900 dark:group-hover:text-white drop-shadow-sm dark:drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Tech Stack List - Engraved Glass Look */}
        <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
          {techs.map((tech, idx) => (
            <span 
              key={idx}
              className="px-5 py-2.5 text-[13px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/5 rounded-xl transition-all duration-500 tracking-wider cursor-default shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-slate-300 dark:group-hover:border-white/10 group-hover:text-slate-900 dark:group-hover:text-white backdrop-blur-md"
              style={{
                color: isHovered && theme === 'light' ? color : undefined,
                borderColor: isHovered && theme === 'light' ? `${color}40` : undefined // 40 is hex for 25% opacity
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
