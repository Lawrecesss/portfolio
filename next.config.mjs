/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone: a self-contained server bundle with only the
  // node_modules it actually needs. Keeps the Cloud Run image small.
  output: "standalone",
  images: {
    domains: [], // optional for external images
  },
};
export default nextConfig;
