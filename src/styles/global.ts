import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme.blue};
  }

  body {
    /* background: ${(props) => props.theme['base-background']}; */
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
