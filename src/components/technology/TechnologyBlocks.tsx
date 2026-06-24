
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Button } from '../shared/Button';
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Zap, Globe, Database, Server } from 'lucide-react';
import type { ConsultingTechnologyData } from '../../data/consultingTechnologyData';

// 1. TechnologyHeroBlock
export const TechnologyHeroBlock = ({ data }: { data: ConsultingTechnologyData }) => (
  <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
    {/* Architectural Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80" 
        alt="Technology Architecture" 
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),transparent_70%)]" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-8">
          {data.hero.badge}
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          {data.hero.headline} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">{data.hero.highlight}</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
          {data.hero.description}
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
          <Button href="/contact" variant="primary" size="lg" className="bg-white text-black hover:bg-gray-200">
            {data.hero.primaryCta} <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="/portfolio" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
            {data.hero.secondaryCta}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// 2. MetricsBlock
export const MetricsBlock = ({ metrics }: { metrics: { value: string; label: string }[] }) => (
  <section className="py-12 bg-black border-b border-white/5 relative z-20 -mt-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col items-center py-6 md:py-0">
            <span className="text-4xl lg:text-5xl font-bold text-white mb-2">{m.value}</span>
            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3. WhyTechnologyBlock
export const WhyTechnologyBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['whyTechnology']> }) => (
  <section className="py-32 lg:py-40 bg-[#070b14]">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{data.headline}</h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">{data.description}</p>
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Technology" className="w-full rounded-2xl border border-white/5 opacity-80" />
        </div>
        <div className="lg:col-span-7 space-y-8">
          {data.points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

// 4. ChallengeSolutionBlock
export const ChallengeSolutionBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['challengeSolution']> }) => (
  <section className="py-32 lg:py-40 bg-black">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-6">The Challenge</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{data.challenge}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-6">The Solution</h3>
          <p className="text-xl text-white leading-relaxed mb-10">{data.solution}</p>
          <ul className="space-y-4">
            {data.outcomes.map((out, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300 font-medium">{out}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// 5. CapabilityGridBlock
export const CapabilityGridBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['capabilities']> }) => (
  <section className="py-32 lg:py-40 bg-[#0B1120] border-y border-white/5">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Core Capabilities</h2>
        <p className="text-lg text-gray-400 leading-relaxed">Deep engineering expertise across the entire technology stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div key={i} className="p-8 rounded-3xl bg-black border border-white/5 group hover:border-indigo-500/30 transition-all duration-300">
              <Icon className="w-8 h-8 text-indigo-400 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{cap.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// 6. ArchitectureDiagramBlock
export const ArchitectureDiagramBlock = () => (
  <section className="py-32 lg:py-48 bg-black overflow-hidden relative">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reference Architecture</h2>
        <p className="text-lg text-gray-400 leading-relaxed">A high-level topology of our standard enterprise deployment model.</p>
      </div>
      {/* Highly abstract architecture representation for visual premium feel */}
      <div className="relative w-full max-w-5xl mx-auto aspect-video bg-[#070b14] rounded-3xl border border-white/10 p-8 md:p-16 flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full justify-between">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex flex-col items-center">
            <Globe className="w-8 h-8 text-blue-400 mb-3" />
            <span className="text-xs font-bold text-gray-300 uppercase">Client Edge</span>
          </div>
          <div className="h-0.5 w-16 md:w-32 bg-gradient-to-r from-blue-400/50 to-indigo-400/50" />
          <div className="p-8 bg-indigo-500/10 border border-indigo-500/30 rounded-full backdrop-blur-md shadow-[0_0_50px_rgba(99,102,241,0.2)]">
            <Zap className="w-12 h-12 text-indigo-400" />
          </div>
          <div className="h-0.5 w-16 md:w-32 bg-gradient-to-r from-indigo-400/50 to-purple-400/50" />
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-3">
              <Database className="w-5 h-5 text-purple-400" /> <span className="text-xs font-bold text-gray-300 uppercase">Primary DB</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-3">
              <Server className="w-5 h-5 text-fuchsia-400" /> <span className="text-xs font-bold text-gray-300 uppercase">Replica Node</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 7. ServiceCatalogBlock
export const ServiceCatalogBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['serviceCatalog']> }) => {
  if (!data) return null;
  return (
    <section className="py-32 lg:py-40 bg-[#070b14]">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {data.services.map((svc, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">{svc.name}</h3>
              <p className="text-gray-400 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. StickyImplementationBlock
export const StickyImplementationBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['implementationJourney']> }) => (
  <section className="py-32 lg:py-40 bg-black relative">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Journey</h2>
            <p className="text-lg text-gray-400">Our proven methodology for deploying and scaling enterprise systems seamlessly.</p>
          </div>
        </div>
        <div className="lg:w-2/3 space-y-16">
          {data.map((step, i) => (
            <div key={i} className="flex gap-8 relative">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-indigo-500">{step.step}</span>
                {i !== data.length - 1 && <div className="w-px h-full bg-white/10 mt-4" />}
              </div>
              <div className="pb-16">
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">{step.duration}</p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 9. TechEcosystemBlock
export const TechEcosystemBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['ecosystem']> }) => {
  if (!data) return null;
  return (
    <section className="py-32 lg:py-40 bg-[#0B1120] border-y border-white/5 text-center">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.title}</h2>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-16">{data.description}</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {data.tools.map((tool, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// 10. CaseStudyBlock
export const CaseStudyBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['caseStudy']> }) => (
  <section className="py-32 lg:py-48 bg-black">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 rounded-[3rem] border border-indigo-500/20 p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-3xl">
          <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-8 block">Featured Engagement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{data.client}</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
            <div>
              <div className="text-5xl font-bold text-white mb-2">{data.metric}</div>
              <div className="text-sm uppercase tracking-widest text-indigo-300 font-semibold">{data.metricLabel}</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20" />
            <Button href={data.link} variant="outline" className="border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white rounded-full">
              Read Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 11. FAQBlock
export const FAQBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['faqs']> }) => (
  <section className="py-32 lg:py-40 bg-[#070b14]">
    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Common Questions</h2>
      <div className="space-y-8">
        {data.map((faq, i) => (
          <div key={i} className="border-b border-white/10 pb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
              <MessageSquare className="w-5 h-5 text-indigo-400" /> {faq.question}
            </h3>
            <p className="text-gray-400 leading-relaxed pl-9">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 12. RelatedTechnologiesBlock
export const RelatedTechnologiesBlock = ({ data }: { data: NonNullable<ConsultingTechnologyData['relatedTechnologies']> }) => (
  <section className="py-32 bg-black border-y border-white/5">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">Related Architectures</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((tech, i) => (
          <Button key={i} href={`/technologies/${tech.slug}`} variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-xl px-8 py-6 h-auto">
            <span className="text-lg font-semibold">{tech.name}</span>
            <ChevronRight className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        ))}
      </div>
    </div>
  </section>
);

// 13. CTABlock
export const CTABlock = () => (
  <section className="py-32 lg:py-48 bg-[#0B1120] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 pointer-events-none" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Ready to architect the future?</h2>
      <p className="text-lg text-gray-400 mb-10">Schedule a technical consultation with our principal engineers.</p>
      <Button href="/contact" size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-4 font-bold">
        Talk to an Architect
      </Button>
    </div>
  </section>
);
