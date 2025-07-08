export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Internship {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: string;
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  credentialUrl?: string;
}

export interface Workshop {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export interface Activity {
  id: number;
  title: string;
  organization: string;
  description: string;
}