import { servicesPageData } from '../../data/servicesPageData';
import { SectionHeader } from '../shared/SectionHeader';
import { ShieldCheck } from 'lucide-react';

export const ServiceTrustMetrics = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1e293b]/40 to-[#1e293b]/10 border border-white/5 p-10 md:p-16 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <ShieldCheck className="w-16 h-16 text-indigo-400 mb-6" />
              <SectionHeader
                title={servicesPageData.metrics.headline}
                subtitle="Enterprise-grade reliability and security standards baked into every solution."
                align="left"
                className="!mb-0"
              />
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {servicesPageData.metrics.items.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start">
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-indigo-400 tracking-wider uppercase">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
