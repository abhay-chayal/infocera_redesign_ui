import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

export const FeaturedArticle = ({ article }: { article: any }) => {

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0f172a]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <SectionHeader
          title="Featured Insight"
          align="left"
          className="!mb-12"
        />

        <div className="group relative rounded-3xl bg-[#1e293b]/20 border border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] flex flex-col lg:flex-row">
          
          {/* Image Container */}
          <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-indigo-600 rounded-full text-xs font-bold text-white shadow-lg uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          {/* Content Container */}
          <div className="p-8 lg:p-12 xl:p-16 w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-400" />
                {new Date(article.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-fuchsia-400" />
                {article.reading_time}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 group-hover:text-indigo-400 transition-colors leading-[1.2]">
              {article.title}
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {article.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto">
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={article.author_avatar || 'https://via.placeholder.com/150'} 
                  alt={article.author}
                  className="w-12 h-12 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{article.author}</h4>
                  <p className="text-sm text-gray-400">{article.author_role}</p>
                </div>
              </div>

              <Button 
                href={`/blog/${article.slug}`}
                variant="outline"
                size="md"
                className="rounded-full group/btn shrink-0"
                rightIcon={<ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />}
              >
                Read Article
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
