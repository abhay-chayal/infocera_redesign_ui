export const portfolioPageData = {
  hero: {
    badge: "Our Work",
    headline: "Architecting the",
    highlight: "future of enterprise.",
    description: "Explore our flagship implementations. From high-frequency trading platforms to AI-driven healthcare diagnostics, we deliver code that scales."
  },
  featured: [
    {
      id: "meditech-ai",
      title: "MediTech Diagnostic AI",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80",
      challenge: "A leading hospital network struggled with a 48-hour backlog in radiology report analysis, directly impacting critical patient care timelines.",
      solution: "We engineered a HIPAA-compliant, custom Computer Vision pipeline using PyTorch that pre-analyzes scans and flags high-risk anomalies for radiologists in real-time.",
      results: [
        "Reduced diagnostic turnaround time by 85%",
        "Processed 1M+ scans with 99.8% accuracy",
        "Saved $4.2M in annual operational costs"
      ],
      techStack: ["PyTorch", "AWS HealthLake", "React", "Python"]
    },
    {
      id: "finflow-core",
      title: "FinFlow Global Ledger",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      challenge: "A multinational fintech firm's legacy monolithic architecture was unable to handle high-frequency trading volumes during market volatility, resulting in severe latency.",
      solution: "We migrated their entire core ledger to a globally distributed, event-driven microservices architecture utilizing Apache Kafka and Go for ultra-low latency processing.",
      results: [
        "Achieved <2ms trade execution latency",
        "Scaled securely to 50,000 TPS",
        "Zero downtime during subsequent flash crashes"
      ],
      techStack: ["Go", "Apache Kafka", "Kubernetes", "PostgreSQL"]
    }
  ],
  metrics: {
    headline: "Proven Impact at Scale",
    items: [
      { value: "$2.4B+", label: "Revenue Generated for Clients" },
      { value: "50M+", label: "Active Users on our Platforms" },
      { value: "100%", label: "Enterprise SLA Compliance" },
      { value: "0", label: "Data Breaches" }
    ]
  },
  categories: ["All", "Healthcare", "Finance", "Ecommerce", "SaaS", "AI/ML"],
  projects: [
    {
      id: "omni-commerce",
      title: "OmniStore Backend",
      industry: "Ecommerce",
      category: "Ecommerce",
      summary: "Headless commerce architecture processing $50M/day.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "saas-analytics",
      title: "DataHub Analytics",
      industry: "SaaS",
      category: "SaaS",
      summary: "Real-time B2B analytics dashboard processing billions of events.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "health-portal",
      title: "PatientConnect UI",
      industry: "Healthcare",
      category: "Healthcare",
      summary: "Accessible, WCAG-compliant patient portal for telemedicine.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "ai-copilot",
      title: "LegalMind AI",
      industry: "LegalTech",
      category: "AI/ML",
      summary: "LLM-powered copilot for automating contract review and extraction.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop"
    },
    {
      id: "crypto-exchange",
      title: "Apex Crypto Engine",
      industry: "Finance",
      category: "Finance",
      summary: "Secure, high-throughput matching engine for a top-10 crypto exchange.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "retail-app",
      title: "QuickCart Mobile",
      industry: "Retail",
      category: "Ecommerce",
      summary: "React Native application serving 2M+ daily active shoppers.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};
