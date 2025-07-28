/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/ios',
        destination: 'https://apps.apple.com/us/app/learn-creole-with-jorge/id6745862015',
        permanent: true,
      },
      {
        source: '/android',
        destination: 'https://play.google.com/store/apps/details?id=com.dalvindigital.jorgejourney&pli=1',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
