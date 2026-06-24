import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { ctaData } from '../../data/ctaData';
import { Button } from '../shared/Button';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      
      {/* Massive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 blur-[150px] rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDYwaC0xVjFoLTF2NTlIMHYtMWg1OFYwaDF2NjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpcCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Glassmorphic Container */}
          <div className="relative rounded-3xl bg-[#1e293b]/30 backdrop-blur-3xl border border-white/10 p-10 md:p-16 lg:p-24 text-center overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.15)]">
            
            {/* Internal Accent Lines */}
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
            <div className="absolute bottom-0 left-1/3 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />
            
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <SectionHeader
                title={ctaData.headline}
                subtitle={ctaData.subheading}
                align="center"
              />
            </div>
            
            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Button 
                href={ctaData.primaryButton.href}
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {ctaData.primaryButton.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                href={ctaData.secondaryButton.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
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
