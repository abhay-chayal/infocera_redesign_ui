import { logoData } from '../../data/logoData';
import { motion } from 'framer-motion';

export const ClientLogoStrip = () => {
  const allLogos = [
    ...logoData.categories.clients,
    ...logoData.categories.partners,
    ...logoData.categories.compliance
  ];

  return (
    <section className="py-32 bg-black border-b border-white/5 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-20"
        >
          {logoData.headline}
        </motion.p>
        
        {/* Floating Constellation Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {allLogos.map((logo, idx) => (
            <motion.div 
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.05, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="relative group"
            >
              {/* Floating Animation Wrapper */}
              <div 
                className="animate-float" 
                style={{ animationDelay: `${(idx % 5) * 0.5}s` }}
              >
                <div className="px-6 py-4 flex items-center justify-center cursor-default opacity-40 hover:opacity-100 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <img 
                    src={logo.logoUrl} 
                    alt={logo.name} 
                    className={`h-7 md:h-9 w-auto object-contain select-none pointer-events-none ${logo.needsInvert ? 'brightness-0 invert' : ''}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

