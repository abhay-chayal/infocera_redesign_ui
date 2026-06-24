import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const contactPageData = {
  hero: {
    badge: "Contact Us",
    headline: "Let's build something",
    highlight: "extraordinary.",
    description: "Whether you need a custom enterprise solution, a scalable cloud architecture, or AI integration, our engineering team is ready to deliver."
  },
  methods: [
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      value: "info@infocera.in",
      action: "mailto:info@infocera.in",
      description: "We typically respond within 2 hours."
    },
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      value: "+91 8882824948",
      action: "tel:+918882824948",
      description: "Mon-Fri from 9am to 6pm."
    },
    {
      id: "address",
      icon: MapPin,
      title: "Headquarters",
      value: "First Floor, L29-L34, Block L, Connaught Place, New Delhi, Delhi - 110001",
      action: "https://maps.google.com/?q=Infocera,Connaught+Place,New+Delhi",
      description: "Come visit our engineering hub."
    },
    {
      id: "hours",
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM - 6PM",
      action: null,
      description: "Sat: 10AM - 2PM | Sun: Closed"
    }
  ],
  formOptions: {
    services: [
      "Custom Software Development",
      "Mobile App Development",
      "Cloud Solutions & Migration",
      "AI & Machine Learning",
      "DevOps & Automation",
      "Data Engineering",
      "Other"
    ],
    budgets: [
      "Under $10,000",
      "$10,000 - $25,000",
      "$25,000 - $50,000",
      "$50,000 - $100,000",
      "$100,000+"
    ]
  },
  whyUs: {
    headline: "Why partner with us?",
    items: [
      {
        title: "SLA-Backed Delivery",
        description: "Every enterprise project we ship is backed by rigorous SLAs guaranteeing uptime, response times, and code quality."
      },
      {
        title: "NDA-Ready Consultations",
        description: "Your intellectual property is secure. We are happy to sign standard or custom NDAs before discussing any technical specifics."
      },
      {
        title: "Transparent Architecture",
        description: "You retain full ownership of the source code and IP upon project completion. No vendor lock-in."
      }
    ]
  },
  faqs: {
    headline: "Common questions.",
    items: [
      {
        question: "How quickly can you start a new project?",
        answer: "Depending on our current resource allocation, we can typically spin up a dedicated engineering pod for a new enterprise project within 2-3 weeks of signing the SOW."
      },
      {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes. We offer comprehensive, SLA-backed maintenance contracts that include 24/7 uptime monitoring, security patching, and prioritized bug resolution."
      },
      {
        question: "Can we hire your developers to augment our existing team?",
        answer: "Absolutely. We offer flexible team augmentation services, allowing you to seamlessly integrate our senior engineers, DevOps specialists, or UI/UX designers into your existing agile workflows."
      },
      {
        question: "What is your pricing model?",
        answer: "We primarily work on a Time & Materials (T&M) basis for agile software development, as it offers the most flexibility for changing requirements. For clearly defined scopes, we can also offer Fixed-Price contracts."
      }
    ]
  }
};
