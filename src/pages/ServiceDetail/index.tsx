import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serviceDetailsData } from '../../data/serviceDetailsData';

// Blocks
import { HeroBlock } from '../../blocks/HeroBlock';
import { ChallengeBlock } from '../../blocks/ChallengeBlock';
import { SolutionBlock } from '../../blocks/SolutionBlock';
import { CapabilityGridBlock } from '../../blocks/CapabilityGridBlock';
import { StickyProcessBlock } from '../../blocks/StickyProcessBlock';
import { ArchitectureDiagramBlock } from '../../blocks/ArchitectureDiagramBlock';
import { TechStackBlock } from '../../blocks/TechStackBlock';
import { CaseStudyBlock } from '../../blocks/CaseStudyBlock';
import { MetricsBlock } from '../../blocks/MetricsBlock';
import { FAQBlock } from '../../blocks/FAQBlock';
import { CTABlock } from '../../blocks/CTABlock';

const SEOHead: React.FC<{ seo: any }> = ({ seo }) => {
  useEffect(() => {
    document.title = seo.title;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords.join(', '));

    // Update Canonical URL
    if (seo.canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', seo.canonicalUrl);
    }

  }, [seo]);

  return null;
};

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !serviceDetailsData[slug]) {
    // Enterprise 404 handling could be a dedicated component. For now, redirect or show error.
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c]">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
          <p className="text-xl text-gray-400">Enterprise Service Not Found</p>
        </div>
      </div>
    );
  }

  const data = serviceDetailsData[slug];

  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white selection:bg-indigo-500/30">
      <SEOHead seo={data.seo} />
      
      <main>
        <HeroBlock data={data.hero} />
        
        {data.challenge && (
          <ChallengeBlock data={data.challenge} />
        )}
        
        {data.solution && (
          <SolutionBlock data={data.solution} />
        )}
        
        {data.capabilities && data.capabilities.length > 0 && (
          <CapabilityGridBlock data={data.capabilities} />
        )}
        
        {data.process && data.process.length > 0 && (
          <StickyProcessBlock data={data.process} />
        )}
        
        {data.architecture && data.architecture.length > 0 && (
          <ArchitectureDiagramBlock data={data.architecture} />
        )}
        
        {data.technologies && data.technologies.length > 0 && (
          <TechStackBlock data={data.technologies} />
        )}
        
        {data.caseStudy && (
          <CaseStudyBlock data={data.caseStudy} />
        )}
        
        {data.metrics && data.metrics.length > 0 && (
          <MetricsBlock data={data.metrics} />
        )}
        
        {data.faq && data.faq.length > 0 && (
          <FAQBlock data={data.faq} />
        )}
        
        <CTABlock data={data.hero} />
      </main>
    </div>
  );
};

export default ServiceDetailPage;
