/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.manieredevoir.com",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mwhwear.com",
      },
    ],
  },
};

export default nextConfig;
