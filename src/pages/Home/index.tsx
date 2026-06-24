

import { HeroSection } from '../../components/home/HeroSection';
import { ClientLogoStrip } from '../../components/home/ClientLogoStrip';
import { StatsSection } from '../../components/home/StatsSection';
import { ServicesSection } from '../../components/home/ServicesSection';
import { TechnologiesSection } from '../../components/home/TechnologiesSection';
import { PortfolioPreviewSection } from '../../components/home/PortfolioPreviewSection';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { CTASection } from '../../components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ClientLogoStrip />
      <StatsSection />
      <ServicesSection />
      <TechnologiesSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
