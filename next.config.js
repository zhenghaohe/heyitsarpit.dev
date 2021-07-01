/* eslint-disable @typescript-eslint/no-var-requires */
const withLinaria = require('next-linaria');

module.exports = withLinaria({
  webpack5: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  images: {
    domains: ['images.pexels.com']
  }
});
