import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const {
  APP_ID,
  SECRET_KEY,
  REDIRECT_URI,
  URL_TOKEN,
  URL_AUTH,
  API_URL,
} = publicRuntimeConfig;
