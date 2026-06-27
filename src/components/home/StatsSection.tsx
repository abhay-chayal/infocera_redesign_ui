import { StatCard } from './StatCard';
import { statsData } from '../../data/statsData';

export const StatsSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      {/* Subtle ambient top border light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="motion-safe:animate-fade-in-up">
              <StatCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
