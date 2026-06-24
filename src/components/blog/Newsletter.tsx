import { useState } from 'react';
import { blogPageData } from '../../data/blogPageData';
import { Mail, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0f172a] border-t border-white/5">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#1e293b]/30 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm overflow-hidden relative">
          
          <div className="absolute -left-32 -top-32 w-64 h-64 bg-fuchsia-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <SectionHeader
                title={blogPageData.newsletter.headline}
                subtitle={blogPageData.newsletter.description}
                align="left"
                className="!mb-8 md:!mb-0"
              />
            </div>

            <div className="w-full md:w-[400px] shrink-0">
              {isSubmitted ? (
                <div className="flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl py-4 px-6 text-emerald-400 font-bold animate-fade-in">
                  <CheckCircle className="w-6 h-6" />
                  Subscription Confirmed!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Enter your work email"
                      aria-label="Work email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0f172a]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Subscribe Now
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
