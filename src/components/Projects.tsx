import { useState, useEffect } from 'react'
import AskimProject from './projects/AskimProject'
import AngermanProject from './projects/AngermanProject'

interface ProjectsProps {
  language: 'en' | 'no'
}

export default function Projects({ language }: ProjectsProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const t = {
    eyebrow: language === 'en' ? 'Projects' : 'Prosjekter',
    heading: language === 'en' ? 'Selected projects' : 'Utvalgte prosjekter',
  }

  return (
    <section id="projects" style={{ scrollMarginTop: 90, padding: '130px clamp(48px, 8vw, 160px)', background: '#f5f5f7' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 64 }}>
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{t.eyebrow}</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>{t.heading}</h2>
        </div>
      </div>

      {/* Projects */}
      <AskimProject language={language} isMobile={isMobile} />
      <AngermanProject language={language} isMobile={isMobile} />
    </section>
  )
}
