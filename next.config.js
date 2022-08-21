import withServerlessCloud from "@serverless/cloud/nextjs";
import MDX from "@next/mdx";
import nextTranspileModules from "next-transpile-modules";

const withTM = nextTranspileModules([
  "fetchp",
]);

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: false,
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "page.mdx",
    "page.md",
  ],
  experimental: {
    esmExternals: true,
    images: { allowFutureImage: true },
  },
};

let withMiddlewares = withTM(withMDX(nextConfig));

if (process.env.NO_CLOUD !== "1") {
  withMiddlewares = withServerlessCloud(withMiddlewares);
}

export default withMiddlewares;
