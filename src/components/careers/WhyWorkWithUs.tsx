import { careersPageData } from '../../data/careersPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const WhyWorkWithUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0f172a]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={careersPageData.whyWorkWithUs.headline}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careersPageData.whyWorkWithUs.items.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-3xl bg-[#1e293b]/20 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center mb-8 group-hover:border-blue-500/50 transition-colors duration-300 shadow-inner">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
