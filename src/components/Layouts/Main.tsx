import { MainLayoutContainer } from './Main.style';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode[];
};

/**
 * Conventional Layout consisting navbar, main and footer
 */
const MainLayout = ({ children }: Props) => {
  const [navbar, main, footer] = children;
  return (
    <MainLayoutContainer>
      {navbar}
      {main}
      {footer}
    </MainLayoutContainer>
  );
};

export default MainLayout;
