import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../shared/Card';

interface PortfolioCardProps {
  title: string;
  industry: string;
  summary: string;
  image: string;
  href: string;
}

export const PortfolioCard = ({ title, industry, summary, image, href }: PortfolioCardProps) => {
  return (
    <Link to={href} className="group block h-full">
      <Card variant="interactive" themeColor="fuchsia" className="flex flex-col h-full p-0">
      
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e293b]/10 to-[#1e293b]/40 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-fuchsia-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Industry Tag */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3.5 py-1.5 text-[10px] font-bold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest shadow-lg">
            {industry}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col flex-grow p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-fuchsia-200 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300">
          {summary}
        </p>
        
          <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-fuchsia-400 transition-colors uppercase tracking-wider w-max">
            View Case Study
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
