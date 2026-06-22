import { useState, useEffect } from 'react'
import { DownloadIcon } from '../theme'

export default function Nav() {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact']
    
    // Intersection observer config to detect active section in center of viewport
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-30% 0px -40% 0px', // check if the section occupies the center view
        }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el)
      })
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '20px clamp(40px, 5.5vw, 72px)',
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(252,252,253,.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(15,20,40,.05)',
        borderRadius: '28px 28px 0 0',
      }}
    >
      <a
        href="#top"
        onClick={(e) => handleSmoothScroll(e, 'top')}
        style={{ display: 'flex', alignItems: 'center', gap: 13, textDecoration: 'none' }}
      >
        <img
          src="/goran.jpg"
          alt="Goran Milosevic"
          className="desktop-only"
          style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 0 2px #fff, 0 2px 6px rgba(0,0,0,.14)' }}
        />
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 17, fontWeight: 600, color: '#14161a', letterSpacing: '-.01em' }}>
          Goran Milosevic
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
        </span>
      </a>

      {/* Desktop View Navigation Links (Hidden on Mobile) */}
      <div className="desktop-only" style={{ alignItems: 'center', gap: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
        <a
          href="/Goran_Milosevic_CV.pdf"
          download="Goran_Milosevic_CV.pdf"
          className="btn-resume"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            background: '#111418',
            color: '#fff',
            fontSize: 15,
            fontWeight: 500,
            padding: '11px 20px',
            borderRadius: 13,
            textDecoration: 'none',
            boxShadow: '0 6px 18px -8px rgba(0,0,0,.6)',
          }}
        >
          Resume
          <DownloadIcon />
        </a>
      </div>

      {/* Mobile Hamburger Button Toggle (Visible on Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-only"
        style={{
          background: 'none',
          border: 'none',
          color: '#14161a',
          cursor: 'pointer',
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown Panel */}
      <div className={`mobile-nav-dropdown ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} style={{ fontSize: 16, width: 'max-content' }}>About</a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} style={{ fontSize: 16, width: 'max-content' }}>Projects</a>
        <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} style={{ fontSize: 16, width: 'max-content' }}>Skills</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} style={{ fontSize: 16, width: 'max-content' }}>Contact</a>
        <a
          href="/Goran_Milosevic_CV.pdf"
          download="Goran_Milosevic_CV.pdf"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
            background: '#111418',
            color: '#fff',
            fontSize: 15,
            fontWeight: 500,
            padding: '12px 20px',
            borderRadius: 13,
            textDecoration: 'none',
            marginTop: 8,
          }}
        >
          Resume
          <DownloadIcon />
        </a>
      </div>
    </nav>
  )
}


