import type { CSSProperties } from 'react'

const link: CSSProperties = { fontSize: 14, color: '#56606c', textDecoration: 'none' }

export default function Footer() {
  return (
    <footer style={{ padding: '48px clamp(48px, 5.5vw, 80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', borderTop: '1px solid rgba(15,20,40,.06)', borderRadius: '0 0 28px 28px' }}>
      <div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 16, fontWeight: 600, color: '#14161a' }}>
          Goran Milosevic
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
        </span>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: '#9aa0a6' }}>Junior developer based in Askim, Norway.</p>
      </div>
      <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        <a href="#about" className="footer-link" style={link}>About</a>
        <a href="#projects" className="footer-link" style={link}>Projects</a>
        <a href="#skills" className="footer-link" style={link}>Skills</a>
        <a href="#contact" className="footer-link" style={link}>Contact</a>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: '#b0b3b8' }}>© 2026 Goran Milosevic</p>
    </footer>
  )
}
