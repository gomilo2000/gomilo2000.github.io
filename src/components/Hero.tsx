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
    name: 'Vue',
    color: '#42b883',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21L1.5 3h4.5L12 13.5 18 3h4.5L12 21Z" fill="#42b883" />
        <path d="M12 17L5 4.5h3L12 13l4-8.5h3L12 17Z" fill="#35495e" />
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
  },
  {
    name: 'Python',
    color: '#3776ab',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2c-2.7 0-2.5 1.2-2.5 1.2v1.6h5v.7h-5v2.8h-2.2S3 8 3 10.7s2.3 2.5 2.3 2.5h1.4v-2c0-1.4 1.2-2.5 2.5-2.5h5V5.5S14.7 2 12 2ZM12 22c2.7 0 2.5-1.2 2.5-1.2v-1.6h-5v-.7h5v-2.8h2.2S21 16 21 13.3s-2.3-2.5-2.3-2.5h-1.4v2c0 1.4-1.2 2.5-2.5 2.5h-5v3.2S9.3 22 12 22Z" fill="#3776ab" />
      </svg>
    )
  }
]

export default function Hero() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

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
          Junior Developer · Fullstack
        </span>

        <h1 style={{ margin: '24px 0 0', fontSize: 'clamp(38px,5vw,66px)', lineHeight: 1.02, fontWeight: 800, letterSpacing: '-.035em', color: '#0f1115' }}>
          Hi, I&apos;m <span style={{ color: 'var(--accent)' }}>Goran</span>.
        </h1>

        <p style={{ margin: '24px 0 0', maxWidth: 640, fontSize: 18, lineHeight: 1.55, color: '#5b6068' }}>
          Junior fullstack developer from Norway, building intuitive products across web and mobile.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 34 }}>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className="btn-dark"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: '#111418', color: '#fff', fontSize: 16, fontWeight: 500, padding: '16px 26px', borderRadius: 14, textDecoration: 'none', boxShadow: '0 12px 28px -12px rgba(0,0,0,.65)' }}
          >
            View my projects
            <ArrowRight />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="btn-ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#14161a', fontSize: 16, fontWeight: 500, padding: '16px 6px', textDecoration: 'none' }}
          >
            Get in touch
            <ArrowRight />
          </a>
        </div>

        <p style={{ margin: '56px 0 16px', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa0a6' }}>
          Tech I work with
        </p>
        
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', minHeight: 46 }}>
          {TECH_BADGES.map((badge, idx) => {
            const isHovered = hoveredBadge === idx
            return (
              <div
                key={badge.name}
                className="tech-badge"
                onMouseEnter={() => setHoveredBadge(idx)}
                onMouseLeave={() => setHoveredBadge(null)}
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
                  transform: isHovered ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
                  borderColor: isHovered ? badge.color : 'rgba(15,20,40,.06)',
                  boxShadow: isHovered 
                    ? `0 12px 24px -10px ${badge.color}80, 0 0 20px ${badge.color}35`
                    : '0 4px 12px -8px rgba(20,24,50,.15)',
                }}
              >
                {badge.icon}
                <span>{badge.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      <PhoneScroller />
    </section>
  )
}

