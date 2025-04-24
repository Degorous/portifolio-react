import styles from './HobbiesLista.module.css'

function Hobbies({ src, alt, name }) {
  return (
    <>
      <li className={styles.hobbies__item}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </li>
    </>
  )
}

export default Hobbies