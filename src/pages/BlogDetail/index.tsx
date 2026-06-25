import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (!slug) return;
    
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();
          
        if (error || !data) throw error;
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticle();
  }, [slug]);

  if (!slug || error) return <Navigate to="/blog" replace />;

  if (isLoading || !article) {
    return (
      <div className="flex flex-col w-full bg-[#0f172a] min-h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
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
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-y border-white/10 py-6">
            <div className="flex items-center gap-3">
              {article.author_avatar ? (
                <img src={article.author_avatar} alt={article.author} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 font-bold">
                  {article.author?.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-bold text-white">{article.author}</div>
                {article.author_role && <div className="text-xs text-gray-500">{article.author_role}</div>}
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <Calendar className="w-4 h-4" />
              {new Date(article.publish_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.reading_time}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10"
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Body */}
        <div 
          className="prose prose-invert prose-lg prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
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
