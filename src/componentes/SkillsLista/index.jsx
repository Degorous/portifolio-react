import styles from './SkillsLista.module.css'

function SkillsLista({ name, src, alt }) {
  return (
    <>
      <li className={styles.skills__item}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </li>
    </>
  )
}

export default SkillsLista