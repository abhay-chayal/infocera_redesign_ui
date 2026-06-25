import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { PortfolioHero } from '../../components/portfolio/PortfolioHero';
import { FeaturedProjects } from '../../components/portfolio/FeaturedProjects';
import { PortfolioGrid } from '../../components/portfolio/PortfolioGrid';
import { PortfolioMetrics } from '../../components/portfolio/PortfolioMetrics';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { CTASection } from '../../components/home/CTASection';

export default function Portfolio() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data) setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full bg-[#0f172a] min-h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <PortfolioHero />
      <FeaturedProjects projects={caseStudies.slice(0, 2)} />
      <PortfolioGrid projects={caseStudies} />
      <PortfolioMetrics />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
