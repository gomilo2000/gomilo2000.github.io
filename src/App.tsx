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
  const [language, setLanguage] = useState<'en' | 'no'>('en')

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
        <Nav language={language} />
        <Hero language={language} accentColor={accentColor} setAccentColor={setAccentColor} />
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
        <Footer language={language} />

        {/* Floating Glassmorphic Language Switcher Pill */}
        <div
          style={{
            position: 'fixed',
            bottom: 'clamp(20px, 4vw, 32px)',
            right: 'clamp(20px, 4vw, 32px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(252,252,253,0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(15,20,40,.06)',
            borderRadius: 30,
            padding: 4,
            gap: 2,
            boxShadow: '0 10px 30px -10px rgba(15,20,40,0.15), 0 1px 3px rgba(15,20,40,0.05)',
          }}
        >
          <button
            onClick={() => setLanguage('en')}
            style={{
              border: 'none',
              background: language === 'en' ? '#111418' : 'transparent',
              color: language === 'en' ? '#fff' : '#56606c',
              boxShadow: language === 'en' ? '0 4px 10px -3px rgba(17,20,24,0.3)' : 'none',
              borderRadius: 20,
              padding: '6px 12px',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img src="/gb.svg" alt="English" style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ opacity: language === 'en' ? 1 : 0.6 }}>EN</span>
          </button>
          <button
            onClick={() => setLanguage('no')}
            style={{
              border: 'none',
              background: language === 'no' ? '#111418' : 'transparent',
              color: language === 'no' ? '#fff' : '#56606c',
              boxShadow: language === 'no' ? '0 4px 10px -3px rgba(17,20,24,0.3)' : 'none',
              borderRadius: 20,
              padding: '6px 12px',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img src="/no.svg" alt="Norsk" style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ opacity: language === 'no' ? 1 : 0.6 }}>NO</span>
          </button>
        </div>
      </main>
    </div>
  )
}
