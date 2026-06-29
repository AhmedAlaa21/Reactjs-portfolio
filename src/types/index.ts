export interface Skill {
  id: number;
  title: string;
  level?: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  employmentType: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  project: string;
}

export interface Service {
  id: number;
  title: string;
  features: string[];
  isFeatured: boolean;
}

export interface FooterLink {
  id: number;
  title: string;
  link: string;
}

export interface PortfolioProject {
  id: string;
  imgPath: string;
  title: string;
  url: string;
  gitProject: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  review: string;
  imgPath: string;
}

export interface ScrollContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  scrollToSection: (index: number) => void;
}
