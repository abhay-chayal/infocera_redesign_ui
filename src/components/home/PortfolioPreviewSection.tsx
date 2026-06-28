import { PortfolioCard } from './PortfolioCard';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const PortfolioPreviewSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F9FA] dark:bg-black border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex-1 max-w-3xl">
            <SectionHeader
              eyebrow="Our Work"
              eyebrowColor="text-[#0ea5e9] dark:text-zinc-500"
              title={
                <>
                  Proven impact across{' '}
                  <span className="text-[#0ea5e9] dark:text-white">
                    global industries.
                  </span>
                </>
              }
              align="left"
              className="!mb-0"
            />
          </div>
          <Button 
            href="/portfolio"
            variant="outline"
            size="md"
            className="group whitespace-nowrap rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 border-0 transition-colors"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.slice(0, 3).map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="h-full">
              <PortfolioCard
                title={project.title}
                industry={project.industry}
                summary={project.summary}
                image={project.image}
                href={project.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
