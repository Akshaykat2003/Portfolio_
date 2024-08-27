/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["cdn.dribbble.com", "i.im.ge"],
  },
};

module.exports = nextConfig;
