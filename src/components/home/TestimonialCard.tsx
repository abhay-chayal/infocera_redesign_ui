import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

export const TestimonialCard = ({ name, position, company, image, quote }: TestimonialCardProps) => {
  return (
    <div className="group p-8 md:p-12 flex flex-col h-full bg-[#111111] rounded-3xl border border-white/5 hover:bg-[#151515] hover:border-white/10 transition-all duration-700">
      
      {/* Decorative Quote Icon Background */}
      <Quote className="absolute -top-2 -right-2 w-32 h-32 text-white/5 group-hover:text-white/10 transition-colors duration-700 pointer-events-none" />

      {/* Quote Text */}
      <div className="relative z-10 flex-grow mb-12">
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors duration-500">
          "{quote}"
        </p>
      </div>

      {/* Client Info Profile */}
      <div className="relative z-10 flex items-center gap-5 mt-auto">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors duration-500">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-lg tracking-tight mb-0.5">
            {name}
          </h4>
          <span className="text-zinc-500 text-xs tracking-widest uppercase">
            {position}, <span className="text-zinc-400 font-bold">{company}</span>
          </span>
        </div>
      </div>

    </div>
  );
};
