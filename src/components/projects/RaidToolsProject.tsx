import { useState } from 'react'
import { RAIDTOOLS_PROJECT, RAIDTOOLS_SLIDES } from '../../data/projects'
import DetailCard from './DetailCard'
import Lightbox from './Lightbox'
import { raidtoolsTheme } from '../../theme'

interface RaidToolsProjectProps {
  language: 'en' | 'no'
  isMobile: boolean
}

export default function RaidToolsProject({ language, isMobile }: RaidToolsProjectProps) {
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
      {/* Featured Project Card 3 (TIF RaidTools) */}
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
          background: raidtoolsTheme.cardBg,
          border: raidtoolsTheme.cardBorder,
          boxShadow: hovered && !isMobile
            ? raidtoolsTheme.hoverShadow
            : raidtoolsTheme.idleShadow,
          cursor: isMobile ? 'default' : 'pointer',
          padding: 0,
          marginTop: 60,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered && !isExpanded && !isMobile ? 'translateY(-6px)' : 'translateY(0)',
          overflow: 'visible',
        }}
      >
        {/* Left Side: Details */}
        <div style={{ zIndex: 2, padding: '36px clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: raidtoolsTheme.categoryColor }}>
            {RAIDTOOLS_PROJECT.category[language]}
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: raidtoolsTheme.titleColor, letterSpacing: '-.02em' }}>
            {RAIDTOOLS_PROJECT.title}
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: raidtoolsTheme.descColor, marginBottom: 20 }}>
            {RAIDTOOLS_PROJECT.desc[language]}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 0 }}>
            {RAIDTOOLS_PROJECT.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: raidtoolsTheme.tagText,
                  background: raidtoolsTheme.tagBg,
                  border: raidtoolsTheme.tagBorder,
                  padding: '6px 12px',
                  borderRadius: 8,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action indicator (Desktop only) */}
          {!isMobile && (
            <div
              style={{
                marginTop: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: hovered ? raidtoolsTheme.actionColorHover : raidtoolsTheme.actionColorIdle,
                transition: 'color 0.25s ease',
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                {isExpanded
                  ? (language === 'en' ? 'Click to show less' : 'Klikk for å lukke')
                  : (language === 'en' ? 'Click to view details' : 'Klikk for detaljer')}
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
                  transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>

        {/* Right Side: Dark glowing dot mesh canvas containing floating mockup */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 320,
            background: raidtoolsTheme.visualBg,
            borderRadius: isMobile ? '0 0 24px 24px' : (isExpanded ? '0 24px 0 0' : '0 24px 24px 0'),
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: isMobile ? 'none' : '1px solid rgba(59, 130, 246, 0.15)',
            borderTop: isMobile ? '1px solid rgba(59, 130, 246, 0.15)' : 'none',
            zIndex: 2,
          }}
        >
          {/* Dot Grid and Glow Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 0)',
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
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
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
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
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
              top: '30px',
              height: '260px',
              width: '84%',
              background: '#0e1526',
              borderRadius: '10px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
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
                height: 32,
                background: '#131b2e',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 16,
                gap: 8,
                borderBottom: '1px solid rgba(59, 130, 246, 0.15)',
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
            </div>

            {/* Screen Content */}
            <div style={{ flex: 1, background: '#0b111e', position: 'relative', overflow: 'hidden' }}>
              <img
                src="/project3/raidtools_desktop1.png"
                alt="TIF RaidTools Preview"
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
              />
            </div>
          </div>

          {/* Floating RaidTools Logo without pill, positioned to overlap desktop mockup screen */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: 'calc(6% - 15px)',
              zIndex: 4,
              pointerEvents: 'none',
              transition: 'all 0.35s ease',
              transform: hovered && !isExpanded ? 'translateY(-3px)' : 'translateY(0)',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6))',
            }}
          >
            <img
              src="/project3/raidtools_logo.png"
              alt="TIF RaidTools Logo"
              draggable={false}
              style={{ height: 32, width: 'auto', objectFit: 'contain' }}
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
              paddingBottom: 56,
              paddingInline: 'clamp(24px, 4vw, 48px)',
              background: '#070b14',
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid rgba(59, 130, 246, 0.16)',
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
                  alignItems: 'stretch',
                }}
              >
                {/* 01 Overview Card */}
                {RAIDTOOLS_PROJECT.details.overview[language] && (
                  <DetailCard
                    num="01"
                    title={t.overviewTitle}
                    theme={raidtoolsTheme}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#cbd5e1' }}>
                        {RAIDTOOLS_PROJECT.details.overview[language]}
                      </p>
                    }
                  />
                )}

                {/* 02 Features Card */}
                {RAIDTOOLS_PROJECT.details.features[language] && RAIDTOOLS_PROJECT.details.features[language].length > 0 && (
                  <DetailCard
                    num="02"
                    title={t.featuresTitle}
                    theme={raidtoolsTheme}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                        {RAIDTOOLS_PROJECT.details.features[language].map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <div
                              style={{
                                flexShrink: 0,
                                width: 18,
                                height: 18,
                                borderRadius: 5,
                                background: 'rgba(59, 130, 246, 0.18)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 2,
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span style={{ fontSize: 14, lineHeight: 1.5, color: '#cbd5e1' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    }
                  />
                )}

                {/* 03 Challenges & Solutions Card */}
                {RAIDTOOLS_PROJECT.details.challenges[language] && (
                  <DetailCard
                    num="03"
                    title={t.challengesTitle}
                    theme={raidtoolsTheme}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#cbd5e1' }}>
                        {RAIDTOOLS_PROJECT.details.challenges[language]}
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
                    src={RAIDTOOLS_SLIDES[activeSlide]}
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
                      e.stopPropagation()
                      setActiveSlide((prev) => (prev === 0 ? RAIDTOOLS_SLIDES.length - 1 : prev - 1))
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
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveSlide((prev) => (prev === RAIDTOOLS_SLIDES.length - 1 ? 0 : prev + 1))
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
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicator Dots */}
                  <div
                    style={{
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
                    }}
                  >
                    {RAIDTOOLS_SLIDES.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveSlide(idx)
                        }}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: activeSlide === idx ? '#3b82f6' : 'rgba(255,255,255,0.4)',
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
            {RAIDTOOLS_PROJECT.details.repo && (
              <div
                style={{
                  marginTop: 32,
                  background: 'linear-gradient(90deg, #0d1424 0%, #0a0f1d 100%)',
                  borderRadius: 16,
                  border: '1px solid rgba(59, 130, 246, 0.18)',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                  flexWrap: 'wrap',
                }}
              >
                {/* Left Side: Icon & Texts */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 280, flex: 1 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>
                      {language === 'en' ? 'Source code' : 'Kildekode'}
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                      {RAIDTOOLS_PROJECT.details.repo[language]}
                    </p>
                  </div>
                </div>

                {/* Right Side: Request Access Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid rgba(255, 255, 255, 0.15)',
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
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
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

      {/* Fullscreen Lightbox Zoom Modal */}
      <Lightbox
        isOpen={isZoomed}
        slides={RAIDTOOLS_SLIDES}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        onClose={() => setIsZoomed(false)}
        activeDotColor="#3b82f6"
      />
    </>
  )
}
