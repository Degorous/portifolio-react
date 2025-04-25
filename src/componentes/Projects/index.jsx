import style from './Projects.module.css'
import ProjectsLista from '../ProjectsLista'

function Projects() {
  return (
    <>
      <section className={style.projects} id="projects">
        <h2 className={style.projects__title}>Projetos</h2>
        <ProjectsLista />
      </section>
    </>
  )
}

export default Projects