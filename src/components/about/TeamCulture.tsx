import { Play } from 'lucide-react';
import { aboutData } from '../../data/aboutData';
import { SectionHeader } from '../shared/SectionHeader';

export const TeamCulture = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0f1c]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Leadership Grid */}
        <div className="mb-32">
          <div className="flex-1 max-w-2xl mb-16">
            <SectionHeader
              title="Meet the leadership team."
              subtitle="Guided by industry veterans with a passion for disruptive technology and operational excellence."
              align="left"
              className="!mb-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.team.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-sm tracking-widest uppercase font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section & Video Placeholder */}
        <div className="relative rounded-3xl bg-[#1e293b]/20 border border-white/5 backdrop-blur-xl p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                {aboutData.culture.headline}
              </h3>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {aboutData.culture.description}
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-[0_0_50px_rgba(79,70,229,0.15)]">
              <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply group-hover:bg-indigo-900/10 transition-colors duration-500 z-10" />
              <img 
                src={aboutData.culture.videoPlaceholder} 
                alt="Infocera Culture" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
