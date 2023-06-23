import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  padding: 10px;

  color: ${(props) => props.theme.colors.text};

  h1 {
    font-size: 2rem;
  }
`
export const Navegation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 44px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 44px;

    font-size: 1.25rem;

    list-style: none;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
    }
  }
`
