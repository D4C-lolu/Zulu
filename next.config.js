/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["press.hulu.com", "image.tmdb.org"],
  },
  env: {
    API_KEY: "5fb81a5891f13b075e68eba05002e0bf",
  },
};

module.exports = nextConfig;
