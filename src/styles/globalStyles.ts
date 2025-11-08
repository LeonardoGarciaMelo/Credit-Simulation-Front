import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Remove estilos padrão de inputs e botões */
  button, input {
    font-family: inherit;
  }

  /* Remove outline padrão (usaremos nosso próprio) */
  button:focus-visible, input:focus-visible {
    outline: none;
  }
`;