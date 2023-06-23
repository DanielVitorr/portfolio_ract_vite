import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Container, Navegation } from './styles'
import Switch from 'react-switch'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    return null
  }

  const { colors, title } = themeContext

  return (
    <Container>
      <h1>Portfolio</h1>
      <Navegation>
        <ul>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={16}
          width={30}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={shade(0.15, colors.primary)}
        />
      </Navegation>
    </Container>
  )
}
