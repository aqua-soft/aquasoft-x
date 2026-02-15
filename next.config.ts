import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aquasoft-x",
  assetPrefix: "/aquasoft-x",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
