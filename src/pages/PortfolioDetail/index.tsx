import { useParams, Navigate } from 'react-router-dom';
import { portfolioDetailsData } from '../../data/portfolioDetailsData';
import { SectionHeader } from '../../components/shared/SectionHeader';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/shared/Button';
import { motion } from 'framer-motion';

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !portfolioDetailsData[slug]) {
    return <Navigate to="/portfolio" replace />;
  }

  const project = portfolioDetailsData[slug];

  return (
    <div className="bg-[#0B1120] min-h-screen text-white pt-20">
      {/* Hero Banner with Parallax-like Image */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent z-20" />
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-30 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider text-indigo-300 uppercase">
                  {project.industry}
                </span>
                <span className="text-gray-400 text-sm font-medium">
                  {project.timeline}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {project.client}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">The Challenge</h2>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-inner">
                <p className="text-lg text-gray-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">The Solution</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Gallery */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img: string, idx: number) => (
                  <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <img src={img} alt="Project Gallery" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Impact Metrics */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold text-white mb-8">Business Impact</h3>
              <div className="space-y-8 relative z-10">
                {project.results.map((res: any, idx: number) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 mb-2">
                      {res.metric}
                    </span>
                    <span className="text-gray-400 font-medium">{res.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services & Tech */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Services Provided</h3>
                <ul className="space-y-3">
                  {project.services.map((service: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project CTA */}
      <section className="border-t border-white/10 py-24 bg-[#070b14]">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Ready to transform your business?"
            subtitle="Let's build something extraordinary together."
            align="center"
          />
          <div className="flex justify-center mt-10">
            <Button href="/contact" size="lg" className="bg-white text-black hover:bg-gray-200" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
