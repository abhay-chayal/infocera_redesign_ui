-- 1. Create the Case Studies Table
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    client TEXT NOT NULL,
    industry TEXT NOT NULL,
    services TEXT[] NOT NULL,
    timeline TEXT NOT NULL,
    hero_image TEXT NOT NULL,
    overview TEXT NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results JSONB NOT NULL,
    technologies TEXT[] NOT NULL,
    gallery TEXT[] NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Allow ANYONE (anon) to read case studies
CREATE POLICY "Allow public to read case studies" 
ON public.case_studies FOR SELECT 
TO public 
USING (true);

-- Only authenticated admins can manage case studies
CREATE POLICY "Allow admins to manage case studies" 
ON public.case_studies FOR ALL 
TO authenticated 
USING ( (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin' );

-- 2. Seed Initial Data
INSERT INTO public.case_studies (slug, title, client, industry, services, timeline, hero_image, overview, challenge, solution, results, technologies, gallery)
VALUES 
(
  'healthsync',
  'Global HealthSync App',
  'HealthSync International',
  'Healthcare',
  ARRAY['Mobile App Development', 'Cloud Solutions', 'AI & ML'],
  '12 Months',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80',
  'A unified telemedicine platform connecting millions of patients with certified specialists globally, featuring end-to-end encryption and real-time vital monitoring.',
  'The client needed to consolidate five disparate legacy systems across three continents into a single, cohesive mobile and web platform without compromising strict global health data regulations (HIPAA, GDPR).',
  'We architected a highly scalable microservices backend using Go and Node.js deployed on AWS EKS. For the frontend, we built a React Native mobile application and a React web portal, both seamlessly integrated with a secure WebRTC video streaming layer.',
  '[{"metric": "2M+", "description": "Active Patients in Year 1"}, {"metric": "<50ms", "description": "Video Latency"}, {"metric": "100%", "description": "Compliance Achieved"}]'::jsonb,
  ARRAY['React Native', 'Node.js', 'AWS', 'WebRTC', 'PostgreSQL'],
  ARRAY['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80']
),
(
  'novapay',
  'NovaPay Trading Engine',
  'NovaPay Financial',
  'FinTech',
  ARRAY['Custom Software Development', 'Data Engineering'],
  '8 Months',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80',
  'An ultra-low latency cryptocurrency exchange platform processing over 100,000 transactions per second with advanced institutional-grade security.',
  'NovaPay experienced critical system outages during peak trading volumes on their legacy monolithic infrastructure, resulting in millions of dollars in lost transaction fees.',
  'We rebuilt the core matching engine in Rust for absolute memory safety and blistering speed, deploying it via a distributed Kubernetes cluster. We also implemented a real-time data streaming pipeline using Apache Kafka for instantaneous trade settlement.',
  '[{"metric": "100k+", "description": "Transactions Per Second"}, {"metric": "99.999%", "description": "System Uptime"}, {"metric": "3x", "description": "Revenue Increase"}]'::jsonb,
  ARRAY['Rust', 'Kafka', 'Kubernetes', 'Redis', 'React'],
  ARRAY['https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80']
),
(
  'omnicommerce',
  'OmniCommerce Core',
  'Fortune 500 Retailer',
  'E-commerce',
  ARRAY['Cloud Solutions', 'DevOps & Automation'],
  '14 Months',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
  'A headless commerce infrastructure enabling hyper-personalized storefronts across web, mobile, and AR devices.',
  'The client was locked into a rigid, legacy e-commerce platform that prevented them from quickly launching new product lines and expanding into international markets.',
  'We decoupled the frontend presentation layer from the backend logic, implementing a headless architecture. We used Next.js for blazing fast server-side rendering and integrated a robust headless CMS via GraphQL APIs.',
  '[{"metric": "45%", "description": "Increase in Conversion Rate"}, {"metric": "300ms", "description": "Average Page Load Time"}, {"metric": "12+", "description": "Global Markets Reached"}]'::jsonb,
  ARRAY['Next.js', 'GraphQL', 'AWS', 'Vercel', 'Tailwind CSS'],
  ARRAY['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80']
);
