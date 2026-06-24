import { Layout, Server, Cloud, Brain, Database } from 'lucide-react';

export const technologiesData = [
  {
    id: 1,
    title: "Frontend",
    icon: Layout,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Java", "Python", "Go", "C# .NET"]
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    icon: Cloud,
    techs: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    icon: Brain,
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-Learn", "Hugging Face"]
  },
  {
    id: 5,
    title: "Databases",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "DynamoDB"]
  }
];
