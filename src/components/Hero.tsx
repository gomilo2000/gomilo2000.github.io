import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { ArrowRight } from '../theme'
import PhoneScroller from './PhoneScroller'

/* Tech Badges data definition */
const TECH_BADGES = [
  {
    name: 'React',
    color: '#58c4dc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#58c4dc" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    color: '#2f74c0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#2f74c0" />
        <path d="M12 18h6v-2h-2V8h-4v2h2v6h-2v2ZM6 8h4v2H8v6h2v2H6v-2h2v-6H6V8Z" fill="#fff" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    color: '#f7df1e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#f7df1e" />
        <path d="M15 15c0 1-.5 1.5-1.5 1.5s-1.5-.5-1.5-1.5h-2c0 2 1.5 3 3.5 3s3.5-1 3.5-3v-7h-2.5l.5 2h1.5v5ZM6 15c0 1.5 1 2 2.5 2s2.5-1 2.5-2.5v-1H9v-1.5h4V15c0 2.5-1.5 3.5-4.5 3.5S4.5 17 4.5 15h1.5Z" fill="#111" />
      </svg>
    )
  },
  {
    name: 'C#',
    color: '#854cc7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#854cc7" />
        <path d="M11 8c-2 0-3.5 1.5-3.5 4s1.5 4 3.5 4c1.2 0 2.2-.6 2.8-1.5l-1.5-1c-.3.5-.7.7-1.3.7-1 0-1.7-.8-1.7-2.2s.7-2.2 1.7-2.2c.6 0 1 .2 1.3.7l1.5-1C13.2 8.6 12.2 8 11 8Z" fill="#fff" />
        <path d="M14 9.5h5v1h-5v-1ZM14 12.5h5v1h-5v-1ZM15.5 8.5h1v6h-1v-6ZM17.5 8.5h1v6h-1v-6Z" fill="#fff" />
      </svg>
    )
  },
  {
    name: 'Swift',
    color: '#f05138',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M2 19c6-1 10-6 11-10 1 3 3 5 5 6-3-5-3-11-2-12-3 2-6 5-8 9-2 2-3 4-6 7ZM22 22C14 20 8 13 9 7c1 3 2 5 4 6-2-4-1-8 1-9-1 2-2 4-2 6 2 0 6-3 8-7-2 4-2 8 0 11 1-2 2-3 2-5-1 4-1 9-2 11ZM12 21c-5-2-7-6-6-9 1 2 2 3 4 4-2-3-2-6-1-7-1 2-1 3-1 5 1 0 4-2 6-5-1 3-1 6 0 8 1-1 2-2 2-4-1 3-1 6-2 8Z" fill="#f05138" />
      </svg>
    )
  },
  {
    name: 'Kotlin',
    color: '#7f52ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#E2445C" />
          </linearGradient>
        </defs>
        <path d="M24 0H0v24h24L12 12Z" fill="url(#kotlin-grad)" />
      </svg>
    )
  },
  {
    name: 'Tailwind',
    color: '#06b6d4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.4 0-3.6 1.2-3.6 3.6 0 2.4 1.2 3.6 3.6 3.6 2.4 0 3.6-1.2 3.6-3.6C15.6 7.2 14.4 6 12 6ZM6 12c-2.4 0-3.6 1.2-3.6 3.6 0 2.4 1.2 3.6 3.6 3.6 2.4 0 3.6-1.2 3.6-3.6C9.6 13.2 8.4 12 6 12Z" fill="#06b6d4" />
      </svg>
    )
  },
  {
    name: 'Git',
    color: '#f05032',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M2.3 10.7l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4zm9.3-5.3h1v5.1c.5.3.9.8.9 1.4 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.9-1.4V5.4z" fill="#f05032" />
      </svg>
    )
  }
]

interface HeroProps {
  language: 'en' | 'no'
  accentColor: string | null
  setAccentColor: (color: string | null) => void
}

