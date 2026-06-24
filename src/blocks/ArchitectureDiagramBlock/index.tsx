import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { ArrowDown } from 'lucide-react';
import { cn } from '../../components/shared/Button';

interface ArchitectureDiagramBlockProps {
  data: ArchitectureNode[];
}

export const ArchitectureDiagramBlock: React.FC<ArchitectureDiagramBlockProps> = ({ data }) => {
  return (
    <Section spacing="xl" className="bg-[#0f172a]/50">
      <Container size="lg">
        <SectionHeader 
          title="System Architecture"
          eyebrow="Technical Deep Dive"
        />
        
        <div className="max-w-4xl mx-auto mt-20">
          <div className="flex flex-col items-center">
            {data.map((node, index) => {
              const hasNext = node.next && node.next.length > 0;
              return (
                <React.Fragment key={node.id}>
                  <div className={cn(
                    "w-full md:w-2/3 p-8 rounded-2xl border text-center relative z-10 transition-transform hover:scale-105 duration-300",
                    node.type === 'source' ? 'bg-blue-500/10 border-blue-500/30' :
                    node.type === 'process' ? 'bg-indigo-500/10 border-indigo-500/30' :
                    node.type === 'storage' ? 'bg-emerald-500/10 border-emerald-500/30' :
                    node.type === 'client' ? 'bg-purple-500/10 border-purple-500/30' :
                    'bg-white/5 border-white/10'
                  )}>
                    <h4 className="text-2xl font-bold text-white mb-2">{node.label}</h4>
                    <p className="text-gray-400 text-lg">{node.description}</p>
                  </div>
                  
                  {hasNext && (
                    <div className="py-6 flex justify-center text-indigo-500/50">
                      <ArrowDown className="w-8 h-8 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
