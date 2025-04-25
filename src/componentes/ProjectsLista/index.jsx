import styles from './ProjectsLista.module.css'

function ProjectsLista() {
  return (
    <>
      <li className={styles.projects__list__element}>
        <p>Projeto do Número Secreto</p>
        <a href="https://github.com/Degorous/jogo-do-numero-secreto" target="_blank">Repositório</a>
      </li>
    </>
  )
}

export default ProjectsLista