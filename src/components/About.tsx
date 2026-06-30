import { useState, type CSSProperties } from 'react'

const eyebrow: CSSProperties = { margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }
const heading: CSSProperties = { margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }
const body: CSSProperties = { fontSize: 18, lineHeight: 1.65, color: '#5b6068', maxWidth: 680 }

const facts: [string, string][] = [
  ['Location', 'Askim, Norway'],
  ['Focus', 'Frontend & Mobile'],
  ['Education', 'Kristiania University College'],
  ['Currently', 'Open to opportunities'],
]

const languages = ['Norwegian · Native', 'English · Fluent', 'Serbian', 'Croatian', 'Bosnian']

const chip: CSSProperties = { fontSize: 14, fontWeight: 500, color: '#3c434c', background: '#f4f4f6', padding: '8px 14px', borderRadius: 9 }

const MAP_DOTS = [
  // Greenland
  { x: 4, y: 0, region: 'other' }, { x: 5, y: 0, region: 'other' },
  // Scandinavia (Norway)
  { x: 7, y: 0, region: 'norway' }, { x: 8, y: 0, region: 'norway' },
  
  // North America (representing English speaking region)
  { x: 1, y: 1, region: 'english' }, { x: 2, y: 1, region: 'english' }, { x: 3, y: 1, region: 'english' },
  { x: 0, y: 2, region: 'english' }, { x: 1, y: 2, region: 'english' }, { x: 2, y: 2, region: 'english' }, { x: 3, y: 2, region: 'english' },
  { x: 1, y: 3, region: 'english' }, { x: 2, y: 3, region: 'english' }, { x: 3, y: 3, region: 'english' },
  { x: 2, y: 4, region: 'english' },
  
  // UK / Ireland (English speaking region)
  { x: 6, y: 1, region: 'english' },
  
  // Europe (other)
  { x: 7, y: 1, region: 'other' },
  { x: 6, y: 2, region: 'other' }, { x: 7, y: 2, region: 'other' },
  
  // Balkans (Serbian, Croatian, Bosnian)
  { x: 8, y: 2, region: 'balkans' },
  
  // South America
  { x: 3, y: 5, region: 'other' }, { x: 4, y: 5, region: 'other' },
  { x: 3, y: 6, region: 'other' }, { x: 4, y: 6, region: 'other' },
  { x: 4, y: 7, region: 'other' },
  
  // Africa
  { x: 7, y: 4, region: 'other' }, { x: 8, y: 4, region: 'other' },
  { x: 7, y: 5, region: 'other' }, { x: 8, y: 5, region: 'other' }, { x: 9, y: 5, region: 'other' },
  { x: 8, y: 6, region: 'other' },
  
  // Asia / Russia
  { x: 9, y: 1, region: 'other' }, { x: 10, y: 1, region: 'other' }, { x: 11, y: 1, region: 'other' }, { x: 12, y: 1, region: 'other' }, { x: 13, y: 1, region: 'other' },
  { x: 9, y: 2, region: 'other' }, { x: 10, y: 2, region: 'other' }, { x: 11, y: 2, region: 'other' }, { x: 12, y: 2, region: 'other' }, { x: 13, y: 2, region: 'other' },
  { x: 9, y: 3, region: 'other' }, { x: 10, y: 3, region: 'other' }, { x: 11, y: 3, region: 'other' }, { x: 12, y: 3, region: 'other' },
  { x: 10, y: 4, region: 'other' }, { x: 11, y: 4, region: 'other' }, { x: 12, y: 4, region: 'other' },
  
  // Australia
  { x: 12, y: 6, region: 'other' }, { x: 13, y: 6, region: 'other' },
  { x: 12, y: 7, region: 'other' }, { x: 13, y: 7, region: 'other' },
]

interface AboutProps {
  language: 'en' | 'no'
}

