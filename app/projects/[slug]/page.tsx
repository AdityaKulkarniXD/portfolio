import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Github, ExternalLink, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.frontMatter.title} - Aditya Kulkarni`,
    description: project.frontMatter.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { frontMatter, content } = project;

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <article className="space-y-8">
          <header className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {frontMatter.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {frontMatter.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {frontMatter.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={frontMatter.date}>
                  {new Date(frontMatter.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>

              {frontMatter.github && (
                <a
                  href={frontMatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium hover:glass-strong transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}

              {frontMatter.live && (
                <a
                  href={frontMatter.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          <div className="glass rounded-xl p-8 md:p-12">
            {await MarkdownRenderer({ content })}
          </div>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:glass-strong transition-all"
          >
            Explore More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
