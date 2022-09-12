/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
};

module.exports = nextConfig;
