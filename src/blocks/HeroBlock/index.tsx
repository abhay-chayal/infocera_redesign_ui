import React from 'react';
import type {  } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { Button } from '../../components/shared/Button';
import { ArrowRight } from 'lucide-react';

interface HeroBlockProps {
  data: HeroData;
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ data }) => {
  return (
    <Section spacing="xl" className="pt-40 md:pt-56 overflow-hidden">
      {/* Architectural Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2034&q=80" 
          alt="Service Hero" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/80 to-[#0a0f1c]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),transparent_70%)]" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          {data.subtitle}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          <span className="block text-white">{data.title}</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed">
          {data.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" href={data.primaryCTA.href} rightIcon={<ArrowRight className="w-5 h-5" />}>
            {data.primaryCTA.label}
          </Button>
          {data.secondaryCTA && (
            <Button variant="outline" size="lg" href={data.secondaryCTA.href}>
              {data.secondaryCTA.label}
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
};
