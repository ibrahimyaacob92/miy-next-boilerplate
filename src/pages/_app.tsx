import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import themes, { ThemeName } from 'styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState<ThemeName>('light');
  const theme = themes[themeState];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
