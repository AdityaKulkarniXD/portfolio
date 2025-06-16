"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, fadeInAnimationVariants } from "@/lib/utils";

const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with advanced filtering, search, user accounts, and payment processing.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  },
  {
    id: "project2",
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media profiles, with real-time data visualization and insights.",
    tags: ["React", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  },
  {
    id: "project3",
    title: "Project Management App",
    description: "A collaborative project management tool with task tracking, team management, and time logging features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    image: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  },
  {
    id: "project4",
    title: "Weather Forecast App",
    description: "A weather application with 7-day forecasts, location-based weather data, and interactive maps.",
    tags: ["React", "JavaScript", "Redux", "Weather API", "Styled Components"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  },
  {
    id: "project5",
    title: "Recipe Finder",
    description: "A recipe search application allowing users to find recipes based on ingredients they have at home.",
    tags: ["React", "Firebase", "Tailwind CSS", "RESTful API"],
    image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  },
  {
    id: "project6",
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking app with workout plans, progress tracking, and social sharing features.",
    tags: ["React Native", "TypeScript", "Redux", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demo: "https://demo-project.com",
    github: "https://github.com/username/project"
  }
];

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="Here are some of my recent work and experiments"
        />

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant={selectedTag === null ? "default" : "outline"} 
            onClick={() => setSelectedTag(null)}
            className="mb-2"
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button 
              key={tag} 
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className="mb-2"
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="font-normal">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t flex gap-2">
        {project.demo && (
          <Button variant="default" size="sm" className="gap-1 flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="h-4 w-4" /> Demo
            </a>
          </Button>
        )}
        {project.github && (
          <Button variant="outline" size="sm" className="gap-1 flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}