import { ServiceCard } from './ServiceCard';
import { servicesData } from '../../data/servicesData';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const ServicesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1120]">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex-1 max-w-3xl">
            <SectionHeader
              eyebrow="Our Expertise"
              eyebrowColor="text-purple-400"
              title={
                <>
                  Transforming ideas into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    elite digital solutions.
                  </span>
                </>
              }
              align="left"
              className="!mb-0"
            />
          </div>
          <Button 
            href="/services"
            variant="outline"
            size="md"
            className="group whitespace-nowrap rounded-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
