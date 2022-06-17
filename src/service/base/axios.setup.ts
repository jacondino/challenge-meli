import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthService, AppStorage } from '../';

export const HttpClient: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

HttpClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = AppStorage.getValueStorage('access-token');

  if (token && config?.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const {
        refresh_token,
        access_token,
        error: err,
      } = await AuthService.getRefreshAccessToken();

      if (!err && refresh_token && access_token) {
        AppStorage.setValueStorage('refresh_token', refresh_token);
        AppStorage.setValueStorage('access-token', access_token);
      }

      if (err) {
        window.location.href = '/redirect';
      }
    }

    return Promise.reject(error);
  }
);

export default HttpClient;
