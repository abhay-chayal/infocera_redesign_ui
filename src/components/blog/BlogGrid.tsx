import { useState } from 'react';
import { blogPageData } from '../../data/blogPageData';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

export const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = blogPageData.articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120] border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-3 md:gap-2 w-full lg:w-auto no-scrollbar shrink-0">
            {blogPageData.categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:-translate-y-0 text-white border-transparent' 
                    : 'bg-[#1e293b]/50 text-gray-400 hover:bg-[#1e293b] border-white/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search articles..."
              aria-label="Search articles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1e293b]/50 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <Link 
                to={`/blog/${article.id}`}
                key={article.id}
                className="group block h-full"
              >
                <Card variant="interactive" themeColor="indigo" className="flex flex-col h-full p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-[#0f172a]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-gray-200">
                    {article.category}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                    <span>{article.publishDate}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-sm font-bold text-white">{article.author}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-[#1e293b]/20 border border-white/5 rounded-3xl">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="link"
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="mt-4 text-indigo-400 hover:text-indigo-300 no-underline hover:no-underline font-medium"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
