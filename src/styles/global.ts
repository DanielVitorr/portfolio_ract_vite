import { createGlobalStyle } from 'styled-components'

import backgroundDark from '../assets/backgroundDark.png'
import backgroundLigth from '../assets/backgroundLigth.png'
import backgroundDarkMobile from '../assets/backgroundDark-mobile.png'
import backgroundLigthMobile from '../assets/backgroundLigth-mobile.png'

interface Props {
  themeStyled: string
}

const size = {
  mobile: '450px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) and max-width: ${size.laptop}`,
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

    @media ${device.mobile} {
      background-image: url(${(props) =>
        props.themeStyled === 'dark'
          ? backgroundDarkMobile
          : backgroundLigthMobile});
    }
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
