"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skill, fadeInAnimationVariants } from "@/lib/utils";

const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "GraphQL", level: 65, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" },
  
  // Design
  { name: "Figma", level: 80, category: "design" },
  { name: "UI/UX", level: 85, category: "design" },
  { name: "Adobe XD", level: 65, category: "design" },
  { name: "Responsive Design", level: 90, category: "design" },
  
  // Other
  { name: "Git", level: 85, category: "other" },
  { name: "Docker", level: 70, category: "other" },
  { name: "AWS", level: 65, category: "other" },
  { name: "CI/CD", level: 70, category: "other" },
  { name: "Testing", level: 75, category: "other" },
];

export function SkillsSection() {
  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "other", label: "Other" },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="A collection of technologies and tools I've worked with"
        />

        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-12 w-full sm:w-[400px] mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm sm:text-base">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6"
            >
              {skillsData
                .filter((skill) => skill.category === category.id)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ left: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="px-6 py-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}