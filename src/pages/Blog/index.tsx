import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { BlogHero } from '../../components/blog/BlogHero';
import { FeaturedArticle } from '../../components/blog/FeaturedArticle';
import { BlogGrid } from '../../components/blog/BlogGrid';
import { Newsletter } from '../../components/blog/Newsletter';

export default function Blog() {
  const [featuredArticle, setFeaturedArticle] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('publish_date', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setFeaturedArticle(data[0]);
          setArticles(data.slice(1));
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full bg-[#0f172a] min-h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <BlogHero />
      {featuredArticle && <FeaturedArticle article={featuredArticle} />}
      <BlogGrid articles={articles} />
      <Newsletter />
    </div>
  );
}
