const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'cdn-icons-png.flaticon.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/breakpoints.scss";`
  }
}

module.exports = nextConfig
