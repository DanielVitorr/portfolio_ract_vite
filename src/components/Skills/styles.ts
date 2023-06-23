import { styled } from 'styled-components'

export const SkillsContainer = styled.div`
  height: 100vh;
  width: 100%;

  padding: 70px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  flex-shrink: 0;
`
export const ContainerFirstList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

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
