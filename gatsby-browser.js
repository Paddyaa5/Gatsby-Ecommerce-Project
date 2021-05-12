import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const Theme = {
  fonts: {
    headers: "'Abril Fatface', cursive",
    text: "'Poppins', sans-serif;",
  },
  colors: {
    dark: "#1C1C1C",
    light: "#FFF8EE",
  },
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overscroll-behavior-x: none;
        overscroll-behavior-y: none;
    }
    body{
      background-color: #FFF8EE;
    }
    a{
      text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6, a{
        font-family: "Abril Fatface", cursive;
    }
    p{
        font-family: 'Poppins', sans-serif;
    }
    li{
        list-style: none;
    }
    button{
        outline: none;
    }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
