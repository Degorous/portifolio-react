import styles from './Hobbies.module.css'
import HobbiesLista from '../HobbiesLista'

function Hobbies() {
  return (
    <>
      <section className={styles.hobbies} id="hobbies">
        <h2 className={styles.hobbies__title}>Hobbies</h2>
        <ul className={styles.hobbies__list}>
          <HobbiesLista src="./src/assets/gym.png" name="Academia" alt="Ícone de Academia" />
          <HobbiesLista src="./src/assets/joystick.png" name="Jogos" alt="Ícone de Joystick" />
          <HobbiesLista src="./src/assets/movie-player.png" name="Filmes e Séries" alt="Ícone de Filmes" />
        </ul>
      </section>
    </>
  )
}

export default Hobbies