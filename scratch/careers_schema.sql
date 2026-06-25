-- 1. Create the Open Positions Table
CREATE TABLE IF NOT EXISTS public.open_positions (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    responsibilities TEXT[] NOT NULL,
    skills TEXT[] NOT NULL,
    qualifications TEXT[] NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.open_positions ENABLE ROW LEVEL SECURITY;

-- Allow ANYONE (anon) to read open positions
CREATE POLICY "Allow public to read open positions" 
ON public.open_positions FOR SELECT 
TO public 
USING (true);

-- Only authenticated admins can manage open positions
CREATE POLICY "Allow admins to manage open positions" 
ON public.open_positions FOR ALL 
TO authenticated 
USING ( (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin' );

-- 2. Seed Initial Data
INSERT INTO public.open_positions (id, title, department, location, type, description, responsibilities, skills, qualifications)
VALUES 
(
  'sr-full-stack',
  'Senior Full Stack Developer',
  'Engineering',
  'Remote',
  'Full-time',
  'Build scalable web applications using React, Node.js, and cloud technologies.',
  ARRAY['Design, develop, and maintain scalable web applications using React and Node.js.', 'Collaborate with cross-functional teams to define, design, and ship new features.', 'Write clean, maintainable, and efficient code following best practices.', 'Participate in code reviews and mentor junior developers.', 'Integrate with cloud services (AWS, Azure, or GCP) and manage deployments.'],
  ARRAY['Strong proficiency in JavaScript, TypeScript, React, and Node.js.', 'Experience with RESTful APIs and microservices architecture.', 'Familiarity with cloud platforms (AWS, Azure, or GCP).', 'Knowledge of CI/CD pipelines and version control (Git).', 'Excellent problem-solving and communication skills.'],
  ARRAY['Bachelor’s or Master’s degree in Computer Science or related field.', '5+ years of experience in full stack development.', 'Experience working in agile teams.']
),
(
  'devops-engineer',
  'DevOps Engineer',
  'Infrastructure',
  'Remote',
  'Full-time',
  'Manage cloud infrastructure and implement CI/CD pipelines for our development teams.',
  ARRAY['Design, implement, and manage CI/CD pipelines.', 'Automate infrastructure provisioning and deployments.', 'Monitor system performance and troubleshoot issues.', 'Ensure security and compliance of cloud environments.', 'Collaborate with development teams to optimize workflows.'],
  ARRAY['Experience with AWS, Azure, or GCP cloud platforms.', 'Proficiency in scripting languages (Bash, Python, etc.).', 'Knowledge of Docker, Kubernetes, and container orchestration.', 'Familiarity with infrastructure as code tools (Terraform, CloudFormation).', 'Strong understanding of networking and security best practices.'],
  ARRAY['Bachelor’s degree in Computer Science, Engineering, or related field.', '3+ years of experience in DevOps or related roles.', 'Relevant certifications (AWS Certified DevOps Engineer, etc.) are a plus.']
),
(
  'ui-ux-designer',
  'UI/UX Designer',
  'Design',
  'Remote',
  'Full-time',
  'Create beautiful and intuitive user experiences for our web and mobile applications.',
  ARRAY['Design user interfaces for web and mobile applications.', 'Conduct user research and usability testing.', 'Create wireframes, prototypes, and high-fidelity mockups.', 'Collaborate with developers to ensure design feasibility.', 'Maintain and evolve the company’s design system.'],
  ARRAY['Proficiency in design tools (Figma, Sketch, Adobe XD, etc.).', 'Strong portfolio showcasing UI/UX design work.', 'Understanding of user-centered design principles.', 'Ability to communicate design ideas effectively.', 'Attention to detail and creativity.'],
  ARRAY['Bachelor’s degree in Design, HCI, or related field.', '2+ years of experience in UI/UX design.', 'Experience working in agile environments.']
),
(
  'data-scientist',
  'Data Scientist',
  'Analytics',
  'Remote',
  'Full-time',
  'Analyze complex datasets to drive business insights and build predictive models.',
  ARRAY['Collect, process, and analyze large datasets from various sources.', 'Develop predictive models and machine learning algorithms.', 'Visualize data and communicate findings to stakeholders.', 'Collaborate with engineering and product teams.', 'Stay updated with the latest data science trends and technologies.'],
  ARRAY['Strong programming skills in Python or R.', 'Experience with machine learning frameworks (scikit-learn, TensorFlow, etc.).', 'Proficiency in SQL and data visualization tools.', 'Statistical analysis and problem-solving skills.', 'Excellent communication and teamwork abilities.'],
  ARRAY['Bachelor’s or Master’s degree in Data Science, Statistics, or related field.', '2+ years of experience in data science or analytics roles.', 'Experience with big data technologies is a plus.']
),
(
  'product-manager',
  'Senior Product Manager',
  'Product',
  'New York, NY (Hybrid)',
  'Full-time',
  'Lead product strategy and execution for our core enterprise platform.',
  ARRAY['Define product vision, strategy, and roadmap.', 'Work closely with engineering, design, and marketing to launch new features.', 'Gather and analyze user feedback to inform product decisions.', 'Track and report on product KPIs and success metrics.', 'Mentor junior product managers.'],
  ARRAY['Strong analytical and quantitative skills.', 'Experience with agile product management methodologies.', 'Excellent cross-functional leadership abilities.', 'Deep understanding of B2B SaaS business models.', 'Technical background or ability to work closely with engineers.'],
  ARRAY['5+ years of software product management experience.', 'Proven track record of delivering successful products.', 'MBA or equivalent experience is a plus.']
),
(
  'cybersecurity-analyst',
  'Cybersecurity Analyst',
  'Security',
  'Remote',
  'Full-time',
  'Protect our infrastructure and client data from emerging threats.',
  ARRAY['Monitor networks for security breaches and investigate violations.', 'Conduct penetration testing and vulnerability assessments.', 'Develop and implement security policies and protocols.', 'Respond to security incidents and mitigate impact.', 'Educate staff on cybersecurity best practices.'],
  ARRAY['Expertise in network security and firewalls.', 'Experience with SIEM tools (Splunk, etc.).', 'Knowledge of common vulnerability frameworks (OWASP, MITRE ATT&CK).', 'Ability to analyze malware and threat vectors.', 'Strong attention to detail.'],
  ARRAY['Bachelor’s degree in Cybersecurity, IT, or related field.', 'Relevant certifications (CISSP, CEH, Security+).', '3+ years in a security operations role.']
);
