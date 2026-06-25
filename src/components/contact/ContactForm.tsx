import { useState } from 'react';
import { contactPageData } from '../../data/contactPageData';
import { Send, Lock, ShieldCheck } from 'lucide-react';
import { Button } from '../shared/Button';
import { supabase } from '../../lib/supabase';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const names = formData.fullName.trim().split(' ');
      const firstName = names[0] || '';
      const lastName = names.slice(1).join(' ') || '';

      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            services: formData.service ? [formData.service] : [],
            message: formData.message,
          }
        ]);

      if (error) throw error;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again or email us directly.');
    }
  };

  return (
    <div className="bg-[#1e293b]/20 border border-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>

      {isSubmitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-emerald-400" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Message Received</h4>
          <p className="text-gray-400">Thank you for reaching out. An engineering lead will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-semibold text-gray-300">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-gray-300">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                placeholder="Acme Corp"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-300">Work Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                placeholder="john@acme.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-300">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                placeholder="+91 00000 00000"
              />
            </div>

            {/* Service Interest */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="service" className="text-sm font-semibold text-gray-300">Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a service</option>
                {contactPageData.formOptions.services.map(opt => (
                  <option key={opt} value={opt} className="bg-[#0f172a]">{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-300">Project Details *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
              placeholder="Tell us about your technical requirements and goals..."
            />
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              variant="secondary"
              size="lg"
              className="w-full"
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Inquiry
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 opacity-70" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 opacity-70" />
                <span>NDA Protected</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
