/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: process.env.ASSETS_PROTOCOL,
        hostname: process.env.ASSETS_HOST,
        port: process.env.ASSETS_PORT,
        pathname: process.env.ASSETS_PATH
      }
    ],
    dangerouslyAllowSVG: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  env: {
    DIRECTUS_URL: process.env.DIRECTUS_URL,
    ASSETS_URL: process.env.ASSETS_URL
  }
};

export default nextConfig;
