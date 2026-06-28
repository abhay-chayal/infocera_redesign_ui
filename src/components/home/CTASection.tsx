import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { ctaData } from '../../data/ctaData';
import { Button } from '../shared/Button';
import { LiquidBackground } from './LiquidBackground';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-700">
      
      {/* Interactive Liquid Fluid Background */}
      <LiquidBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Glassmorphic Container */}
          <div className="relative rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-white/40 dark:border-white/10 p-10 md:p-16 lg:p-24 text-center overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-colors duration-700">
            
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
                className="group w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 border-0 rounded-full px-10 py-4 font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(15,23,42,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
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
                className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 rounded-full px-10 py-4 font-bold transition-colors duration-300"
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
