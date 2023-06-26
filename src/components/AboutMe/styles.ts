import { styled } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const AboutMeContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  padding: 0 20px;

  @media ${device.mobileS} {
    max-width: 320px;
    max-height: 100%;
  }

  @media ${device.mobileM} {
    max-width: 375px;
    max-height: 100%;
  }

  @media ${device.mobileL} {
    max-width: 425px;
    max-height: 100%;
  }

  @media ${device.desktopL} {
    max-width: 2560px;
    max-height: 100%;
  }
`
export const ContainerWhoUIAm = styled.div`
  p {
    font-size: 2rem;

    span {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 3rem;
  }
`
export const SummaryContainer = styled.div`
  width: 714px;

  font-size: 1.25rem;
`
export const ContainerSocialNetworks = styled.div`
  font-size: 1.5rem;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    list-style: none;

    font-size: 1.5625rem;

    a {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`
