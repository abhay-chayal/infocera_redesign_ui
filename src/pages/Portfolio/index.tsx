import { PortfolioHero } from '../../components/portfolio/PortfolioHero';
import { FeaturedProjects } from '../../components/portfolio/FeaturedProjects';
import { PortfolioGrid } from '../../components/portfolio/PortfolioGrid';
import { PortfolioMetrics } from '../../components/portfolio/PortfolioMetrics';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { CTASection } from '../../components/home/CTASection';

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <PortfolioHero />
      <FeaturedProjects />
      <PortfolioGrid />
      <PortfolioMetrics />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
