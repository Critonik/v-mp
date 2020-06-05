import { createGlobalStyle } from 'styled-components';
import { scrollStyles } from '../defaultTheme';

const GlobalStyles = createGlobalStyle`
  body {
    color: #222;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    line-height: 1.5em;
    -moz-osx-font-smoothing: grayscale;
    ${scrollStyles}
  }
`;

export default GlobalStyles;
