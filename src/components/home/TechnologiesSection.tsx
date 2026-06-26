import { TechnologyCard } from './TechnologyCard';
import { technologiesData } from '../../data/technologiesData';
import { SectionHeader } from '../shared/SectionHeader';

export const TechnologiesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[black] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 mix-blend-screen" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Core Technologies"
          eyebrowColor="text-cyan-400"
          title={
            <>
              Powered by modern, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                enterprise-grade stacks.
              </span>
            </>
          }
          subtitle="We leverage industry-leading technologies and frameworks to build highly scalable, secure, and performant solutions tailored to your specific business needs."
          align="center"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Custom layout logic to center the bottom row of 2 items nicely */}
          {technologiesData.map((category, idx) => {
            // If it's the last two items (AI and Databases) on a large screen, make them span differently or just center the grid.
            // A simple grid handles 5 items gracefully, but we can make the 4th and 5th items span wider if needed.
            // Using col-span-1 for all maintains the SaaS card aesthetic.
            const isLastTwoOnLarge = idx >= 3;
            
            return (
              <div 
                key={category.id} 
                className={`motion-safe:animate-fade-in-up ${isLastTwoOnLarge ? 'lg:col-span-1' : ''}`}
              >
                <TechnologyCard
                  title={category.title}
                  icon={category.icon}
                  techs={category.techs}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
