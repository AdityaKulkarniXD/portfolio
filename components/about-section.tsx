"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInAnimationVariants, TimelineItem } from "@/lib/utils";
import { Download, Clock, Briefcase, GraduationCap } from "lucide-react";

const experienceItems: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "Research Intern",
    description: "Research on Improving Rag Accuracy.",
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    year: "2022 - 2026",
    title: "Full Stack Developer",
    description: "Built full-stack applications with modern JavaScript technologies and cloud infrastructure.",
    tags: ["Node.js", "React", "AWS"]
  },
  {
    year: "2018 - 2020",
    title: "UI/UX Designer & Developer",
    description: "Designed and implemented user interfaces for web and mobile applications.",
    tags: ["UI/UX", "Figma", "React Native"]
  }
];

const educationItems: TimelineItem[] = [
  {
    year: "2022 - 2026",
    title: "Bachelors's in Computer Science",
    description: "Focused on human-computer interaction and artificial intelligence.",
    tags: ["Anurag University"]
  },

];

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Technologies", value: "20+" },
    { label: "Satisfied Clients", value: "15+" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my experience, skills, and background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="mb-4 text-muted-foreground">
              I'm a passionate full-stack developer and UI enthusiast with over 5 years of experience crafting beautiful and functional digital experiences.
            </p>
            <p className="mb-8 text-muted-foreground">
              My approach combines technical excellence with creative problem-solving. I thrive in collaborative environments where I can turn complex challenges into elegant solutions.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-fit">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                </div>
                <div className="space-y-6">
                  {experienceItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-6">
                  {educationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500 dark:border-l-blue-400 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{item.year}</span>
        </div>
        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}