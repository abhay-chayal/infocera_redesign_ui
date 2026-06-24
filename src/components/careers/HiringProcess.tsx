import { careersPageData } from '../../data/careersPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const HiringProcess = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0f172a] border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Our Hiring Process"
          subtitle="Transparent, efficient, and designed to let your true skills shine."
          align="center"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {careersPageData.hiringProcess.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-6 text-xl font-black text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-110">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
