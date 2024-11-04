/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap', // Путь к вашему API-генератору sitemap
      },
    ];
  },
};

export default nextConfig;
