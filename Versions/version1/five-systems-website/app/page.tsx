import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { Methodology } from "@/components/methodology"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
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
