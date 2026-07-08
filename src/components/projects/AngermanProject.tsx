import { useState } from 'react'
import { ANGERMAN_PROJECT, ANGERMAN_SLIDES } from '../../data/projects'
import DetailCard from './DetailCard'
import Lightbox from './Lightbox'

interface AngermanProjectProps {
  language: 'en' | 'no'
  isMobile: boolean
}

export default function AngermanProject({ language, isMobile }: AngermanProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const currentSlide = ANGERMAN_SLIDES[activeSlide]
  const isFigmaSlide = !!(currentSlide && currentSlide.includes('figma'))

  const t = {
    overviewTitle: language === 'en' ? 'Overview' : 'Oversikt',
    featuresTitle: language === 'en' ? 'Key Features' : 'Viktige funksjoner',
    challengesTitle: language === 'en' ? 'Challenges & Solutions' : 'Utfordringer og løsninger',
  }

  return (
    <>
      {/* Featured Project Card 2 (Angerman AS) */}
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
          background: '#ffffff', // premium light theme background
          border: '1px solid #e2e8f0', // soft border
          boxShadow: hovered && !isMobile
            ? '0 30px 60px -20px rgba(0,0,0,0.12), 0 0 0 2.5px #ffd000' // yellow outline glow
            : '0 20px 45px -25px rgba(0,0,0,0.06)',
          cursor: isMobile ? 'default' : 'pointer',
          padding: 0,
          marginTop: 60,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered && !isExpanded && !isMobile ? 'translateY(-6px)' : 'translateY(0)',
          overflow: 'visible',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
        }}
      >
        {/* Left Side (Desktop): Visual Mockups (3 Phones) */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 320, // same height as the previous card
            background: '#ffd000', // vibrant yellow brand background
            borderRadius: isMobile ? (isExpanded ? '0' : '0 0 24px 24px') : (isExpanded ? '24px 0 0 0' : '24px 0 0 24px'),
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: isMobile ? 'none' : '1px solid rgba(0,0,0,0.06)',
            borderBottom: isMobile ? '1px solid rgba(0,0,0,0.06)' : 'none',
            zIndex: 2,
            order: isMobile ? 2 : 1, // display on the left (first) on desktop
          }}
        >
          {/* Dot Grid and Glow Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              backgroundPosition: 'center',
              borderRadius: isMobile ? '0 0 23px 23px' : (isExpanded ? '23px 0 0 0' : '23px 0 0 23px'),
              overflow: 'hidden',
            }}
          >
            {/* Ambient Glossy Highlights */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                top: '-60px',
                left: '-40px',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
                bottom: '-40px',
                right: '-20px',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* 3 Phones Stack Layout - Anchored to center with translateX for perfect tight spacing */}
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Phone 1 (Left, Tilted) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 110px)', // centered vertically for 220px height
                height: '220px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '16px',
                padding: '2px', // ultra-thin bezel padding
                border: '1px solid #2e3039', // sleek bezel line
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered && !isExpanded ? 'translateX(-115%) translateY(4px) rotate(-10deg) scale(1.02)' : 'translateX(-100%) rotate(-6deg)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '13px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone2.png"
                  alt="Angerman Screen Left"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Phone 2 (Center, Main) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 130px)', // centered vertically for 260px height
                height: '260px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '20px',
                padding: '3px', // sleek bezel padding
                border: '1.5px solid #2e3039', // sleek bezel line
                boxShadow: '0 25px 45px -12px rgba(0,0,0,0.45)',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered && !isExpanded ? 'translateX(-50%) translateY(-6px) scale(1.04)' : 'translateX(-50%)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '16px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone1.png"
                  alt="Angerman Screen Center"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Phone 3 (Right, Tilted) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 110px)', // centered vertically for 220px height
                height: '220px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '16px',
                padding: '2px', // ultra-thin bezel padding
                border: '1px solid #2e3039', // sleek bezel line
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered && !isExpanded ? 'translateX(15%) translateY(4px) rotate(10deg) scale(1.02)' : 'translateX(0%) rotate(6deg)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '13px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone3.png"
                  alt="Angerman Screen Right"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>

          {/* Floating Angerman Logo - Scaled up on the bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              zIndex: 4,
              pointerEvents: 'none',
              transition: 'all 0.35s ease',
              transform: hovered && !isExpanded ? 'translateY(-3px)' : 'translateY(0)',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.18))',
            }}
          >
            <img
              src="/project2/angerman_logo.png"
              alt="Angerman AS Logo"
              draggable={false}
              style={{ height: 56, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right Side (Desktop): Details (Light Themed) */}
        <div
          style={{
            zIndex: 2,
            padding: '40px clamp(24px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: isMobile ? 1 : 2, // display on the right (second) on desktop
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#b27a00' }}>
            {ANGERMAN_PROJECT.category[language]}
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: '#0f1115', letterSpacing: '-.02em' }}>
            Angerman AS
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#4b5563', marginBottom: 24 }}>
            {ANGERMAN_PROJECT.desc[language]}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 0 }}>
            {ANGERMAN_PROJECT.tech.map((tech) => (
              <span 
                key={tech} 
                style={{ 
                  fontSize: 12, 
                  fontWeight: 600, 
                  color: '#374151', 
                  background: '#f1f5f9', 
                  border: '1px solid #e2e8f0', 
                  padding: '6px 12px', 
                  borderRadius: 8 
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action indicator (Desktop only) */}
          {!isMobile && (
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, color: hovered ? '#b27a00' : '#6b7280', transition: 'color 0.25s ease' }}>
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

        {/* Row 2: Expanded Inline Details (Light Themed) */}
        {isExpanded && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              gridColumn: 'span 2',
              order: 3, // keeps this drawer at the bottom of the grid
              paddingTop: 48,
              paddingBottom: 56,
              paddingInline: 'clamp(24px, 4vw, 48px)',
              background: '#f8fafc',
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid #e2e8f0',
              animation: 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {/* Detailed Cards Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: 32, 
                  alignItems: 'stretch' 
                }}
              >
                {/* Overview Card */}
                {ANGERMAN_PROJECT.details.overview[language] && (
                  <DetailCard
                    num="01"
                    title={t.overviewTitle}
                    theme="light"
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#4b5563' }}>
                        {ANGERMAN_PROJECT.details.overview[language]}
                      </p>
                    }
                  />
                )}

                {/* Features Card */}
                {ANGERMAN_PROJECT.details.features[language] && ANGERMAN_PROJECT.details.features[language].length > 0 && (
                  <DetailCard
                    num="02"
                    title={t.featuresTitle}
                    theme="light"
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                        {ANGERMAN_PROJECT.details.features[language].map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <div style={{
                              flexShrink: 0,
                              width: 18,
                              height: 18,
                              borderRadius: 5,
                              background: 'rgba(255, 179, 0, 0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 2,
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span style={{ fontSize: 14, lineHeight: 1.5, color: '#4b5563' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    }
                  />
                )}

                {/* Challenges & Solutions Card */}
                {ANGERMAN_PROJECT.details.challenges[language] && (
                  <DetailCard
                    num="03"
                    title={t.challengesTitle}
                    theme="light"
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#4b5563' }}>
                        {ANGERMAN_PROJECT.details.challenges[language]}
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
                  aspectRatio: isFigmaSlide ? '16/11' : '16/9.5', // Adjust for figma mockup size if present
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
                    src={currentSlide}
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
                      setActiveSlide((prev) => (prev === 0 ? ANGERMAN_SLIDES.length - 1 : prev - 1));
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
                      setActiveSlide((prev) => (prev === ANGERMAN_SLIDES.length - 1 ? 0 : prev + 1));
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
                    {ANGERMAN_SLIDES.map((_, idx) => (
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
                          background: activeSlide === idx ? '#ffd000' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Source Code Banner (Light Themed) */}
              {ANGERMAN_PROJECT.details.repo && (
                <div style={{
                  marginTop: 32,
                  background: 'linear-gradient(90deg, #fffbeb 0%, #ffffff 100%)',
                  borderRadius: 16,
                  border: '1px solid rgba(255, 208, 0, 0.3)',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                  flexWrap: 'wrap',
                  boxShadow: '0 4px 12px rgba(255, 208, 0, 0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 280, flex: 1 }}>
                    <div style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'rgba(255, 208, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f1115' }}>
                        {language === 'en' ? 'Source code' : 'Kildekode'}
                      </h4>
                      <p style={{ margin: '4px 0 0', fontSize: 14, color: '#4b5563' }}>
                        {language === 'en'
                          ? 'Repository is private but can be provided upon request.'
                          : 'Kildekoden er privat, men kan oppgis ved forespørsel.'}
                      </p>
                    </div>
                  </div>

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
                      border: '1px solid #cbd5e1',
                      background: 'transparent',
                      color: '#334155',
                      fontSize: 14,
                      fontWeight: 600,
                      padding: '10px 20px',
                      borderRadius: 10,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f8fafc'
                      e.currentTarget.style.borderColor = '#94a3b8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = '#cbd5e1'
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
          </div>
        )}
      </div>

      {/* Lightbox for zooming slides */}
      <Lightbox
        isOpen={isZoomed}
        slides={ANGERMAN_SLIDES}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        onClose={() => setIsZoomed(false)}
        activeDotColor="#ffd000"
      />
    </>
  )
}
