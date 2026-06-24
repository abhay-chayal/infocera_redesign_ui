import { Play } from 'lucide-react';
import { aboutData } from '../../data/aboutData';

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-wider text-purple-400 mb-8 backdrop-blur-md uppercase">
            {aboutData.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            {aboutData.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              {aboutData.hero.highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {aboutData.hero.description}
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden bg-[#1e293b]/40 border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          <img 
            src={aboutData.hero.videoPlaceholder} 
            alt="Infocera Office" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-2xl">
              <Play className="w-10 h-10 text-white ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
