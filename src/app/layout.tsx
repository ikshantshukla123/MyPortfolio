import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import ErrorReporter from "@/components/ErrorReporter";
import NavigationWrapper from "@/components/layout/NavigationWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://ikshantshukla123"),
  title: {
    default: "Ikshant Shukla | Full Stack Developer",
    template: "%s | Ikshant Shukla",
  },
  description:
    "Full Stack Developer passionate about building scalable web applications and contributing to open source. Currently working as a Fullstack Engineer at Experiment Labs.",
  keywords: [
    "I Shukla",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Open Source",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Ikshant Shukla", url: "https://ikshantshukla123" }],
  creator: "Ikshant Shukla",
  publisher: "Ikshant Shukla",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://ikshantshukla123",
    siteName: "Ikshant Shukla Portfolio",
    title: "Ikshant Shukla | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ikshant Shukla - Full Stack Developer",
        type: "image/png",
      },
    ],
    profile: {
      firstName: "Ikshant",
      lastName: "Shukla",
      username: "ikshantshukla123",
      gender: "male",
    },
  } as any,
  twitter: {
    card: "summary_large_image",
    title: "Ikshant Shukla | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    creator: "@ikshantshukla123",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <NavigationWrapper>{children}
            <Analytics />
        </NavigationWrapper>
      </body>
    </html>
  );
}
