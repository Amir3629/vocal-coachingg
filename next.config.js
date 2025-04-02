/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'i3.ytimg.com',
        pathname: '/vi/**',
      }
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/vocal-coachingg' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vocal-coachingg/' : '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
      type: 'asset/resource',
    })
    return config
  },
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/vocal-coachingg' : '',
  },
  onBuildEnd: async () => {
    const fs = require('fs');
    const path = require('path');
    fs.writeFileSync(path.join(__dirname, 'out', '.nojekyll'), '');
  }
}

module.exports = nextConfig
