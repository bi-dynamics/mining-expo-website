

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
            protocol: 'https', 
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            // pathname: '/v0/b/mining-expo-bc804.appspot.com/o/**',
          },
        ],
      },
    };
    
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })
module.exports = withBundleAnalyzer(nextConfig);
