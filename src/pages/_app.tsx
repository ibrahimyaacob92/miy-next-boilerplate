import type { AppProps } from 'next/app';
import StyleProvider from 'styles/StyleProvider';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default wrapper.withRedux(MyApp);
