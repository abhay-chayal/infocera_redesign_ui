export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export interface ChallengeData {
  title: string;
  description: string;
  points: string[];
}

export interface SolutionData {
  title: string;
  description: string;
  highlights: { title: string; description: string }[];
}

export interface Capability {
  title: string;
  description: string;
  icon: string; // Map to Lucide icons dynamically
}

export interface ProcessStep {
  title: string;
  description: string;
  number: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  type?: 'source' | 'process' | 'storage' | 'client' | 'default';
  next?: string[]; // IDs of nodes this connects to
}

export interface Technology {
  name: string;
  category: string;
  icon?: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  client: string;
  results: string[];
  link?: string;
}

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  seo: SEO;
  hero: HeroData;
  challenge: ChallengeData;
  solution: SolutionData;
  capabilities: Capability[];
  process: ProcessStep[];
  architecture: ArchitectureNode[];
  technologies: Technology[];
  caseStudy: CaseStudy;
  metrics: Metric[];
  faq: FAQ[];
}
