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

export const SkillsContainer = styled.div`
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
export const ContainerFirstList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.desktopL} {
    flex-direction: row;
  }

  li {
    width: 412px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    list-style: none;

    p {
      color: ${(props) => props.theme.colors.text};
      text-align: center;
      font-size: 1rem;
      font-family: Quantico;
      font-weight: 700;
    }
  }
`
export const ContainerSecondList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.desktopL} {
    flex-direction: row;
  }

  li {
    width: 358px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    align-self: stretch;

    list-style: none;

    p {
      color: ${(props) => props.theme.colors.text};
      text-align: center;
      font-size: 1rem;
      font-family: Quantico;
      font-weight: 700;
    }
  }
`
