import styles from './Skills.module.css'
import SkillsLista from '../SkillsLista'

function Skills() {
  return (
    <>
      <section className={styles.skills} id="skills">
        <h2 className={styles.skills__title}>Skills</h2>
        <ul className={styles.skills__list}>
          <SkillsLista name="Ruby" src="./src/assets/icons8-ruby-48.png" alt="Logo Ruby" />
          <SkillsLista name="Ruby on Rails" src="./src/assets/icons8-ruby-on-rails-48.png" alt="Logo Ruby on Rails" />
          <SkillsLista name="HTML" src="./src/assets/icons8-html-5-48.png" alt="Logo HTML5" />
          <SkillsLista name="CSS" src="./src/assets/icons8-css-logo-48.png" alt="Logo CSS3" />
          <SkillsLista name="JavaScript" src="./src/assets/icons8-javascript-48.png" alt="Logo Javascript" />
          <SkillsLista name="Git" src="./src/assets/icons8-git-48.png" alt="Logo Git" />
          <SkillsLista name="React" src="./src/assets/icons8-react-40.png" alt="Logo React" />
        </ul>
      </section>
    </>
  )
}

export default Skills