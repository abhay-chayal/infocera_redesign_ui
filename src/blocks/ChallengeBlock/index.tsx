import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { XCircle } from 'lucide-react';

interface ChallengeBlockProps {
  data: ChallengeData;
}

export const ChallengeBlock: React.FC<ChallengeBlockProps> = ({ data }) => {
  return (
    <Section spacing="lg" className="bg-[#0a0f1c]/50">
      <Container size="md">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title={data.title}
              eyebrow="The Challenge"
              align="left"
            />
            <p className="text-lg text-gray-400 mt-6 leading-relaxed mb-10">
              {data.description}
            </p>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Business Challenge" className="w-full rounded-2xl border border-white/5 opacity-80" />
          </div>
          
          <div className="space-y-6">
            {data.points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex-shrink-0 mt-1">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-lg text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
