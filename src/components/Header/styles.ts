import styled from 'styled-components'

const size = {
  mobile: '450px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) and max-width: ${size.laptop}`,
}

export const Container = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  padding: 10px;

  color: ${(props) => props.theme.colors.text};

  @media ${device.mobile} {
    flex-direction: column;

    background: ${(props) => props.theme.colors.secundary};
    height: auto;

    h1 {
      font-size: 1.5rem;
    }
  }
`
export const Navegation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 44px;

  @media ${device.mobile} {
    gap: 15px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 44px;

    font-size: 1.25rem;

    list-style: none;

    @media ${device.mobile} {
      font-size: 1rem;
      gap: 15px;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
    }
  }
`
