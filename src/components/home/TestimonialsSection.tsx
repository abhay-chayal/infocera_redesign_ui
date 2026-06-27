import { TestimonialCard } from './TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeader } from '../shared/SectionHeader';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Client Success"
          eyebrowColor="text-zinc-500"
          title="Trusted by the best."
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
