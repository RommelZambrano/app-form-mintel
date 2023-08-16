import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    background-color: #000;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;
