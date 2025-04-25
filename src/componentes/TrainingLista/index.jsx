import styles from './TrainingLista.module.css'

function TrainingLista({ src, alt, name, info }) {
  return (
    <>
      <li className={styles.training__title}>
        <img src={src} alt={alt} />
        <section>
          <p>{name}</p>
          <p>{info}</p>
        </section>
      </li>
    </>
  )
}

export default TrainingLista