import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../shared/Button';
import { Plus, Trash2 } from 'lucide-react';

export const AdminCareersTab = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  // Form state
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-time');
  const [description, setDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [skills, setSkills] = useState('');
  const [qualifications, setQualifications] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('open_positions')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data) setJobs(data);
    setIsLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await supabase.from('open_positions').insert([
      {
        id,
        title,
        department,
        location,
        type,
        description,
        responsibilities: responsibilities.split('\n').filter(Boolean),
        skills: skills.split('\n').filter(Boolean),
        qualifications: qualifications.split('\n').filter(Boolean)
      }
    ]);
    
    if (!error) {
      setIsCreating(false);
      // Reset form
      setId(''); setTitle(''); setDepartment(''); setLocation('');
      setType('Full-time'); setDescription(''); setResponsibilities('');
      setSkills(''); setQualifications('');
      fetchJobs();
    } else {
      console.error("Error creating job", error);
      alert("Failed to create job. Check console.");
    }
    setIsLoading(false);
  };

  const handleDelete = async (jobId: string) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    await supabase.from('open_positions').delete().eq('id', jobId);
    fetchJobs();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Open Positions</h2>
        <Button onClick={() => setIsCreating(!isCreating)} rightIcon={isCreating ? undefined : <Plus className="w-4 h-4" />}>
          {isCreating ? 'Cancel' : 'New Position'}
        </Button>
      </div>

      {isCreating && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Create New Position</h3>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input required type="text" value={title} onChange={e => { setTitle(e.target.value); setId(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')); }} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Unique ID (URL Slug)</label>
                <input required type="text" value={id} onChange={e => setId(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Department</label>
                <input required type="text" value={department} onChange={e => setDepartment(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Location</label>
                <input required type="text" value={location} onChange={e => setLocation(e.target.value)} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Type</label>
                <input required type="text" value={type} onChange={e => setType(e.target.value)} placeholder="Full-time, Part-time, Contract" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Description</label>
              <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white"></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Responsibilities (1 per line)</label>
                <textarea required value={responsibilities} onChange={e => setResponsibilities(e.target.value)} rows={5} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Skills (1 per line)</label>
                <textarea required value={skills} onChange={e => setSkills(e.target.value)} rows={5} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Qualifications (1 per line)</label>
                <textarea required value={qualifications} onChange={e => setQualifications(e.target.value)} rows={5} className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"></textarea>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? 'Publishing...' : 'Publish Position'}
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
              <th className="p-4 font-semibold text-gray-300">Department</th>
              <th className="p-4 font-semibold text-gray-300">Location</th>
              <th className="p-4 font-semibold text-gray-300 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">No open positions found.</td></tr>
            ) : (
              jobs.map(job => (
                <tr key={job.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="p-4 font-medium text-white">{job.title}</td>
                  <td className="p-4 text-gray-400">{job.department}</td>
                  <td className="p-4 text-gray-400">{job.location}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button onClick={() => handleDelete(job.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
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
