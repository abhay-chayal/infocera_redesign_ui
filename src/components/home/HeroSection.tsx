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
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/assets/project16.mp4" type="video/mp4" />
          {/* Fallback overlay if video doesn't load immediately */}
        </video>
        {/* Simple Vignette to ensure text readability without gradients */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Clean, Centered Content */}
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center"
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
              className="group rounded-full mb-10 bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs md:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-widest uppercase">
                {heroData.badge.text}
              </span>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </Button>
          </motion.div>

          {/* Minimalist Premium Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-8"
          >
            {heroData.headline.prefix} <br />
            <span className="text-white">
              {heroData.headline.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            {heroData.description}
          </motion.p>

          {/* Refined CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Button 
              href={heroData.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 border-0 rounded-full px-10 py-4 text-base font-bold transition-transform hover:scale-105 duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              {heroData.primaryCta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              href={heroData.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-4 text-base font-bold backdrop-blur-xl transition-all hover:border-white/40"
            >
              {heroData.secondaryCta.label}
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
