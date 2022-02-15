import type { AppProps } from 'next/app';
import StyleProvider from 'styles/StyleProvider';
import { MainLayout } from 'components/Layouts';
import { Footer, Navbar } from 'modules';
import { wrapper } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <MainLayout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MainLayout>
    </StyleProvider>
  );
}

export default wrapper.withRedux(MyApp);
