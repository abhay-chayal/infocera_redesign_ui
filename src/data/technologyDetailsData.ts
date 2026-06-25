import { Code2, Cloud, Database, ShieldCheck, Zap, Globe, Cpu, Server, Lock, Layers, TestTube2, Rocket } from 'lucide-react';
import React from 'react';

export interface TechFeature {
  title: string;
  description: string;
}

export interface TechnologyDetailData {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  heroImage: string;
  features: TechFeature[];
  benefits: string[];
  useCases: string[];
}

// Reusable dummy images from Unsplash (abstract tech concepts)
const images = {
  frontend: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  backend: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop",
  database: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  testing: "https://images.unsplash.com/photo-1516322073387-8fc4b9685b81?q=80&w=2070&auto=format&fit=crop"
};

export const technologyDetailsData: Record<string, TechnologyDetailData> = {
  // UI DESIGN
  'html-css': {
    id: 'html-css',
    title: 'HTML5 & CSS3',
    category: 'UI DESIGN',
    description: 'The absolute foundation of the modern web. We write semantic HTML5 and advanced CSS3 (including modern Grid and Flexbox architectures) to build accessible, lightning-fast, and responsive digital experiences.',
    icon: Globe,
    heroImage: images.frontend,
    features: [
      { title: 'Semantic HTML', description: 'Ensuring deep accessibility and SEO optimization through proper structural tags.' },
      { title: 'Advanced CSS3', description: 'Fluid typography, complex grid layouts, and hardware-accelerated animations.' },
      { title: 'Responsive Design', description: 'Mobile-first architectures that look pixel-perfect on any device or viewport.' }
    ],
    benefits: ['Universal browser support', 'Blazing fast load times', 'Superior SEO performance', 'High accessibility (WCAG compliance)'],
    useCases: ['Corporate Websites', 'Landing Pages', 'Web App Foundations']
  },
  'angular-js': {
    id: 'angular-js',
    title: 'AngularJS & Angular',
    category: 'UI DESIGN',
    description: 'Enterprise-grade, highly structured frontend frameworks by Google. Perfect for complex single-page applications (SPAs) that require rigid architectural patterns, dependency injection, and comprehensive testing capabilities.',
    icon: Layers,
    heroImage: images.frontend,
    features: [
      { title: 'Two-Way Data Binding', description: 'Synchronize models and views effortlessly for complex data-heavy UIs.' },
      { title: 'Dependency Injection', description: 'Highly modular architecture that makes testing and scaling incredibly efficient.' },
      { title: 'TypeScript Integration', description: 'Strict typing for enterprise-scale codebases, reducing runtime errors significantly.' }
    ],
    benefits: ['Structured enterprise patterns', 'Google-backed ecosystem', 'Rapid SPA development', 'Built-in testing utilities'],
    useCases: ['Enterprise Dashboards', 'Financial Portals', 'Large-scale SPAs']
  },
  'react-development': {
    id: 'react-development',
    title: 'React Development',
    category: 'UI DESIGN',
    description: 'The industry standard for building dynamic, high-performance user interfaces. Utilizing a virtual DOM and a component-based architecture, we construct massive scalable web applications that feel instantaneous.',
    icon: Code2,
    heroImage: images.frontend,
    features: [
      { title: 'Virtual DOM', description: 'Optimized rendering algorithm that updates only what has changed, maximizing performance.' },
      { title: 'Component Architecture', description: 'Reusable, self-contained UI blocks that accelerate development and maintain consistency.' },
      { title: 'Server-Side Rendering', description: 'Integration with frameworks like Next.js for flawless SEO and instant initial loads.' }
    ],
    benefits: ['Massive ecosystem', 'Exceptional performance', 'Reusable component logic', 'Seamless mobile transition (React Native)'],
    useCases: ['SaaS Platforms', 'E-commerce Frontends', 'Interactive Dashboards']
  },
  'wordpress': {
    id: 'wordpress',
    title: 'WordPress Customization',
    category: 'UI DESIGN',
    description: 'Powering over 40% of the web, WordPress is the ultimate CMS. We build highly customized, headless, and secure WordPress enterprise solutions that give marketing teams total control without sacrificing engineering quality.',
    icon: Globe,
    heroImage: images.frontend,
    features: [
      { title: 'Custom Theme Development', description: 'Bespoke designs coded from scratch without heavy, bloated premium themes.' },
      { title: 'Headless Architecture', description: 'Decoupling the WordPress backend via REST API/GraphQL to feed a React/Vue frontend.' },
      { title: 'Enterprise Security', description: 'Hardening the CMS against vulnerabilities, brute force attacks, and malware.' }
    ],
    benefits: ['Extremely intuitive content management', 'Unmatched SEO capabilities', 'Massive plugin ecosystem', 'Cost-effective scaling'],
    useCases: ['Publishing Platforms', 'Corporate Marketing Sites', 'Custom E-commerce (WooCommerce)']
  },

  // CLOUD COMPUTING
  'aws': {
    id: 'aws',
    title: 'AWS Cloud Services',
    category: 'CLOUD COMPUTING',
    description: 'Architecting unbreakable, globally distributed infrastructure on Amazon Web Services. From serverless Lambda functions to massive Kubernetes clusters (EKS), we build systems designed for zero downtime.',
    icon: Cloud,
    heroImage: images.cloud,
    features: [
      { title: 'Serverless Architecture', description: 'Utilizing AWS Lambda and API Gateway for infinitely scalable compute.' },
      { title: 'Container Orchestration', description: 'Managing complex microservices with Amazon ECS and EKS.' },
      { title: 'Advanced Networking', description: 'Designing secure, multi-region VPC architectures with ultra-low latency routing.' }
    ],
    benefits: ['Infinite vertical and horizontal scaling', 'Pay-as-you-go efficiency', 'Enterprise-grade security', 'Global edge network availability'],
    useCases: ['Global SaaS Applications', 'High-Traffic Streaming', 'Disaster Recovery Systems']
  },
  'google-cloud': {
    id: 'google-cloud',
    title: 'Google Cloud Platform',
    category: 'CLOUD COMPUTING',
    description: 'Leveraging Google\'s world-class infrastructure and unparalleled data analytics capabilities. Ideal for machine learning workloads, containerized applications, and massive data processing pipelines.',
    icon: Cloud,
    heroImage: images.cloud,
    features: [
      { title: 'BigQuery Analytics', description: 'Serverless, highly scalable, and cost-effective multi-cloud data warehouse.' },
      { title: 'Google Kubernetes Engine (GKE)', description: 'The industry leader in managed Kubernetes environments.' },
      { title: 'Vertex AI', description: 'Accelerating the deployment of machine learning models into production.' }
    ],
    benefits: ['Unrivaled data analytics tools', 'Carbon-neutral infrastructure', 'Deep AI/ML integration', 'High-performance global fiber network'],
    useCases: ['Data-Heavy Architectures', 'AI Model Training', 'Microservices Platforms']
  },
  'godaddy': {
    id: 'godaddy',
    title: 'GoDaddy Solutions',
    category: 'CLOUD COMPUTING',
    description: 'Streamlined domain management, SSL provisioning, and straightforward web hosting solutions perfect for small-to-medium enterprise entry points and rapid prototyping.',
    icon: Server,
    heroImage: images.cloud,
    features: [
      { title: 'Domain Management', description: 'Centralized control of DNS records, domain transfers, and privacy protection.' },
      { title: 'SSL Certificates', description: 'Automated HTTPS deployment and renewal for essential security compliance.' },
      { title: 'Managed Hosting', description: 'Optimized environments for WordPress and straightforward web deployments.' }
    ],
    benefits: ['Rapid setup and deployment', 'Cost-effective for SMBs', 'All-in-one domain ecosystem', '24/7 support infrastructure'],
    useCases: ['SMB Websites', 'Rapid Prototyping', 'Portfolio Hosting']
  },

  // SERVER SIDE SCRIPTING
  'php': {
    id: 'php',
    title: 'PHP Development',
    category: 'SERVER SIDE',
    description: 'Modern, object-oriented PHP architecture utilizing enterprise frameworks like Laravel and Symfony. We build highly secure, robust backend systems that power a significant portion of the global web.',
    icon: Server,
    heroImage: images.backend,
    features: [
      { title: 'Laravel Architecture', description: 'Elegant syntax, advanced ORM (Eloquent), and powerful queue management.' },
      { title: 'API Integration', description: 'Seamless creation and consumption of RESTful services and Webhooks.' },
      { title: 'Security First', description: 'Strict adherence to PSR standards and built-in protection against SQLi and XSS.' }
    ],
    benefits: ['Vast talent pool and community', 'Rapid development cycle', 'Incredible legacy support', 'Highly cost-effective hosting'],
    useCases: ['Custom CRMs', 'E-commerce Backends', 'Content Management Systems']
  },
  'python': {
    id: 'python',
    title: 'Python Engineering',
    category: 'SERVER SIDE',
    description: 'The undisputed king of data science, AI, and rapid backend engineering. Using Django and FastAPI, we construct highly scalable APIs and complex algorithmic processing engines.',
    icon: Code2,
    heroImage: images.backend,
    features: [
      { title: 'FastAPI Microservices', description: 'Ultra-fast, asynchronous API development with automatic OpenAPI documentation.' },
      { title: 'Data Processing', description: 'Integration with Pandas and NumPy for heavy lifting data transformation.' },
      { title: 'Django Monoliths', description: 'Rapidly shipping highly secure, feature-rich monolithic applications.' }
    ],
    benefits: ['Machine Learning readiness', 'Extremely readable syntax', 'Massive standard library', 'High developer velocity'],
    useCases: ['AI & ML Pipelines', 'Fintech Algorithmic Trading', 'Scalable Backend APIs']
  },
  'nodejs': {
    id: 'nodejs',
    title: 'Node.js Development',
    category: 'SERVER SIDE',
    description: 'Event-driven, asynchronous JavaScript runtime built on Chrome\'s V8 engine. Perfect for data-intensive real-time applications, WebSockets, and highly concurrent API gateways.',
    icon: Zap,
    heroImage: images.backend,
    features: [
      { title: 'Asynchronous I/O', description: 'Non-blocking architecture that handles tens of thousands of concurrent connections.' },
      { title: 'Real-Time Communication', description: 'Flawless integration with Socket.io for chat apps and live dashboards.' },
      { title: 'Isomorphic JavaScript', description: 'Sharing types and logic seamlessly between the frontend and the backend.' }
    ],
    benefits: ['Unified JavaScript stack', 'Extreme concurrency', 'Rich NPM ecosystem', 'Perfect for microservices'],
    useCases: ['Real-time Chat Systems', 'Streaming Platforms', 'API Gateways']
  },
  'java': {
    id: 'java',
    title: 'Java (Spring & Hibernate)',
    category: 'SERVER SIDE',
    description: 'The gold standard for enterprise architecture. We build mission-critical, highly secure, and multi-threaded systems using Spring Boot and Hibernate that power Fortune 500 financial and healthcare institutions.',
    icon: Layers,
    heroImage: images.backend,
    features: [
      { title: 'Spring Boot', description: 'Production-ready, stand-alone microservices with embedded servers.' },
      { title: 'Hibernate ORM', description: 'Advanced object-relational mapping for complex, high-volume database interactions.' },
      { title: 'JVM Performance', description: 'Unmatched multi-threading capabilities and aggressive memory management/GC.' }
    ],
    benefits: ['Unbreakable enterprise security', 'Massive scalability', 'Strict object-oriented typing', 'Write once, run anywhere'],
    useCases: ['Banking Systems', 'Healthcare Data Processing', 'Legacy Enterprise Modernization']
  },

  // WEB SERVER TECHNOLOGY
  'jboss': {
    id: 'jboss',
    title: 'JBoss / WildFly',
    category: 'WEB SERVERS',
    description: 'Enterprise-class, open-source Java EE application server. We configure, tune, and deploy highly transactional enterprise applications requiring extreme reliability and clustering.',
    icon: Server,
    heroImage: images.backend,
    features: [
      { title: 'Enterprise Clustering', description: 'High availability architecture with state replication across multiple nodes.' },
      { title: 'Advanced Messaging', description: 'Robust integration with JMS for guaranteed message delivery systems.' },
      { title: 'Performance Tuning', description: 'Deep JVM and thread pool optimization for maximum throughput.' }
    ],
    benefits: ['Full Java EE compliance', 'High availability routing', 'Open-source flexibility', 'Extremely reliable for transactions'],
    useCases: ['Enterprise Java Deployments', 'Legacy Bank Applications', 'High-volume Transaction Processors']
  },
  'apache': {
    id: 'apache',
    title: 'Apache HTTP Server',
    category: 'WEB SERVERS',
    description: 'The battle-tested, highly configurable web server that powers the internet. We utilize Apache for complex reverse proxying, robust `.htaccess` routing, and highly secure monolithic deployments.',
    icon: Globe,
    heroImage: images.backend,
    features: [
      { title: 'Dynamic Modules', description: 'Extending server capabilities seamlessly without recompilation.' },
      { title: 'Advanced Routing', description: 'Intricate URL rewriting, load balancing, and proxy configurations.' },
      { title: 'Security Hardening', description: 'Implementing strict mod_security rulesets to mitigate application-layer attacks.' }
    ],
    benefits: ['Decades of proven stability', 'Incredible configuration flexibility', 'Massive community support', 'Excellent for shared environments'],
    useCases: ['LAMP Stack Applications', 'Legacy Web Hosting', 'Intricate Reverse Proxies']
  },
  'iis': {
    id: 'iis',
    title: 'Microsoft IIS',
    category: 'WEB SERVERS',
    description: 'The premier web server for the Windows ecosystem. We deploy, secure, and manage Internet Information Services for enterprise .NET applications, ensuring seamless integration with Active Directory and SQL Server.',
    icon: Server,
    heroImage: images.backend,
    features: [
      { title: '.NET Deep Integration', description: 'The absolute best environment for hosting ASP.NET Core and framework applications.' },
      { title: 'Windows Authentication', description: 'Seamless SSO integration via Active Directory for internal corporate networks.' },
      { title: 'Advanced Diagnostics', description: 'Powerful tracing and monitoring integrated directly into the Windows OS.' }
    ],
    benefits: ['Native Windows Server integration', 'Exceptional .NET performance', 'GUI-based management', 'Robust enterprise support'],
    useCases: ['Corporate Intranets', 'Enterprise .NET Applications', 'Windows-based Microservices']
  },

  // DATA MINING AND ANALYTICS
  'database': {
    id: 'database',
    title: 'Oracle & SQL Databases',
    category: 'DATA & ANALYTICS',
    description: 'Architecting unbreakable relational data models. From massive Oracle enterprise deployments to highly tuned PostgreSQL clusters, we ensure ACID compliance, high availability, and rapid querying for gigabyte-to-terabyte scale data.',
    icon: Database,
    heroImage: images.database,
    features: [
      { title: 'ACID Compliance', description: 'Guaranteeing data validity despite errors, power failures, and other mishaps.' },
      { title: 'Advanced Indexing', description: 'Optimizing B-tree and hash indexes for sub-millisecond query execution.' },
      { title: 'Replication & Sharding', description: 'Configuring active-passive replication and logical sharding for global scale.' }
    ],
    benefits: ['Absolute data integrity', 'Complex transactional support', 'Decades of proven methodology', 'Universal reporting compatibility'],
    useCases: ['Financial Ledgers', 'E-commerce Inventory', 'Enterprise Resource Planning (ERP)']
  },
  'mongodb': {
    id: 'mongodb',
    title: 'MongoDB & NoSQL',
    category: 'DATA & ANALYTICS',
    description: 'Flexible, document-oriented database architecture built for the modern web. We use MongoDB to handle massive volumes of unstructured data, allowing for rapid schema iteration and horizontal scaling.',
    icon: Database,
    heroImage: images.database,
    features: [
      { title: 'Document Model', description: 'Storing data in JSON-like BSON documents, perfectly mapping to application code objects.' },
      { title: 'Horizontal Scalability', description: 'Native sharding to distribute massive datasets across distributed clusters.' },
      { title: 'Aggregation Framework', description: 'Powerful data processing pipelines for real-time analytics and transformations.' }
    ],
    benefits: ['Rapid schema-less iteration', 'Massive horizontal scale', 'Perfect JavaScript/Node.js synergy', 'High performance reads/writes'],
    useCases: ['IoT Telemetry Data', 'Content Management Systems', 'Real-time Analytics']
  },
  'iot': {
    id: 'iot',
    title: 'IoT Solutions',
    category: 'DATA & ANALYTICS',
    description: 'Bridging the physical and digital worlds. We engineer end-to-end Internet of Things infrastructures, from embedded edge device communication (MQTT) to centralized cloud data ingestion and anomaly detection.',
    icon: Cpu,
    heroImage: images.database,
    features: [
      { title: 'Edge Computing', description: 'Processing data directly on the device to reduce latency and bandwidth consumption.' },
      { title: 'High-Throughput Ingestion', description: 'Handling millions of events per second via Apache Kafka and AWS IoT Core.' },
      { title: 'Digital Twins', description: 'Creating real-time virtual representations of physical assets for predictive maintenance.' }
    ],
    benefits: ['Real-time operational visibility', 'Predictive maintenance savings', 'Enhanced automation', 'Massive data generation for AI'],
    useCases: ['Smart Manufacturing', 'Fleet Logistics Tracking', 'Smart City Infrastructure']
  },
  'blockchain': {
    id: 'blockchain',
    title: 'Blockchain Development',
    category: 'DATA & ANALYTICS',
    description: 'Constructing decentralized, immutable, and highly secure ledger systems. From EVM-compatible Smart Contracts (Solidity) to private enterprise consortium networks (Hyperledger).',
    icon: Lock,
    heroImage: images.database,
    features: [
      { title: 'Smart Contracts', description: 'Self-executing, verifiable logic deployed directly to the Ethereum or Polygon networks.' },
      { title: 'Enterprise Consortiums', description: 'Building permissioned, private blockchain networks using Hyperledger Fabric.' },
      { title: 'DeFi & Tokenization', description: 'Architecting secure liquidity pools, staking mechanisms, and asset tokenization.' }
    ],
    benefits: ['Cryptographic security', 'Immutable audit trails', 'Elimination of intermediaries', 'Programmable trust'],
    useCases: ['Supply Chain Verification', 'Decentralized Finance (DeFi)', 'Identity Management']
  },

  // TESTING & SOFTWARE PROCESS
  'software-testing': {
    id: 'software-testing',
    title: 'Software Quality Assurance',
    category: 'TESTING & PROCESS',
    description: 'Rigorous, multi-layered quality assurance methodologies. We do not just look for bugs; we validate architecture, ensure WCAG accessibility, and verify that the application meets all business acceptance criteria.',
    icon: ShieldCheck,
    heroImage: images.testing,
    features: [
      { title: 'Manual Exploratory Testing', description: 'Creative, human-driven testing to find edge cases automated scripts miss.' },
      { title: 'Accessibility (A11y) Audits', description: 'Ensuring your application is perfectly usable by individuals using assistive technologies.' },
      { title: 'Security Penetration Testing', description: 'Simulating cyber attacks to identify and patch vulnerabilities before production.' }
    ],
    benefits: ['Higher user retention', 'Mitigated legal/security risks', 'Lower cost of maintenance', 'Flawless brand reputation'],
    useCases: ['Pre-Launch Verification', 'Compliance Audits', 'Usability Testing']
  },
  'integration-testing': {
    id: 'integration-testing',
    title: 'Integration & API Testing',
    category: 'TESTING & PROCESS',
    description: 'Validating the seams of your architecture. We ensure that microservices, third-party APIs, and databases communicate flawlessly under all load conditions and edge cases.',
    icon: TestTube2,
    heroImage: images.testing,
    features: [
      { title: 'Contract Testing', description: 'Ensuring that API producers and consumers agree on strict data payload structures.' },
      { title: 'End-to-End (E2E) Automation', description: 'Using Cypress and Playwright to simulate entire user journeys across the application.' },
      { title: 'Load & Stress Testing', description: 'Pushing APIs to their breaking point using tools like k6 and JMeter to find bottlenecks.' }
    ],
    benefits: ['Prevents cascading microservice failures', 'Guarantees third-party sync', 'Ensures system scalability', 'Reduces regression bugs'],
    useCases: ['Microservices Architectures', 'Payment Gateway Integrations', 'High-Traffic API Gateways']
  },
  'deployment-automation': {
    id: 'deployment-automation',
    title: 'Deployment & CI/CD Automation',
    category: 'TESTING & PROCESS',
    description: 'Engineering the delivery pipeline. We implement robust Continuous Integration and Continuous Deployment (CI/CD) pipelines to ensure code goes from a developer\'s laptop to production securely, rapidly, and predictably.',
    icon: Rocket,
    heroImage: images.testing,
    features: [
      { title: 'Automated Pipelines', description: 'Configuring GitHub Actions or GitLab CI to build, test, and deploy code automatically on push.' },
      { title: 'Infrastructure as Code (IaC)', description: 'Using Terraform and Ansible to provision identical cloud environments instantly.' },
      { title: 'Zero-Downtime Deployments', description: 'Implementing Blue/Green and Canary deployment strategies to eliminate maintenance windows.' }
    ],
    benefits: ['Radically increased deployment velocity', 'Zero manual human errors', 'Instant rollback capabilities', 'Highly consistent environments'],
    useCases: ['Agile Enterprise Teams', 'Multi-region Cloud Deployments', 'SaaS Product Updates']
  }
};
