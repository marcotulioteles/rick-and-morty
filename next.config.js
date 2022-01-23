const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
  i18n
}
