import { createGlobalStyle } from 'styled-components';

import gitHubBg from '../assets/github-bg.svg';


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${gitHubBg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, table {
    font: 14px Roboto, sans-serif
  }

  #root {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  }

  button {
    cursor: pointer;
  }

`
