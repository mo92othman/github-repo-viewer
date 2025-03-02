import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cdn.pixabay.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
};

export default nextConfig;
