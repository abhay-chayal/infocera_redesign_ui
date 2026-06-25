import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, MapPin, Briefcase, Building, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/shared/Button';
import { JobApplicationForm } from '../../components/careers/JobApplicationForm';

export default function CareerDetail() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchJob = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('open_positions')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error || !data) throw error;
        setJob(data);
      } catch (err) {
        console.error("Error fetching job:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchJob();
  }, [id]);

  if (!id || error) return <Navigate to="/careers" replace />;

  if (isLoading || !job) {
    return (
      <div className="flex flex-col w-full bg-[#0f172a] min-h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#070b14] min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back Button */}
        <Link to="/careers" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {job.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 md:gap-8 text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-indigo-400" />
              {job.department}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-400" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              {job.type}
            </div>
          </div>
          
          <div className="mt-10">
            <Button variant="primary" size="lg" className="w-full md:w-auto" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for this position
            </Button>
          </div>
        </div>

        {/* Job Content */}
        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About the Role</h2>
            <p className="text-lg leading-relaxed text-gray-400">
              {job.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Required Skills</h2>
            <ul className="space-y-4">
              {job.skills.map((skill: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Qualifications</h2>
            <ul className="space-y-4">
              {job.qualifications.map((qual: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{qual}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Job Application Form */}
        <JobApplicationForm jobId={job.id} />

      </div>
    </div>
  );
}
