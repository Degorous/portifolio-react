import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>Desenvolvido por Erick Palombo</p>
          <p>2024</p>
        </div>
        <div className={styles.footer__links}>
          <a href="https://github.com/Degorous" target="_blank">
            <img src="./src/assets/icons8-github.svg" alt="Link para Github" />
          </a>
          <a href="https://www.linkedin.com/in/erick-palombo/" target="_blank">
            <img src="./src/assets/icons8-linkedin.svg" alt="Link para Linkedin" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer