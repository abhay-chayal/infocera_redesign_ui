import { careersPageData } from '../../data/careersPageData';
import { Quote } from 'lucide-react';

export const EmployeeTestimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careersPageData.testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="relative p-10 md:p-12 rounded-3xl bg-[#1e293b]/30 border border-white/5 backdrop-blur-sm"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/20" />
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-medium relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full border-2 border-white/10 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
