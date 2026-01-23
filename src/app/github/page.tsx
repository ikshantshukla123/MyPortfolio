import GitHub from "@/components/github/GitHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Activity",
  description:
    "Explore Ikshant Shukla's GitHub profile, repositories, contributions, and  projects. View latest activity and coding statistics.",
  openGraph: {
    title: "GitHub Activity | Ikshant Shukla",
    description:
      "Explore my GitHub profile, repositories, contributions, and open source projects.",
    url: "https://ikshantshukla123/github",
  },
  twitter: {
    title: "GitHub Activity | Ikshant Shukla",
    description:
      "Explore my GitHub profile, repositories, contributions, and open source projects.",
  },
};

export default function GitHubPage() {
  return <GitHub />;
}
