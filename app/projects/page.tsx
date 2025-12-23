'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Search, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [allTechs, setAllTechs] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);

        const techs = new Set<string>();
        data.forEach((project: any) => {
          project.frontMatter.tech.forEach((tech: string) => techs.add(tech));
        });
        setAllTechs(Array.from(techs).sort());
      });
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.frontMatter.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.frontMatter.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTech) {
      filtered = filtered.filter((project) =>
        project.frontMatter.tech.includes(selectedTech)
      );
    }

    setFilteredProjects(filtered);
  }, [searchQuery, selectedTech, projects]);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">All Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of research, innovation, and real-world
            impact through code
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Filter by tech:</span>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedTech === null
                  ? 'bg-primary text-primary-foreground'
                  : 'glass hover:glass-strong'
              }`}
            >
              All
            </button>
            {allTechs.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selectedTech === tech
                    ? 'bg-primary text-primary-foreground'
                    : 'glass hover:glass-strong'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
}
