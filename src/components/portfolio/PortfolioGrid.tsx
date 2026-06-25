import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

const CATEGORIES = ["All", "Healthcare", "FinTech", "E-commerce", "SaaS", "AI/ML"];

export const PortfolioGrid = ({ projects }: { projects: any[] }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.industry === activeFilter);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <SectionHeader
              title={
                <>
                  Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Library</span>
                </>
              }
              subtitle="Filter through our archive of successful digital transformations."
              align="left"
              className="!mb-0"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-purple-500 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-0 text-white border-transparent" 
                    : "bg-[#1e293b]/50 text-gray-400 hover:bg-[#1e293b] border-white/5 hover:border-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-3xl bg-[#1e293b]/20 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a]/60 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.hero_image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-wider">
                  {project.industry}
                </span>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow line-clamp-3">
                  {project.overview}
                </p>
                
                <Button 
                  href={`/portfolio/${project.slug}`}
                  variant="link"
                  className="p-0 h-auto min-h-0 text-white/60 group-hover:text-fuchsia-400 uppercase tracking-wider mt-auto no-underline hover:no-underline justify-start gap-2 text-sm w-fit"
                  rightIcon={<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />}
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
