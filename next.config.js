

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
          {
            protocol: 'https',
            hostname: 'bpi-events-uploads.s3.af-south-1.amazonaws.com',
            port: '',
          },
        ],
      },
      // Conference presentations used to be served from a per-year folder at the
      // web root while that year was current, then copied under Past-Presentations
      // when it rolled over. Every year now lives under Past-Presentations/<year>/,
      // so these keep the previously published PDF links alive.
      async redirects() {
        return [
          {
            source: '/2024-Presentations/:file',
            destination: '/Past-Presentations/2024/:file',
            permanent: true,
          },
          {
            source: '/2025-Presentations/:file',
            destination: '/Past-Presentations/2025/:file',
            permanent: true,
          },
        ];
      },
    };
    
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    })
module.exports = withBundleAnalyzer(nextConfig);
