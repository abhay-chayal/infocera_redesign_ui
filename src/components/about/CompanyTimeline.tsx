import { aboutData } from '../../data/aboutData';
import { SectionHeader } from '../shared/SectionHeader';

export const CompanyTimeline = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader
          title="Our Journey"
          subtitle="From a small engineering team to a global enterprise technology partner."
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {aboutData.timeline.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0B1120] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                
                {/* Empty Half for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="p-8 md:p-10 rounded-3xl bg-[#1e293b]/20 border border-white/5 backdrop-blur-md hover:bg-[#1e293b]/40 hover:border-purple-500/30 transition-all duration-500 group">
                    <span className="inline-block px-4 py-1.5 rounded-md bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest mb-5 group-hover:bg-purple-500/20 transition-colors">
                      {item.year}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
