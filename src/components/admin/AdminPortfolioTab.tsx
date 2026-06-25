import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../shared/Button';
import { Plus, Trash2 } from 'lucide-react';

export const AdminPortfolioTab = () => {
  const [studies, setStudies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [client, setClient] = useState('');
  const [industry, setIndustry] = useState('');
  const [services, setServices] = useState('');
  const [timeline, setTimeline] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [overview, setOverview] = useState('');
  const [challenge, setChallenge] = useState('');
  const [solution, setSolution] = useState('');
  const [resultsStr, setResultsStr] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [gallery, setGallery] = useState('');

  useEffect(() => {
    fetchStudies();
  }, []);

  const fetchStudies = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data) setStudies(data);
    setIsLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    let parsedResults = [];
    try {
      parsedResults = JSON.parse(resultsStr || '[]');
    } catch {
      alert("Results must be valid JSON array of objects. Example: [{\"metric\":\"100%\",\"description\":\"Growth\"}]");
      setIsLoading(false);
      return;
    }
    
    const { error } = await supabase.from('case_studies').insert([
      {
        title,
        slug,
        client,
        industry,
        services: services.split(',').map(s => s.trim()).filter(Boolean),
        timeline,
        hero_image: heroImage,
        overview,
        challenge,
        solution,
        results: parsedResults,
        technologies: technologies.split(',').map(t => t.trim()).filter(Boolean),
        gallery: gallery.split(',').map(g => g.trim()).filter(Boolean)
      }
    ]);
    
    if (!error) {
      setIsCreating(false);
      // Reset form
      setTitle(''); setSlug(''); setClient(''); setIndustry(''); setServices('');
      setTimeline(''); setHeroImage(''); setOverview(''); setChallenge('');
      setSolution(''); setResultsStr(''); setTechnologies(''); setGallery('');
      fetchStudies();
    } else {
      console.error("Error creating case study", error);
      alert("Failed to create case study. Check console.");
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this case study?')) return;
    await supabase.from('case_studies').delete().eq('id', id);
    fetchStudies();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Case Studies</h2>
        <Button onClick={() => setIsCreating(!isCreating)} rightIcon={isCreating ? undefined : <Plus className="w-4 h-4" />}>
          {isCreating ? 'Cancel' : 'New Case Study'}
        </Button>
      </div>

      {isCreating && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Create New Case Study</h3>
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
                <label className="block text-sm text-gray-400 mb-1">Client Name</label>
                <input required type="text" value={client} onChange={e => setClient(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Industry</label>
                <input required type="text" value={industry} onChange={e => setIndustry(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Timeline</label>
                <input required type="text" value={timeline} onChange={e => setTimeline(e.target.value)} placeholder="e.g. 12 Months" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Hero Image URL</label>
                <input required type="url" value={heroImage} onChange={e => setHeroImage(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Services (comma separated)</label>
              <input required type="text" value={services} onChange={e => setServices(e.target.value)} placeholder="Web Dev, Cloud Architecture" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Technologies (comma separated)</label>
              <input required type="text" value={technologies} onChange={e => setTechnologies(e.target.value)} placeholder="React, Node.js, AWS" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Gallery Image URLs (comma separated)</label>
              <input required type="text" value={gallery} onChange={e => setGallery(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Overview</label>
                <textarea required value={overview} onChange={e => setOverview(e.target.value)} rows={2} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Challenge</label>
                <textarea required value={challenge} onChange={e => setChallenge(e.target.value)} rows={2} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Solution</label>
                <textarea required value={solution} onChange={e => setSolution(e.target.value)} rows={2} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Results (JSON Array)</label>
                <textarea required value={resultsStr} onChange={e => setResultsStr(e.target.value)} placeholder='[{"metric": "100%", "description": "Uptime"}]' rows={2} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white font-mono text-sm"></textarea>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? 'Publishing...' : 'Publish Case Study'}
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
              <th className="p-4 font-semibold text-gray-300">Client</th>
              <th className="p-4 font-semibold text-gray-300">Industry</th>
              <th className="p-4 font-semibold text-gray-300 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studies.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">No case studies found.</td></tr>
            ) : (
              studies.map(study => (
                <tr key={study.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="p-4 font-medium text-white">{study.title}</td>
                  <td className="p-4 text-gray-400">{study.client}</td>
                  <td className="p-4 text-gray-400">{study.industry}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button onClick={() => handleDelete(study.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
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
