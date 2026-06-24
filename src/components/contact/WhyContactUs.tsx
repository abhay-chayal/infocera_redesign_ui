import { contactPageData } from '../../data/contactPageData';
import { Shield, FileSignature, Code2 } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';

const icons = [Shield, FileSignature, Code2];

export const WhyContactUs = () => {
  return (
    <div className="space-y-12 lg:pr-12">
      <SectionHeader
        title={contactPageData.whyUs.headline}
        subtitle="We don't just build software; we build enterprise partnerships based on transparency, absolute security, and measurable ROI."
        align="left"
        className="!mb-12"
      />

      <div className="space-y-8">
        {contactPageData.whyUs.items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={idx} className="flex gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-all duration-300">
                <Icon className="w-6 h-6 text-fuchsia-400 group-hover:text-fuchsia-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
