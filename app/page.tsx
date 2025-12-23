import { getFeaturedProjects } from '@/lib/markdown';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, Code2, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Aditya Kulkarni</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Research-focused Software Engineer specializing in{' '}
                <span className="text-primary">Machine Learning</span>,{' '}
                <span className="text-primary">RAG Systems</span>, and{' '}
                <span className="text-primary">Full-Stack Development</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Research Intern @ DRDO</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50" />
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span>B.Tech CSE @ Anurag University</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50" />
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Patent Holder</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/projects"
                className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 glass rounded-lg font-medium transition-all hover:glass-strong"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing innovation in ML, healthcare tech, and career guidance
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="sm:hidden flex justify-center mt-8">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Start a Conversation
              </Link>
              <a
                href="mailto:aditya.kulkarnixd@gmail.com"
                className="px-8 py-3 glass rounded-lg font-medium transition-all hover:glass-strong"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
