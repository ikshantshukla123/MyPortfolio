import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiGo,
  SiAngular,
  SiPostgresql,
  SiMysql,
  SiSpotify,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsTwitter,
  BsFillPersonVcardFill,
  BsGit,
  BsCalendar3,
} from "react-icons/bs";
import { IconType } from "react-icons";

interface IconData {
  icon: IconType;
  size: string;
}

interface SkillCategory {
  category: string;
  icons: IconData[];
}

interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

interface NavLink {
  href: string;
  icon: IconType;
  label: string;
}

interface Project {
  name: string;
  achievements: string[];
}

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  projects: Project[];
}

interface OpenSourceContribution {
  role: string;
  organization: string;
  organizationUrl: string;
  period: string;
  achievements: string[];
}

interface ProjectData {
  name: string;
  tag?: string;
  duration?: string;
  liveLink?: string;
  githubLink: string;
  description: string[];
  category: string;
  techStack: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    icons: [
      { icon: TbBrandCpp, size: "w-5 h-5" },
      { icon: SiJavascript, size: "w-5 h-5" },
      { icon: SiTypescript, size: "w-5 h-5" },
     
      { icon: TbSql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    icons: [
      { icon: SiTailwindcss, size: "w-5 h-5" },
      { icon: FaReact, size: "w-5 h-5" },
     
      { icon: TbBrandNextjs, size: "w-5 h-5" },
      { icon: FaNodeJs, size: "w-5 h-5" },
      { icon: SiExpress, size: "w-5 h-5" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { icon: SiMongodb, size: "w-5 h-5" },
      { icon: SiPostgresql, size: "w-5 h-5" },
      { icon: SiMysql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Tools/Technologies",
    icons: [
      { icon: SiPostman, size: "w-5 h-5" },
      { icon: SiFirebase, size: "w-5 h-5" },
      { icon: BsGit, size: "w-5 h-5" },
     
    ],
  },
];

export const resumeLink = "/resume.pdf";

export const socialLinks: SocialLink[] = [
  { href: "https://twitter.com/ish_nk", icon: BsTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/ish_nk/",
    icon: AiFillInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ikshant-shukla-097771327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/ikshantshukla123", icon: AiFillGithub, label: "GitHub" },
  {
    href: "mailto:ikshankshukla44@gmail.com",
    icon: AiFillMail,
    label: "Email",
  },
];

export const navLinks: NavLink[] = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
  { href: "/spotify", icon: SiSpotify, label: "Spotify" },
  { href: "/calendar", icon: BsCalendar3, label: "Schedule" },
];

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Xipper",
    companyUrl: "https://www.linkedin.com/company/xipper",
    period: "Sept 2024 - Nov 2024",
    projects: [
      {
        name: "Hotel Booking Platform MVP",
        achievements: [
          "**Designed and developed the MVP** of Xipper, a **hotel booking and management web & mobile platform**, implementing core backend features using **Node.js** and **Express.js**.",
          "Built and exposed **RESTful APIs** for key functionalities such as room booking, availability management, and user authentication, ensuring **reliability and scalability**.",
          "Collaborated with frontend developers using **React.js** to deliver a seamless and responsive **user experience** across web and mobile.",
        ],
      },
    ],
  },
  {
    role: "Fullstack Engineer (started as Intern)",
    company: "Experiment Labs",
    companyUrl: "https://www.linkedin.com/company/experiment-labs",
    period: "Nov 2024 - Present",
    projects: [
      {
        name: "Learning Management System (LMS)",
        achievements: [
          "**Engineered end-to-end payment and enrollment reliability** by redesigning **Razorpay API flows** with retry logic, fallback mechanisms, and automated cron-based reconciliation, ensuring **seamless course enrollment at scale**.",
          "**Migrated platform infrastructure** from **AWS Lambda to EC2**, eliminating timeout errors across all long-running operations, improving **overall system stability and scalability**.",
          "**Developed analytics email service** with scheduled cron jobs to deliver periodic usage insights to client organisations, enhancing **customer engagement**.",
        ],
      },
      {
        name: "Internship Portal (Built from scratch)",
        achievements: [
          "**Architected and developed a multi-tenant internship platform** with **Role-Based Access Control (RBAC)** supporting two organization types—**Internship Providers** (companies) and **Consumers** (schools)—ensuring **scalable onboarding and strict data isolation**.",
          "**Built and deployed full-stack application** using **Node.js, TypeScript, Express, Prisma, MongoDB, Redis, React.js, and TailwindCSS**; deployed on **Firebase/AWS EC2** achieving **100% Best Practices, 94% Accessibility** on Lighthouse.",
        ],
      },
      {
        name: "Customer Relationship Management (CRM)",
        achievements: [
          "**Built AI-powered activity recommendation feature** using **OpenAI API** to generate personalised suggestions for students based on their profiles, becoming a **major revenue stream** for the platform.",
          "**Designed and implemented a Calendar Module** for student-admin meetings (similar to **Calendly**), enabling slot requests, rescheduling, and video integration with **Zoom and Google Meet**.",
        ],
      },
    ],
  },
];

export const openSourceContributions: OpenSourceContribution[] = [

];

export const projectsData: ProjectData[] = [
  

  {
    name: "CodeDiff AI — Economic Security Engine",
    tag: "Flagship",
    duration: "Ongoing",
    liveLink: "https://codediffai.vercel.app", // add if you have
    githubLink: "https://github.com/ikshantshukla123/codediff-ai", 
    description: [
      "Built an **intelligent security pipeline** that translates vulnerabilities into **financial risk** (e.g., **GDPR fines, fraud liability**) instead of only developer-style lint errors.",
      "Implemented **Multi-Model AI Orchestrator** (DeepSeek/Groq for syntax + Gemini for risk context + HuggingFace for intent classification) to audit PRs with higher precision.",
      "Added **Interactive Attack Simulation (Neural Terminal)** that generates a deterministic exploit replay so developers can visually understand the bug impact.",
      "Created **Zero-Trust Math Layer** using **Luhn validation** to suppress false positives for PCI checks and prevent AI hallucination.",
      "Designed **event-driven architecture with Inngest** for reliable PR processing: <100ms webhook response, retries, idempotency, and parallel execution.",
    ],
    category: "Full-Stack + Security",
    techStack:
      "Next.js 14, TypeScript, Prisma, PostgreSQL (Neon), Inngest, Clerk, Gemini, OpenRouter (DeepSeek), HuggingFace, Recharts",
  },

  {
    name: "CodeSensei — AI Security Learning Platform",
    tag: "Flagship",
    duration: "Ongoing",
    liveLink: "https://codesensei-kappa.vercel.app/",
    githubLink: "https://github.com/ikshantshukla123/codesensei",
    description: [
      "Built a **security education platform** that teaches students using **real PR vulnerabilities**, not textbook theory.",
      "Implemented **GitHub App PR analysis** with Inngest background jobs to avoid webhook timeout failures and guarantee reliability.",
      "Created **AI Professor Mode** to generate structured lessons (Concept → Code Anatomy → Real breach example → Fix) with retry logic.",
      "Added gamification via **Career Wallet system** (coins, streaks, atomic transactions) and **competitive leaderboards**.",
      "Designed a modern dashboard experience with **scroll-spy lesson navigation** and interactive vulnerability summaries.",
    ],
    category: "Full-Stack Development",
    techStack:
      "Next.js 16, TypeScript, TailwindCSS, Prisma, PostgreSQL (Neon), Clerk, Inngest, Octokit/GitHub App, Gemini, OpenRouter (DeepSeek)",
  },

  {
    name: "T-Shirt Store + Admin Dashboard (E-commerce SaaS)",
    tag: "",
    duration: "Completed",
    liveLink: "https://tshirt-five-lovat.vercel.app",
    githubLink: "https://github.com/ikshantshukla123/logo",
    description: [
      "Developed a full-stack **e-commerce platform** with **storefront + protected admin dashboard** for products, orders, users, and analytics.",
      "Implemented **JWT-based authentication** with secure admin-only routes and role-based access.",
      "Built product management with CRUD + media upload using **UploadThing** and optimized image delivery using **ImageKit**.",
      "Used **Prisma + Neon PostgreSQL** with clean schema design and type-safe data fetching utilities.",
      "Optimized rendering using **ISR + SSR + CSR** strategy for performance and scalability.",
    ],
    category: "Full-Stack Development",
    techStack:
      "Next.js 16, TypeScript, TailwindCSS, Prisma, Neon PostgreSQL, JWT Auth, UploadThing, ImageKit, Zustand, React Hook Form + Zod",
  },

  {
    name: "Hamper Heaven — Full-Stack Gifting Platform",
    tag: "",
    duration: "Completed",
    liveLink: "https://haven-snowy.vercel.app",
    githubLink: "https://github.com/ikshantshukla123/Haven", 
    description: [
      "Built a modern full-stack gifting platform where users can browse and order curated/custom hampers **without login**.",
      "Designed an **admin-only panel** for managing products, orders, and custom requests with Cloudinary image upload.",
      "Implemented smooth UI/UX using **Tailwind + Framer Motion**, responsive layout, and animated sections.",
      "Created a REST API backend with **Node.js + Express + MongoDB** for product + order flows.",
    ],
    category: "Full-Stack Development",
    techStack:
      "React (Vite), TailwindCSS, Framer Motion, React Router, Node.js, Express, MongoDB (Mongoose), Cloudinary",
  },

  {
    name: "Stablecoin Protocol — DeFi (Solidity)",
    tag: "",
    duration: "Completed",
    liveLink: "", // optional
    githubLink: "https://github.com/ikshantshukla123/Stablecoin-protocol", // paste repo link here
    description: [
      "Built a decentralized **vault-based stablecoin protocol** where users deposit collateral and mint a USD-pegged stablecoin.",
      "Implemented core smart contract logic in **Solidity** with safe patterns and reusable components from OpenZeppelin.",
      "Wrote automated tests using **Foundry** and achieved around **70% test coverage**.",
    ],
    category: "Blockchain / Smart Contracts",
    techStack: "Solidity, Foundry (Forge/Cast/Anvil), OpenZeppelin",
  },

];

