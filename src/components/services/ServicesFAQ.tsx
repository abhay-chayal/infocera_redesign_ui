import { useState } from 'react';
import { servicesPageData } from '../../data/servicesPageData';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

export const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0a0f1c] border-t border-white/5">
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          title={servicesPageData.faqs.headline}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {servicesPageData.faqs.items.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-[#1e293b]/20 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300"
            >
              <Button
                variant="ghost"
                className="w-full flex justify-between p-6 md:p-8 hover:bg-transparent h-auto min-h-0 text-left active:scale-100 rounded-none focus-visible:ring-inset"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                rightIcon={
                  <ChevronDown 
                    className={`w-6 h-6 text-indigo-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                  />
                }
              >
                <span className="text-lg font-bold text-white pr-8 whitespace-normal text-left w-full">
                  {faq.question}
                </span>
              </Button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
