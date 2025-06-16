"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechIcon } from '@/components/tech-icon';

const skills = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Git', icon: 'git' },
  { name: 'Jest', icon: 'jest' },
  { name: 'Cypress', icon: 'cypress' },
  { name: 'Prisma', icon: 'prisma' }
];

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led development of a microservices architecture serving 1M+ users',
      'Mentored junior developers and established coding standards',
      'Improved application performance by 40% through optimization',
      'Collaborated with design team to implement pixel-perfect UIs'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    location: 'Remote',
    description: [
      'Built responsive web applications using React and Node.js',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Worked closely with product team to define feature requirements',
      'Maintained 99.9% uptime for production applications'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency Pro',
    period: '2019 - 2020',
    location: 'New York, NY',
    description: [
      'Developed custom WordPress themes and plugins',
      'Created interactive web experiences using vanilla JavaScript',
      'Optimized websites for SEO and performance',
      'Managed multiple client projects simultaneously'
    ]
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: '2017 - 2019',
    location: 'Stanford, CA',
    description: 'Specialized in Web Technologies and Human-Computer Interaction'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'UC Berkeley',
    period: '2013 - 2017',
    location: 'Berkeley, CA',
    description: 'Graduated Magna Cum Laude with focus on Full Stack Development'
  }
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional Developer',
  'MongoDB Certified Developer',
  'Certified Kubernetes Administrator'
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full stack developer with over 5 years of experience 
            creating digital solutions that make a difference. I love turning complex 
            problems into simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    My journey into web development started during my college years when I 
                    built my first website for a local business. The excitement of seeing 
                    code come to life in the browser and solving real-world problems through 
                    technology hooked me immediately.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with startups and 
                    established companies, helping them build scalable web applications 
                    that serve millions of users. I believe in writing clean, maintainable 
                    code and creating user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or sharing knowledge with the 
                    developer community through blog posts and speaking at conferences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 pb-6 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 pb-6 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="font-medium text-primary">{edu.school}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <TechIcon name={skill.icon} className="w-8 h-8" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Fun Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">☕</span>
                      <span>Coffee enthusiast - I've tried over 50 different beans</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">🎸</span>
                      <span>Play guitar in a local band on weekends</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">🏔️</span>
                      <span>Love hiking and have climbed 15 peaks above 14,000 feet</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">📚</span>
                      <span>Read 24 books last year, mostly sci-fi and tech</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}