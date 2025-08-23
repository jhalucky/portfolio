import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX(nextConfig);
