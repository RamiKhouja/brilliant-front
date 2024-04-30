// /** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const nextConfig = {}
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.js'
);
module.exports = withFonts(withNextIntl({
  webpack(config, options) {
    return config;
  },
  images: {
    disableStaticImages: true,
  },
}));

