import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, Briefcase, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/shared/Button';
import { Card } from '../../components/shared/Card';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [jobApplications, setJobApplications] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'jobs' | 'inquiries'>('jobs');

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }
      
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      setProfile(data);

      if (session.user.email) {
        const [jobsRes, inquiriesRes] = await Promise.all([
          supabase.from('job_applications').select('*').eq('email', session.user.email).order('created_at', { ascending: false }),
          supabase.from('contact_submissions').select('*').eq('email', session.user.email).order('created_at', { ascending: false })
        ]);
        
        if (jobsRes.data) setJobApplications(jobsRes.data);
        if (inquiriesRes.data) setInquiries(inquiriesRes.data);
      }

      setIsLoading(false);
    };
    
    checkAuth();
  }, [navigate]);

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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Welcome, {profile?.full_name || 'Client'}!</h1>
            <p className="text-gray-400">This is your secure enterprise portal.</p>
          </div>
          <Button variant="outline" onClick={handleLogout} rightIcon={<LogOut className="w-4 h-4" />}>
            Sign Out
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'jobs' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            My Applications ({jobApplications.length})
          </button>
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'inquiries' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Mail className="w-5 h-5" />
            My Inquiries ({inquiries.length})
          </button>
        </div>

        <Card variant="standard" className="p-0 overflow-hidden">
          {activeTab === 'jobs' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 font-semibold text-gray-300">Date Applied</th>
                    <th className="p-4 font-semibold text-gray-300">Position ID</th>
                    <th className="p-4 font-semibold text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobApplications.length === 0 ? (
                    <tr><td colSpan={3} className="p-8 text-center text-gray-500">You haven't applied for any jobs yet.</td></tr>
                  ) : (
                    jobApplications.map(j => (
                      <tr key={j.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="p-4 text-gray-400">{new Date(j.created_at).toLocaleDateString()}</td>
                        <td className="p-4 font-medium text-white">{j.job_id}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" /> Received
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 font-semibold text-gray-300">Date Submitted</th>
                    <th className="p-4 font-semibold text-gray-300">Company</th>
                    <th className="p-4 font-semibold text-gray-300">Message Snippet</th>
                    <th className="p-4 font-semibold text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.length === 0 ? (
                    <tr><td colSpan={4} className="p-8 text-center text-gray-500">You haven't submitted any inquiries yet.</td></tr>
                  ) : (
                    inquiries.map(c => (
                      <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="p-4 text-gray-400">{new Date(c.created_at).toLocaleDateString()}</td>
                        <td className="p-4 font-medium text-white">{c.company || 'N/A'}</td>
                        <td className="p-4 text-gray-400 max-w-xs truncate">{c.message}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" /> Received
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
