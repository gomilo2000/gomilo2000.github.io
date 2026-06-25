import { useState, type CSSProperties } from 'react'

interface ProjectData {
  id: string
  title: string
  category: { en: string; no: string }
  desc: { en: string; no: string }
  tech: string[]
  images?: { src: string; label: { en: string; no: string } }[]
  details: {
    overview: { en: string; no: string }
    features: { en: string[]; no: string[] }
    challenges: { en: string; no: string }
    repo?: { en: string; no: string }
  }
}

const ASKIM_PROJECT: ProjectData = {
  id: 'askim-treningssenter',
  title: 'Askim Treningssenter',
  category: {
    en: 'Featured Project · Web Design',
    no: 'Utvalgt prosjekt · Nettside',
  },
  desc: {
    en: 'A modern, high-performance landing page designed as a concept to replace the website of a 24/7 fitness center in Askim, Norway.',
    no: 'En moderne landingsside med høy ytelse, designet som et konsept for å erstatte nettstedet til Askim Treningssenter.',
  },
  tech: ['React', 'TypeScript', 'Vite', 'Vanilla CSS', 'Responsive UI'],
  details: {
    overview: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      no: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    features: {
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation.',
      ],
      no: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation.',
      ],
    },
    challenges: {
      en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      no: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    repo: {
      en: 'The repository for this project is private but can be provided upon request.',
      no: 'Repositoriet for dette prosjektet er privat, men kan oppgis på forespørsel.',
    },
  },
}

interface ProjectsProps {
  language: 'en' | 'no'
}

