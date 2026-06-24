import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

export const AboutCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0f1c] border-t border-white/5 overflow-hidden">
      
      {/* Massive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <SectionHeader
          title="Join us on the frontier."
          subtitle="Whether you're looking to build your next flagship product or join an elite engineering team, we want to hear from you."
          align="center"
        />
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button 
            href="/contact"
            variant="primary"
            size="lg"
            className="group rounded-2xl px-10 py-5"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            href="/careers"
            variant="outline"
            size="lg"
            className="rounded-2xl px-10 py-5"
          >
            View Open Roles
          </Button>
        </div>
      </div>
    </section>
  );
};
