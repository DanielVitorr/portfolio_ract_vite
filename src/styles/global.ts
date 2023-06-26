import { createGlobalStyle } from 'styled-components'

import backgroundDark from '../assets/backgroundDark.png'
import backgroundLigth from '../assets/backgroundLigth.png'

interface Props {
  themeStyled: string
}

export default createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${(props) =>
      props.themeStyled === 'dark' ? backgroundDark : backgroundLigth});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${(props) => props.theme.colors.text};
  }

  body, html {
    font-family: Quantico;
    scroll-behavior: smooth;
  }

  section {
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
