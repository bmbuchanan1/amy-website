import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'amy-website'; // Replace with your exact GitHub repository name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

};

export default nextConfig;
