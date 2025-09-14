/** Patched next.config.js
 * - enabled productionBrowserSourceMaps (helps Lighthouse show source maps for large bundles)
 * - added a set of security headers (CSP, HSTS, Referrer-Policy, COOP)
 *
 * NOTE: Content-Security-Policy below includes domains used in this project:
 * - ik.imagekit.io (ImageKit)
 * - maps.google.com / maps.gstatic.com (Google Maps iframe)
 * Adjust CSP to be stricter for your production environment.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // generate source maps for production builds (helps debugging and fixes Lighthouse missing source maps warning)
  productionBrowserSourceMaps: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS - ensure HTTPS (2 years)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Cross-Origin Opener Policy - helps isolate windows and improve security
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          // Content Security Policy (example) - customize for your external resources
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com; " +
              "connect-src 'self' https://ik.imagekit.io https://maps.googleapis.com https://maps.gstatic.com; " +
              "img-src 'self' data: blob: https://ik.imagekit.io https://maps.gstatic.com https://maps.googleapis.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com; " +
              "frame-src https://www.google.com https://maps.google.com https://maps.gstatic.com;" 
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    domains: ['localhost', 'ik.imagekit.io'],
    formats: ['image/webp', 'image/avif'],
  },

  // SASS support
  sassOptions: {
    includePaths: ['./src/scss'],
  },
};

module.exports = nextConfig;
