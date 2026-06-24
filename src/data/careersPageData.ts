import { Lightbulb, Globe, TrendingUp, HeartPulse, Clock, BookOpen, PartyPopper, Laptop } from 'lucide-react';

export const careersPageData = {
  hero: {
    badge: "Careers at Infocera",
    headline: "Join Our",
    highlight: "Team",
    description: "Be part of a dynamic team that's shaping the future of technology. We're looking for talented individuals who are passionate about innovation."
  },
  whyWorkWithUs: {
    headline: "Why Work With Us",
    items: [
      {
        icon: Lightbulb,
        title: "Innovation First",
        description: "Work with cutting-edge technologies and solve complex enterprise challenges every single day."
      },
      {
        icon: Globe,
        title: "Remote Friendly",
        description: "Enjoy flexible work arrangements with a distributed global team of top-tier engineers."
      },
      {
        icon: TrendingUp,
        title: "Growth Opportunities",
        description: "Continuous learning and structured career development programs to accelerate your trajectory."
      }
    ]
  },
  benefits: {
    headline: "World-Class Benefits",
    items: [
      { icon: HeartPulse, title: "Health Benefits", description: "Comprehensive medical, dental, and vision coverage for you and your dependents." },
      { icon: Clock, title: "Flexible Work", description: "Work from anywhere in the world. We value output and impact over hours logged." },
      { icon: BookOpen, title: "Learning Budget", description: "Annual stipend for courses, conferences, certifications, and books." },
      { icon: PartyPopper, title: "Team Events", description: "Annual company retreats and regular virtual team-building activities." },
      { icon: Laptop, title: "Modern Equipment", description: "Top-of-the-line MacBook Pro and a generous home office setup allowance." }
    ]
  },
  openPositions: [
    {
      id: "sr-full-stack",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web applications using React, Node.js, and cloud technologies.",
      responsibilities: [
        "Design, develop, and maintain scalable web applications using React and Node.js.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Write clean, maintainable, and efficient code following best practices.",
        "Participate in code reviews and mentor junior developers.",
        "Integrate with cloud services (AWS, Azure, or GCP) and manage deployments."
      ],
      skills: [
        "Strong proficiency in JavaScript, TypeScript, React, and Node.js.",
        "Experience with RESTful APIs and microservices architecture.",
        "Familiarity with cloud platforms (AWS, Azure, or GCP).",
        "Knowledge of CI/CD pipelines and version control (Git).",
        "Excellent problem-solving and communication skills."
      ],
      qualifications: [
        "Bachelor’s or Master’s degree in Computer Science or related field.",
        "5+ years of experience in full stack development.",
        "Experience working in agile teams."
      ]
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
      responsibilities: [
        "Design, implement, and manage CI/CD pipelines.",
        "Automate infrastructure provisioning and deployments.",
        "Monitor system performance and troubleshoot issues.",
        "Ensure security and compliance of cloud environments.",
        "Collaborate with development teams to optimize workflows."
      ],
      skills: [
        "Experience with AWS, Azure, or GCP cloud platforms.",
        "Proficiency in scripting languages (Bash, Python, etc.).",
        "Knowledge of Docker, Kubernetes, and container orchestration.",
        "Familiarity with infrastructure as code tools (Terraform, CloudFormation).",
        "Strong understanding of networking and security best practices."
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science, Engineering, or related field.",
        "3+ years of experience in DevOps or related roles.",
        "Relevant certifications (AWS Certified DevOps Engineer, etc.) are a plus."
      ]
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
      responsibilities: [
        "Design user interfaces for web and mobile applications.",
        "Conduct user research and usability testing.",
        "Create wireframes, prototypes, and high-fidelity mockups.",
        "Collaborate with developers to ensure design feasibility.",
        "Maintain and evolve the company’s design system."
      ],
      skills: [
        "Proficiency in design tools (Figma, Sketch, Adobe XD, etc.).",
        "Strong portfolio showcasing UI/UX design work.",
        "Understanding of user-centered design principles.",
        "Ability to communicate design ideas effectively.",
        "Attention to detail and creativity."
      ],
      qualifications: [
        "Bachelor’s degree in Design, HCI, or related field.",
        "2+ years of experience in UI/UX design.",
        "Experience working in agile environments."
      ]
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze complex datasets to drive business insights and build predictive models.",
      responsibilities: [
        "Collect, process, and analyze large datasets from various sources.",
        "Develop predictive models and machine learning algorithms.",
        "Visualize data and communicate findings to stakeholders.",
        "Collaborate with engineering and product teams.",
        "Stay updated with the latest data science trends and technologies."
      ],
      skills: [
        "Strong programming skills in Python or R.",
        "Experience with machine learning frameworks (scikit-learn, TensorFlow, etc.).",
        "Proficiency in SQL and data visualization tools.",
        "Statistical analysis and problem-solving skills.",
        "Excellent communication and teamwork abilities."
      ],
      qualifications: [
        "Bachelor’s or Master’s degree in Data Science, Statistics, or related field.",
        "2+ years of experience in data science or analytics roles.",
        "Experience with big data technologies is a plus."
      ]
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop"
  ],
  hiringProcess: [
    { step: "01", title: "Application Review", description: "We review your resume and portfolio to ensure baseline alignment with the role." },
    { step: "02", title: "Introductory Call", description: "A 30-minute chat with our talent team to discuss your background and what you're looking for." },
    { step: "03", title: "Technical Interview", description: "A deep dive into your technical skills with our engineering leads. No whiteboard algorithms, just real-world problem solving." },
    { step: "04", title: "Culture Fit & Offer", description: "Meet with the founders to ensure mutual cultural alignment, followed by a competitive offer." }
  ],
  testimonials: [
    {
      quote: "The engineering culture here is incredible. You're given the autonomy to make architectural decisions and the support to execute them flawlessly.",
      author: "Sarah Jenkins",
      role: "Lead Cloud Architect",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "As a designer, it's rare to find a team that values pixel-perfection as much as I do. The collaboration between design and frontend is seamless.",
      author: "David Chen",
      role: "Senior Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ]
};
