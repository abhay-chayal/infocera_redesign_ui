import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';

interface StickyProcessBlockProps {
  data: ProcessStep[];
}

export const StickyProcessBlock: React.FC<StickyProcessBlockProps> = ({ data }) => {
  return (
    <Section spacing="xl">
      <Container size="lg">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <SectionHeader 
              title="How We Execute"
              eyebrow="Our Process"
              align="left"
            />
            <p className="text-lg text-gray-400 mt-6 leading-relaxed">
              We employ a battle-tested methodology designed to mitigate risk, ensure transparency, and accelerate time-to-market.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            {data.map((step, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                <div className="absolute left-0 top-0 text-4xl md:text-5xl font-bold text-white/5 select-none">
                  {step.number}
                </div>
                <div className="relative z-10 pt-4 md:pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < data.length - 1 && (
                  <div className="absolute left-6 md:left-10 top-24 bottom-[-3rem] w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
