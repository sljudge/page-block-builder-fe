/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN],
    dangerouslyAllowSVG: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
