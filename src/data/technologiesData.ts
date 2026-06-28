import { Layout, Server, Cloud, Brain, Database } from 'lucide-react';

export const technologiesData = [
  {
    id: 1,
    title: "Frontend",
    icon: Layout,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    color: "#06b6d4" // Cyan
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Java", "Python", "Go", "C# .NET"],
    color: "#10b981" // Emerald
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    icon: Cloud,
    techs: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"],
    color: "#3b82f6" // Blue
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    icon: Brain,
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-Learn", "Hugging Face"],
    color: "#8b5cf6" // Violet
  },
  {
    id: 5,
    title: "Databases",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "DynamoDB"],
    color: "#f59e0b" // Amber
  }
];
