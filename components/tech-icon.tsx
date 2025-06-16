import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Layers, 
  Cloud, 
  Container,
  Palette,
  Zap,
  FileCode,
  Terminal,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap = {
  react: Code2,
  nextjs: Globe,
  typescript: FileCode,
  nodejs: Server,
  tailwind: Palette,
  postgresql: Database,
  docker: Container,
  aws: Cloud,
  javascript: Code2,
  express: Server,
  mongodb: Database,
  redis: Database,
  graphql: Layers,
  python: Terminal,
  git: Terminal,
  figma: Palette,
  vscode: Code2,
  webpack: Layers,
  babel: Code2,
  jest: Zap,
  cypress: Zap,
  vercel: Globe,
  netlify: Globe,
  heroku: Cloud,
  firebase: Zap,
  supabase: Database,
  prisma: Database,
  trpc: Server,
  socketio: Cpu,
  stripe: Zap,
  auth0: Zap,
  framer: Palette,
  storybook: Layers,
  eslint: Code2,
  prettier: Code2,
  vite: Zap,
  rollup: Layers,
  turborepo: Layers,
  nx: Layers,
  kubernetes: Container,
  terraform: Cloud,
  ansible: Server,
  jenkins: Cpu,
  github: Terminal,
  gitlab: Terminal,
  bitbucket: Terminal,
  jira: Layers,
  confluence: Layers,
  slack: Zap,
  discord: Zap,
  notion: Layers,
  linear: Layers,
};

export function TechIcon({ name, className }: TechIconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || Code2;
  
  return (
    <div className={cn(
      "flex items-center justify-center rounded-lg p-2",
      "bg-gradient-to-br from-primary/10 to-primary/5",
      "border border-primary/20",
      className
    )}>
      <IconComponent className="w-6 h-6 text-primary" />
    </div>
  );
}