import React, { useEffect, useRef, useState } from 'react';
import { servicesPageData } from '../../data/servicesPageData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PANEL_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // custom software
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", // mobile app
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // cloud solutions
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop", // AI
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop", // DevOps
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"  // Data Engineering
];

export const ServicesCinematicScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const PANEL_COUNT = servicesPageData.services.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const totalH = sectionRef.current.offsetHeight - window.innerHeight;
      
      if (totalH <= 0) return;
      
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(scrolled / totalH, 0.9999);
      const idx = Math.min(Math.floor(pct * PANEL_COUNT), PANEL_COUNT - 1);
      
      setActivePanel(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case it's already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [PANEL_COUNT]);

  const formatTitle = (title: string) => {
    const words = title.split(' ');
    const lastWord = words.pop();
    return (
      <>
        {words.length > 0 ? words.join(' ') + ' ' : ''}
        <em className="italic text-indigo-300 font-light">{lastWord}</em>
      </>
    );
  };

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full bg-[#0B1120]" 
      style={{ height: '500vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex">
        
        {/* Left Half - Images */}
        <div className="hidden lg:block w-1/2 h-full relative overflow-hidden bg-black/50">
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1120] z-20"></div>
          
          {servicesPageData.services.map((service, idx) => {
            const isActive = activePanel === idx;
            return (
              <img 
                key={service.id}
                src={PANEL_IMAGES[idx]} 
                alt={service.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                }`}
              />
            );
          })}
        </div>

        {/* Right Half - Text Content */}
        <div className="w-full lg:w-1/2 h-full flex items-center px-8 sm:px-16 lg:pl-16 lg:pr-24 relative bg-[#0B1120] overflow-hidden">
          {/* Decorative gradient blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          {/* 
            Grid Stacking Fix: 
            By placing all text content into a single grid cell, the container sizes itself to the tallest item (Slide 1).
            Because the container is vertically centered (flex items-center), ALL slides will now start at the exact same pixel coordinate.
          */}
          <div className="grid grid-cols-1 grid-rows-1 w-full max-w-2xl">
            {servicesPageData.services.map((service, idx) => {
              const isActive = activePanel === idx;
              
              return (
                <div 
                  key={service.id}
                  className={`col-start-1 row-start-1 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isActive 
                      ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
                      : 'opacity-0 translate-y-8 pointer-events-none z-0'
                  }`}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-4 mb-6 lg:mb-8">
                    <div className="h-[2px] w-8 bg-indigo-500/80 rounded-full"></div>
                    <span className="text-xs lg:text-sm font-bold text-indigo-400 tracking-[0.2em] uppercase">
                      Core Expertise
                    </span>
                  </div>
                  
                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 lg:mb-6 leading-[1.1] tracking-tight">
                    {formatTitle(service.title)}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg lg:text-xl text-gray-400 mb-8 lg:mb-10 max-w-xl leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Feature List */}
                  <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-4 text-gray-300 font-medium text-base lg:text-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] block shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Link */}
                  <Link 
                    to={`/services/${service.id}`} 
                    className="group inline-flex items-center gap-[8px] hover:gap-[14px] text-white font-semibold tracking-wide hover:text-indigo-300 transition-all duration-300 uppercase text-sm w-fit"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight size={18} className="text-indigo-400 group-hover:text-indigo-300" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-12 left-0 right-0 z-50 flex justify-center lg:justify-end lg:pr-24 pointer-events-none">
          <div className="flex items-center gap-3">
            {servicesPageData.services.map((_, idx) => (
              <div 
                key={idx}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  activePanel === idx 
                    ? 'w-[48px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                    : 'w-[24px] bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
