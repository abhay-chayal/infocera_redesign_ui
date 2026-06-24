import { ServicesHero } from '../../components/services/ServicesHero';
import { ServiceDetailGrid } from '../../components/services/ServiceDetailGrid';
import { ProcessTimeline } from '../../components/services/ProcessTimeline';
import { ServiceTrustMetrics } from '../../components/services/ServiceTrustMetrics';
import { TechnologiesSection } from '../../components/home/TechnologiesSection';
import { ServicesFAQ } from '../../components/services/ServicesFAQ';
import { CTASection } from '../../components/home/CTASection';

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <ServicesHero />
      <ServiceDetailGrid />
      <ProcessTimeline />
      <ServiceTrustMetrics />
      <TechnologiesSection />
      <ServicesFAQ />
      <CTASection />
    </div>
  );
}
