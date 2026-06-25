import { useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Send, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '../shared/Button';

interface JobApplicationFormProps {
  jobId: string;
}

export const JobApplicationForm = ({ jobId }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverLetter: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 1. Upload Resume
      const fileExt = file.name.split('.').pop();
      const fileName = `${jobId}-${Date.now()}.${fileExt}`;
      const filePath = `applications/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      // 2. Insert Application Record
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert([
          {
            job_id: jobId,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            linkedin_url: formData.linkedinUrl,
            portfolio_url: formData.portfolioUrl,
            cover_letter: formData.coverLetter,
            resume_url: publicUrlData.publicUrl
          }
        ]);

      if (insertError) throw insertError;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        portfolioUrl: '',
        coverLetter: '',
      });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Error submitting application:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-12 text-center mt-16 shadow-2xl">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Thank you for applying. Our talent acquisition team will review your profile and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 mt-16 shadow-2xl" id="apply-form">
      <h3 className="text-3xl font-bold text-white mb-8">Apply for this Position</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">Full Name *</label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">Email Address *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">LinkedIn Profile</label>
            <input type="url" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="https://linkedin.com/in/..." />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-300">Portfolio / Website</label>
            <input type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="https://..." />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-300">Cover Letter</label>
            <textarea name="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none" placeholder="Tell us why you're a great fit..."></textarea>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-300">Resume / CV (PDF) *</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-[#0f172a]/50 border-white/20 hover:border-indigo-500/50 hover:bg-[#0f172a]/80 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400 font-semibold">{file ? file.name : "Click to upload"}</p>
                  <p className="text-xs text-gray-500">PDF, DOCX up to 10MB</p>
                </div>
                <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
              </label>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10">
          <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting} variant="primary" size="lg" className="w-full" rightIcon={<Send className="w-4 h-4" />}>
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
};