export default function About({ language }: AboutProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [confettiTrigger, setConfettiTrigger] = useState(0)

  const t = {
    eyebrow: language === 'en' ? 'About' : 'Om meg',
    heading: language === 'en' ? 'More about me' : 'Mer om meg',
    para1: language === 'en' 
      ? "I'm a 26-year-old developer from Norway with an IT bachelor in Frontend & Mobile development from Kristiania University College. I've worked across frontend, mobile, and some backend, and I genuinely enjoy taking an idea all the way to a finished, intuitive product."
      : "Jeg er en 26 år gammel utvikler fra Norge med en IT-bachelor i frontend- og mobilutvikling fra Høyskolen Kristiania. Jeg har erfaring med frontend, mobil, og noe backend, og jeg trives veldig godt med å ta en idé hele veien til et ferdig, intuitivt produkt.",
    para2: language === 'en'
      ? "I'm motivated by building technology that makes a real difference in everyday life, and I'm eager to keep learning, contributing, and growing, both as a developer and as a person."
      : "Jeg motiveres av å bygge teknologi som utgjør en reell forskjell i hverdagen, og jeg er ivrig etter å fortsette å lære, bidra og vokse, både som utvikler og som person.",
    gradLabel: language === 'en' ? 'IT Bachelor, graduated' : 'IT-bachelor, uteksaminert',
    langLabel: language === 'en' ? 'languages spoken' : 'språk',
    languagesTitle: language === 'en' ? 'Languages' : 'Språk',
  }

  const localizedFacts: [string, string][] = [
    [language === 'en' ? 'Location' : 'Sted', language === 'en' ? 'Askim, Norway' : 'Askim, Norge'],
    [language === 'en' ? 'Focus' : 'Fokus', language === 'en' ? 'Frontend & Mobile' : 'Frontend & Mobil'],
    [language === 'en' ? 'Education' : 'Utdanning', language === 'en' ? 'Kristiania University College' : 'Høyskolen Kristiania'],
    [language === 'en' ? 'Currently' : 'Status', language === 'en' ? 'Open to opportunities' : 'Åpen for muligheter'],
  ]

  const localizedLanguages = language === 'en' 
    ? ['Norwegian · Native', 'English · Fluent', 'Serbian', 'Croatian', 'Bosnian']
    : ['Norsk · Morsmål', 'Engelsk · Flytende', 'Serbisk', 'Kroatisk', 'Bosnisk']

  return (
    <section
      id="about"
      style={{
        scrollMarginTop: 90,
        position: 'relative',
        overflow: 'hidden',
        background: '#fcfcfd',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      {/* Blurred background image container scaled to prevent edge artifacts */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          left: -10,
          right: -10,
          bottom: -10,
          backgroundImage: 'url(/about-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
          zIndex: 0,
        }}
      />
      {/* Semi-transparent tint overlay on top of the blur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(252, 252, 254, 0.86)',
          zIndex: 1,
        }}
      />

      {/* The actual grid layout */}
      <div
        className="grid-2"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '130px clamp(48px, 8vw, 160px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 120,
          alignItems: 'start',
        }}
      >
        <div>
          <p style={eyebrow}>{t.eyebrow}</p>
          <h2 style={heading}>{t.heading}</h2>
          <p style={{ ...body, margin: '24px 0 0' }}>
            {t.para1}
          </p>
          <p style={{ ...body, margin: '18px 0 0' }}>
            {t.para2}
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent, #1a73ff)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(26,115,255,0.15)'
                setConfettiTrigger(p => p + 1)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(15,20,40,.08)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              style={{
                position: 'relative',
                flex: 1,
                minWidth: 150,
                padding: '20px 22px',
                border: '1.5px solid rgba(15,20,40,.08)',
                borderRadius: 16,
                background: '#fff',
                cursor: 'default',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>2024</div>
              <div style={{ marginTop: 4, fontSize: 14, color: '#9aa0a6' }}>{t.gradLabel}</div>
              {confettiTrigger > 0 && (
                <div key={confettiTrigger} style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none' }}>
                  <style>{`
                    @keyframes burst-particle {
                      0% {
                        transform: translate(0, 0) scale(1) rotate(0deg);
                        opacity: 1;
                      }
                      50% {
                        transform: translate(calc(var(--tx) * 0.5), calc(var(--ty) * 0.5 - 24px)) scale(0.8) rotate(180deg);
                        opacity: 1;
                      }
                      100% {
                        transform: translate(var(--tx), var(--ty)) scale(0) rotate(var(--rot));
                        opacity: 0;
                      }
                                      `}</style>
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i / 16) * 360 + (Math.random() * 20 - 10)
                    const distance = 40 + Math.random() * 60
                    const delay = Math.random() * 0.08
                    const size = 9 + Math.random() * 9
                    const color = ['#ff2a2a', '#ff9a00', '#ffea00', '#00ff1a', '#00eaff', '#a000ff', '#ff00d0'][Math.floor(Math.random() * 7)]
                    const isCircle = Math.random() > 0.5
                    
                    const angleRad = (angle * Math.PI) / 180
                    const tx = `${Math.cos(angleRad) * distance}px`
                    const ty = `${Math.sin(angleRad) * distance + 10}px` 
                    const rot = `${360 + Math.random() * 360}deg`

                    return (
                      <div
                        key={i}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '40%',
                          width: size,
                          height: size,
                          borderRadius: isCircle ? '50%' : '2px',
                          backgroundColor: color,
                          animation: `burst-particle 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) ${delay}s forwards`,
                          pointerEvents: 'none',
                          zIndex: 10,
                          ['--tx' as any]: tx,
                          ['--ty' as any]: ty,
                          ['--rot' as any]: rot,
                        }}
                      />
                    )
                  })}
                  {Array.from({ length: 2 }).map((_, i) => {
                    const angle = -90 + (i === 0 ? -25 : 25)
                    const distance = 60 + Math.random() * 30
                    const delay = 0.05 + Math.random() * 0.1
                    const size = 26
                    
                    const angleRad = (angle * Math.PI) / 180
                    const tx = `${Math.cos(angleRad) * distance}px`
                    const ty = `${Math.sin(angleRad) * distance + 10}px` 
                    const rot = `${360 + (i === 0 ? -45 : 45)}deg`

                    return (
                      <div
                        key={`emoji-${i}`}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '40%',
                          fontSize: size,
                          lineHeight: 1,
                          animation: `burst-particle 0.9s cubic-bezier(0.1, 0.8, 0.3, 1) ${delay}s forwards`,
                          pointerEvents: 'none',
                          zIndex: 11,
                          marginLeft: '-13px',
                          marginTop: '-13px',
                          ['--tx' as any]: tx,
                          ['--ty' as any]: ty,
                          ['--rot' as any]: rot,
                        }}
                      >
                        🥳
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHoveredRegion('all')}
              onMouseLeave={() => setHoveredRegion(null)}
              style={{
                flex: 1,
                minWidth: 150,
                padding: '20px 22px',
                border: '1.5px solid rgba(15,20,40,.08)',
                borderRadius: 16,
                background: '#fff',
                cursor: 'default',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                borderColor: hoveredRegion === 'all' ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.08)',
                boxShadow: hoveredRegion === 'all' ? '0 12px 24px -10px rgba(26,115,255,0.15)' : 'none',
                transform: hoveredRegion === 'all' ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>5</div>
              <div style={{ marginTop: 4, fontSize: 14, color: '#9aa0a6' }}>{t.langLabel}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ border: '1px solid rgba(15,20,40,.08)', borderRadius: 18, overflow: 'hidden', background: '#fff' }}>
            {localizedFacts.map(([label, value], i) => (
              <div
                key={label}
                className="about-fact-row"
                style={{
                  background: i % 2 === 1 ? '#f7f7f8' : '#fff',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(15,20,40,.05)',
                }}
              >
                <span style={{ fontSize: 14, color: '#9aa0a6' }}>{label}</span>
                {i === 3 ? (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById('contact')
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="about-status-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: 'var(--accent, #1a73ff)',
                      textDecoration: 'none',
                      padding: '4px 8px',
                      borderRadius: 20,
                      marginLeft: -8,
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ position: 'relative', display: 'flex', width: 6, height: 6, flexShrink: 0 }}>
                      <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--accent, #1a73ff)', opacity: 0.6, animation: 'cc-ping 1.6s cubic-bezier(0,0,.2,1) infinite' }} />
                      <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent, #1a73ff)' }} />
                    </span>
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: '#14161a' }}>{value}</span>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              border: '1px solid rgba(15,20,40,.08)',
              borderRadius: 18,
              padding: '22px 22px 24px',
              background: '#fff',
              transition: 'all 0.25s ease',
              borderColor: hoveredRegion !== null ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.08)',
              boxShadow: hoveredRegion !== null ? '0 12px 28px -12px rgba(26,115,255,0.12)' : 'none',
            }}
          >
            <p style={{ margin: '0 0 14px', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa0a6' }}>{t.languagesTitle}</p>
            
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', flex: '1 1 200px' }}>
                {localizedLanguages.map((l) => {
                  const isNorwegian = l.startsWith('Norwegian') || l.startsWith('Norsk')
                  const isEnglish = l.startsWith('English') || l.startsWith('Engelsk')
                  const isBalkans = l === 'Serbian' || l === 'Croatian' || l === 'Bosnian' || l === 'Serbisk' || l === 'Kroatisk' || l === 'Bosnisk'
                  
                  let targetRegion = 'other'
                  if (isNorwegian) targetRegion = 'norway'
                  else if (isEnglish) targetRegion = 'english'
                  else if (isBalkans) targetRegion = 'balkans'

                  const isHighlighted = hoveredRegion === targetRegion || (hoveredRegion === 'all' && targetRegion !== 'other')

                  return (
                    <span
                      key={l}
                      onMouseEnter={() => setHoveredRegion(targetRegion)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      style={{
                        ...chip,
                        cursor: 'default',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: isHighlighted ? 'var(--accent, #1a73ff)' : '#f4f4f6',
                        color: isHighlighted ? '#fff' : '#3c434c',
                        transform: isHighlighted ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      {l}
                    </span>
                  )
                })}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 auto', margin: '0 auto' }}>
                <svg width="180" height="96" viewBox="0 0 180 96" fill="none" style={{ overflow: 'visible' }}>
                  {MAP_DOTS.map((dot, idx) => {
                    const isNorway = dot.region === 'norway'
                    const isEnglish = dot.region === 'english'
                    const isBalkans = dot.region === 'balkans'

                    let isActive = false
                    if (hoveredRegion === 'all') {
                      isActive = isNorway || isEnglish || isBalkans
                    } else if (hoveredRegion === 'norway') {
                      isActive = isNorway
                    } else if (hoveredRegion === 'english') {
                      isActive = isEnglish
                    } else if (hoveredRegion === 'balkans') {
                      isActive = isBalkans
                    }

                    return (
                      <circle
                        key={idx}
                        cx={dot.x * 12 + 6}
                        cy={dot.y * 12 + 6}
                        r={isActive ? 4.2 : 3}
                        fill={isActive ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.08)'}
                        style={{
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
