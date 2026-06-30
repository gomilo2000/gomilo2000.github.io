import type { CSSProperties } from 'react'

const link: CSSProperties = { fontSize: 14, color: '#a5a8be', textDecoration: 'none', transition: 'color 0.2s ease' }

interface FooterProps {
  language: 'en' | 'no'
}

export default function Footer({ language }: FooterProps) {
  const t = {
    desc: language === 'en' ? 'Junior developer based in Askim, Norway.' : 'Juniorutvikler basert i Askim, Norge.',
    about: language === 'en' ? 'About' : 'Om meg',
    projects: language === 'en' ? 'Projects' : 'Prosjekter',
    skills: language === 'en' ? 'Skills' : 'Ferdigheter',
    contact: language === 'en' ? 'Contact' : 'Kontakt',
  }

  return (
    <footer style={{ padding: '60px clamp(48px, 8vw, 160px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', background: '#110e28', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
          Goran Milosevic
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 6, 
            background: 'color-mix(in srgb, var(--accent) 10%, #fff)',
            border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
            borderRadius: 20, 
            padding: '2px 8px', 
            fontSize: 11, 
            fontWeight: 600, 
            color: 'var(--accent)',
            marginLeft: 4,
            transform: 'translateY(0.5px)',
          }}>
            <span style={{ position: 'relative', display: 'flex', width: 6, height: 6 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent)', opacity: 0.6, animation: 'cc-ping 1.6s cubic-bezier(0,0,.2,1) infinite' }} />
              <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            </span>
            {language === 'en' ? 'Open to work' : 'Åpen for arbeid'}
          </span>
        </span>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: '#a5a8be' }}>{t.desc}</p>
      </div>
      <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        <a href="#about" className="footer-link" style={link}>{t.about}</a>
        <a href="#projects" className="footer-link" style={link}>{t.projects}</a>
        <a href="#skills" className="footer-link" style={link}>{t.skills}</a>
        <a href="#contact" className="footer-link" style={link}>{t.contact}</a>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: '#7f8c9d' }}>© 2026 Goran Milosevic</p>
    </footer>
  )
}
