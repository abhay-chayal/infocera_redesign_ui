import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';

interface MetricsBlockProps {
  data: Metric[];
}

export const MetricsBlock: React.FC<MetricsBlockProps> = ({ data }) => {
  return (
    <Section spacing="lg" className="bg-[#0a0f1c]/80 border-y border-white/5">
      <Container size="lg">
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {data.map((metric, index) => (
            <div key={index} className="pt-8 md:pt-0 md:px-8 text-center first:pt-0 first:md:px-0">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                {metric.value}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{metric.label}</h4>
              {metric.description && (
                <p className="text-gray-400 text-base">{metric.description}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
