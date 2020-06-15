import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 1016px;
  }

  body {
    background: #f9f9f9;
    -webkit-font-smoothing: antialiased !important;
    position: relative;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', 'Arial';
  }

  button {
    cursor: pointer;
  }

  .section-titles {
  font-size: 24px;
  margin-top: 50px;
}

`;
