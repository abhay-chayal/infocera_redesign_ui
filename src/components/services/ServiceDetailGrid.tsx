import { servicesPageData } from '../../data/servicesPageData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

export const ServiceDetailGrid = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16 lg:space-y-32">
          {servicesPageData.services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Visual Side */}
              <div className="hidden lg:block w-full lg:w-1/2">
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl bg-[#1e293b]/20 border border-white/5 backdrop-blur-md overflow-hidden group shadow-2xl">
                  {/* Ambient internal glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Abstract Icon display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
                      <service.icon className="w-16 h-16 text-indigo-400 group-hover:text-fuchsia-400 transition-colors duration-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 shadow-inner">
                  <service.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <SectionHeader
                  title={service.title}
                  subtitle={service.description}
                  align="left"
                  className="!mb-10"
                />
                
                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4 text-gray-300 font-medium group">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={`/services/${service.id}`} variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore {service.title}
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
