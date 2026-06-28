import { useEffect, useRef, useState } from 'react';
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
    <section ref={sectionRef} className="relative w-full bg-slate-50 dark:bg-black transition-colors duration-700" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen w-[100dvw] overflow-hidden flex flex-col lg:flex-row items-center">
        
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
            <div className="absolute inset-0 bg-black/10 dark:bg-black/40 mix-blend-multiply transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-slate-50/60 via-slate-50/30 lg:via-slate-50/10 dark:from-black dark:via-black/80 dark:lg:via-black/60 to-transparent transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/40 dark:from-black via-transparent to-transparent transition-colors duration-700" />
          </div>
        ))}

        {/* Left Side Static Content (Top on mobile, Left on Desktop) */}
        <div className="absolute lg:static top-0 left-0 w-full lg:w-1/2 h-1/3 lg:h-full flex flex-col justify-end lg:justify-center px-8 sm:px-12 lg:px-16 xl:px-24 z-20 pointer-events-none pb-8 lg:pb-0">
          <SectionHeader
            eyebrow="Our Expertise"
            eyebrowColor="text-[#0ea5e9] dark:text-zinc-500"
            titleColor="text-[#0ea5e9] dark:text-white"
            title={
              <>
                Transforming ideas into <br className="hidden lg:block" />
                <span className="text-slate-900 dark:text-white drop-shadow-[0_0_25px_rgba(255,255,255,1)] dark:drop-shadow-none">
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
              className="group whitespace-nowrap rounded-full backdrop-blur-xl bg-slate-900/5 dark:bg-white/5 border-slate-900/10 dark:border-white/10 hover:bg-slate-900/10 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors duration-700"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Side Glassmorphism Card (Bottom on mobile, Right on Desktop) */}
        <div className="absolute lg:static bottom-0 lg:bottom-auto w-full lg:w-1/2 h-2/3 lg:h-full flex items-start lg:items-center justify-center lg:justify-end px-4 sm:px-12 lg:px-16 xl:pr-24 z-30 pointer-events-none pb-12 lg:pb-0">
          <div className="relative w-full max-w-xl rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-2xl pointer-events-auto group transition-colors duration-700">
            
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
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-inner transition-colors duration-700">
                          <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#0ea5e9] dark:text-white transition-colors duration-700" />
                        </div>
                        <div className="text-3xl lg:text-4xl font-mono text-slate-900/40 dark:text-white/10 font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,1)] dark:drop-shadow-none dark:mix-blend-overlay transition-colors duration-700">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] dark:drop-shadow-none mb-4 leading-tight transition-colors duration-700">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-800 font-medium dark:font-normal dark:text-zinc-400 text-base sm:text-lg leading-relaxed lg:min-h-[80px] drop-shadow-[0_0_12px_rgba(255,255,255,1)] dark:drop-shadow-none transition-colors duration-700">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer: Interactive Link */}
                    <div className="mt-8 lg:mt-10">
                      <Link 
                        to={service.href} 
                        className="group/link inline-flex items-center gap-3 hover:gap-5 text-slate-900 dark:text-white font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,1)] dark:drop-shadow-none hover:text-[#0ea5e9] dark:hover:text-zinc-300 transition-all duration-300"
                      >
                        <span className="uppercase text-xs sm:text-sm tracking-widest">Explore Service</span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover/link:bg-[#0ea5e9] group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors">
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
                    ? 'h-[48px] bg-slate-900 dark:bg-white shadow-[0_0_12px_rgba(14,165,233,0.5)] dark:shadow-[0_0_12px_rgba(255,255,255,0.8)]' 
                    : 'h-[16px] bg-slate-900/20 dark:bg-white/20'
                }`}
              />
           ))}
        </div>

      </div>
    </section>
  );
};