export default function Projects({ language }: ProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const t = {
    eyebrow: language === 'en' ? 'Projects' : 'Prosjekter',
    heading: language === 'en' ? 'Selected projects' : 'Utvalgte prosjekter',
    sideText: language === 'en' ? 'Here are some of the projects I have worked on.' : 'Her er noen av prosjektene jeg har jobbet med.',
    underConstruction: language === 'en' ? 'Under construction' : 'Under konstruksjon',
    dustTitle: language === 'en' ? 'Pardon the dust' : 'Beklager rotet',
    dustText: language === 'en' ? "I'm wrapping up a few fresh projects right now. Check back soon." : 'Jeg ferdigstiller noen spennende prosjekter akkurat nå. Kom innom igjen snart.',
    buildingTitle: language === 'en' ? 'Building case studies' : 'Bygger prosjekter',
    progressStatus: language === 'en' ? 'in progress' : 'pågår',
    viewProject: language === 'en' ? 'View project details' : 'Se detaljer om prosjektet',
    hideProject: language === 'en' ? 'Hide project details' : 'Skjul detaljer',
    techTitle: language === 'en' ? 'Technologies used' : 'Teknologier brukt',
    overviewTitle: language === 'en' ? 'Overview' : 'Oversikt',
    featuresTitle: language === 'en' ? 'Key Features' : 'Viktige funksjoner',
    challengesTitle: language === 'en' ? 'Challenges & Solutions' : 'Utfordringer og løsninger',
    repoTitle: language === 'en' ? 'Code' : 'Kode',
  }

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  return (
    <section id="projects" style={{ scrollMarginTop: 90, padding: '130px clamp(48px, 8vw, 160px)', background: '#f5f5f7' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 64 }}>
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{t.eyebrow}</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>{t.heading}</h2>
        </div>
        <p style={{ margin: 0, fontSize: 17, color: '#5b6068', maxWidth: 480 }}>{t.sideText}</p>
      </div>

      {/* Featured Project Card (Askim Treningssenter) */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card-container"
        style={{
          position: 'relative',
          borderRadius: 24,
          background: '#18191b', // dark brand background
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered 
            ? '0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 2px #f58220' 
            : '0 20px 45px -25px rgba(0,0,0,0.35)',
          cursor: 'pointer',
          padding: 0, // removed general card padding for edge-to-edge canvas visual
          marginTop: 40,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered && !isExpanded ? 'translateY(-6px)' : 'translateY(0)',
          overflow: 'visible', // allow mockups to stick out of the top
        }}
      >
        {/* Left Side: Details */}
        <div style={{ zIndex: 2, padding: '36px clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f58220' }}>
            {ASKIM_PROJECT.category[language]}
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-.02em' }}>
            {ASKIM_PROJECT.title}
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
            {ASKIM_PROJECT.desc[language]}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 0 }}>
            {ASKIM_PROJECT.tech.map((tech) => (
              <span key={tech} style={{ fontSize: 12, fontWeight: 600, color: '#e1e3e6', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: 8 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Dark glowing dot mesh canvas containing floating mockups */}
        <div 
          className="desktop-only"
          style={{ 
            position: 'relative', 
            height: '100%', 
            minHeight: 320, 
            background: '#18191b', // matching dark brand background
            borderRadius: isExpanded ? '0 24px 0 0' : '0 24px 24px 0',
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            zIndex: 2,
          }}
        >
          {/* Dot Grid and Glow Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              backgroundPosition: 'center',
              borderRadius: isExpanded ? '0 23px 0 0' : '0 23px 23px 0',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Glows */}
            <div
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 130, 32, 0.18) 0%, transparent 70%)',
                top: '-50px',
                left: '-20px',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 130, 32, 0.08) 0%, transparent 70%)',
                bottom: '-40px',
                right: '-20px',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* macOS Browser Mockup - Centered vertically */}
          <div
            style={{
              position: 'absolute',
              left: '6%',
              top: '30px',    // Centered vertically (320px height - 260px mockup) / 2
              height: '260px',
              width: '84%',
              background: '#1a1c23',
              borderRadius: '10px',
              boxShadow: '0 25px 50px -15px rgba(0,0,0,0.65)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 1,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              transform: hovered && !isExpanded ? 'translateY(-4px) scale(1.01) rotate(-0.5deg)' : 'rotate(0deg)',
            }}
          >
            {/* macOS Title Bar */}
            <div
              style={{
                height: 24,
                background: '#1a1c23',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 10,
                gap: 6,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
            </div>
            {/* Screen */}
            <div style={{ flex: 1, background: '#000', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/project1/askimtreningssenter_desktop1.png"
                alt="Askim Treningssenter Desktop"
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>

          {/* Phone Mockup - Centered vertically overlapping macOS browser window */}
          <div
            style={{
              position: 'absolute',
              right: '4%',
              top: '45px',    // Centered vertically (320px height - 230px mockup) / 2
              height: '230px', // fixed height to prevent stretching
              aspectRatio: '9/18.5',
              background: '#090a0f',
              borderRadius: '16px',
              padding: '4px',
              border: '2px solid #1f2026',
              boxShadow: '0 30px 50px -12px rgba(0,0,0,0.7)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              transform: hovered && !isExpanded ? 'translateY(-6px) scale(1.02) rotate(1.5deg)' : 'rotate(0deg)',
            }}
          >
            <div style={{ flex: 1, background: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/project1/askimtreningssenter_phone1.png"
                alt="Askim Treningssenter Phone"
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              {/* Glare effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
                borderRadius: '12px',
                pointerEvents: 'none',
                zIndex: 5,
              }} />
            </div>
          </div>

          {/* Floating Askim Logo without pill, positioned to overlap desktop mockup screen */}
          <div 
            style={{
              position: 'absolute',
              bottom: '20px', // slightly sticks out below the bottom of the PC screen (which is at bottom: 30px)
              left: 'calc(6% - 15px)', // slightly sticks out to the left of the PC screen (which is at left: 6%)
              zIndex: 4,
              pointerEvents: 'none',
              transition: 'all 0.35s ease',
              transform: hovered && !isExpanded ? 'translateY(-3px)' : 'translateY(0)',
            }}
          >
            <img 
              src="/project1/askim_logo.png" 
              alt="Askim Treningssenter Logo" 
              draggable={false}
              style={{ height: 28, width: 'auto', objectFit: 'contain' }} 
            />
          </div>
        </div>

        {/* Row 2: Expanded Inline Details */}
        {isExpanded && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              gridColumn: 'span 2',
              paddingTop: 48,
              paddingBottom: 56, // padding at the bottom to prevent card shape cut-off
              paddingInline: 'clamp(24px, 4vw, 48px)',
              background: '#282b30', // matching gym project alt card background
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              animation: 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            <div className="project-expanded-grid">
              {/* Left Column: macOS Mockup for Video Preview */}
              <div
                style={{
                  background: '#0a0c10',
                  borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  height: 520,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                }}
              >
                {/* macOS Title Bar */}
                <div
                  style={{
                    height: 32,
                    background: '#1a1c23',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 16,
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                </div>
                {/* Screen Content */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#18191b',
                    position: 'relative',
                  }}
                >
                  <div style={{ textAlign: 'center', padding: 24 }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(245, 130, 32, 0.1)',
                      border: '2px solid #f58220',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                      color: '#f58220'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#ffffff',
                      letterSpacing: '-.01em',
                    }}>
                      {language === 'en' ? 'Video preview coming soon' : 'Videoforhåndsvisning kommer snart'}
                    </p>
                    <p style={{
                      margin: '6px 0 0',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.4)',
                    }}>
                      {language === 'en' ? 'A concept walk-through is currently being recorded.' : 'En gjennomgang av konseptet blir spilt inn.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Information Pane */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '12px 0' }}>
                {/* Overview */}
                {ASKIM_PROJECT.details.overview[language] && (
                  <div>
                    <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: '#f58220', letterSpacing: '.06em' }}>
                      {t.overviewTitle}
                    </h5>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                      {ASKIM_PROJECT.details.overview[language]}
                    </p>
                  </div>
                )}

                {/* Features */}
                {ASKIM_PROJECT.details.features[language] && ASKIM_PROJECT.details.features[language].length > 0 && (
                  <div>
                    <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: '#f58220', letterSpacing: '.06em' }}>
                      {t.featuresTitle}
                    </h5>
                    <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {ASKIM_PROJECT.details.features[language].map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {ASKIM_PROJECT.details.challenges[language] && (
                  <div>
                    <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: '#f58220', letterSpacing: '.06em' }}>
                      {t.challengesTitle}
                    </h5>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                      {ASKIM_PROJECT.details.challenges[language]}
                    </p>
                  </div>
                )}

                {/* Repository */}
                {ASKIM_PROJECT.details.repo && (
                  <div>
                    <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: '#f58220', letterSpacing: '.06em' }}>
                      {t.repoTitle}
                    </h5>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                      {ASKIM_PROJECT.details.repo[language]}
                    </p>
                  </div>
                )}

                {/* Collapse Button */}
                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <button
                    onClick={toggleExpanded}
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'transparent',
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: 13,
                      fontWeight: 600,
                      padding: '10px 18px',
                      borderRadius: 10,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    {language === 'en' ? 'Collapse details' : 'Skjul detaljer'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Under Construction taped card */}
      <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', border: '1px solid rgba(15,20,40,.08)', background: '#fff', boxShadow: '0 30px 60px -38px rgba(20,30,70,.30)' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 16,
            background: 'repeating-linear-gradient(135deg, #f6c700, #f6c700 10px, #1b1b1b 10px, #1b1b1b 20px)',
            zIndex: 10,
            boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 16,
            background: 'repeating-linear-gradient(135deg, #f6c700, #f6c700 10px, #1b1b1b 10px, #1b1b1b 20px)',
            zIndex: 10,
            boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
          }}
        />
        <div style={{ padding: '72px 40px 76px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'radial-gradient(circle at 50% -10%, #fafafb, #fff 70%)' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
            <div style={{ position: 'absolute', width: 132, height: 132, borderRadius: '50%', background: 'radial-gradient(circle, rgba(246,199,0,.20), rgba(246,199,0,0) 70%)' }} />
            <div style={{ position: 'relative', width: 128, height: 128, borderRadius: '50%', background: '#fff', border: '1px solid #ededf0', boxShadow: '0 14px 30px -16px rgba(20,30,70,.30)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width={84} height={66} viewBox="0 0 118 92" fill="none">
                <ellipse cx={59} cy={80} rx={50} ry={9} fill="#f6c700" />
                <path d="M9 80c0-3 3-6 8-7 8-2 24-3 42-3s34 1 42 3c5 1 8 4 8 7" fill="#ffd21a" />
                <path d="M20 72c0-22 16-40 39-40s39 18 39 40c0 2-1 3-3 3H23c-2 0-3-1-3-3Z" fill="#ffce0a" />
                <path d="M52 33c2-1 5-1 7-1v40H45V72c0-19 3-33 7-39Z" fill="#ffd84d" />
                <path d="M59 32c2 0 5 0 7 1 4 6 7 20 7 39v3H59V32Z" fill="#f0bd00" />
                <rect x={22} y={68} width={74} height={9} rx={4} fill="#222" />
                <rect x={55} y={24} width={8} height={12} rx={3} fill="#222" />
              </svg>
            </div>
          </div>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#a07c00', background: '#fef6d6', border: '1px solid #f3e4a8', padding: '7px 15px', borderRadius: 999 }}>
            {t.underConstruction}
          </span>
          <h3 style={{ margin: '18px 0 0', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>{t.dustTitle}</h3>
          <p style={{ margin: '16px 0 0', maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: '#5b6068' }}>
            {t.dustText}
          </p>
 
          <div style={{ width: '100%', maxWidth: 380, marginTop: 34 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#3c434c' }}>{t.buildingTitle}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#9aa0a6', fontFamily: "ui-monospace,'SF Mono',Menlo,monospace" }}>{t.progressStatus}</span>
            </div>
            <div style={{ position: 'relative', height: 9, borderRadius: 999, background: '#ececed', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '0 auto 0 0', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 55%, #fff))', animation: 'cc-build 2.6s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
