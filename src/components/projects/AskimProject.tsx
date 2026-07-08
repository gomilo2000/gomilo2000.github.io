import { useState } from 'react'
import { ASKIM_PROJECT, ASKIMTRENINGSSENTER_SLIDES } from '../../data/projects'
import DetailCard from './DetailCard'
import Lightbox from './Lightbox'

interface AskimProjectProps {
  language: 'en' | 'no'
  isMobile: boolean
}

export default function AskimProject({ language, isMobile }: AskimProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const t = {
    overviewTitle: language === 'en' ? 'Overview' : 'Oversikt',
    featuresTitle: language === 'en' ? 'Key Features' : 'Viktige funksjoner',
    challengesTitle: language === 'en' ? 'Challenges & Solutions' : 'Utfordringer og løsninger',
  }

  return (
    <>
      {/* Featured Project Card (Askim Treningssenter) */}
      <div
        onClick={() => {
          if (!isMobile) {
            setIsExpanded((prev) => !prev)
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card-container"
        style={{
          position: 'relative',
          borderRadius: 24,
          background: '#18191b', // dark brand background
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered && !isMobile
            ? '0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 2px #f58220'
            : '0 20px 45px -25px rgba(0,0,0,0.35)',
          cursor: isMobile ? 'default' : 'pointer',
          padding: 0, // removed general card padding for edge-to-edge canvas visual
          marginTop: 40,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered && !isExpanded && !isMobile ? 'translateY(-6px)' : 'translateY(0)',
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

          {/* Action indicator (Desktop only) */}
          {!isMobile && (
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, color: hovered ? '#f58220' : 'rgba(255,255,255,0.45)', transition: 'color 0.25s ease' }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                {isExpanded 
                  ? (language === 'en' ? 'Click to show less' : 'Klikk for å lukke')
                  : (language === 'en' ? 'Click to view details' : 'Klikk for detaljer')
                }
              </span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)' 
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>

        {/* Right Side: Dark glowing dot mesh canvas containing floating mockups */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 320,
            background: '#18191b', // matching dark brand background
            borderRadius: isMobile ? '0 0 24px 24px' : (isExpanded ? '0 24px 0 0' : '0 24px 24px 0'),
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
            borderTop: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
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
              borderRadius: isMobile ? '0 0 23px 23px' : (isExpanded ? '0 23px 0 0' : '0 23px 23px 0'),
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
              background: '#14161a', // matching gym project alt card background
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              animation: 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               {/* Top Row: 3-Column Detailed Information Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: 32, 
                  alignItems: 'stretch' 
                }}
              >
                {/* Overview Card */}
                {ASKIM_PROJECT.details.overview[language] && (
                  <DetailCard
                    num="01"
                    title={t.overviewTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>
                        {ASKIM_PROJECT.details.overview[language]}
                      </p>
                    }
                  />
                )}

                {/* Features Card */}
                {ASKIM_PROJECT.details.features[language] && ASKIM_PROJECT.details.features[language].length > 0 && (
                  <DetailCard
                    num="02"
                    title={t.featuresTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 17 2 2 4-4" />
                        <path d="m3 7 2 2 4-4" />
                        <line x1="13" x2="21" y1="6" y2="6" />
                        <line x1="13" x2="21" y1="12" y2="12" />
                        <line x1="13" x2="21" y1="18" y2="18" />
                        <path d="m3 12 2 2 4-4" />
                      </svg>
                    }
                    content={
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {ASKIM_PROJECT.details.features[language].map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <div style={{
                              flexShrink: 0,
                              width: 18,
                              height: 18,
                              borderRadius: 5,
                              background: 'rgba(245, 130, 32, 0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 2,
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    }
                  />
                )}

                {/* Challenges & Solutions Card */}
                {ASKIM_PROJECT.details.challenges[language] && (
                  <DetailCard
                    num="03"
                    title={t.challengesTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>
                        {ASKIM_PROJECT.details.challenges[language]}
                      </p>
                    }
                  />
                )}
              </div>

              {/* Bottom Row: Full-width macOS Mockup Widescreen Slideshow */}
              <div
                style={{
                  background: '#0a0c10',
                  borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '16/9.5',
                  maxHeight: 580,
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
                    background: '#18191b',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* The Slide Image */}
                  <img
                    src={ASKIMTRENINGSSENTER_SLIDES[activeSlide]}
                    alt={`Slide ${activeSlide + 1}`}
                    onClick={() => setIsZoomed(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transition: 'opacity 0.3s ease-in-out',
                      cursor: 'zoom-in',
                    }}
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === 0 ? ASKIMTRENINGSSENTER_SLIDES.length - 1 : prev - 1));
                    }}
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === ASKIMTRENINGSSENTER_SLIDES.length - 1 ? 0 : prev + 1));
                    }}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicator Dots */}
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 6,
                    zIndex: 5,
                    background: 'rgba(17, 20, 24, 0.5)',
                    backdropFilter: 'blur(4px)',
                    padding: '6px 10px',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {ASKIMTRENINGSSENTER_SLIDES.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide(idx);
                        }}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: activeSlide === idx ? '#f58220' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Source Code / Request Access Banner */}
            {ASKIM_PROJECT.details.repo && (
              <div style={{
                marginTop: 32,
                background: 'linear-gradient(90deg, #1d1a18 0%, #15161a 100%)',
                borderRadius: 16,
                border: '1px solid rgba(245, 130, 32, 0.15)',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                flexWrap: 'wrap',
              }}>
                {/* Left Side: Icon & Texts */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 280, flex: 1 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(245, 130, 32, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>
                      {language === 'en' ? 'Source code' : 'Kildekode'}
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                      {language === 'en'
                        ? 'Repository is private but can be provided upon request.'
                        : 'Kildekoden er privat, men kan oppgis ved forespørsel.'}
                    </p>
                  </div>
                </div>

                {/* Right Side: Request Access Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'transparent',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '10px 20px',
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {language === 'en' ? 'Request access' : 'Be om tilgang'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox for zooming slides */}
      <Lightbox
        isOpen={isZoomed}
        slides={ASKIMTRENINGSSENTER_SLIDES}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        onClose={() => setIsZoomed(false)}
        activeDotColor="#f58220"
      />
    </>
  )
}
