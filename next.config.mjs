/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
};

export default nextConfig;
