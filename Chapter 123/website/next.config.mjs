/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://images.pexels.com/photos/31353934/pexels-photo-31353934.jpeg"
      ),
    ],
  },
};

export default nextConfig;
