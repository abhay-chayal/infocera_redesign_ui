import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../shared/Button';
import { Plus, Trash2 } from 'lucide-react';

export const AdminBlogTab = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Technology');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [authorName] = useState('Admin');
  const [readTime] = useState('5 min read');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data) setPosts(data);
    setIsLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await supabase.from('blog_posts').insert([
      {
        title,
        slug,
        category,
        excerpt,
        content,
        image_url: imageUrl,
        author_name: authorName,
        read_time: readTime,
        publish_date: new Date().toISOString().split('T')[0]
      }
    ]);
    
    if (!error) {
      setIsCreating(false);
      setTitle(''); setSlug(''); setExcerpt(''); setContent(''); setImageUrl('');
      fetchPosts();
    } else {
      console.error("Error creating post", error);
      alert("Failed to create post. Check console.");
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    await supabase.from('blog_posts').delete().eq('id', id);
    fetchPosts();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Blog Posts</h2>
        <Button onClick={() => setIsCreating(!isCreating)} rightIcon={isCreating ? undefined : <Plus className="w-4 h-4" />}>
          {isCreating ? 'Cancel' : 'New Post'}
        </Button>
      </div>

      {isCreating && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Create New Post</h3>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input required type="text" value={title} onChange={e => { setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')); }} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Slug</label>
                <input required type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Category</label>
                <input required type="text" value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Image URL</label>
                <input required type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Excerpt</label>
              <textarea required value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Content (Markdown/HTML supported)</label>
              <textarea required value={content} onChange={e => setContent(e.target.value)} rows={6} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? 'Publishing...' : 'Publish Post'}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-4 font-semibold text-gray-300">Title</th>
              <th className="p-4 font-semibold text-gray-300">Category</th>
              <th className="p-4 font-semibold text-gray-300">Date</th>
              <th className="p-4 font-semibold text-gray-300 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">No posts found.</td></tr>
            ) : (
              posts.map(post => (
                <tr key={post.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="p-4 font-medium text-white">{post.title}</td>
                  <td className="p-4 text-gray-400">{post.category}</td>
                  <td className="p-4 text-gray-400">{post.publish_date}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button onClick={() => handleDelete(post.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
