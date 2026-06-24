import React from 'react';
import { Code2, Cloud, Database, ShieldCheck, Zap, Globe, Lock, Rocket, Layers as LayersIcon, LayoutGrid } from 'lucide-react';

export interface TechHeroData {
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: { value: string; label: string }[];
}

export interface WhyTechData {
  headline: string;
  description: string;
  points: { title: string; description: string; icon: React.ElementType }[];
}

export interface ChallengeSolutionData {
  challenge: string;
  solution: string;
  outcomes: string[];
}

export interface CapabilityData {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ArchitectureNode {
  label: string;
  type: 'client' | 'gateway' | 'service' | 'database' | 'external';
}

export interface ArchitectureDiagramData {
  title: string;
  description: string;
  nodes: ArchitectureNode[]; // Simplified representation of an architecture diagram
}

export interface ServiceCatalogData {
  title: string;
  services: { name: string; description: string }[];
}

export interface ImplementationStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface TechEcosystemData {
  title: string;
  description: string;
  tools: string[];
}

export interface TechCaseStudyData {
  client: string;
  metric: string;
  metricLabel: string;
  description: string;
  link: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface RelatedTechData {
  name: string;
  slug: string;
}

export interface ConsultingTechnologyData {
  id: string;
  category: string;
  hero: TechHeroData;
  whyTechnology?: WhyTechData;
  challengeSolution?: ChallengeSolutionData;
  capabilities?: CapabilityData[];
  architecture?: ArchitectureDiagramData;
  serviceCatalog?: ServiceCatalogData;
  implementationJourney?: ImplementationStep[];
  ecosystem?: TechEcosystemData;
  caseStudy?: TechCaseStudyData;
  faqs?: FAQData[];
  relatedTechnologies?: RelatedTechData[];
}

// Sample Consulting Grade Data for AWS
const awsConsultingData: ConsultingTechnologyData = {
  id: 'aws',
  category: 'CLOUD COMPUTING',
  hero: {
    badge: 'Enterprise AWS Architecture',
    headline: 'Build Unbreakable',
    highlight: 'Cloud Infrastructure',
    description: 'We design, deploy, and manage highly scalable, secure, and resilient architectures on Amazon Web Services. Move beyond simple hosting to true cloud-native enterprise ecosystems.',
    primaryCta: 'Discuss Your AWS Strategy',
    secondaryCta: 'View Case Studies',
    metrics: [
      { value: '99.99%', label: 'Guaranteed Uptime' },
      { value: '$4M+', label: 'Cloud Spend Optimized' },
      { value: '50+', label: 'AWS Certifications' }
    ]
  },
  whyTechnology: {
    headline: 'Why Enterprises Choose AWS',
    description: 'AWS provides the most comprehensive and broadly adopted cloud platform globally. When architected correctly, it offers unparalleled agility and cost-efficiency.',
    points: [
      { title: 'Limitless Scalability', description: 'Auto-scaling infrastructure that dynamically adjusts to your traffic spikes in milliseconds.', icon: Cloud },
      { title: 'Unmatched Security', description: 'Military-grade encryption, strict IAM policies, and comprehensive compliance controls.', icon: ShieldCheck },
      { title: 'Global Reach', description: 'Deploy applications across 30+ geographic regions for sub-millisecond latency worldwide.', icon: Globe }
    ]
  },
  challengeSolution: {
    challenge: 'Enterprises often struggle with legacy on-premise infrastructure, resulting in slow deployment cycles, high capital expenditure, and severe vulnerability to unexpected traffic spikes.',
    solution: 'By migrating to a cloud-native AWS architecture utilizing Serverless (Lambda) and Managed Kubernetes (EKS), we eliminate infrastructure bottlenecks, converting CapEx to OpEx while enabling hundreds of deployments per day.',
    outcomes: ['Zero-downtime deployments', '60% reduction in infrastructure costs', 'Automated disaster recovery']
  },
  capabilities: [
    { title: 'Cloud Migration Strategy', description: 'Seamlessly lifting and shifting, or entirely refactoring monolithic applications to cloud-native microservices.', icon: LayersIcon },
    { title: 'Serverless Computing', description: 'Building event-driven architectures with AWS Lambda, SQS, and EventBridge.', icon: Zap },
    { title: 'Data Lakes & Analytics', description: 'Constructing massive data processing pipelines using S3, Glue, and Redshift.', icon: Database },
    { title: 'Security & Compliance', description: 'Hardening cloud environments to meet SOC2, HIPAA, and PCI-DSS requirements.', icon: Lock }
  ],
  serviceCatalog: {
    title: 'Our AWS Consulting Services',
    services: [
      { name: 'Cloud Architecture Design', description: 'Custom blueprints for secure, scalable cloud environments.' },
      { name: 'Cost Optimization (FinOps)', description: 'Auditing and re-architecting to eliminate AWS billing waste.' },
      { name: 'CI/CD Automation', description: 'Building robust deployment pipelines using CodePipeline and GitHub Actions.' },
      { name: 'Managed Cloud Services', description: '24/7 monitoring, incident response, and proactive maintenance.' }
    ]
  },
  implementationJourney: [
    { step: '01', title: 'Discovery & Audit', description: 'Deep analysis of your current infrastructure, compliance needs, and business objectives.', duration: '1-2 Weeks' },
    { step: '02', title: 'Architecture Design', description: 'Drafting high-availability blueprints, VPC topologies, and IAM structures.', duration: '2-3 Weeks' },
    { step: '03', title: 'Migration & Build', description: 'Executing the migration using Infrastructure as Code (Terraform/CloudFormation).', duration: '4-12 Weeks' },
    { step: '04', title: 'Optimization & Handoff', description: 'Load testing, security auditing, and transitioning to a managed state.', duration: 'Ongoing' }
  ],
  ecosystem: {
    title: 'The AWS Ecosystem',
    description: 'We orchestrate the entire AWS suite alongside industry-leading third-party tools.',
    tools: ['Terraform', 'Datadog', 'Kubernetes', 'Docker', 'Snowflake', 'MongoDB Atlas']
  },
  caseStudy: {
    client: 'Global Fintech Processor',
    metric: '2.4M',
    metricLabel: 'Transactions per second',
    description: 'We migrated their legacy core banking monolith to an event-driven AWS architecture, achieving sub-10ms latency and zero downtime during market crashes.',
    link: '/portfolio/finflow-core'
  },
  faqs: [
    { question: 'How long does a typical cloud migration take?', answer: 'Depending on the complexity, a "lift and shift" can take 4-8 weeks, while a full cloud-native refactor may take 3-6 months.' },
    { question: 'Can you lower our existing AWS bill?', answer: 'Yes. Our FinOps audits typically uncover 30-40% in immediate savings by right-sizing instances and purchasing reserved capacity.' },
    { question: 'Do you use Infrastructure as Code?', answer: 'Absolutely. We define 100% of our infrastructure using Terraform, ensuring it is version-controlled, repeatable, and secure.' }
  ],
  relatedTechnologies: [
    { name: 'Google Cloud', slug: 'google-cloud' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'React', slug: 'react-development' }
  ]
};

// We will use a fallback proxy to dynamically generate similar consulting data for all other technologies
export const getConsultingData = (slug: string): ConsultingTechnologyData => {
  if (slug === 'aws') return awsConsultingData;
  
  // Dynamic generalized generator for all other 20 tech pages to ensure the router works
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    id: slug,
    category: 'ENTERPRISE TECHNOLOGY',
    hero: {
      badge: `${formattedTitle} Consulting`,
      headline: 'Enterprise-Grade',
      highlight: formattedTitle,
      description: `We design, develop, and scale mission-critical applications utilizing ${formattedTitle}. Our senior engineering teams construct fault-tolerant architectures built for exponential growth.`,
      primaryCta: `Discuss Your ${formattedTitle} Project`,
      secondaryCta: 'View Enterprise Solutions',
      metrics: [
        { value: '100%', label: 'Delivery Success' },
        { value: 'Enterprise', label: 'Grade Security' },
        { value: 'Zero', label: 'Technical Debt' }
      ]
    },
    whyTechnology: {
      headline: `Why Enterprises Trust ${formattedTitle}`,
      description: `Modern enterprises demand agility, security, and extreme scale. ${formattedTitle} has proven itself as a foundational pillar in the modern technology stack.`,
      points: [
        { title: 'Extreme Scalability', description: 'Architected to handle massive concurrency without degrading performance.', icon: LayersIcon },
        { title: 'Ecosystem Maturity', description: 'Backed by a global community and vast enterprise tooling support.', icon: Globe },
        { title: 'Developer Velocity', description: 'Drastically reduces time-to-market with modern developer ergonomics.', icon: Rocket }
      ]
    },
    challengeSolution: {
      challenge: `Organizations frequently hit scale bottlenecks with legacy systems, causing delayed deployments, slow load times, and poor user experiences.`,
      solution: `We implement elite ${formattedTitle} architectures that bypass traditional bottlenecks, leveraging modern design patterns to guarantee high availability and sub-second latency.`,
      outcomes: ['Increased deployment velocity', 'Eliminated technical debt', 'Future-proof architecture']
    },
    capabilities: [
      { title: 'Architecture & Strategy', description: `High-level system design for ${formattedTitle} implementations.`, icon: LayoutGrid },
      { title: 'Custom Development', description: 'Building bespoke features and proprietary business logic.', icon: Code2 },
      { title: 'Performance Audits', description: 'Identifying and eliminating memory leaks, slow queries, and rendering blocks.', icon: Zap },
      { title: 'Security Hardening', description: 'Protecting your application against OWASP top 10 vulnerabilities.', icon: Lock }
    ],
    implementationJourney: [
      { step: '01', title: 'Architecture Review', description: 'Analyzing business requirements and designing the schema/system topology.', duration: '1-2 Weeks' },
      { step: '02', title: 'Agile Development', description: 'Sprinting in 2-week intervals to deliver production-ready code continuously.', duration: 'Ongoing' },
      { step: '03', title: 'QA & Load Testing', description: 'Ensuring the system can handle 10x expected peak loads securely.', duration: '2 Weeks' },
      { step: '04', title: 'Deployment & Maintenance', description: 'Executing zero-downtime deployments and 24/7 monitoring.', duration: 'Ongoing' }
    ],
    caseStudy: {
      client: 'Fortune 500 Enterprise',
      metric: '10x',
      metricLabel: 'Performance Increase',
      description: `We modernized a legacy monolith using ${formattedTitle}, resulting in a massive increase in system throughput and developer productivity.`,
      link: '/portfolio'
    },
    faqs: [
      { question: `Why should we choose ${formattedTitle}?`, answer: `It provides an incredible balance of performance, security, and developer velocity.` },
      { question: 'Do you provide post-launch support?', answer: 'Yes, we offer comprehensive SLA-backed maintenance and 24/7 monitoring.' }
    ],
    relatedTechnologies: [
      { name: 'AWS Cloud', slug: 'aws' },
      { name: 'React', slug: 'react-development' },
      { name: 'Node.js', slug: 'nodejs' }
    ]
  };
};
