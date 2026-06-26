import { ArrowRight, Sparkles } from 'lucide-react';
import { heroData } from '../../data/heroData';
import { Button } from '../shared/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black py-24 lg:py-32">
      
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/project16.mp4" type="video/mp4" />
          {/* Fallback overlay if video doesn't load immediately */}
        </video>
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[black] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Clean, Centered Content */}
        <motion.div 
          className="max-w-3xl mx-auto flex flex-col items-center"
          variants={staggerContainer}
          initial="visible"
          animate="visible"
        >
          
          {/* Trust Badge */}
          <motion.div variants={fadeInUp}>
            <Button 
              href={heroData.badge.link}
              variant="outline"
              size="sm"
              className="group rounded-full mb-8 bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
              <span className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">
                {heroData.badge.text}
              </span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </Button>
          </motion.div>

          {/* Minimalist Premium Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            {heroData.headline.prefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 font-semibold">
              {heroData.headline.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed font-light opacity-90"
          >
            {heroData.description}
          </motion.p>

          {/* Refined CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button 
              href={heroData.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 border-0 rounded-full px-8 py-3.5 text-base font-semibold"
            >
              {heroData.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              href={heroData.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3.5 text-base backdrop-blur-md"
            >
              {heroData.secondaryCta.label}
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
