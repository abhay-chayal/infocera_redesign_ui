import { TestimonialCard } from './TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeader } from '../shared/SectionHeader';
import { Sparkles } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1120] border-t border-white/5 overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Client Success"
          eyebrowColor="text-emerald-400"
          title={
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              Trusted by the best.
              <Sparkles className="w-8 h-8 text-emerald-400 hidden md:block" />
            </div>
          }
          subtitle="Don't just take our word for it. Hear from the technology leaders who have partnered with us to completely transform their digital infrastructure."
          align="center"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="motion-safe:animate-fade-in-up">
              <TestimonialCard
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
