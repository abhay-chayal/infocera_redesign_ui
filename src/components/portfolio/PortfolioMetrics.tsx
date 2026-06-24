import { portfolioPageData } from '../../data/portfolioPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const PortfolioMetrics = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0a0f1c] border-y border-white/5">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gradient-to-r from-fuchsia-500/10 via-purple-500/5 to-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <SectionHeader
          title={portfolioPageData.metrics.headline}
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {portfolioPageData.metrics.items.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-4 drop-shadow-sm">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-bold text-purple-400 tracking-wide uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
