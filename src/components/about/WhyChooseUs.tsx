import { aboutData } from '../../data/aboutData';
import { SectionHeader } from '../shared/SectionHeader';

export const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          title={
            <>
              Why partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Infocera?</span>
            </>
          }
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aboutData.whyChooseUs.map((item, idx) => (
            <div 
              key={idx}
              className="group p-8 md:p-12 rounded-3xl bg-[#1e293b]/30 border border-white/10 hover:bg-[#1e293b]/50 hover:border-indigo-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                <item.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
