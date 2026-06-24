
export const portfolioDetailsData: Record<string, any> = {
  'healthsync': {
    title: 'Global HealthSync App',
    client: 'HealthSync International',
    industry: 'Healthcare',
    services: ['Mobile App Development', 'Cloud Solutions', 'AI & ML'],
    timeline: '12 Months',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80',
    overview: 'A unified telemedicine platform connecting millions of patients with certified specialists globally, featuring end-to-end encryption and real-time vital monitoring.',
    challenge: 'The client needed to consolidate five disparate legacy systems across three continents into a single, cohesive mobile and web platform without compromising strict global health data regulations (HIPAA, GDPR).',
    solution: 'We architected a highly scalable microservices backend using Go and Node.js deployed on AWS EKS. For the frontend, we built a React Native mobile application and a React web portal, both seamlessly integrated with a secure WebRTC video streaming layer.',
    results: [
      { metric: '2M+', description: 'Active Patients in Year 1' },
      { metric: '<50ms', description: 'Video Latency' },
      { metric: '100%', description: 'Compliance Achieved' }
    ],
    technologies: ['React Native', 'Node.js', 'AWS', 'WebRTC', 'PostgreSQL'],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'novapay': {
    title: 'NovaPay Trading Engine',
    client: 'NovaPay Financial',
    industry: 'FinTech',
    services: ['Custom Software Development', 'Data Engineering'],
    timeline: '8 Months',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80',
    overview: 'An ultra-low latency cryptocurrency exchange platform processing over 100,000 transactions per second with advanced institutional-grade security.',
    challenge: 'NovaPay experienced critical system outages during peak trading volumes on their legacy monolithic infrastructure, resulting in millions of dollars in lost transaction fees.',
    solution: 'We rebuilt the core matching engine in Rust for absolute memory safety and blistering speed, deploying it via a distributed Kubernetes cluster. We also implemented a real-time data streaming pipeline using Apache Kafka for instantaneous trade settlement.',
    results: [
      { metric: '100k+', description: 'Transactions Per Second' },
      { metric: '99.999%', description: 'System Uptime' },
      { metric: '3x', description: 'Revenue Increase' }
    ],
    technologies: ['Rust', 'Kafka', 'Kubernetes', 'Redis', 'React'],
    gallery: [
      'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'omnicommerce': {
    title: 'OmniCommerce Core',
    client: 'Fortune 500 Retailer',
    industry: 'E-commerce',
    services: ['Cloud Solutions', 'DevOps & Automation'],
    timeline: '14 Months',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    overview: 'A headless commerce infrastructure enabling hyper-personalized storefronts across web, mobile, and AR devices.',
    challenge: 'The client was locked into a rigid, legacy e-commerce platform that prevented them from quickly launching new product lines and expanding into international markets.',
    solution: 'We decoupled the frontend presentation layer from the backend logic, implementing a headless architecture. We used Next.js for blazing fast server-side rendering and integrated a robust headless CMS via GraphQL APIs.',
    results: [
      { metric: '45%', description: 'Increase in Conversion Rate' },
      { metric: '300ms', description: 'Average Page Load Time' },
      { metric: '12+', description: 'Global Markets Reached' }
    ],
    technologies: ['Next.js', 'GraphQL', 'AWS', 'Vercel', 'Tailwind CSS'],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
    ]
  }
};
