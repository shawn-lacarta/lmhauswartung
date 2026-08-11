import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/kontakt",
        permanent: true
      },
      {
        source: "/:path(.*%C3%BCber-uns.*)",
        destination: "/ueber-uns",
        permanent: true
      },
      {
        source: "/über-uns",
        destination: "/ueber-uns",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
