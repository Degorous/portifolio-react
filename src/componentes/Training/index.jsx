import styles from './Training.module.css'
import TrainingLista from '../TrainingLista'

function Training() {
  return (
    <>
      <section className={styles.training} id="training">
        <h2 className={styles.training__title}>Formação</h2>
        <ul className={styles.training__list}>
          <TrainingLista src="./src/assets/ONE.png" alt="Imagem do ONE" name="Curso de Front-End" info="2024 - ONE" />
          <TrainingLista src="./src/assets/treinadev.jpg" alt="Imagem do TreinaDev" name="Curso de Back-End" info="2023 - TreinaDev" />
          <TrainingLista src="./src/assets/cgb.png" alt="Imagem do Curso Grahm Bell" name="Curso Técnico de Telecomunicações" info="2013 - Colégio GrahamBell" />
        </ul>
      </section >
    </>
  )
}

export default Training