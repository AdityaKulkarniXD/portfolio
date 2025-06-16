"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  Tag,
  Send,
  Phone,
  User,
  Code,
  Palette,
  Rocket,
  Star,
  Zap,
  Target,
  Coffee,
  Heart
} from 'lucide-react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; 
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { TechIcon } from '@/components/tech-icon';
import { ProfilePictureUpload } from '@/components/profile-picture-upload';
import { useProfilePicture } from '@/hooks/use-profile-picture';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
}

// Define Trophy component before it's used
const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.38C20.8 4 21.13 4.42 21.01 4.83L19.31 12.83C19.22 13.21 18.88 13.5 18.5 13.5H17.5C17.5 15.71 15.71 17.5 13.5 17.5H10.5C8.29 17.5 6.5 15.71 6.5 13.5H5.5C5.12 13.5 4.78 13.21 4.69 12.83L2.99 4.83C2.87 4.42 3.2 4 3.62 4H7ZM9 3V4H15V3H9ZM5.5 11.5H6.5C6.5 10.12 7.62 9 9 9H15C16.38 9 17.5 10.12 17.5 11.5H18.5L19.5 6H4.5L5.5 11.5ZM13 20V19H11V20C11 20.55 11.45 21 12 21S13 20.55 13 20Z"/>
  </svg>
);

const skills = [
  { name: 'Go', icon: 'nodejs', level: 90 },
  { name: 'Python', icon: 'python', level: 85 },
  { name: 'TypeScript', icon: 'typescript', level: 88 },
  { name: 'JavaScript', icon: 'javascript', level: 92 },
  { name: 'React', icon: 'react', level: 90 },
  { name: 'Node.js', icon: 'nodejs', level: 85 },
  { name: 'Flutter', icon: 'react', level: 80 },
  { name: 'MongoDB', icon: 'mongodb', level: 82 },
  { name: 'PostgreSQL', icon: 'postgresql', level: 78 },
  { name: 'Docker', icon: 'docker', level: 75 },
  { name: 'AWS', icon: 'aws', level: 70 },
  { name: 'Git', icon: 'git', level: 88 }
];

const achievements = [
  {
    title: "HackXcelerate Winner",
    description: "1st place at Microsoft & ByteXL hackathon",
    prize: "₹1,50,000",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "TechXcelerate Champion",
    description: "1st place at CodeBeat, Anurag University",
    prize: "₹25,000",
    icon: Star,
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "BITS Pilani Success",
    description: "3rd place at TechXcelerate, BITS Pilani",
    prize: "₹20,000",
    icon: Award,
    color: "from-green-400 to-blue-500"
  },
  {
    title: "IIT Hyderabad Recognition",
    description: "2nd place in Ideathon",
    prize: "₹7,000",
    icon: Target,
    color: "from-purple-400 to-pink-500"
  }
];

const experience = [
  {
    title: 'Research Intern',
    company: 'Anurag University',
    period: 'December 2024 - Present',
    location: 'Hyderabad, India',
    description: [
      'Conducting research on Retrieval-Augmented Generation (RAG)',
      'Improving accuracy and efficiency of RAG pipelines',
      'Working on advanced retrieval strategies and model fine-tuning',
      'Contributing to data preprocessing and performance evaluation'
    ],
    icon: GraduationCap,
    current: true
  },
   {
    title: 'Research Intern',
    company: 'DRDO, India',
    period: 'May 2025 - Present',
    location: 'Hyderabad, India',
    description: [
      'Working on pattern recognition for defense-related data analysis',
      'Studying AI applications in surveillance and decision-making systems',
      'Exploring machine learning use cases in defense scenarios',
      'Gaining hands-on experience with signal processing and anomaly detection',
      'Applying AI for predictive threat analysis in national security contexts'
      
    ],
    icon: GraduationCap,
    current: true
  }
];

