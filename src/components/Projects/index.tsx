import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import {
  ContainerProjects,
  CardProjectContainer,
  InformationContainer,
  GrupCardContainer,
} from './syles'

import { Img } from 'react-image'
import FlappyBird from '../../assets/flappybird.png'
import Calculadora from '../../assets/Calculadora.png'
import MataMosquito from '../../assets/MataMosquito.png'
import ToDo from '../../assets/ToDoListInlustration.png'

export function Projects() {
  return (
    <ContainerProjects>
      <h1>Projetos</h1>
      <GrupCardContainer>
        <CardProjectContainer>
          <Img src={FlappyBird} />

          <InformationContainer>
            <h1>Flappy Bird - Copia</h1>

            <p>
              Copia do game Flappy Bird, criado nas liguagens HTML e JavaScript.
              Utilizado canvas e manupulação de objetos todas as imagens e
              figuras do game foi criado no JavaScript.
            </p>

            <ul>
              <li>
                Visualizar Códigos
                <a
                  href="https://github.com/DanielVitorr/flappy-bird-copia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                Acessar Página
                <a
                  href="https://danielvitorr.github.io/flappy-bird-copia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt size={25} />
                </a>
              </li>
            </ul>
          </InformationContainer>
        </CardProjectContainer>
        <CardProjectContainer>
          <Img src={Calculadora} />

          <InformationContainer>
            <h1>Calculadora</h1>

            <p>
              Aplicativo web responsivo criado nas liguagens HTML, CSS, e
              JavaScript.
            </p>

            <ul>
              <li>
                Visualizar Códigos
                <a
                  href="https://github.com/DanielVitorr/Calculadora"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                Acessar Página
                <a
                  href="https://danielvitorr.github.io/Calculadora/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt size={25} />
                </a>
              </li>
            </ul>
          </InformationContainer>
        </CardProjectContainer>
        <CardProjectContainer>
          <Img src={MataMosquito} />

          <InformationContainer>
            <h1>Game Mata Mosquito</h1>

            <p>
              Game criado nas linguagens HTML, CSS e JavaScript. O game se base
              em matar mosquito com o clique do mause em um determinado tempo,
              sendo disponibilizado três niveis de dificulada, cada nivel reduz
              o tempo em que o mosquito aparece e some.
            </p>

            <ul>
              <li>
                Visualizar Códigos
                <a
                  href="https://github.com/DanielVitorr/App_Game_MataMosquito"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                Acessar Página
                <a
                  href="https://danielvitorr.github.io/App_Game_MataMosquito/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt size={25} />
                </a>
              </li>
            </ul>
          </InformationContainer>
        </CardProjectContainer>
        <CardProjectContainer>
          <Img src={ToDo} />

          <InformationContainer>
            <h1>ToDo List</h1>

            <p>
              Esta é uma simples página web que permite aos usuários criar,
              gerenciar e acompanhar suas listas de tarefas. Criada em react
              utilizando a linguagem TypeScript, juntamento com framework vite,
              e biblioteca Styled-components para a estilisação dos componentes.
            </p>

            <ul>
              <li>
                Visualizar Códigos
                <a
                  href="https://github.com/DanielVitorr/todoList"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                Acessar Página
                <a
                  href="https://danielvitorr.github.io/todoList/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt size={25} />
                </a>
              </li>
            </ul>
          </InformationContainer>
        </CardProjectContainer>
      </GrupCardContainer>
    </ContainerProjects>
  )
}
