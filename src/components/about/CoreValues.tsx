import { aboutData } from '../../data/aboutData';
import { SectionHeader } from '../shared/SectionHeader';

export const CoreValues = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0B1120] border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader
          eyebrow="Our Principles"
          eyebrowColor="text-purple-400"
          title="The values that drive us."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((value, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-2xl bg-[#1e293b]/20 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <value.icon className="relative z-10 w-8 h-8 text-purple-400 mb-6 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              <h4 className="relative z-10 text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="relative z-10 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
