import styles from './Header.module.css'
import MenuLista from '../MenuLista'

function Header() {
  return (
    <nav className={styles.menu}>
      <div className={styles.container}>
        <ul className={styles.menu__list}>
          <MenuLista name="Sobre mim" href="#about" />
          |
          <MenuLista name="Skills" href="#skills" />
          |
          <MenuLista name="Hobbies" href="#hobbies" />
          |
          <MenuLista name="Formação" href="#training" />
          |
          <MenuLista name="Projetos" href="#projects" />
          {/* <MenuLista name="Contato" href="#contact" /> */}
        </ul>
      </div>
    </nav>
  )
}

export default Header