export default function Hero({ language, accentColor, setAccentColor }: HeroProps) {
  const t = {
    role: language === 'en' ? 'Junior Developer · Fullstack' : 'Juniorutvikler · Fullstack',
    title: language === 'en' ? "Hi, I'm " : "Hei, jeg er ",
    subtitle: language === 'en' 
      ? 'Junior fullstack developer from Norway, building intuitive products across web and mobile.'
      : 'Junior fullstack-utvikler fra Norge, som bygger intuitive produkter for web og mobil.',
    projectsBtn: language === 'en' ? 'View my projects' : 'Se mine prosjekter',
    contactBtn: language === 'en' ? 'Get in touch' : 'Ta kontakt',
    techTitle: language === 'en' ? 'Tech I work with' : 'Teknologi jeg bruker',
    clickMe: language === 'en' ? 'click me' : 'klikk meg'
  }

  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)
  const [topRowLastIdx, setTopRowLastIdx] = useState<number | null>(null)
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const updateTopRowLast = () => {
      const validRefs = badgeRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)
      if (validRefs.length === 0) return
      
      let minTop = Infinity
      validRefs.forEach(ref => {
        if (ref.offsetTop < minTop) {
          minTop = ref.offsetTop
        }
      })

      let lastIdx = 0
      for (let i = 0; i < badgeRefs.current.length; i++) {
        const ref = badgeRefs.current[i]
        if (ref && Math.abs(ref.offsetTop - minTop) < 5) {
          lastIdx = i
        }
      }
      setTopRowLastIdx(lastIdx)
    }

    updateTopRowLast()
    const timer = setTimeout(updateTopRowLast, 100)
    window.addEventListener('resize', updateTopRowLast)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateTopRowLast)
    }
  }, [])

  const activeBadgeIndex = accentColor 
    ? TECH_BADGES.findIndex(b => b.color === accentColor) 
    : -1

  const activeBadge = activeBadgeIndex !== -1 ? activeBadgeIndex : null

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section
      id="top"
      className="hero-grid"
      style={{
        scrollMarginTop: 90,
        display: 'grid',
        gridTemplateColumns: '1.05fr .95fr',
        gap: 80,
        alignItems: 'center',
        padding: '90px clamp(48px, 8vw, 160px) 110px',
        position: 'relative',
        overflow: 'hidden',
        background: activeBadge !== null ? `color-mix(in srgb, ${TECH_BADGES[activeBadge].color} 8%, #fcfcfd)` : '#fcfcfd',
        transition: 'background-color 0.4s ease',
      }}
    >
      <div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'color-mix(in srgb, var(--accent) 11%, #fff)',
            color: 'var(--accent)',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            padding: '8px 16px',
            borderRadius: 999,
          }}
        >
          {t.role}
        </span>

        <h1 style={{ margin: '24px 0 0', fontSize: 'clamp(38px,5vw,66px)', lineHeight: 1.02, fontWeight: 800, letterSpacing: '-.035em', color: '#0f1115' }}>
          {t.title}<span style={{ color: 'var(--accent)' }}>Goran</span>.
        </h1>

        <p style={{ margin: '24px 0 0', maxWidth: 640, fontSize: 18, lineHeight: 1.55, color: '#5b6068' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 34 }}>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className="btn-dark"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: '#111418', color: '#fff', fontSize: 16, fontWeight: 500, padding: '16px 26px', borderRadius: 14, textDecoration: 'none', boxShadow: '0 12px 28px -12px rgba(0,0,0,.65)' }}
          >
            {t.projectsBtn}
            <ArrowRight />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="btn-ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#14161a', fontSize: 16, fontWeight: 500, padding: '16px 6px', textDecoration: 'none' }}
          >
            {t.contactBtn}
            <ArrowRight />
          </a>
        </div>

        <p style={{ margin: '56px 0 16px', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa0a6' }}>
          {t.techTitle}
        </p>
        
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', minHeight: 46 }}>
          {TECH_BADGES.map((badge, idx) => {
            const isHovered = hoveredBadge === idx
            const isActive = activeBadge === idx
            const showGlow = isHovered || isActive
            return (
              <div
                key={badge.name}
                ref={(el) => { badgeRefs.current[idx] = el }}
                className="tech-badge"
                onMouseEnter={() => setHoveredBadge(idx)}
                onMouseLeave={() => setHoveredBadge(null)}
                onClick={() => {
                  if (activeBadge === idx) {
                    setAccentColor(null)
                  } else {
                    setAccentColor(badge.color)
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 12,
                  background: '#fff',
                  border: '1.5px solid rgba(15,20,40,.06)',
                  color: '#1c1e21',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transform: showGlow ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
                  borderColor: showGlow ? badge.color : 'rgba(15,20,40,.06)',
                  boxShadow: showGlow 
                    ? `0 12px 24px -10px ${badge.color}80, 0 0 20px ${badge.color}35`
                    : '0 4px 12px -8px rgba(20,24,50,.15)',
                  position: idx === topRowLastIdx ? 'relative' : undefined,
                }}
              >
                {badge.icon}
                <span>{badge.name}</span>
                {idx === topRowLastIdx && (
                  <div
                    className="tech-badge-indicator"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '105%',
                      display: 'flex',
                      alignItems: 'center',
                      pointerEvents: 'none',
                      transform: 'translateX(-50%) translateY(-2px)',
                      zIndex: 10,
                    }}
                  >
                    <svg width="120" height="65" viewBox="0 0 120 65" fill="none" style={{ overflow: 'visible' }}>
                      <path
                        d="M 105 10 C 70 8, 60 15, 60 55"
                        stroke="#000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 50 45 L 60 55 L 70 45"
                        stroke="#000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '22px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginLeft: '8px',
                        marginTop: '-35px',
                        transform: 'rotate(-5deg)',
                        display: 'inline-block',
                      }}
                    >
                      {t.clickMe}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <PhoneScroller language={language} activeColor={activeBadge !== null ? TECH_BADGES[activeBadge].color : undefined} />
    </section>
  )
}

