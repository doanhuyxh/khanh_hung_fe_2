import { config } from 'dotenv';
config();
import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  env:{
    API_URL: process.env.API_URL,
    MEDIA_UPLOAD_URL: process.env.MEDIA_UPLOAD_URL
  },
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
    domains: ['localhost', "res.cloudinary.com", "api.yody.lokid.xyz", "api.vuacontent.vn"],
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