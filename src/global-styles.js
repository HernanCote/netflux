import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    color: #333;
    font-size: 1rem;
  }
`;

export default GlobalStyles;
