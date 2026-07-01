import { useState, type CSSProperties } from 'react'
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
    techTitle: language === 'en' ? 'Tech I work with' : 'Teknologi jeg bruker'
  }

  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

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
                  background: isActive
                    ? '#ffffff'
                    : isHovered
                      ? `color-mix(in srgb, ${badge.color} 18%, #ffffff)` 
                      : `color-mix(in srgb, ${badge.color} 8%, #ffffff)`,
                  border: '1.5px solid',
                  color: showGlow 
                    ? `color-mix(in srgb, ${badge.color} 50%, #080c14)` 
                    : `color-mix(in srgb, ${badge.color} 30%, #1c1e21)`,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transform: isActive 
                    ? 'scale(1.06) translateY(-3px)' 
                    : isHovered 
                      ? 'scale(1.12) translateY(-6px)' 
                      : 'scale(1)',
                  borderColor: showGlow 
                    ? badge.color 
                    : `color-mix(in srgb, ${badge.color} 24%, #ffffff)`,
                  boxShadow: isActive
                    ? `0 12px 24px -10px ${badge.color}60, 0 4px 12px -6px ${badge.color}20, inset 0 -2.5px 0 color-mix(in srgb, ${badge.color} 40%, #ffffff)`
                    : isHovered
                      ? `0 16px 28px -10px ${badge.color}50, 0 4px 12px -6px ${badge.color}20, inset 0 -2.5px 0 color-mix(in srgb, ${badge.color} 40%, rgba(0,0,0,0.08))`
                      : `0 6px 16px -8px rgba(15,20,40,0.12), 0 1px 3px rgba(15,20,40,0.04), inset 0 -2.5px 0 color-mix(in srgb, ${badge.color} 20%, rgba(0,0,0,0.05))`,
                }}
              >
                {badge.icon}
                <span>{badge.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      <PhoneScroller language={language} activeColor={activeBadge !== null ? TECH_BADGES[activeBadge].color : undefined} />
    </section>
  )
}

