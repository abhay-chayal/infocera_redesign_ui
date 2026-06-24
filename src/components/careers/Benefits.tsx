import { careersPageData } from '../../data/careersPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0f1c] border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={careersPageData.benefits.headline}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersPageData.benefits.items.map((benefit, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-[#0f172a] border border-white/5 hover:bg-[#1e293b]/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
