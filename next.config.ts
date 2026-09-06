import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/amy-website",
  assetPrefix: "/amy-website"

};

export default nextConfig;
