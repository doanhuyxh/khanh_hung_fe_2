import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  experimental: {
    
  },
  compiler: {
    styledComponents: true,
    removeConsole: false
  },
  sassOptions: {
    includePaths: ["./app/styles", "./app/components"],
    quietDeps: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['localhost', "res.cloudinary.com", "api.yody.lokid.xyz"],
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      
      config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
    }
    config.optimization.minimize = false;
    return config;
  },
};

export default nextConfig;