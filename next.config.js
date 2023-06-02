/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  handleImages: ['jpeg', 'png', 'svg'],
  images: {
    unoptimized: true
  }
});

module.exports = nextConfig
