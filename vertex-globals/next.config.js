/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },

  // Image optimization
  images: {
    domains: ["localhost", "ik.imagekit.io"],
    formats: ["image/webp", "image/avif"],
  },

  // SASS support
  sassOptions: {
    includePaths: ["./src/scss"],
  },
};

module.exports = nextConfig;
