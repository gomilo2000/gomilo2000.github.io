import { ACCENT, type StyleVars } from './theme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const root: StyleVars = {
    '--accent': ACCENT,
    minHeight: '100vh',
    background: '#d8d8da',
    padding: 'clamp(12px,2.2vw,30px)',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <div style={root}>
      <main
        style={{
          width: '100%',
          maxWidth: 1520,
          background: '#fcfcfd',
          borderRadius: 28,
          boxShadow: '0 40px 90px -50px rgba(20,24,50,.40), 0 2px 10px rgba(0,0,0,.04)',
          position: 'relative',
        }}
      >
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
