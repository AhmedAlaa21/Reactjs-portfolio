import type {
  Education,
  FooterLink,
  PortfolioProject,
  Service,
  SkillCategory,
  Testimonial,
  WorkExperience,
} from "./types";

import IMG1 from "./assets/5.png";
import IMG2 from "./assets/2.png";
import IMG3 from "./assets/3.png";
import IMG4 from "./assets/4.png";
import IMG5 from "./assets/1.png";
import IMG6 from "./assets/6.png";
import IMG7 from "./assets/7.png";
import IMG8 from "./assets/8.png";
import IMG9 from "./assets/hbplus.png";
import IMG10 from "./assets/qmedia.png";
import IMG11 from "./assets/xcodes.png";
import IMG12 from "./assets/tadarab.png";
import AVTR_GHAZI from "./assets/ghazi.png";
import AVTR_ALI from "./assets/ali-elzayat.png";
import AVTR_AHMED from "./assets/ahmed-mohamed.png";
import AVTR_MAZEN from "./assets/mazen.png";

export const profileSummary =
  "Frontend Engineer with 5+ years of experience building and shipping production-scale web and mobile applications across edtech, IPTV, e-commerce, and logistics domains. Deep expertise in React.js, Next.js, TypeScript, and React Native, with a strong track record of improving Core Web Vitals, reducing bundle sizes, and leading cross-functional delivery as a technical lead.";

