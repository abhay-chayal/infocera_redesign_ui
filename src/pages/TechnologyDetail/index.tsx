import { useParams, Navigate } from 'react-router-dom';
import { getConsultingData } from '../../data/consultingTechnologyData';
import {
  TechnologyHeroBlock,
  MetricsBlock,
  WhyTechnologyBlock,
  ChallengeSolutionBlock,
  CapabilityGridBlock,
  ArchitectureDiagramBlock,
  ServiceCatalogBlock,
  StickyImplementationBlock,
  TechEcosystemBlock,
  CaseStudyBlock,
  FAQBlock,
  RelatedTechnologiesBlock,
  CTABlock
} from '../../components/technology/TechnologyBlocks';

export default function TechnologyDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  // Generate or fetch the dynamic consulting data
  const data = getConsultingData(slug);

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-[#0B1120] min-h-screen text-white font-sans selection:bg-indigo-500/30">
      <TechnologyHeroBlock data={data} />
      
      {data.hero.metrics && data.hero.metrics.length > 0 && (
        <MetricsBlock metrics={data.hero.metrics} />
      )}

      {data.challengeSolution && (
        <ChallengeSolutionBlock data={data.challengeSolution} />
      )}

      {data.whyTechnology && (
        <WhyTechnologyBlock data={data.whyTechnology} />
      )}

      {data.capabilities && data.capabilities.length > 0 && (
        <CapabilityGridBlock data={data.capabilities} />
      )}

      {/* Abstract reference architecture for premium feel */}
      <ArchitectureDiagramBlock />

      {data.serviceCatalog && (
        <ServiceCatalogBlock data={data.serviceCatalog} />
      )}

      {data.implementationJourney && data.implementationJourney.length > 0 && (
        <StickyImplementationBlock data={data.implementationJourney} />
      )}

      {data.ecosystem && (
        <TechEcosystemBlock data={data.ecosystem} />
      )}

      {data.caseStudy && (
        <CaseStudyBlock data={data.caseStudy} />
      )}

      {data.faqs && data.faqs.length > 0 && (
        <FAQBlock data={data.faqs} />
      )}

      {data.relatedTechnologies && data.relatedTechnologies.length > 0 && (
        <RelatedTechnologiesBlock data={data.relatedTechnologies} />
      )}

      <CTABlock />
    </div>
  );
}
