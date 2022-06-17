import type { AppProps } from 'next/app';
import { Template } from '../src/components';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default App;
