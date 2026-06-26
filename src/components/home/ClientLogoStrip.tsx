import { logoData } from '../../data/logoData';
import { motion } from 'framer-motion';

export const ClientLogoStrip = () => {
  const allLogos = [
    ...logoData.categories.clients,
    ...logoData.categories.partners,
    ...logoData.categories.compliance
  ];

  return (
    <section className="py-24 bg-[black] border-b border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[black] to-[black] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-[0.3em] mb-16"
        >
          {logoData.headline}
        </motion.p>
        
        {/* Floating Constellation Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {allLogos.map((logo, idx) => (
            <motion.div 
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
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
                <div className="px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 flex items-center justify-center cursor-default shadow-lg shadow-black/20">
                  <span className="text-lg md:text-xl font-bold font-['Exo',sans-serif] tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-500">
                    {logo.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

