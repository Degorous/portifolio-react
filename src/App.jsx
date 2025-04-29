import Header from "./componentes/Header"
import About from "./componentes/About"
import Skills from "./componentes/Skills"
import Hobbies from "./componentes/Hobbies"
import Training from "./componentes/Training"
import Projects from "./componentes/Projects"
// import Contact from "./componentes/Contact"
import Footer from "./componentes/Footer"
import styles from "./App.module.css"

function App() {

  return (
    <>
      <Header />
      <div className={styles.container} >
        <About />
        <Skills />
        <Hobbies />
        <Training />
        <Projects />
        {/*<Contact /> */}
      </div >
      <Footer />
    </>
  )
}

export default App
