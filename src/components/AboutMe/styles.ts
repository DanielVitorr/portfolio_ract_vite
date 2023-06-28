import { styled } from 'styled-components'

const size = {
  mobile: '450px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) and max-width: ${size.laptop}`,
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

  @media ${device.mobile} {
    max-width: 100%;
    max-height: 100%;
  }

  @media ${device.tablet} {
    max-width: 100%;
    max-height: 100%;
  }
`
export const ContainerWhoUIAm = styled.div`
  p {
    font-size: 2rem;

    @media ${device.mobile} {
      font-size: 1rem;
    }

    span {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 3rem;

    @media ${device.mobile} {
      font-size: 2rem;
    }
  }
`
export const SummaryContainer = styled.div`
  width: 714px;

  font-size: 1.25rem;

  @media ${device.mobile} {
    font-size: 1rem;

    max-width: 100%;
    max-height: 100%;
  }

  @media ${device.tablet} {
    max-width: 100%;
    max-height: 100%;
  }
`
export const ContainerSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 1.5rem;

  @media ${device.mobile} {
    font-size: 1rem;
  }

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
