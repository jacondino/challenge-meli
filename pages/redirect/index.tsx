import { NextPageContext } from 'next/types';
import { useEffect } from 'react';
import { APP_ID, REDIRECT_URI, URL_AUTH } from '../../src/config/env';
import { Loader } from '../../src/components';
import { useRouter } from 'next/router';
import { AuthService, AppStorage } from '../../src/service';

interface RedirectPageProps {
  refresh_token: string;
  access_token: string;
  error: boolean;
  code?: string;
}

export const RedirectPage = ({
  refresh_token,
  access_token,
  error,
  code,
}: RedirectPageProps) => {
  const router = useRouter();

  useEffect(() => {
    const REDIRECT = `${URL_AUTH}?response_type=code&client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&state=$12345`;

    if (!error && code && refresh_token && access_token) {
      AppStorage.setValueStorage('refresh_token', refresh_token);
      AppStorage.setValueStorage('access-token', access_token);

      router.push('/');
    } else {
      window.location.href = REDIRECT;
    }
  }, []);

  return <Loader />;
};

RedirectPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { refresh_token, access_token, error } =
    await AuthService.getAccessToken(query.code);

  return {
    refresh_token: refresh_token,
    access_token: access_token,
    error: error,
    code: query.code,
  };
};

export default RedirectPage;
