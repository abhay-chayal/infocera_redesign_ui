-- 1. Create the Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    author TEXT NOT NULL,
    author_role TEXT,
    author_avatar TEXT,
    publish_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    reading_time TEXT,
    image TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow ANYONE (anon) to read blog posts
CREATE POLICY "Allow public to read blog posts" 
ON public.blog_posts FOR SELECT 
TO public 
USING (true);

-- Only authenticated admins can insert/update/delete blog posts
CREATE POLICY "Allow admins to manage blog posts" 
ON public.blog_posts FOR ALL 
TO authenticated 
USING ( (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin' );


-- 2. Seed Initial Data (Insert existing static posts into the DB)
INSERT INTO public.blog_posts (slug, category, title, excerpt, content, author, author_role, author_avatar, publish_date, reading_time, image)
VALUES 
(
  'migrating-monolith-microservices', 
  'Cloud Computing', 
  'Migrating from Monolith to Event-Driven Microservices: A Retrospective', 
  'We successfully migrated a legacy fintech monolith processing $2B+ daily into an event-driven Go/Kafka architecture. Here are the hard lessons we learned about distributed transactions, latency, and eventual consistency.',
  '# The Challenge\n\nWhen we first took over the legacy fintech application, it was a massive monolithic Rails application... (Full content goes here)',
  'Elena Rostova', 
  'Principal Cloud Architect', 
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', 
  '2026-10-12 00:00:00+00', 
  '12 min read', 
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
),
(
  'ai-in-healthcare-compliance', 
  'AI & Machine Learning', 
  'Building HIPAA-Compliant LLMs for Healthcare Diagnostics', 
  'How we fine-tuned open-source LLMs locally on private HIPAA-compliant infrastructure to assist radiologists without compromising PHI data.',
  'Content goes here...',
  'Marcus Chen', 
  'Lead AI Researcher', 
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', 
  '2026-10-08 00:00:00+00', 
  '8 min read', 
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
),
(
  'rust-vs-go-backend', 
  'Software Development', 
  'Rust vs. Go for High-Frequency Trading Engines', 
  'An in-depth performance benchmark comparing Rust and Go when dealing with sub-millisecond latency requirements in financial systems.',
  'Content goes here...',
  'Sarah Jenkins', 
  'Senior Systems Engineer', 
  null, 
  '2026-10-02 00:00:00+00', 
  '14 min read', 
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
);
