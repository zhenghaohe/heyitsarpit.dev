const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching
  },
  experimental: { optimizeCss: true },
  images: {
    domains: ['images.pexels.com', 'user-images.githubusercontent.com']
  }
});
