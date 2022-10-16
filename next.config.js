import { withContentlayer } from "next-contentlayer";
import nextTranspileModules from "next-transpile-modules";

const withTM = nextTranspileModules([
  "fetchp",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: false,

  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
    "api.jsx",
    "api.js",
  ],

  trailingSlash: true,
  productionBrowserSourceMaps: true,

  experimental: {
    esmExternals: true,
    images: { allowFutureImage: true, unoptimized: true },
  },
};

let withMiddlewares = withTM(withContentlayer(nextConfig));

export default withMiddlewares;
