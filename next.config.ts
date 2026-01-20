import type {NextConfig} from 'next';

import {createMDX} from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  serverExternalPackages: ['@takumi-rs/image-response'],

  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
