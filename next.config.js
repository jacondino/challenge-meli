/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_ID: process.env.APP_ID,
    SECRET_KEY: process.env.SECRET_KEY,
    REDIRECT_URI: process.env.REDIRECT_URI,
    URL_TOKEN: process.env.URL_TOKEN,
    URL_AUTH: process.env.URL_AUTH,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
