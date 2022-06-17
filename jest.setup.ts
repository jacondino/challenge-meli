import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image';
  },
}));

const config = {
  publicRuntimeConfig: {
    APP_ID: '123456',
    SECRET_KEY: '123456',
    REDIRECT_URI: 'https://localhost:3000/redirect',
    URL_TOKEN: 'https://api.mercadolibre.com/oauth/token',
    URL_AUTH: 'https://auth.mercadolivre.com.br/authorization',
    API_URL: 'https://api.mercadolibre.com/',
  },
};

jest.mock('next/config', () => () => config);
