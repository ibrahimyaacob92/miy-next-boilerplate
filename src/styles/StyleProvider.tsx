import { useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { selectUserPreference } from 'store/user/user.selector';
import themes from 'styles/themes';
import { ReactNode } from 'react';

type Prop = {
  children: ReactNode;
};
const StyleProvider = ({ children }: Prop) => {
  const { theme: themeName } = useSelector(selectUserPreference);
  const theme = themes[themeName];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
