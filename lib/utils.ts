import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo?: string;
  github?: string;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export async function getPersonalInfo() {
  const response = await fetch('/data/personal-info.json');
  return response.json();
}