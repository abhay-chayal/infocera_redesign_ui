import { StatCard } from './StatCard';
import { statsData } from '../../data/statsData';

export const StatsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