const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    school: 'Anurag University',
    period: 'August 2022 - Present',
    location: 'Hyderabad',
    gpa: '9.23 (III-I)',
    description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development and research.',
    current: true
  },
  {
    degree: 'Junior College',
    school: 'Vijaya Ratna Junior College',
    period: 'June 2019 - March 2021',
    location: 'Hyderabad',
    percentage: '91.8%',
    description: 'Completed intermediate education with excellent academic performance in science stream.'
  },
  {
    degree: 'High School',
    school: 'St. Paul\'s High School',
    period: 'June 2006 - March 2019',
    location: 'Hyderabad',
    percentage: '90.0%',
    description: 'Completed secondary education with active participation in various clubs and activities.',
    activities: ['Debate Club', 'Quiz Club', 'Cultural Club', 'IT Club']
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'aditya.kulkarnixd@gmail.com',
    href: 'mailto:aditya.kulkarnixd@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-7702722422',
    href: 'tel:+917702722422',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Hyderabad, India',
    href: 'https://maps.google.com/?q=Hyderabad,India',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/AdityaKulkarniXD',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-kulkarnixd/',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:aditya.kulkarnixd@gmail.com',
  },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const { profileImage, updateProfileImage } = useProfilePicture();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto mb-8 flex justify-center"
              >
                <ProfilePictureUpload
                  currentImage={profileImage}
                  onImageChange={updateProfileImage}
                  className="w-32 h-32"
                />
              </motion.div>

              <div className="relative">
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="block text-gray-800 dark:text-white">Hello, I'm</span>
                  <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Aditya Kulkarni
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-muted-foreground mb-8"
                >
                  <Code className="w-6 h-6" />
                  <span>Full-Stack Developer</span>
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <span>Hackathon Winner</span>
                  <Heart className="w-6 h-6 text-red-500" />
                </motion.div>
              </div>

              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Passionate about creating innovative solutions and winning hackathons. 
                Currently researching RAG systems while building the future of technology.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="group text-lg px-8 py-6 btn-smooth"
                onClick={() => scrollToSection('projects')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 rounded-2xl"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex justify-center space-x-6 pt-8"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="lg" asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-container p-4"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Code className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Rocket className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                🏆 Hackathon Champion
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven track record of winning major hackathons and competitions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="achievement-card h-full p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <div className={`badge-smooth bg-gradient-to-r ${achievement.color} text-white border-none`}>
                      {achievement.prize}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Interactive Elements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                💻 Technical Arsenal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies I use to build amazing solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group"
                >
                  <div className="card-smooth p-6 text-center h-full">
                    <div className="flex flex-col items-center space-y-3">
                      <TechIcon name={skill.icon} className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-sm">{skill.name}</h3>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/50 dark:to-indigo-950/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 mb-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                🚀 Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Innovative solutions built with cutting-edge technologies
              </p>
            </div>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="card-smooth h-80 p-6">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="card-smooth h-full flex flex-col p-6 group overflow-hidden">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-3 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(project.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <div key={tag} className="badge-smooth">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </div>
                        ))}
                        {project.tags.length > 3 && (
                          <div className="badge-smooth">
                            +{project.tags.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      {project.github && (
                        <Button size="sm" variant="outline" asChild className="btn-smooth">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button size="sm" variant="outline" asChild className="btn-smooth">
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline" className="btn-smooth">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 mb-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                🎓 Experience & Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My journey in technology and research
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-smooth h-full p-6">
                <div className="flex items-center text-2xl mb-6">
                  <Briefcase className="h-6 w-6 mr-3 text-blue-500" />
                  Experience
                </div>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6 last:pb-0 relative">
                      {exp.current && (
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                      )}
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
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-smooth h-full p-6">
                <div className="flex items-center text-2xl mb-6">
                  <GraduationCap className="h-6 w-6 mr-3 text-purple-500" />
                  Education
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-6 pb-6 last:pb-0 relative">
                      {edu.current && (
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                      )}
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
                      <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {edu.gpa && (
                          <div className="badge-smooth bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            CGPA: {edu.gpa}
                          </div>
                        )}
                        {edu.percentage && (
                          <div className="badge-smooth bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            {edu.percentage}
                          </div>
                        )}
                        {edu.current && (
                          <div className="badge-smooth">Current</div>
                        )}
                      </div>
                      {edu.activities && (
                        <div className="mt-3">
                          <p className="text-xs text-muted-foreground mb-2">Activities:</p>
                          <div className="flex flex-wrap gap-1">
                            {edu.activities.map((activity, i) => (
                              <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12 mb-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                📬 Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ready to collaborate on your next big idea? Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-smooth h-full p-6">
                <div className="flex items-center text-2xl mb-6">
                  <Send className="h-6 w-6 mr-3 text-indigo-500" />
                  Send me a message
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register('name')}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register('email')}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...register('subject')}
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-smooth" 
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-smooth p-6">
                <div className="flex items-center text-2xl mb-6">
                  <User className="h-6 w-6 mr-3 text-purple-500" />
                  Contact Information
                </div>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900 dark:hover:to-pink-900 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="icon-container p-3">
                        <item.icon className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="card-smooth p-6">
                <div className="flex items-center text-2xl mb-4">
                  <Coffee className="h-6 w-6 mr-3 text-blue-500" />
                  Let's grab coffee!
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or just chat about the latest in tech. Let's connect!
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="icon-container"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white border-none overflow-hidden relative rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to build something amazing?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  Let's turn your ideas into reality. Whether it's a hackathon, startup, or enterprise project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('contact')}
                    className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 rounded-2xl"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 rounded-2xl">
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}