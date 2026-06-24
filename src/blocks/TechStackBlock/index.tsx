import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';

interface TechStackBlockProps {
  data: Technology[];
}

export const TechStackBlock: React.FC<TechStackBlockProps> = ({ data }) => {
  return (
    <Section spacing="lg">
      <Container size="lg">
        <SectionHeader 
          title="Technology Stack"
          eyebrow="Powered By"
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {data.map((tech, index) => (
            <div key={index} className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-xl font-semibold text-white">{tech.name}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
