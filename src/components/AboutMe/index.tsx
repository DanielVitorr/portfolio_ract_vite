import {
  AboutMeContainer,
  SummaryContainer,
  ContainerSocialNetworks,
  ContainerWhoUIAm,
} from './styles'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export function AboutMe() {
  return (
    <AboutMeContainer>
      <ContainerWhoUIAm>
        <p>Ola me chamo</p>
        <h1>Daniel Vitor</h1>
        <p>
          E sou um <span>Desenvolvedor Frontend</span>
        </p>
      </ContainerWhoUIAm>
      <SummaryContainer>
        <p>
          Eu sou um desenvolvedor Frontend habilidoso, possuindo amplo
          conhecimento em HTML, CSS, JavaScript e Git. Tenho a capacidade de
          criar interfaces visuais e funcionais utilizando a poderosa ferramenta
          ReactJS. Estou constantemente empenhado em aprimorar minhas
          habilidades e conhecimentos nesta área em constante evolução.
        </p>
      </SummaryContainer>
      <ContainerSocialNetworks>
        <p>Links de redes sociais</p>

        <ul>
          <li>
            <a
              href="https://github.com/DanielVitorr"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-vitor-a805a8223/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5586998257927"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </ContainerSocialNetworks>
    </AboutMeContainer>
  )
}
