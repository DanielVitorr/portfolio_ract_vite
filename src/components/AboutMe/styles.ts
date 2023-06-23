import { styled } from 'styled-components'

export const AboutMeContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  padding: 0 20px;
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
