import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["zod"],
  // output: "export",
  // basePath: "/codificador-cie-o-apa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
