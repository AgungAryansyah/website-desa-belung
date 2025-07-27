/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: '*.pocketbase.io',
        pathname: '/api/files/**',
      },
      // Add your production PocketBase domain here when deploying
      // {
      //   protocol: 'https',
      //   hostname: 'your-pocketbase-domain.com',
      //   pathname: '/api/files/**',
      // },
    ],
  },
};

export default nextConfig;
