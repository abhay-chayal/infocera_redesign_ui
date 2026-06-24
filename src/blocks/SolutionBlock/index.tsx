import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { CheckCircle2 } from 'lucide-react';

interface SolutionBlockProps {
  data: SolutionData;
}

export const SolutionBlock: React.FC<SolutionBlockProps> = ({ data }) => {
  return (
    <Section spacing="lg">
      <Container size="md">
        <div className="text-center mb-16">
          <SectionHeader 
            title={data.title}
            eyebrow="Our Solution"
          />
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {data.highlights.map((highlight, index) => (
            <div key={index} className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
              </div>
              <p className="text-gray-400 text-base">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
