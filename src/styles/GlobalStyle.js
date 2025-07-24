import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FFF8F2;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, textarea, select {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