export const workExperience: WorkExperience[] = [
  {
    id: 0,
    company: "XCodes",
    role: "Frontend Engineer",
    employmentType: "Full-time, Remote",
    location: "Ajman, UAE",
    period: "Nov 2025 – Present",
    highlights: [
      "Architected and deployed IPTV web applications on Tizen OS, establishing the component library and build pipeline used across all subsequent smart-TV projects.",
      "Delivered 4+ outsourced admin dashboards and marketing websites end-to-end, reducing post-launch bug reports by 35% through stricter code-review gates.",
      "Introduced performance budgets and lazy-loading strategies that improved Lighthouse scores from an average of 84 to 96 across client projects.",
    ],
  },
  {
    id: 1,
    company: "Tadarab",
    role: "Frontend Engineer",
    employmentType: "Full-time, Hybrid",
    location: "Kuwait City, Kuwait",
    period: "Oct 2023 – Nov 2025",
    highlights: [
      "Led frontend development of three flagship products — Live Tadarab (Next.js), Trainer Dashboard (React.js), and Tadarab for Business — collectively serving 50,000+ active users.",
      "Improved SEO ranking for Live Tadarab by implementing SSR, structured data, and meta-tag strategies, driving a 28% increase in organic traffic over six months.",
      "Reduced average page load time by 40% through code-splitting, image optimisation, and memoisation of expensive render paths.",
    ],
  },
  {
    id: 2,
    company: "GuestNa",
    role: "Frontend Engineer",
    employmentType: "Part-time, Remote",
    location: "Riyadh, Saudi Arabia",
    period: "Nov 2023 – Nov 2025",
    highlights: [
      "Built and maintained a cross-platform React Native e-commerce trip-booking app, successfully shipping releases to the Apple App Store and Google Play Store.",
      "Designed scalable booking-flow architecture with offline-first state management, reducing checkout abandonment by 22% on low-connectivity mobile networks.",
      "Collaborated directly with product and backend teams in Agile sprints, cutting average feature-delivery cycle from 3 weeks to 10 days.",
    ],
  },
  {
    id: 3,
    company: "XCodes",
    role: "Frontend Engineer",
    employmentType: "Freelance, Remote",
    location: "Remote",
    period: "Apr 2024 – Nov 2025",
    highlights: [
      "Delivered targeted feature work and maintenance for IPTV and web projects outside the core full-time scope, maintaining zero critical regressions across all releases.",
    ],
  },
  {
    id: 4,
    company: "American Cosma",
    role: "Frontend Engineer",
    employmentType: "Freelance, Remote",
    location: "Cairo, Egypt",
    period: "Jul 2023 – Dec 2023",
    highlights: [
      "Developed a B2B e-commerce frontend in React.js, delivering a scalable product-catalogue and order-management interface adopted by 12 business clients at launch.",
      "Built a real-time logistics dashboard integrating REST APIs and WebSocket feeds to surface live fleet status to operations managers.",
    ],
  },
  {
    id: 5,
    company: "DigiMile",
    role: "Frontend React Developer",
    employmentType: "Freelance, Remote",
    location: "Giza, Egypt",
    period: "Feb 2023 – Dec 2023",
    highlights: [
      "Built and maintained responsive React.js web applications for multiple client accounts with consistent cross-browser compatibility.",
      "Integrated RESTful APIs to power dynamic data visualisations, reducing manual reporting effort for clients by an estimated 6 hours/week.",
    ],
  },
  {
    id: 6,
    company: "Badgewell",
    role: "Frontend Engineer",
    employmentType: "Full-time, Hybrid",
    location: "Giza, Egypt",
    period: "Feb 2021 – Jul 2023",
    highlights: [
      "Owned the React Native mobile app front-end for a coaching and badging platform, pioneering progress-tracking modules adopted by 3,000+ learners.",
      "Optimised bi-directional data sync between the mobile app and web dashboard, reducing state inconsistency bugs by 60%.",
      "Mentored 2 junior developers on React hooks, Redux patterns, and code-review standards, accelerating their onboarding by 4 weeks.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 0,
    title: "Frameworks & Libraries",
    skills: [
      { id: 0, title: "React.js" },
      { id: 1, title: "Next.js" },
      { id: 2, title: "React Native" },
      { id: 3, title: "Redux Toolkit" },
      { id: 4, title: "TanStack Query" },
      { id: 5, title: "React Hooks" },
    ],
  },
  {
    id: 1,
    title: "Languages",
    skills: [
      { id: 0, title: "TypeScript" },
      { id: 1, title: "JavaScript (ES6+)" },
      { id: 2, title: "HTML5" },
      { id: 3, title: "CSS3" },
      { id: 4, title: "Sass" },
    ],
  },
  {
    id: 2,
    title: "Styling",
    skills: [
      { id: 0, title: "Tailwind CSS" },
      { id: 1, title: "CSS Modules" },
      { id: 2, title: "Styled Components" },
      { id: 3, title: "Sass" },
    ],
  },
  {
    id: 3,
    title: "Tooling & Platforms",
    skills: [
      { id: 0, title: "Git & GitHub" },
      { id: 1, title: "RESTful APIs" },
      { id: 2, title: "WebSockets" },
      { id: 3, title: "Tizen OS (Smart TV)" },
      { id: 4, title: "Vercel & CI/CD" },
      { id: 5, title: "SEO & Core Web Vitals" },
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science — Computer Science",
  institution: "Alexandria University",
  location: "Alexandria, Egypt",
  period: "2014 – Jan 2019",
  project: "GTA Vice City clone built in C++ with OpenGL — Grade: A+",
};

export const languages = ["Arabic (Native)", "English (Professional)"];

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Frontend Engineering",
    features: [
      "Production-scale React.js & Next.js applications with TypeScript",
      "SSR, structured data, and SEO strategies for organic growth",
      "Component libraries and scalable architecture patterns",
      "Code-splitting, lazy loading, and Core Web Vitals optimisation",
      "Cross-functional delivery as a technical lead",
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Mobile & Cross-Platform",
    features: [
      "React Native apps for iOS and Android",
      "App Store and Google Play deployment",
      "Offline-first state management for unreliable networks",
      "Bi-directional sync between mobile and web dashboards",
      "Performance optimisation and release management",
    ],
    isFeatured: false,
  },
  {
    id: 3,
    title: "IPTV & Smart TV",
    features: [
      "Tizen OS web applications for smart TVs",
      "Component libraries and build pipelines for IPTV",
      "Admin dashboards and marketing websites",
      "Performance budgets and Lighthouse optimisation",
      "Client delivery with strict code-review gates",
    ],
    isFeatured: false,
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "12",
    imgPath: IMG12,
    title: "Tadarab",
    url: "https://tadarab.com/",
    gitProject: "",
  },
  {
    id: "9",
    imgPath: IMG9,
    title: "HB Plus",
    url: "https://www.hbplus.store/",
    gitProject: "",
  },
  {
    id: "10",
    imgPath: IMG10,
    title: "QMedia",
    url: "http://q-media.co/",
    gitProject: "",
  },
  {
    id: "11",
    imgPath: IMG11,
    title: "XCodes",
    url: "https://www.xcodes.store/",
    gitProject: "",
  },
  {
    id: "1",
    imgPath: IMG1,
    title: "Chatly",
    url: "https://chatly-tau.vercel.app/app",
    gitProject: "https://github.com/AhmedAlaa21/chat-app",
  },
  {
    id: "2",
    imgPath: IMG2,
    title: "Tadarab Development Path",
    url: "https://tadarab-test.vercel.app/development-path",
    gitProject: "https://github.com/AhmedAlaa21/tadarab-test",
  },
  {
    id: "3",
    imgPath: IMG3,
    title: "Beauty Essence",
    url: "https://beauty-essence.vercel.app/",
    gitProject: "https://github.com/AhmedAlaa21/beauty-essence",
  },
  {
    id: "4",
    imgPath: IMG4,
    title: "DeFi - Crypto News",
    url: "https://de-fi-phi.vercel.app/",
    gitProject: "https://github.com/AhmedAlaa21/DeFi",
  },
  {
    id: "5",
    imgPath: IMG5,
    title: "Car Hub",
    url: "https://car-hub-ruddy.vercel.app",
    gitProject: "https://github.com/AhmedAlaa21/car-hub",
  },
  {
    id: "6",
    imgPath: IMG6,
    title: "Nextjs Portfolio",
    url: "https://ahmedalaa.vercel.app/",
    gitProject: "https://github.com/AhmedAlaa21/ahmedalaa",
  },
  {
    id: "7",
    imgPath: IMG7,
    title: "Lama Store",
    url: "https://lama-psi.vercel.app/",
    gitProject: "https://github.com/AhmedAlaa21/Lama",
  },
  {
    id: "8",
    imgPath: IMG8,
    title: "Gericht | Fine Dining",
    url: "https://gericht-beta.vercel.app",
    gitProject: "https://github.com/AhmedAlaa21/Gericht",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Mohamed Ghazi",
    role: "React Native Developer",
    imgPath: AVTR_GHAZI,
    review:
      "A genuinely friendly professional and it was truly a pleasure to work with him.",
  },
  {
    id: 2,
    clientName: "Ali El-Zayat",
    role: "Senior Frontend Engineer",
    imgPath: AVTR_ALI,
    review:
      "Ahmed has been my colleague for over three years, and throughout that time he has consistently demonstrated dedication and a strong business mindset. He continuously inspires those around him by setting a high bar for how great work gets done.",
  },
  {
    id: 3,
    clientName: "Ahmed Mohamed",
    role: "Senior Unity Developer",
    imgPath: AVTR_AHMED,
    review:
      "Ahmed was part of my graduation project team, and I trusted him with the most technically challenging part of the entire project. He delivered without hesitation.",
  },
  {
    id: 4,
    clientName: "Mazen Shahin",
    role: "XCodes CEO",
    imgPath: AVTR_MAZEN,
    review:
      "I rely on Ahmed for far more than his core role. His perspective and judgment are genuinely valuable, and his input consistently shapes better decisions.",
  },
];

export const footerLinks: FooterLink[] = [
  { id: 0, title: "Home", link: "#start" },
  { id: 1, title: "About", link: "#about" },
  { id: 2, title: "Experience", link: "#exp" },
  { id: 3, title: "Services", link: "#services" },
  { id: 4, title: "Portfolio", link: "#portfolio" },
  { id: 5, title: "Contact", link: "#contact" },
];
