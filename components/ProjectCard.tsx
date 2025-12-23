'use client';

import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/markdown';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontMatter } = project;

  return (
    <div className="group glass rounded-xl p-6 h-full transition-all duration-300 hover:glass-strong hover:scale-[1.02] hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {frontMatter.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {frontMatter.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {frontMatter.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {frontMatter.tech.length > 4 && (
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              +{frontMatter.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {frontMatter.github && (
              <a
                href={frontMatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {frontMatter.live && (
              <a
                href={frontMatter.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${slug}`}
            className="flex items-center text-sm text-primary group-hover:gap-2 transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
