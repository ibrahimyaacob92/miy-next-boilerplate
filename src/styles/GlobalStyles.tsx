import { createGlobalStyle, css } from 'styled-components';

const globalStyle = css`
  body {
    margin: 0;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: overlay;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.font};
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  h3 {
    font-weight: 400;
  }

  input,
  textarea,
  form,
  nav,
  div,
  p,
  span {
    box-sizing: border-box;
  }

  hr {
    border: none;
    border-top: ${(props) => props.theme.border};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(207, 207, 207, 0.5); // TODO: Standardize color
  }

  button,
  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(189, 189, 189);
  }
`;

/* */
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
export default GlobalStyle;
