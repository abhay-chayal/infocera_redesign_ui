import React from 'react';
import type { Capability } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';
import * as Icons from 'lucide-react';

interface CapabilityGridBlockProps {
  data: Capability[];
}

export const CapabilityGridBlock: React.FC<CapabilityGridBlockProps> = ({ data }) => {
  return (
    <Section spacing="xl" className="bg-[#0a0f1c]/30">
      <Container size="lg">
        <SectionHeader 
          title="Core Capabilities"
          eyebrow="What We Do"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {data.map((cap, index) => {
            const Icon = Icons[cap.icon as keyof typeof Icons] as React.ElementType || Icons.Box;
            return (
              <div key={index} className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8 text-indigo-400 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
