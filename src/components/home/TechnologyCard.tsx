import type { ElementType } from 'react';

import { Link } from 'react-router-dom';
import { Card } from '../shared/Card';

interface TechnologyCardProps {
  title: string;
  icon: ElementType;
  techs: string[];
}

export const TechnologyCard = ({ title, icon: Icon, techs }: TechnologyCardProps) => {
  return (
    <Link to="/services" className="block h-full group">
      <Card variant="interactive" themeColor="indigo" className="p-8 flex flex-col h-full">
      
      {/* Background Hover Glows */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-indigo-500/20 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-110" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 mb-8">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500 shadow-inner group-hover:shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]">
          <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-all duration-500 transform group-hover:-translate-y-0.5 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all duration-500">
          {title}
        </h3>
      </div>

      {/* Tech Stack List */}
      <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto">
        {techs.map((tech, idx) => (
          <span 
            key={idx}
            className="px-3.5 py-1.5 text-xs font-semibold text-gray-400 bg-[#0f172a]/50 border border-white/5 rounded-md hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white transition-all duration-300 tracking-wide cursor-default hover:-translate-y-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      </Card>
    </Link>
  );
};
