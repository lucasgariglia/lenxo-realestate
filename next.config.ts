import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the Cloud Workstations proxy origin
  allowedDevOrigins: [
    'localhost:3000',
    '9000-firebase-test-1768332896229.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;