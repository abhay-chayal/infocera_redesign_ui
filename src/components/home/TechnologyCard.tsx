import { type ElementType, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface TechnologyCardProps {
  title: string;
  icon: ElementType;
  techs: string[];
}

export const TechnologyCard = ({ title, icon: Icon, techs }: TechnologyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link to="/services" className="block h-full group">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-8 lg:p-12 h-full flex flex-col rounded-3xl overflow-hidden backdrop-blur-3xl bg-[#0c0c0c] border border-white/5 transition-all duration-700"
      >
        {/* Hover Flashlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />

        {/* Ambient base glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent z-0" />

        {/* Header */}
        <div className="relative z-10 flex items-center gap-6 mb-12">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#111] border border-white/10 transition-all duration-700 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] group-hover:scale-110">
            <Icon className="w-7 h-7 text-white transition-all duration-700" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-700 group-hover:text-white drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Tech Stack List - Engraved Glass Look */}
        <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
          {techs.map((tech, idx) => (
            <span 
              key={idx}
              className="px-5 py-2.5 text-[13px] font-bold text-zinc-400 bg-black/60 border border-white/5 rounded-xl transition-all duration-500 tracking-wider cursor-default shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-white/10 group-hover:text-white backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
