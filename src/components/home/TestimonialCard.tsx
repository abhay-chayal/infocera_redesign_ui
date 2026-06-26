import { Quote } from 'lucide-react';
import { Card } from '../shared/Card';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

export const TestimonialCard = ({ name, position, company, image, quote }: TestimonialCardProps) => {
  return (
    <Card variant="interactive" themeColor="emerald" className="group p-8 md:p-10 flex flex-col h-full">
      
      {/* Background Hover Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Decorative Quote Icon Background */}
      <Quote className="absolute -top-4 -right-4 w-32 h-32 text-emerald-500/5 rotate-12 group-hover:rotate-0 group-hover:text-emerald-500/10 transition-all duration-700 pointer-events-none" />

      {/* Quote Text */}
      <div className="relative z-10 flex-grow mb-12">
        <p className="text-zinc-300 text-[17px] leading-relaxed font-medium group-hover:text-zinc-100 transition-colors duration-300 italic">
          "{quote}"
        </p>
      </div>

      {/* Client Info Profile */}
      <div className="relative z-10 flex items-center gap-4 mt-auto">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-400/50 transition-colors duration-300 shadow-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors duration-300 tracking-wide">
            {name}
          </h4>
          <span className="text-zinc-400 text-xs tracking-wider uppercase mt-0.5">
            {position}, <span className="text-zinc-300 font-semibold">{company}</span>
          </span>
        </div>
      </div>

    </Card>
  );
};
