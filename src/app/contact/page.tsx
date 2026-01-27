import React from "react";
import type { Metadata } from "next";
import StructuredData from "@/components/shared/StructuredData";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ikshant Shukla - Full Stack Developer available for freelance work. Contact via email, LinkedIn, Twitter, or WhatsApp for web development projects and collaborations.",
  openGraph: {
    title: "Contact Ikshant Shukla | Full Stack Developer",
    description:
      "Available for freelance work. Reach out for full-stack development, API development, and technical consulting.",
  },
  twitter: {
    title: "Contact Ikshant Shukla | Full Stack Developer",
    description:
      "Available for freelance work. Reach out for full-stack development, API development, and technical consulting.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ikshant Shukla",
  description:
    "Contact page for Ikshant Shukla - Full Stack Developer available for freelance work and collaborations.",
  mainEntity: {
    "@type": "Person",
    name: "Ikshant Shukla",
    jobTitle: "Full Stack Developer",
    email: "ikshankshukla44@gmail.com",
    url: "https://",
    sameAs: [
      "https://github.com/ikshantshukla123",
      "https://www.linkedin.com/in/ikshant-shukla-097771327",
      "https://twitter.com/ish_nk",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8109537034",
      contactType: "freelance work",
      availableLanguage: ["English", "Hindi"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactSchema} />
      <Contact />
    </>
  );
}
