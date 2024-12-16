/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [process.env.DIRECTUS_URL],
    dangerouslyAllowSVG: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
