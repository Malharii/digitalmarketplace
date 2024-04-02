/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
      //   {
      //     protocol: "http",
      //     hostname: "digitalhippo-production.up.railway.app",
      //   },
    ],
  },
};

export default nextConfig;
