import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden bg-[#111111] isolate">
        
        {/* Background Image */}
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          loading="lazy"
        />
        
        {/* Permanent Vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
        
        {/* Industry Tag (Top Left) */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 text-[10px] font-bold text-white bg-white/10 backdrop-blur-md rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/10">
            {industry}
          </span>
        </div>

        {/* Content Container (Slides up from bottom) */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end transform transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
            {title}
          </h3>
          
          <div className="overflow-hidden">
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out delay-100">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {summary}
              </p>
              
              <div className="inline-flex items-center gap-3 text-sm font-bold text-white tracking-widest uppercase bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors border border-white/10">
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};
