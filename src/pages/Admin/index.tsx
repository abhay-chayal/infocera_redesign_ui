import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, Users, Briefcase, FileText, LayoutTemplate, Network, ChevronRight } from 'lucide-react';
import { Button } from '../../components/shared/Button';
import { AdminBlogTab } from '../../components/admin/AdminBlogTab';
import { AdminPortfolioTab } from '../../components/admin/AdminPortfolioTab';
import { AdminCareersTab } from '../../components/admin/AdminCareersTab';

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'contacts' | 'jobs' | 'blog' | 'portfolio' | 'careers'>('contacts');
  const [contacts, setContacts] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }
      
      // Verify admin role
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
        
      console.log("Admin - Profile fetched:", profile, "Error:", profileError);

      if (profile?.role?.trim() !== 'admin') {
        navigate('/dashboard');
        return;
      }

      // Fetch data
      fetchData();
    };
    
    checkAuth();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const [contactsRes, jobsRes] = await Promise.all([
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('job_applications').select('*').order('created_at', { ascending: false })
      ]);
      
      if (contactsRes.data) setContacts(contactsRes.data);
      if (jobsRes.data) setJobs(jobsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] pt-32 pb-24 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage your leads and applications.</p>
          </div>
          <Button variant="outline" onClick={handleLogout} rightIcon={<LogOut className="w-4 h-4" />}>
            Sign Out
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'contacts' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Users className="w-5 h-5" />
            Contact Leads ({contacts.length})
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'jobs' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Job Applications ({jobs.length})
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeTab === 'blog' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <FileText className="w-5 h-5" />
            Manage Blog
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeTab === 'portfolio' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <LayoutTemplate className="w-5 h-5" />
            Manage Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('careers')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              activeTab === 'careers' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Network className="w-5 h-5" />
            Manage Careers
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {activeTab === 'contacts' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 font-semibold text-gray-300">Date</th>
                    <th className="p-4 font-semibold text-gray-300">Name</th>
                    <th className="p-4 font-semibold text-gray-300">Company</th>
                    <th className="p-4 font-semibold text-gray-300">Email</th>
                    <th className="p-4 font-semibold text-gray-300">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-gray-500">No contact submissions yet.</td></tr>
                  ) : (
                    contacts.map(c => (
                      <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400 text-sm">{new Date(c.created_at).toLocaleDateString()}</td>
                        <td className="p-4 font-medium">{c.first_name} {c.last_name}</td>
                        <td className="p-4 text-gray-400">{c.company || '-'}</td>
                        <td className="p-4 text-indigo-400">{c.email}</td>
                        <td className="p-4 text-sm text-gray-300 max-w-xs truncate">{c.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : activeTab === 'jobs' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 font-semibold text-gray-300">Date</th>
                    <th className="p-4 font-semibold text-gray-300">Candidate</th>
                    <th className="p-4 font-semibold text-gray-300">Role ID</th>
                    <th className="p-4 font-semibold text-gray-300">Email</th>
                    <th className="p-4 font-semibold text-gray-300">Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-gray-500">No job applications yet.</td></tr>
                  ) : (
                    jobs.map(j => (
                      <tr key={j.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-gray-400 text-sm">{new Date(j.created_at).toLocaleDateString()}</td>
                        <td className="p-4 font-medium">{j.full_name}</td>
                        <td className="p-4 text-purple-400 font-mono text-sm">{j.job_id}</td>
                        <td className="p-4 text-gray-300">{j.email}</td>
                        <td className="p-4">
                          <a href={j.resume_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium text-sm bg-indigo-500/10 px-3 py-1.5 rounded-lg transition-colors">
                            View PDF <ChevronRight className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : activeTab === 'blog' ? (
            <div className="p-6">
              <AdminBlogTab />
            </div>
          ) : activeTab === 'portfolio' ? (
            <div className="p-6">
              <AdminPortfolioTab />
            </div>
          ) : (
            <div className="p-6">
              <AdminCareersTab />
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
