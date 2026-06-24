import { careersPageData } from '../../data/careersPageData';
import { ArrowDown } from 'lucide-react';
import { Button } from '../shared/Button';

export const CareersHero = () => {
  const handleScroll = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5 bg-[#0B1120]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-wider text-blue-400 mb-8 backdrop-blur-md uppercase shadow-lg">
            {careersPageData.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            {careersPageData.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              {careersPageData.hero.highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            {careersPageData.hero.description}
          </p>
          
          <Button 
            onClick={handleScroll}
            variant="outline"
            size="lg"
            className="group rounded-full border-white/10"
            rightIcon={<ArrowDown className="w-5 h-5 text-blue-400 group-hover:translate-y-1 transition-transform duration-300" />}
          >
            View Open Roles
          </Button>
        </div>
      </div>
    </section>
  );
};
