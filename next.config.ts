import type { NextConfig } from "next";

export const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
