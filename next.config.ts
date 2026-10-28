import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/:locale(en|pt)/work", destination: "/:locale#projects", permanent: true },
      { source: "/:locale(en|pt)/skills", destination: "/:locale/about#skills", permanent: true },
      {
        source: "/:locale(en|pt)/soft-skills",
        destination: "/:locale/about#how-i-work",
        permanent: true,
      },
      {
        source: "/:locale(en|pt)/projects",
        has: [{ type: "query", key: "p", value: "(?<slug>[a-z0-9-]+)" }],
        destination: "/:locale/projects/:slug",
        permanent: true,
      },
      { source: "/:locale(en|pt)/projects", destination: "/:locale#projects", permanent: true },
      { source: "/es", destination: "/en", permanent: true },
      { source: "/es/:path*", destination: "/en/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS.map(({ key, value }) => ({ key, value })) },
    ];
  },
};

export default nextConfig;
