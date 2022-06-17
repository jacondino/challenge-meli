import axios from 'axios';
import { AppStorage } from '..';
import { APP_ID, SECRET_KEY, REDIRECT_URI, URL_TOKEN } from '../../config/env';

export const AuthService = {
  getAccessToken: async (code: string | string[] | undefined) => {
    const URL = `${URL_TOKEN}?grant_type=authorization_code&client_id=${APP_ID}&client_secret=${SECRET_KEY}&code=${code}&redirect_uri=${REDIRECT_URI}`;
    let refresh_token,
      access_token,
      error = false;

    await axios
      .post(URL)
      .then(({ data }) => {
        refresh_token = data.refresh_token;
        access_token = data.access_token;
      })
      .catch(() => {
        error = true;
      });

    return { refresh_token, access_token, error };
  },
  getRefreshAccessToken: async () => {
    const token = AppStorage.getValueStorage('access-token');
    let refresh_token,
      access_token,
      error = false;

    const URL = `${URL_TOKEN}?grant_type=refresh_token&client_id=${APP_ID}&refresh_token=${token}`;

    await axios
      .post(URL)
      .then(({ data }) => {
        refresh_token = data.refresh_token;
        access_token = data.access_token;
      })
      .catch(() => {
        error = true;
      });

    return { refresh_token, access_token, error };
  },
};
