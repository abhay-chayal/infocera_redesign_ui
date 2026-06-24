import React, { useState } from 'react';
import type { FAQ } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../components/shared/Button';

interface FAQBlockProps {
  data: FAQ[];
}

export const FAQBlock: React.FC<FAQBlockProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section spacing="xl" className="bg-[#0a0f1c]/30">
      <Container size="md">
        <SectionHeader 
          title="Frequently Asked Questions"
          eyebrow="Clarifications"
        />
        
        <div className="mt-16 space-y-4">
          {data.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-6 h-6 text-indigo-400 transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-8 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-lg text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
