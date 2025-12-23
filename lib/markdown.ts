import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectFrontMatter {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  date: string;
  image?: string;
}

export interface Project {
  slug: string;
  frontMatter: ProjectFrontMatter;
  content: string;
}

export function getAllProjects(): Project[] {
  const projectsPath = path.join(contentDirectory, 'projects');

  if (!fs.existsSync(projectsPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsPath);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontMatter: data as ProjectFrontMatter,
        content,
      };
    });

  return projects.sort((a, b) =>
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontMatter: data as ProjectFrontMatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.frontMatter.featured);
}

export function getProjectsByTech(tech: string): Project[] {
  return getAllProjects().filter((project) =>
    project.frontMatter.tech.some(
      (t) => t.toLowerCase() === tech.toLowerCase()
    )
  );
}
