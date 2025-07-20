import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Team } from "./components/Team"
import { Methodology } from "./components/Methodology"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Methodology />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
