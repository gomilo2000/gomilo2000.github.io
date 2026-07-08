import { useEffect } from 'react'

interface LightboxProps {
  isOpen: boolean
  slides: string[]
  activeSlide: number
  setActiveSlide: (index: number | ((prev: number) => number)) => void
  onClose: () => void
  activeDotColor: string
}

export default function Lightbox({
  isOpen,
  slides,
  activeSlide,
  setActiveSlide,
  onClose,
  activeDotColor,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, slides.length, setActiveSlide, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(10, 12, 22, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
        padding: '24px',
        animation: 'fade-in 0.25s ease-out forwards',
      }}
    >
      {/* Zoomed Image */}
      <img
        src={slides[activeSlide]}
        alt="Project screenshot zoomed"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: '90%',
          maxWidth: '90%',
          objectFit: 'contain',
          borderRadius: '24px',
          boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
          border: '3px solid #1f2026',
          cursor: 'default',
        }}
      />

      {/* Lightbox Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        }}
        style={{
          position: 'absolute',
          left: 'clamp(12px, 3vw, 40px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Lightbox Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }}
        style={{
          position: 'absolute',
          right: 'clamp(12px, 3vw, 40px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Lightbox Slide Indicator Dots */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 8,
        zIndex: 10000,
        background: 'rgba(17, 20, 24, 0.75)',
        backdropFilter: 'blur(8px)',
        padding: '8px 14px',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {slides.map((_, idx) => (
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
              background: activeSlide === idx ? activeDotColor : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              transform: activeSlide === idx ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          color: '#fff',
          width: 44,
          height: 44,
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          transition: 'background 0.2s',
          zIndex: 10001,
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        ✕
      </button>
    </div>
  )
}
