import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Lightbulb,
  Trophy,
} from 'lucide-react';

export const metadata = {
  title: 'About - Aditya Kulkarni',
  description:
    'Learn more about Aditya Kulkarni, a research-focused software engineer specializing in Machine Learning and full-stack development.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Aditya Kulkarni"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through research, innovation, and building impactful
            solutions
          </p>
        </div>

        <div className="space-y-12">
          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Overview
            </h2>
            <div className="space-y-4 text-muted-foreground leading-7">
              <p>
                I'm a research-focused software engineer currently pursuing my
                B.Tech in Computer Science and Engineering at Anurag University,
                Hyderabad. My passion lies at the intersection of theoretical
                research and practical implementation, particularly in the fields
                of Machine Learning, Retrieval-Augmented Generation (RAG), and
                full-stack development.
              </p>
              <p>
                My work has been recognized through a patent application for
                AINEXA, an innovative career guidance platform, and I've had the
                privilege of contributing to research at DRDO (Defense Research
                and Development Organization) in the areas of pattern recognition
                and LLM-based intelligent systems.
              </p>
            </div>
          </section>

          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Research Intern
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    May 2025 - Jun 2025
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Defense Research and Development Organization (DRDO)
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Analyzed defense datasets using pattern recognition
                    techniques for intelligent systems
                  </li>
                  <li>
                    • Evaluated LLM-based approaches for surveillance, anomaly
                    detection, and predictive threat analysis
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary/50 pl-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Research Intern
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Dec 2024 - Jul 2025
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">
                  Anurag University
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Conducted applied research on Retrieval-Augmented
                    Generation (RAG) pipelines
                  </li>
                  <li>
                    • Improved pipeline accuracy and retrieval efficiency through
                    experimental iterations
                  </li>
                  <li>
                    • Supported data preprocessing, model training, and
                    performance evaluation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Aug 2022 - Present
                  </span>
                </div>
                <p className="text-primary font-medium">Anurag University</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hyderabad, India
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Intermediate
                </h3>
                <p className="text-primary font-medium">
                  Vijaya Ratna Junior College
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hyderabad, India • Jun 2019 - Mar 2021
                </p>
              </div>
            </div>
          </section>

          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Patent
            </h2>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                AINEXA - Career Guidance Platform
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Indian Patent Application No. 202541070214 A • Published Jul 2025
              </p>
              <p className="text-sm text-muted-foreground leading-7">
                Invented an end-to-end career guidance and skill assessment system
                integrating aptitude testing, personalized learning paths,
                mentorship scheduling, reward-based engagement, and verified job
                workflows. Designed a modular and secure multi-module system
                architecture.
              </p>
            </div>
          </section>

          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Achievements
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  1st Place Wins
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Microsoft HackXcelerate (Rs. 1.5L)</li>
                  <li>• TechXcelerate (Rs. 25K)</li>
                  <li>• Sudhee Hackathon (Rs. 10K)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  2nd Place Wins
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IIT-H Ideathon (Rs. 7K)</li>
                  <li>• Spark Ideathon</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  3rd Place Wins
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BITS Goa Hackathon (Rs. 20K)</li>
                  <li>• Incube Business Sprint (Rs. 1K)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'SQL'].map(
                    (lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                      >
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'MERN Stack',
                    'Streamlit',
                    'FastAPI',
                    'HTML',
                    'CSS',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Machine Learning', 'RAG', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures',
                    'Algorithms',
                    'Software Design',
                    'Code Optimization',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
