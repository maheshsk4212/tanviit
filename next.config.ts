import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every quality the site asks for. Next.js 16 serves only the values
    // listed here; anything else is rounded to 75 and logged as a warning.
    qualities: [75, 85, 88, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
