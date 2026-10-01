import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
    workerThreads: false,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
