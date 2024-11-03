import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.ASSETS_PROTOCOL as 'http' | 'https',
        hostname: process.env.ASSETS_HOST as string,
        port: process.env.ASSETS_PORT,
        pathname: process.env.ASSETS_PATH
      }
    ],
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
