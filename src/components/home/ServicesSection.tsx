import React, { useEffect, useRef, useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';

const PANEL_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // custom software
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", // mobile app
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // cloud solutions
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop", // AI
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop", // DevOps
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"  // Data Engineering
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const PANEL_COUNT = servicesData.length;

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [PANEL_COUNT]);

  return (
    // Increased height to 600vh so each panel gets exactly 100vh of scroll distance, improving the UX feel.
    <section ref={sectionRef} className="relative w-full bg-[#0B1120] hidden md:block" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center">
        
        {/* Full Screen Background Images */}
        {servicesData.map((service, idx) => (
          <div 
            key={service.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activePanel === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img 
              src={PANEL_IMAGES[idx]} 
              alt={service.title} 
              className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                activePanel === idx ? 'scale-100' : 'scale-105'
              }`}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 lg:via-[#0B1120]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
          </div>
        ))}

        {/* Left Side Static Content (Top on mobile, Left on Desktop) */}
        <div className="absolute lg:static top-0 left-0 w-full lg:w-1/2 h-1/3 lg:h-full flex flex-col justify-end lg:justify-center px-8 sm:px-12 lg:px-16 xl:px-24 z-20 pointer-events-none pb-8 lg:pb-0">
          <SectionHeader
            eyebrow="Our Expertise"
            eyebrowColor="text-purple-400"
            title={
              <>
                Transforming ideas into <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  elite digital solutions.
                </span>
              </>
            }
            align="left"
            className="!mb-6 lg:!mb-8 pointer-events-auto"
          />
          <div className="pointer-events-auto w-fit hidden lg:block">
            <Button 
              href="/services"
              variant="outline"
              size="md"
              className="group whitespace-nowrap rounded-lg backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Side Glassmorphism Card (Bottom on mobile, Right on Desktop) */}
        <div className="absolute lg:static bottom-0 lg:bottom-auto w-full lg:w-1/2 h-2/3 lg:h-full flex items-start lg:items-center justify-center lg:justify-end px-4 sm:px-12 lg:px-16 xl:pr-24 z-30 pointer-events-none pb-12 lg:pb-0">
          <div className="relative w-full max-w-xl rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/10 shadow-2xl pointer-events-auto group">
            
            {/* Ambient internal glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* 
              UX IMPROVEMENT: Grid Stacking 
              Instead of absolute positioning which requires fixed heights/aspect ratios, 
              we use CSS grid. All items occupy row 1, col 1. The container automatically 
              grows to fit the tallest content, preventing ANY overflow issues.
            */}
            <div className="grid grid-cols-1 grid-rows-1 w-full">
              {servicesData.map((service, idx) => {
                const isActive = activePanel === idx;
                const Icon = service.icon;
                
                return (
                  <div 
                    key={service.id}
                    className={`col-start-1 row-start-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                      isActive 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' 
                        : 'opacity-0 translate-y-8 scale-[0.98] pointer-events-none z-0'
                    }`}
                  >
                    <div>
                      {/* Card Header: Icon and Number */}
                      <div className="flex justify-between items-start mb-6 lg:mb-8">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]">
                          <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-indigo-400" />
                        </div>
                        <div className="text-3xl lg:text-4xl font-mono text-white/20 font-bold tracking-tighter mix-blend-overlay">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed lg:min-h-[80px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer: Interactive Link */}
                    <div className="mt-8 lg:mt-10">
                      <Link 
                        to={service.href} 
                        className="group/link inline-flex items-center gap-3 hover:gap-5 text-white font-semibold tracking-wide hover:text-purple-400 transition-all duration-300"
                      >
                        <span className="uppercase text-xs sm:text-sm tracking-widest">Explore Service</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-purple-500/20 group-hover/link:text-purple-400 transition-colors">
                          <ArrowRight size={16} />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Edge Progress Tracker (Desktop Only) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 pointer-events-none">
           {servicesData.map((_, idx) => (
              <div 
                key={idx}
                className={`w-[2px] rounded-full transition-all duration-500 ease-out ${
                  activePanel === idx 
                    ? 'h-[48px] bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]' 
                    : 'h-[16px] bg-white/20'
                }`}
              />
           ))}
        </div>

      </div>
    </section>
  );
};

