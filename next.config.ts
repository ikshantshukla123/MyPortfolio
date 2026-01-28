import type { NextConfig } from "next";

// @ts-ignore - next-pwa has no TS types
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  turbopack: {}, // disables warning & avoids conflict

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default withPWA(nextConfig);
