/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable minification to check if it resolves the issue
  images: {
    domains: ["cdn.dribbble.com"]
  },
  webpack: (config, { isServer }) => {
    // Example of adding custom webpack configurations or debugging options
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false
      };
    }
    return config;
  }
}

module.exports = nextConfig
