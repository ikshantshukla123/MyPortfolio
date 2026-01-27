import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons";

export interface ContactButton {
  name: string;
  icon: IconType;
  href: string;
  color: string;
  hoverColor: string;
  description: string;
}

export const contactButtons: ContactButton[] = [
  {
    name: "Email",
    icon: SiGmail,
    href: "mailto:ikshankshukla44@gmail.com",
    color: "bg-red-500/10 border-red-500/20",
    hoverColor: "hover:bg-red-500/20 hover:border-red-500/40",
    description: "Drop me an email anytime",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/ikshant-shukla-097771327",
    color: "bg-blue-500/10 border-blue-500/20",
    hoverColor: "hover:bg-blue-500/20 hover:border-blue-500/40",
    description: "Let's connect professionally",
  },
  {
    name: "Twitter",
    icon: BsTwitter,
    href: "https://twitter.com/ish_nk",
    color: "bg-sky-500/10 border-sky-500/20",
    hoverColor: "hover:bg-sky-500/20 hover:border-sky-500/40",
    description: "Follow me for tech updates",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: "https://wa.me/918799373476",
    color: "bg-green-500/10 border-green-500/20",
    hoverColor: "hover:bg-green-500/20 hover:border-green-500/40",
    description: "Quick chat on WhatsApp",
  },
];

export const services = [
  "Full-Stack Web Application Development",
  "RESTful API Design & Development",
  "Database Design & Optimization",
  "Technical Consulting & Code Reviews",
  "Performance Optimization & Scalability",
];
