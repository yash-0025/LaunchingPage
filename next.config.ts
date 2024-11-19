import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.builder.io"],
    dangerouslyAllowSVG:true,
  }
};

export default nextConfig;
