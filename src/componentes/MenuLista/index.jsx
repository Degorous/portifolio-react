import styles from './MenuLista.module.css'

function Lista({ name, href }) {
  return (
    <>
      <li className={styles.menu__link}>
        <a href={href}>{name}</a>
      </li>
    </>
  )
}

export default Lista