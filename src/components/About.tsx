import type { CSSProperties } from 'react'

const eyebrow: CSSProperties = { margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }
const heading: CSSProperties = { margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }
const body: CSSProperties = { fontSize: 18, lineHeight: 1.65, color: '#5b6068', maxWidth: 520 }

const facts: [string, string][] = [
  ['Location', 'Askim, Norway'],
  ['Focus', 'Frontend & Mobile'],
  ['Education', 'Kristiania University College'],
  ['Currently', 'Open to opportunities'],
]

const languages = ['Norwegian · Native', 'English · Fluent', 'Serbian', 'Croatian', 'Bosnian']

const chip: CSSProperties = { fontSize: 14, fontWeight: 500, color: '#3c434c', background: '#f4f4f6', padding: '8px 14px', borderRadius: 9 }

export default function About() {
  return (
    <section
      id="about"
      style={{
        scrollMarginTop: 90,
        position: 'relative',
        borderRadius: 28,
        backgroundImage: 'url(/about-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      {/* Semi-transparent blur overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(252, 252, 254, 0.86)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1,
        }}
      />

      {/* The actual grid layout */}
      <div
        className="grid-2"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '90px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        <div>
          <p style={eyebrow}>About</p>
          <h2 style={heading}>More about me</h2>
          <p style={{ ...body, margin: '24px 0 0' }}>
            I&apos;m a 26-year-old developer from Eastern Norway with an IT bachelor in Frontend &amp; Mobile development from Kristiania University College. I&apos;ve worked across frontend, mobile, and some backend, and I genuinely enjoy taking an idea all the way to a finished, intuitive product.
          </p>
          <p style={{ ...body, margin: '18px 0 0' }}>
            I&apos;m motivated by building technology that makes a real difference in everyday life, and I&apos;m eager to keep learning, contributing, and growing, both as a developer and as a person.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 150, padding: '20px 22px', border: '1px solid rgba(15,20,40,.08)', borderRadius: 16, background: '#fff' }}>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>2024</div>
              <div style={{ marginTop: 4, fontSize: 14, color: '#9aa0a6' }}>IT Bachelor, graduated</div>
            </div>
            <div style={{ flex: 1, minWidth: 150, padding: '20px 22px', border: '1px solid rgba(15,20,40,.08)', borderRadius: 16, background: '#fff' }}>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>5</div>
              <div style={{ marginTop: 4, fontSize: 14, color: '#9aa0a6' }}>languages spoken</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ border: '1px solid rgba(15,20,40,.08)', borderRadius: 18, overflow: 'hidden', background: '#fff' }}>
            {facts.map(([label, value], i) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '17px 20px',
                  background: i % 2 === 1 ? '#f7f7f8' : '#fff',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(15,20,40,.05)',
                }}
              >
                <span style={{ fontSize: 14, color: '#9aa0a6' }}>{label}</span>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: '#14161a' }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid rgba(15,20,40,.08)', borderRadius: 18, padding: '22px 22px 24px', background: '#fff' }}>
            <p style={{ margin: '0 0 14px', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa0a6' }}>Languages</p>
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
              {languages.map((l) => <span key={l} style={chip}>{l}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
