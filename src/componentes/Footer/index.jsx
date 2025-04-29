import GitImage from '../GitImage'
import LinkedInImage from '../LinkedInImage'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__text}>
            <p>Desenvolvido por Erick Palombo</p>
            <p>2025</p>
          </div>
          <div className={styles.footer__links}>
            <a href="https://github.com/Degorous" target="_blank">
              <GitImage />
            </a>
            <a href="https://www.linkedin.com/in/erick-palombo/" target="_blank">
              <LinkedInImage />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer