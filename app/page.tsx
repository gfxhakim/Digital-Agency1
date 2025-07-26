import Navigation from "./components/Navigation"
import LoadingScreen from "./components/LoadingScreen"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main className="min-h-screen bg-white text-black overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
