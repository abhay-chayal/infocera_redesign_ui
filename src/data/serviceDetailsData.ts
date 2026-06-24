import type {  } from '../types/service';

export const serviceDetailsData: Record<string, ServicePageData> = {
  'custom-software-development': {
    slug: 'custom-software-development',
    seo: {
      title: 'Custom Enterprise Software Development | Infocera',
      description: 'We build scalable, secure, and high-performance custom software solutions tailored to enterprise requirements.',
      keywords: ['Custom Software', 'Enterprise Software', 'React', 'Node.js', 'Scalable Architecture'],
    },
    hero: {
      title: 'Custom Enterprise Software',
      subtitle: 'Built to scale. Designed to dominate.',
      description: 'We engineer robust, custom software solutions that modernize complex business operations and drive exponential growth. From core systems to specialized platforms, we deliver excellence.',
      primaryCTA: { label: 'Start Your Project', href: '/contact' },
      secondaryCTA: { label: 'View Case Studies', href: '/portfolio' },
    },
    challenge: {
      title: 'The Enterprise Bottleneck',
      description: 'Off-the-shelf software forces businesses to adapt their processes to the tool, resulting in operational friction, security vulnerabilities, and limited scalability.',
      points: [
        'Rigid systems blocking rapid iteration',
        'Data silos preventing holistic insights',
        'High technical debt in legacy applications',
      ],
    },
    solution: {
      title: 'Purpose-Built Ecosystems',
      description: 'We develop custom software that perfectly aligns with your proprietary workflows, ensuring seamless integration, high performance, and long-term agility.',
      highlights: [
        { title: 'Scalable Architecture', description: 'Microservices-based backend systems designed to handle immense scale.' },
        { title: 'Exceptional UX/UI', description: 'Consumer-grade interfaces for enterprise applications.' },
      ],
    },
    capabilities: [
      {
        title: 'Full-Cycle Engineering',
        description: 'End-to-end development from conceptual architecture to deployment and maintenance.',
        icon: 'Code',
      },
      {
        title: 'System Integration',
        description: 'Connecting disparate legacy systems into a unified, high-performance ecosystem.',
        icon: 'Network',
      },
      {
        title: 'Legacy Modernization',
        description: 'Refactoring and migrating outdated platforms to modern, resilient architectures.',
        icon: 'RefreshCw',
      },
      {
        title: 'Enterprise Portals',
        description: 'Secure, high-speed platforms for B2B operations and employee management.',
        icon: 'Layout',
      },
    ],
    process: [
      { number: '01', title: 'Discovery & Architecture', description: 'We map out your business logic and design a scalable system architecture.' },
      { number: '02', title: 'Agile Development', description: 'Iterative sprints delivering functional milestones and rapid feedback loops.' },
      { number: '03', title: 'Rigorous QA', description: 'Automated and manual testing to ensure zero-defect deployments.' },
      { number: '04', title: 'Deployment & Scaling', description: 'Seamless rollout with continuous monitoring and proactive scaling.' },
    ],
    architecture: [
      { id: 'client', label: 'Client Applications', description: 'React / Next.js / Mobile', type: 'client', next: ['api'] },
      { id: 'api', label: 'API Gateway', description: 'GraphQL & REST Routing', type: 'process', next: ['auth', 'services'] },
      { id: 'auth', label: 'Auth Provider', description: 'OIDC / JWT Validation', type: 'process', next: [] },
      { id: 'services', label: 'Microservices Core', description: 'Node.js / Go / Python Services', type: 'process', next: ['db', 'cache'] },
      { id: 'db', label: 'Primary Database', description: 'PostgreSQL Cluster', type: 'storage', next: [] },
      { id: 'cache', label: 'Redis Cache', description: 'In-Memory Data Store', type: 'storage', next: [] },
    ],
    technologies: [
      { name: 'React', category: 'Frontend', icon: 'react' },
      { name: 'TypeScript', category: 'Language', icon: 'typescript' },
      { name: 'Node.js', category: 'Backend', icon: 'nodedotjs' },
      { name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
      { name: 'Docker', category: 'DevOps', icon: 'docker' },
    ],
    caseStudy: {
      title: 'Global Logistics Platform Modernization',
      client: 'Fortune 500 Supply Chain Leader',
      description: 'Rebuilt a monolithic legacy system into a scalable microservices architecture, improving processing speed and reliability.',
      results: ['3x Faster Processing', '99.99% Uptime Achieved', '40% Reduction in Server Costs'],
      link: '/portfolio/logistics-modernization',
    },
    metrics: [
      { value: '40%', label: 'Operational Efficiency Gain', description: 'Average time saved across automated workflows.' },
      { value: '60%', label: 'Faster Time-to-Market', description: 'Accelerated release cycles via CI/CD pipelines.' },
      { value: '99.99%', label: 'System Uptime', description: 'High availability across redundant infrastructure.' },
    ],
    faq: [
      { question: 'How do you handle security for custom applications?', answer: 'We implement zero-trust architectures, end-to-end encryption, and conduct rigorous penetration testing prior to deployment.' },
      { question: 'Will we own the intellectual property (IP)?', answer: 'Yes. Upon project completion and final payment, you retain 100% ownership of the source code and IP.' },
      { question: 'How do you ensure the software scales?', answer: 'We design our systems using decoupled microservices, containerization (Docker/Kubernetes), and scalable database architectures.' },
    ],
  },
  'ai-ml-solutions': {
    slug: 'ai-ml-solutions',
    seo: {
      title: 'Enterprise AI & Machine Learning Solutions | Infocera',
      description: 'Unlock business intelligence with custom Artificial Intelligence and Machine Learning models designed for scale.',
      keywords: ['AI Solutions', 'Machine Learning', 'Data Science', 'Predictive Analytics', 'LLM Integration'],
    },
    hero: {
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Intelligence engineered for enterprise dominance.',
      description: 'We deploy cutting-edge AI models and machine learning pipelines that transform raw data into predictive power and automated decision-making.',
      primaryCTA: { label: 'Consult an AI Expert', href: '/contact' },
    },
    challenge: {
      title: 'The Data Paralysis',
      description: 'Enterprises generate petabytes of data but struggle to extract actionable intelligence, relying instead on intuition rather than predictive models.',
      points: [
        'Vast amounts of unstructured data',
        'Inefficient manual data processing',
        'Lack of predictive forecasting',
      ],
    },
    solution: {
      title: 'Predictive & Generative Power',
      description: 'We build proprietary AI systems that automate complex reasoning, forecast trends, and unlock entirely new revenue streams.',
      highlights: [
        { title: 'Generative AI', description: 'Custom LLM integrations for intelligent automation.' },
        { title: 'Predictive Models', description: 'Deep learning systems that forecast business outcomes.' },
      ],
    },
    capabilities: [
      {
        title: 'Custom LLM Development',
        description: 'Fine-tuning large language models on your proprietary enterprise data.',
        icon: 'Brain',
      },
      {
        title: 'Predictive Analytics',
        description: 'Machine learning algorithms that predict market shifts and customer behavior.',
        icon: 'TrendingUp',
      },
      {
        title: 'Computer Vision',
        description: 'Advanced image and video analysis systems for automated quality control.',
        icon: 'Eye',
      },
      {
        title: 'NLP Systems',
        description: 'Intelligent document processing and conversational AI agents.',
        icon: 'MessageSquare',
      },
    ],
    process: [
      { number: '01', title: 'Data Audit & Strategy', description: 'Assessing your data infrastructure and defining AI objectives.' },
      { number: '02', title: 'Model Engineering', description: 'Selecting, training, and fine-tuning the optimal machine learning models.' },
      { number: '03', title: 'Integration & Testing', description: 'Embedding AI pipelines into your existing software architecture safely.' },
      { number: '04', title: 'Continuous Learning', description: 'Implementing feedback loops to improve model accuracy over time.' },
    ],
    architecture: [
      { id: 'source', label: 'Enterprise Data Sources', description: 'Databases / APIs / Documents', type: 'source', next: ['pipeline'] },
      { id: 'pipeline', label: 'Data Pipeline', description: 'ETL & Feature Engineering', type: 'process', next: ['training'] },
      { id: 'training', label: 'Model Training', description: 'GPU Clusters / TensorFlow', type: 'process', next: ['deploy'] },
      { id: 'deploy', label: 'Inference Engine', description: 'Scalable Model Deployment', type: 'process', next: ['monitor'] },
      { id: 'monitor', label: 'Monitoring & Feedback', description: 'Drift Detection & Logging', type: 'default', next: ['pipeline'] },
    ],
    technologies: [
      { name: 'Python', category: 'Language', icon: 'python' },
      { name: 'PyTorch', category: 'Framework', icon: 'pytorch' },
      { name: 'TensorFlow', category: 'Framework', icon: 'tensorflow' },
      { name: 'OpenAI', category: 'AI Services', icon: 'openai' },
      { name: 'AWS SageMaker', category: 'Infrastructure', icon: 'amazonaws' },
    ],
    caseStudy: {
      title: 'Automated Fraud Detection System',
      client: 'International FinTech Provider',
      description: 'Implemented a real-time machine learning model that analyzes millions of transactions to detect and block fraudulent activity instantly.',
      results: ['99.2% Fraud Detection Rate', '<50ms Inference Time', '$4.2M Saved Annually'],
      link: '/portfolio/fraud-detection-ai',
    },
    metrics: [
      { value: '3x', label: 'Faster Decision Making', description: 'Automated analysis of complex datasets.' },
      { value: '45%', label: 'Cost Reduction', description: 'Through automation of manual processing tasks.' },
      { value: '99%', label: 'Model Accuracy', description: 'Achieved in controlled enterprise deployments.' },
    ],
    faq: [
      { question: 'Is our data secure when using AI?', answer: 'Absolutely. We deploy private models within your own VPC, ensuring your proprietary data never leaves your secure environment.' },
      { question: 'Do we need a massive dataset to start?', answer: 'Not necessarily. With techniques like transfer learning and synthetic data generation, we can build robust models with limited initial datasets.' },
    ],
  },
  'cloud-solutions': {
    slug: 'cloud-solutions',
    seo: {
      title: 'Enterprise Cloud Solutions & Migration | Infocera',
      description: 'Secure, resilient, and highly available cloud architectures on AWS, Azure, and Google Cloud.',
      keywords: ['Cloud Migration', 'DevOps', 'AWS', 'Kubernetes', 'Cloud Infrastructure'],
    },
    hero: {
      title: 'Cloud Architecture & DevOps',
      subtitle: 'Infinite scalability. Zero downtime.',
      description: 'We design, migrate, and manage robust cloud environments that provide security, high availability, and massive cost optimizations for global enterprises.',
      primaryCTA: { label: 'Request Cloud Audit', href: '/contact' },
    },
    challenge: {
      title: 'The Infrastructure Trap',
      description: 'On-premise servers and poorly architected cloud deployments lead to massive cost overruns, security vulnerabilities, and system outages during peak loads.',
      points: [
        'Inability to scale dynamically',
        'Exorbitant cloud hosting costs',
        'Fragile CI/CD pipelines causing deployment anxiety',
      ],
    },
    solution: {
      title: 'Cloud-Native Resilience',
      description: 'We architect immutable, automated cloud environments utilizing Infrastructure as Code (IaC) to guarantee reliability and radical cost efficiency.',
      highlights: [
        { title: 'Multi-Cloud Strategy', description: 'Vendor-agnostic architectures for maximum flexibility.' },
        { title: 'Automated DevOps', description: 'Zero-touch deployments and automated scaling.' },
      ],
    },
    capabilities: [
      {
        title: 'Cloud Migration',
        description: 'Seamless transition of legacy systems to modern cloud infrastructures with zero downtime.',
        icon: 'Cloud',
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Automated build, test, and deployment pipelines to accelerate delivery.',
        icon: 'Activity',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Managing and provisioning data centers through machine-readable definition files.',
        icon: 'Terminal',
      },
      {
        title: 'FinOps & Cost Optimization',
        description: 'Analyzing and restructuring cloud resources to eliminate wasted spend.',
        icon: 'PieChart',
      },
    ],
    process: [
      { number: '01', title: 'Architecture Assessment', description: 'Deep dive into your current infrastructure to identify bottlenecks and cost leaks.' },
      { number: '02', title: 'Blueprint Design', description: 'Architecting a highly available, secure, and compliant cloud environment.' },
      { number: '03', title: 'Migration & Implementation', description: 'Executing a phased migration using automated IaC tools.' },
      { number: '04', title: '24/7 Managed Operations', description: 'Continuous monitoring, threat detection, and performance optimization.' },
    ],
    architecture: [
      { id: 'users', label: 'Global Users', description: 'Route 53 / Cloudflare', type: 'source', next: ['cdn'] },
      { id: 'cdn', label: 'CDN / WAF', description: 'Content Delivery & Security', type: 'process', next: ['lb'] },
      { id: 'lb', label: 'Load Balancer', description: 'Traffic Distribution', type: 'process', next: ['k8s'] },
      { id: 'k8s', label: 'Kubernetes Cluster', description: 'Auto-scaling Microservices', type: 'process', next: ['db', 'storage'] },
      { id: 'db', label: 'Managed Database', description: 'Multi-AZ Replication', type: 'storage', next: [] },
      { id: 'storage', label: 'Object Storage', description: 'S3 / Blob Storage', type: 'storage', next: [] },
    ],
    technologies: [
      { name: 'AWS', category: 'Provider', icon: 'amazonaws' },
      { name: 'Kubernetes', category: 'Orchestration', icon: 'kubernetes' },
      { name: 'Terraform', category: 'IaC', icon: 'terraform' },
      { name: 'Docker', category: 'Containerization', icon: 'docker' },
      { name: 'GitHub Actions', category: 'CI/CD', icon: 'githubactions' },
    ],
    caseStudy: {
      title: 'E-Commerce Infrastructure Scaling',
      client: 'Top 10 Global Retailer',
      description: 'Migrated monolithic infrastructure to a Kubernetes-based multi-cloud setup to handle Black Friday traffic spikes.',
      results: ['Zero Downtime During Peak', '60% Reduction in Idle Costs', '100% Automated Scaling'],
      link: '/portfolio/retail-cloud-migration',
    },
    metrics: [
      { value: '99.999%', label: 'Availability', description: 'Five-nines reliability for mission-critical systems.' },
      { value: '60%', label: 'Infrastructure Savings', description: 'Achieved through intelligent resource allocation.' },
      { value: '10x', label: 'Deployment Frequency', description: 'Enabled by robust CI/CD automation.' },
    ],
    faq: [
      { question: 'Do you lock us into a specific cloud provider?', answer: 'No. We prefer cloud-agnostic architectures using tools like Kubernetes and Terraform, allowing you to move between AWS, GCP, or Azure if needed.' },
      { question: 'How do you handle zero-downtime migrations?', answer: 'We use the strangler fig pattern and parallel running systems, shifting traffic gradually via advanced load balancing until the new system is fully validated.' },
    ],
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    seo: {
      title: 'Enterprise Mobile App Development | Infocera',
      description: 'Native and cross-platform mobile application development delivering seamless, high-performance user experiences for global enterprises.',
      keywords: ['Mobile App Development', 'iOS', 'Android', 'React Native', 'Enterprise Mobility'],
    },
    hero: {
      title: 'Enterprise Mobile Engineering',
      subtitle: 'Native performance. Global scale.',
      description: 'We engineer award-winning mobile applications that connect you directly with your users. From consumer-facing iOS apps to internal enterprise mobility solutions, we deliver flawless experiences.',
      primaryCTA: { label: 'Discuss Your App', href: '/contact' },
    },
    challenge: {
      title: 'The Mobility Gap',
      description: 'Poorly engineered mobile apps suffer from high latency, frequent crashes, and fragmented user experiences across platforms, leading to rapid user churn and lost revenue.',
      points: [
        'Inconsistent performance across devices',
        'High maintenance costs for separate codebases',
        'Subpar user interfaces failing to engage users',
      ],
    },
    solution: {
      title: 'Unified High-Performance Ecosystems',
      description: 'We develop secure, deeply integrated mobile applications using modern cross-platform frameworks or high-fidelity native code, ensuring absolute stability and premium UX.',
      highlights: [
        { title: 'Native-Like Fluidity', description: '60fps animations and instant interaction response times.' },
        { title: 'Offline Architecture', description: 'Robust offline-first capabilities for uninterrupted operations.' },
      ],
    },
    capabilities: [
      {
        title: 'iOS Native Development',
        description: 'Building high-performance Apple ecosystem apps using Swift and SwiftUI.',
        icon: 'Smartphone',
      },
      {
        title: 'Android Native Engineering',
        description: 'Creating robust Android applications with Kotlin and modern architecture components.',
        icon: 'Smartphone',
      },
      {
        title: 'Cross-Platform Frameworks',
        description: 'Deploying to both platforms simultaneously using React Native or Flutter.',
        icon: 'Layers',
      },
      {
        title: 'Mobile Architecture',
        description: 'Designing scalable backend APIs and secure data synchronization for mobile.',
        icon: 'Database',
      },
    ],
    process: [
      { number: '01', title: 'Product Strategy', description: 'Defining the mobile user journey, platform strategy, and technical requirements.' },
      { number: '02', title: 'UX/UI Design', description: 'Crafting pixel-perfect, platform-specific interfaces compliant with Apple HIG and Material Design.' },
      { number: '03', title: 'Agile Development', description: 'Building the app iteratively with continuous integration and real-device testing.' },
      { number: '04', title: 'App Store Deployment', description: 'Managing the entire submission process and post-launch monitoring.' },
    ],
    architecture: [
      { id: 'app', label: 'Mobile App', description: 'iOS / Android Native', type: 'client', next: ['api'] },
      { id: 'api', label: 'BFF (Backend for Frontend)', description: 'GraphQL Aggregation', type: 'process', next: ['services'] },
      { id: 'services', label: 'Microservices', description: 'Business Logic', type: 'process', next: ['db'] },
      { id: 'db', label: 'Database', description: 'PostgreSQL & Redis', type: 'storage', next: [] },
    ],
    technologies: [
      { name: 'React Native', category: 'Framework', icon: 'react' },
      { name: 'Swift', category: 'Language', icon: 'apple' },
      { name: 'Kotlin', category: 'Language', icon: 'android' },
      { name: 'GraphQL', category: 'API', icon: 'graphql' },
    ],
    caseStudy: {
      title: 'FinTech Consumer App Launch',
      client: 'Leading Digital Bank',
      description: 'Designed and engineered a cross-platform mobile banking app supporting millions of daily active users with bank-grade security.',
      results: ['4.9 App Store Rating', '2M+ Downloads in Q1', 'Zero Security Breaches'],
      link: '/portfolio/fintech-mobile-app',
    },
    metrics: [
      { value: '4.9', label: 'Average App Store Rating', description: 'Across all our deployed consumer applications.' },
      { value: '99.9%', label: 'Crash-Free Sessions', description: 'Ensuring reliable usage through rigorous QA.' },
      { value: '50%', label: 'Faster Time-to-Market', description: 'Achieved through reusable components and cross-platform tech.' },
    ],
    faq: [
      { question: 'Native vs. Cross-Platform?', answer: 'It depends on your needs. For heavy animations and OS-specific features, Native is best. For rapid market entry and dual-platform coverage, React Native/Flutter is highly recommended.' },
      { question: 'Do you assist with App Store approval?', answer: 'Yes, we manage the entire submission lifecycle for both Apple App Store and Google Play Store.' },
    ],
  },
  'devops-automation': {
    slug: 'devops-automation',
    seo: {
      title: 'Enterprise DevOps & Automation | Infocera',
      description: 'Accelerate your software delivery lifecycle with automated CI/CD pipelines, containerization, and IaC.',
      keywords: ['DevOps', 'CI/CD', 'Kubernetes', 'Automation', 'Infrastructure as Code'],
    },
    hero: {
      title: 'DevOps & Infrastructure Automation',
      subtitle: 'Deploy faster. Sleep better.',
      description: 'We transform fragile manual deployments into robust, automated pipelines. By unifying development and operations, we enable continuous delivery of value without compromising stability.',
      primaryCTA: { label: 'Audit Your Infrastructure', href: '/contact' },
    },
    challenge: {
      title: 'Deployment Anxiety',
      description: 'Manual server configurations and monolithic deployments lead to high failure rates, prolonged downtime, and immense stress during release windows.',
      points: [
        'Inconsistent environments between dev and prod',
        'Slow, error-prone manual deployments',
        'Lack of system observability and proactive alerting',
      ],
    },
    solution: {
      title: 'Continuous Delivery Pipelines',
      description: 'We implement modern DevOps practices that treat infrastructure as code, ensuring every environment is identical and every deployment is fully automated and testable.',
      highlights: [
        { title: 'Zero-Downtime Releases', description: 'Blue-green and canary deployment strategies.' },
        { title: 'Immutable Infrastructure', description: 'Servers are replaced, never patched in place.' },
      ],
    },
    capabilities: [
      {
        title: 'CI/CD Pipeline Engineering',
        description: 'Automating the build, test, and release processes.',
        icon: 'GitBranch',
      },
      {
        title: 'Container Orchestration',
        description: 'Managing massive microservice deployments via Kubernetes.',
        icon: 'Box',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Defining network and server topography through Terraform.',
        icon: 'Terminal',
      },
      {
        title: 'Observability & Monitoring',
        description: 'Deep tracing and alerting using Datadog, Prometheus, and Grafana.',
        icon: 'Activity',
      },
    ],
    process: [
      { number: '01', title: 'Value Stream Mapping', description: 'Identifying bottlenecks in your current software delivery lifecycle.' },
      { number: '02', title: 'Toolchain Selection', description: 'Designing a modern stack (GitHub Actions, ArgoCD, Terraform, etc.).' },
      { number: '03', title: 'Pipeline Construction', description: 'Building automated testing and deployment routes.' },
      { number: '04', title: 'Cultural Integration', description: 'Training your engineering team on the new automated workflows.' },
    ],
    architecture: [
      { id: 'code', label: 'Source Code', description: 'GitHub / GitLab', type: 'source', next: ['ci'] },
      { id: 'ci', label: 'Continuous Integration', description: 'Automated Tests & Build', type: 'process', next: ['registry'] },
      { id: 'registry', label: 'Container Registry', description: 'Docker Hub / ECR', type: 'storage', next: ['cd'] },
      { id: 'cd', label: 'Continuous Deployment', description: 'ArgoCD / Spinnaker', type: 'process', next: ['k8s'] },
      { id: 'k8s', label: 'Production Cluster', description: 'Kubernetes Nodes', type: 'process', next: [] },
    ],
    technologies: [
      { name: 'Kubernetes', category: 'Orchestration', icon: 'kubernetes' },
      { name: 'Terraform', category: 'IaC', icon: 'terraform' },
      { name: 'Docker', category: 'Containerization', icon: 'docker' },
      { name: 'GitHub Actions', category: 'CI/CD', icon: 'github' },
    ],
    caseStudy: {
      title: 'SaaS Platform Deployment Overhaul',
      client: 'B2B Analytics Startup',
      description: 'Reduced deployment time from 4 hours to 10 minutes by implementing a fully automated Kubernetes and ArgoCD pipeline.',
      results: ['10x Deployment Frequency', 'Zero Deployment Failures', '100% Environment Consistency'],
      link: '/portfolio/saas-devops',
    },
    metrics: [
      { value: '10x', label: 'Deployment Frequency', description: 'Moving from monthly to daily releases.' },
      { value: '95%', label: 'Reduction in MTTR', description: 'Mean Time To Recovery vastly improved via automated rollbacks.' },
      { value: '100%', label: 'IaC Coverage', description: 'Total elimination of manual server configuration.' },
    ],
    faq: [
      { question: 'What is Infrastructure as Code?', answer: 'IaC is the process of managing data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.' },
      { question: 'Can you migrate our legacy Jenkins pipelines?', answer: 'Yes, we specialize in modernizing CI/CD from legacy Jenkins environments to modern, declarative systems like GitHub Actions or GitLab CI.' },
    ],
  },
  'data-engineering': {
    slug: 'data-engineering',
    seo: {
      title: 'Enterprise Data Engineering | Infocera',
      description: 'Transform raw data into strategic assets with highly scalable data pipelines, data lakes, and warehouses.',
      keywords: ['Data Engineering', 'Data Warehouse', 'ETL', 'Big Data', 'Snowflake'],
    },
    hero: {
      title: 'Enterprise Data Engineering',
      subtitle: 'Turn chaos into clarity.',
      description: 'We build robust, scalable data infrastructures that collect, process, and transform massive volumes of raw data into reliable, actionable business intelligence.',
      primaryCTA: { label: 'Talk to Data Architects', href: '/contact' },
    },
    challenge: {
      title: 'The Data Swamp',
      description: 'Organizations collect unprecedented amounts of data, but it remains siloed, unstructured, and unusable, turning potential insights into a massive liability.',
      points: [
        'Fragmented data scattered across departments',
        'Slow, fragile ETL processes that break constantly',
        'Inability to trust data accuracy for reporting',
      ],
    },
    solution: {
      title: 'Unified Data Ecosystems',
      description: 'We architect modern data platforms that ingest streaming and batch data, enforcing strict governance and quality checks to empower real-time analytics.',
      highlights: [
        { title: 'Single Source of Truth', description: 'Centralized data warehouses ensuring organizational alignment.' },
        { title: 'Real-Time Processing', description: 'Streaming architectures that deliver immediate insights.' },
      ],
    },
    capabilities: [
      {
        title: 'Data Warehouse Architecture',
        description: 'Designing and implementing Snowflake, BigQuery, or Redshift solutions.',
        icon: 'Database',
      },
      {
        title: 'ETL/ELT Pipeline Development',
        description: 'Building resilient data ingestion pipelines using dbt, Airflow, and Spark.',
        icon: 'Repeat',
      },
      {
        title: 'Real-time Data Streaming',
        description: 'Implementing Kafka or Kinesis for high-velocity data processing.',
        icon: 'Zap',
      },
      {
        title: 'Data Governance & Security',
        description: 'Ensuring compliance, role-based access, and data lineage.',
        icon: 'Shield',
      },
    ],
    process: [
      { number: '01', title: 'Data Assessment', description: 'Auditing existing data sources, quality, and business reporting needs.' },
      { number: '02', title: 'Architecture Design', description: 'Selecting the appropriate cloud warehouse and modeling the data schema.' },
      { number: '03', title: 'Pipeline Construction', description: 'Developing the ingestion, transformation, and loading (ETL/ELT) scripts.' },
      { number: '04', title: 'Validation & BI Integration', description: 'Connecting the unified data to BI tools like Tableau or Looker.' },
    ],
    architecture: [
      { id: 'sources', label: 'Raw Data Sources', description: 'APIs / CRMs / Logs', type: 'source', next: ['ingestion'] },
      { id: 'ingestion', label: 'Data Ingestion', description: 'Fivetran / Kafka', type: 'process', next: ['lake'] },
      { id: 'lake', label: 'Data Lake', description: 'S3 / GCS Storage', type: 'storage', next: ['transform'] },
      { id: 'transform', label: 'Data Transformation', description: 'dbt / Spark', type: 'process', next: ['warehouse'] },
      { id: 'warehouse', label: 'Data Warehouse', description: 'Snowflake / BigQuery', type: 'storage', next: ['bi'] },
      { id: 'bi', label: 'Business Intelligence', description: 'Looker / PowerBI', type: 'client', next: [] },
    ],
    technologies: [
      { name: 'Snowflake', category: 'Warehouse', icon: 'database' },
      { name: 'Apache Airflow', category: 'Orchestration', icon: 'wind' },
      { name: 'dbt', category: 'Transformation', icon: 'tool' },
      { name: 'Apache Kafka', category: 'Streaming', icon: 'activity' },
    ],
    caseStudy: {
      title: 'Global Retailer Data Consolidation',
      client: 'Multi-National Retail Chain',
      description: 'Unified data from 5 disparate ERP and POS systems into a central Snowflake warehouse, enabling real-time inventory and sales forecasting.',
      results: ['Daily Reporting reduced from 6 hours to 5 minutes', '100% Data Accuracy Achieved', 'Predictive modeling enabled'],
      link: '/portfolio/retail-data-warehouse',
    },
    metrics: [
      { value: '100x', label: 'Faster Query Performance', description: 'Achieved by migrating to modern columnar databases.' },
      { value: '99.9%', label: 'Data Pipeline Reliability', description: 'Ensuring reports are ready when executives need them.' },
      { value: 'Petabytes', label: 'Scale Handled', description: 'Architectures designed to scale infinitely.' },
    ],
    faq: [
      { question: 'ETL vs ELT?', answer: 'We predominantly favor ELT (Extract, Load, Transform) leveraging the massive compute power of modern cloud warehouses like Snowflake to transform data after loading.' },
      { question: 'How do you ensure data quality?', answer: 'We implement automated data testing within the pipeline (often using dbt tests) to catch nulls, uniqueness violations, and referential integrity issues before data hits production dashboards.' },
    ],
  },
};
