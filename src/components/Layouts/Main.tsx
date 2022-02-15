import styled from 'styled-components';
import media from 'css-in-js-media';

/**
 * Conventional Layout consisting navbar, main and footer
 */
const MainLayout = styled.div`
  width: 100vw;
  > nav {
    padding: 15px 40px;
  }

  > main,
  > footer {
    padding: 0 40px;
  }

  ${media('<=tablet', '>phone')} {
    > nav {
      padding: 15px 20px;
    }

    > main,
    > footer {
      padding: 0 20px;
    }
  }

  ${media('<=phone')} {
    > nav {
      padding: 15px 20px;
    }

    > main,
    > footer {
      padding: 0 20px;
    }
  }
`;

export default MainLayout;
