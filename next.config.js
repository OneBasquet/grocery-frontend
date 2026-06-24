/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Static HTML export -> served from S3 + CloudFront (no Node server needed).
  // Safe here because every page is "use client" with no SSR data fetching.
  output: "export",
  // Required by `output: export` (disables the server-side Image Optimization API).
  images: { unoptimized: true },
};
