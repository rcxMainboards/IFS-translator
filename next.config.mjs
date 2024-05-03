/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    // ... rest of the configuration.
  },
};

export default nextConfig;
