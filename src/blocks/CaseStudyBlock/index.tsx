import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { Button } from '../../components/shared/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyBlockProps {
  data: CaseStudy;
}

export const CaseStudyBlock: React.FC<CaseStudyBlockProps> = ({ data }) => {
  return (
    <Section spacing="xl">
      <Container size="md">
        <div className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold text-white mb-8 backdrop-blur-md">
              Featured Case Study
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {data.title}
            </h3>
            
            <p className="text-lg text-indigo-200 mb-8 font-medium">
              Client: {data.client}
            </p>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl">
              {data.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {data.results.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-lg text-white font-medium">{result}</span>
                </div>
              ))}
            </div>
            
            {data.link && (
              <Button href={data.link} size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Read Full Case Study
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
