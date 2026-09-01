import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Demo/registry components hotlink a wide variety of external image
    // hosts (unsplash, placeholder services, etc.), so the wildcard stays,
    // but breakpoint variety and cache lifetime are tightened to cut down
    // on repeated transformations of the same source image.
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [256, 384, 512, 640],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
