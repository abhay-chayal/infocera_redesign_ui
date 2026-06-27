import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { ctaData } from '../../data/ctaData';
import { Button } from '../shared/Button';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDYwaC0xVjFoLTF2NTlIMHYtMWg1OFYwaDF2NjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpcCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Glassmorphic Container */}
          <div className="relative rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 md:p-16 lg:p-24 text-center overflow-hidden">
            
            {/* Content */}
            <div className="relative z-10">
              <SectionHeader
                title={ctaData.headline}
                subtitle={ctaData.subheading}
                align="center"
                className="!mb-12"
              />
            </div>
            
            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Button 
                href={ctaData.primaryButton.href}
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto bg-white text-black hover:bg-zinc-200 border-0 rounded-full px-10 py-4 font-bold transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {ctaData.primaryButton.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                href={ctaData.secondaryButton.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-4 font-bold"
                leftIcon={<Calendar className="w-5 h-5 opacity-70" />}
              >
                {ctaData.secondaryButton.label}
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
