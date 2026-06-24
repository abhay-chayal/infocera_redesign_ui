import { BlogHero } from '../../components/blog/BlogHero';
import { FeaturedArticle } from '../../components/blog/FeaturedArticle';
import { BlogGrid } from '../../components/blog/BlogGrid';
import { Newsletter } from '../../components/blog/Newsletter';

export default function Blog() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <BlogHero />
      <FeaturedArticle />
      <BlogGrid />
      <Newsletter />
    </div>
  );
}
