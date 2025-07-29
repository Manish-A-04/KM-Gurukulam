/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
   basePath: '/KM-Gurukulam',
   assetPrefix: '/KM-Gurukulam',
   trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
