import About from './components/About'
import ConnectCTA from './components/ConnectCTA'
import Contact from './components/Contact'
import EngineeringThinking from './components/EngineeringThinking'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TechStack from './components/TechStack'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[200] rounded-lg bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <EngineeringThinking />
        <Experience />
        <Projects />
        <Skills />
        <TechStack />
        <ConnectCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
