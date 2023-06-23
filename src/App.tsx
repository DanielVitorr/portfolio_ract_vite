import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { usePersistedState } from './utils/usePersistedState'

import GlobalStyled from './styles/global'
import dark from './styles/themes/dark'
import ligth from './styles/themes/ligth'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? ligth : dark)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled themeStyled={theme.title} />
        <Header toggleTheme={toggleTheme} />
        <main>
          <section id="sobre">
            <AboutMe />
          </section>
          <section id="habilidades">
            <Skills />
          </section>
          <section id="projetos">
            <Projects />
          </section>
        </main>
      </ThemeProvider>
    </>
  )
}
