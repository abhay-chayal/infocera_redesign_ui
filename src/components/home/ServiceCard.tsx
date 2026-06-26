import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../shared/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ElementType;
  href: string;
}

export const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <Link to={href} className="block h-full group">
      <Card variant="interactive" themeColor="purple" className="p-8 flex flex-col h-full">
      
      {/* Background Glow Effect on Hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
        <Icon className="w-7 h-7 text-cyan-400 group-hover:text-blue-300 transition-colors" />
      </div>
      
      <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
        {title}
      </h3>
      
      <p className="relative z-10 text-zinc-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
        {description}
      </p>
      
      <div 
        className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-cyan-400 transition-colors uppercase tracking-wider"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
      </Card>
    </Link>
  );
};
