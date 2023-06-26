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
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export const ContainerProjects = styled.div`
  height: 100%;
  width: 100%;

  padding: 70px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  flex-shrink: 0;

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
export const GrupCardContainer = styled.div`
  display: flex;
  /* grid-auto-flow: column; */
  justify-content: space-around;
  align-self: stretch;
  gap: 40px;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    flex-direction: column;
  }
`
export const CardProjectContainer = styled.div`
  width: 405px;

  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.primary};

  img {
    max-width: -webkit-fill-available;

    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`
export const InformationContainer = styled.div`
  width: 384px;

  padding: 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    color: ${(props) => props.theme.colors.text};

    text-align: center;
    font-size: 1rem;
    font-family: Quantico;
    font-weight: 700;
  }

  ul {
    width: 384px;

    padding: 0px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;

    li {
      padding: 10px 0px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 9px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`
