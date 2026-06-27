import { TechnologyCard } from './TechnologyCard';
import { technologiesData } from '../../data/technologiesData';
import { SectionHeader } from '../shared/SectionHeader';

export const TechnologiesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Core Technologies"
          eyebrowColor="text-zinc-500"
          title={
            <>
              Powered by modern, <br className="hidden md:block" />
              <span className="text-white">
                enterprise-grade stacks.
              </span>
            </>
          }
          subtitle="We leverage industry-leading technologies and frameworks to build highly scalable, secure, and performant solutions tailored to your specific business needs."
          align="center"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {technologiesData.map((category, idx) => {
            let spanClass = "col-span-1";
            if (idx === 0) spanClass = "md:col-span-2 lg:col-span-2"; 
            if (idx === 1) spanClass = "md:col-span-1 lg:col-span-1"; 
            if (idx === 2) spanClass = "md:col-span-1 lg:col-span-1"; 
            if (idx === 3) spanClass = "md:col-span-2 lg:col-span-2";
            if (idx === 4) spanClass = "md:col-span-2 lg:col-span-3"; 
            
            return (
              <div 
                key={category.id} 
                className={`motion-safe:animate-fade-in-up h-full ${spanClass}`}
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
