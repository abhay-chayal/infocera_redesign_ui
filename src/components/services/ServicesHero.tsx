import { servicesPageData } from '../../data/servicesPageData';

export const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-transparent blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDYwaC0xVjFoLTF2NTlIMHYtMWg1OFYwaDF2NjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-wider text-indigo-400 mb-8 backdrop-blur-md uppercase shadow-lg">
            {servicesPageData.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            {servicesPageData.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              {servicesPageData.hero.highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {servicesPageData.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};
