import Home from "@/components/home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Ikshant Shukla's portfolio. Full Stack Developer passionate about building scalable web applications, contributing to open source, and solving complex problems with code.",
  openGraph: {
    title: "Ikshant Shukla | Full Stack Developer",
    description:
      "Welcome to my portfolio. Explore my projects, skills, and journey as a Full Stack Developer.",
    url: "https://ikshant.me",
  },
  twitter: {
    title: "Ikshant Shukla | Full Stack Developer",
    description:
      "Welcome to my portfolio. Explore my projects, skills, and journey as a Full Stack Developer.",
  },
};

export default function HomePage() {
  return <Home />;
}
