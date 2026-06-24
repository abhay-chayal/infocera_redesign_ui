import { servicesPageData } from '../../data/servicesPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const ProcessTimeline = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0f1c] border-t border-white/5">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-fuchsia-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <SectionHeader
          title={servicesPageData.process.headline}
          subtitle={servicesPageData.process.description}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          
          {/* Horizontal connection line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0" />

          {servicesPageData.process.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-start lg:items-center text-left lg:text-center group">
              
              {/* Node */}
              <div className="w-24 h-24 rounded-2xl bg-[#1e293b]/50 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:border-indigo-500/50 transition-all duration-500 shadow-xl shrink-0">
                <step.icon className="w-8 h-8 text-indigo-400 mb-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold text-gray-400 group-hover:text-indigo-300 transition-colors">{step.id}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
