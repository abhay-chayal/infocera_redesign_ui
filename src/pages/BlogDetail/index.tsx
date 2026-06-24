import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPageData } from '../../data/blogPageData';
import { blogDetailsData } from '../../data/blogDetailsData';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <Navigate to="/blog" replace />;

  // Find the article metadata
  const articleMeta: any = blogPageData.articles.find(a => a.id === slug) || 
                      (blogPageData.featuredArticle.id === slug ? blogPageData.featuredArticle : null);
                      
  const articleContent = blogDetailsData[slug];

  if (!articleMeta || !articleContent) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-[#070b14] min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide">
              {articleMeta.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            {articleMeta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-y border-white/10 py-6">
            <div className="flex items-center gap-3">
              {'authorAvatar' in articleMeta ? (
                <img src={articleMeta.authorAvatar} alt={articleMeta.author} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 font-bold">
                  {articleMeta.author.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-bold text-white">{articleMeta.author}</div>
                {'authorRole' in articleMeta && <div className="text-xs text-gray-500">{articleMeta.authorRole}</div>}
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <Calendar className="w-4 h-4" />
              {articleMeta.publishDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {articleMeta.readingTime}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10"
        >
          <img src={articleMeta.image} alt={articleMeta.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Body */}
        <div 
          className="prose prose-invert prose-lg prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: articleContent.content }}
        />

        {/* Footer Actions */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">Share this article:</span>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
