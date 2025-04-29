import styles from './About.module.css'

function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <h2 className={styles.about__title}>Sobre mim</h2>
        <div className={styles.about__info}>
          <p>Olá, meu nome é Erick! Sou apaixonado por tecnologia e estou sempre buscando evoluir para me tornar um desenvolvedor web cada vez melhor. Minha jornada começou movida pela curiosidade, explorando códigos e entendendo como as coisas funcionam por trás das telas. Com o tempo, percebi que o desenvolvimento web não era apenas uma habilidade que eu queria aprender, mas uma verdadeira paixão. Hoje, não me vejo fazendo outra coisa e estou sempre em busca de novos desafios e oportunidades para aprender e criar projetos que façam a diferença.</p>
          <img src="./src/assets/perfil.jpg" alt="Imagem de Erick Palombo" />
        </div>
      </section>
    </>
  )
}

export default About