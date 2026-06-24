import { MonitorSmartphone, Code, Cloud, BrainCircuit, Activity, Database, Search, PenTool, Terminal, Rocket, HeadphonesIcon } from 'lucide-react';

export const servicesPageData = {
  hero: {
    badge: "Our Services",
    headline: "Engineered for",
    highlight: "exponential growth.",
    description: "From legacy system modernization to cutting-edge AI integrations, we deliver end-to-end technical solutions designed to scale securely and efficiently."
  },
  services: [
    {
      id: "custom-software-development",
      icon: Code,
      title: "Custom Software Development",
      description: "We build bespoke, high-performance software applications tailored precisely to your operational workflows.",
      features: ["Microservices Architecture", "Legacy System Modernization", "API Development & Integration", "Enterprise SaaS Platforms"]
    },
    {
      id: "mobile-app-development",
      icon: MonitorSmartphone,
      title: "Mobile App Development",
      description: "Deliver seamless, native-feeling experiences across iOS and Android with our high-performance mobile engineering.",
      features: ["Cross-Platform (React Native/Flutter)", "Native iOS (Swift) & Android (Kotlin)", "Mobile UI/UX Design", "App Store Optimization"]
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure, scalable, and highly available cloud infrastructure designed to minimize downtime and reduce operational costs.",
      features: ["Cloud Migration Strategy", "AWS, Azure, & GCP Expertise", "Serverless Architectures", "Cloud Security Audits"]
    },
    {
      id: "ai-ml-solutions",
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Integrate predictive intelligence and automation into your core products to unlock new revenue streams.",
      features: ["Custom LLM Integration", "Predictive Analytics", "Computer Vision Systems", "Natural Language Processing"]
    },
    {
      id: "devops-automation",
      icon: Activity,
      title: "DevOps & Automation",
      description: "Accelerate your time-to-market with rigorous CI/CD pipelines and automated infrastructure provisioning.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code (IaC)", "Containerization (Docker/K8s)", "24/7 System Monitoring"]
    },
    {
      id: "data-engineering",
      icon: Database,
      title: "Data Engineering",
      description: "Transform raw data into actionable business intelligence with robust, real-time data pipelines.",
      features: ["Data Warehouse Architecture", "Real-Time Streaming Pipelines", "ETL Process Optimization", "Business Intelligence Dashboards"]
    }
  ],
  process: {
    headline: "How we deliver excellence.",
    description: "Our proven methodology ensures absolute transparency, rigorous quality control, and rapid deployment.",
    steps: [
      {
        id: "01",
        icon: Search,
        title: "Discovery & Architecture",
        description: "We deeply analyze your business requirements and design a scalable technical architecture before a single line of code is written."
      },
      {
        id: "02",
        icon: PenTool,
        title: "UI/UX Design",
        description: "Our design team crafts intuitive, highly-converting user interfaces that align with your enterprise brand identity."
      },
      {
        id: "03",
        icon: Terminal,
        title: "Agile Development",
        description: "We build your product in iterative two-week sprints, providing continuous updates and accommodating feedback."
      },
      {
        id: "04",
        icon: Rocket,
        title: "Deployment & QA",
        description: "Rigorous automated testing and secure deployment pipelines guarantee a flawless launch with zero downtime."
      },
      {
        id: "05",
        icon: HeadphonesIcon,
        title: "Maintenance & Support",
        description: "We provide SLA-backed post-launch support, continuous performance monitoring, and rapid bug resolution."
      }
    ]
  },
  metrics: {
    headline: "Engineered for trust.",
    items: [
      { value: "0", label: "Security Breaches" },
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "<2h", label: "Critical Response Time" },
      { value: "100%", label: "Code Ownership Transfer" }
    ]
  },
  faqs: {
    headline: "Frequently asked questions.",
    items: [
      {
        question: "How do you ensure the security of our data?",
        answer: "We employ zero-trust architectures, end-to-end encryption (AES-256), and conduct regular third-party penetration testing. All our infrastructure adheres to SOC2 and ISO 27001 compliance standards."
      },
      {
        question: "Do we own the source code after the project is completed?",
        answer: "Absolutely. Upon final payment, 100% of the Intellectual Property (IP) and source code ownership is legally transferred to your organization. We do not hold your code hostage."
      },
      {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on scope. A Minimum Viable Product (MVP) typically takes 8-12 weeks, while complex enterprise systems may take 4-6 months. We provide a highly detailed roadmap during the Discovery phase."
      },
      {
        question: "Can you rescue an existing failing project?",
        answer: "Yes. We offer Project Rescue services where our senior architects audit your existing codebase, identify technical debt and critical flaws, and implement a rapid stabilization and refactoring plan."
      },
      {
        question: "How do you handle communication across time zones?",
        answer: "We overlap our core working hours with your team's schedule. We utilize asynchronous communication tools (Slack, Jira) and hold mandatory weekly sprint reviews via video conference to ensure complete alignment."
      }
    ]
  }
};
