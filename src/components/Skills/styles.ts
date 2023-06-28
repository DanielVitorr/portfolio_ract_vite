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

export const SkillsContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 70px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  flex-shrink: 0;

  @media ${device.mobile} {
    max-width: 320px;
    max-height: 100%;

    padding: 80px 20px;
  }

  @media ${device.tablet} {
    max-width: 1024px;
    max-height: 100%;
  }
`
export const ContainerFirstList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }

  li {
    width: 412px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    list-style: none;

    @media ${device.mobile} {
      width: auto;
    }

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

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

  li {
    width: 358px;

    @media ${device.mobile} {
      width: auto;
    }

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
