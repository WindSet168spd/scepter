import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enka.network",
        port: "",
        pathname: "/ui/hsr/SpriteOutput/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.yatta.top",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sr.yatta.moe",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
