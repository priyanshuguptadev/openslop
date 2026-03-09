import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({});

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.ts",
    },
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
  },
};

export default withNextra(nextConfig);
