import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization enabled (do NOT set unoptimized: true)
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // TypeScript strict checking enforced at build time (do NOT set ignoreBuildErrors)
};

export default nextConfig;
