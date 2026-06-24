import React from 'react';
import type { HeroData } from '../../types/service';
import { Container } from '../../components/shared/Container';
import { Section } from '../../components/shared/Section';
import { Button } from '../../components/shared/Button';
import { ArrowRight } from 'lucide-react';

interface CTABlockProps {
  data: HeroData; // Reusing HeroData since it has title, description, and CTAs
}

export const CTABlock: React.FC<CTABlockProps> = ({ data }) => {
  return (
    <Section spacing="xl" className="overflow-hidden">
      <Container size="md">
        <div className="relative p-12 md:p-24 rounded-[3rem] text-center border border-white/10 bg-[#0f172a] overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to transform your enterprise?
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Schedule a technical consultation with our engineering leadership to discuss your architecture and objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" href={data.primaryCTA.href} rightIcon={<ArrowRight className="w-5 h-5" />}>
                {data.primaryCTA.label}
              </Button>
              {data.secondaryCTA && (
                <Button variant="outline" size="lg" href={data.secondaryCTA.href}>
                  {data.secondaryCTA.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
