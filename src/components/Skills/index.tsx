import {
  SkillsContainer,
  ContainerFirstList,
  ContainerSecondList,
} from './styles'
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact } from 'react-icons/fa'

export function Skills() {
  return (
    <SkillsContainer>
      <h1>Tecnologias</h1>

      <ContainerFirstList>
        <li>
          <h1>HTML</h1>

          <FaHtml5 fill="#E95934" size={110} />

          <p>
            HTML é uma linguagem de marcação utilizada na construção de páginas
            na Web. Documentos HTML podem ser interpretados por navegadores.
          </p>
        </li>

        <li>
          <h1>CSS</h1>

          <FaCss3Alt fill="#2062AE" size={110} />

          <p>
            Aplicação utilizada na estilização de componentes escritos em
            liguagens do mercação.
          </p>
        </li>

        <li>
          <h1>JavaScript</h1>

          <FaJs fill="#E1A038" size={110} />

          <p>
            Utilizo o JavaScript para criar aplicações com comportamento
            interativo e complexo.
          </p>
        </li>
      </ContainerFirstList>

      <ContainerSecondList>
        <li>
          <h1>Git</h1>

          <FaGitAlt fill="#FB4F28" size={100} />

          <p>
            Utilizo o Git como programa de controle de versão das minhas
            aplicações.
          </p>
        </li>
        <li>
          <h1>React</h1>

          <FaReact fill="#3B82F6" size={100} />

          <p>
            Criação de páginas utilizando o framework React, proporcionando
            interatividade ao usuário.
          </p>
        </li>
      </ContainerSecondList>
    </SkillsContainer>
  )
}
