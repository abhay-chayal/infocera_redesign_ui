import { Target, CheckCircle2, Zap } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';

export const FeaturedProjects = ({ projects }: { projects: any[] }) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0f172a]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader
          title={
            <>
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Implementations</span>
            </>
          }
          align="center"
        />

        <div className="space-y-24 lg:space-y-40">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden group shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-[#1e293b]/50 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src={project.hero_image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech: string) => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 rounded-full mb-6">
                  {project.industry}
                </span>
                
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
                  {project.title}
                </h3>

                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                      <Target className="w-5 h-5 text-red-400" />
                      The Challenge
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      Our Solution
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((result: any, rIdx: number) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-white font-medium">{result.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
