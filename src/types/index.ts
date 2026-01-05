// src/types/index.ts

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    gpa: string;
    description?: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    duration: string;
    highlights: string[];
    categories?: {
      title: string;
      points: string[];
    }[];
  }
  
  export interface Skill {
    name: string;
    level: number; // 0-100
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  
  export interface Project {
    title: string;
    headline: string;
    description: string;
    techStack: {
      name: string;
      description: string;
    }[];
    pipeline: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
  }
  
  export interface Certification {
    name: string;
    issuer: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }
  
  export interface PortfolioData {
    personal: {
      name: string;
      title: string;
      tagline: string;
      about: string;
      location: string;
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
    education: Education[];
    experience: Experience[];
    skills: SkillCategory[];
    projects: Project[];
    certifications: Certification[];
    competencies: {
      title: string;
      items: string[];
    }[];
  }