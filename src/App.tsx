import { useState } from 'react'
import { ACCENT, type StyleVars } from './theme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [accentColor, setAccentColor] = useState<string | null>(null)

  const root: StyleVars = {
    '--accent': accentColor || ACCENT,
    minHeight: '100vh',
    background: '#fcfcfd',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <div style={root}>
      <main
        style={{
          width: '100%',
          maxWidth: '100%',
          background: '#fcfcfd',
          position: 'relative',
        }}
      >
        <Nav />
        <Hero accentColor={accentColor} setAccentColor={setAccentColor} />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
