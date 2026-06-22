import type { CSSProperties } from 'react'

/* ---- a single empty placeholder phone (hatched screen + dynamic island) ---- */
const phone: CSSProperties = {
  flex: 'none',
  borderRadius: 34,
  background: '#0e1018',
  padding: 8,
  boxShadow: '0 30px 50px -28px rgba(20,30,70,.5)',
}
const screen: CSSProperties = {
  position: 'relative',
  borderRadius: 27,
  overflow: 'hidden',
  height: 368,
  background: 'repeating-linear-gradient(45deg,#e7e8ea 0 9px,#f1f2f4 9px 18px)',
}
const island: CSSProperties = {
  position: 'absolute',
  top: 12,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 58,
  height: 16,
  borderRadius: 99,
  background: '#0e1018',
}

function EmptyPhone() {
  return (
    <div style={phone}>
      <div style={screen}>
        <div style={island} />
      </div>
    </div>
  )
}

/**
 * Two columns of phones drifting in an infinite loop (opposite directions).
 * Screens are intentionally empty placeholders — real design previews drop in
 * here later, at which point this can become an interactive carousel.
 */
interface PhoneScrollerProps {
  activeColor?: string
}

export default function PhoneScroller({ activeColor }: PhoneScrollerProps) {
  const column: CSSProperties = { width: 214 }
  const track: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 18 }

  const primaryGlowColor = activeColor
    ? `color-mix(in srgb, color-mix(in srgb, ${activeColor} 70%, #000) 26%, transparent)`
    : 'color-mix(in srgb, var(--accent) 26%, transparent)'

  const secondaryGlowColor = activeColor
    ? `color-mix(in srgb, color-mix(in srgb, ${activeColor} 70%, #000) 26%, transparent)`
    : 'rgba(150,90,255,.26)'

  return (
    <div
      className="hero-visual"
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 480,
        overflow: 'hidden',
      }}
    >
      {/* Masked content wrapper */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          maskImage: 'linear-gradient(180deg, transparent, #000 20%, #000 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 20%, #000 80%, transparent)',
        }}
      >
        {/* glows */}
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            maxWidth: '120%',
            borderRadius: '50%',
            background: `radial-gradient(circle at 55% 45%, ${primaryGlowColor}, transparent 68%)`,
            top: 0,
            right: -30,
            filter: 'blur(8px)',
            animation: 'cc-glow 7s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 210,
            height: 210,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondaryGlowColor}, transparent 70%)`,
            bottom: 10,
            left: '4%',
            filter: 'blur(12px)',
            animation: 'cc-glow 9s ease-in-out infinite reverse',
          }}
        />

        {/* tilted belt */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: 'rotate(-9deg) scale(1.05)',
            display: 'flex',
            gap: 18,
            justifyContent: 'center',
          }}
        >
          <div style={column}>
            <div style={{ ...track, animation: 'he-up 20s linear infinite' }}>
              {Array.from({ length: 4 }).map((_, i) => <EmptyPhone key={i} />)}
            </div>
          </div>
          <div style={{ ...column, marginTop: -46 }}>
            <div style={{ ...track, animation: 'he-down 24s linear infinite' }}>
              {Array.from({ length: 4 }).map((_, i) => <EmptyPhone key={i} />)}
            </div>
          </div>
        </div>
      </div>

      {/* status pill */}
      <span
        style={{
          position: 'absolute',
          top: 6,
          right: 6,
          zIndex: 5,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#14161f',
          color: '#fff',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          padding: '9px 15px',
          borderRadius: 999,
          boxShadow: '0 8px 20px -8px rgba(0,0,0,.5)',
        }}
      >
        <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#f6c700', opacity: 0.6, animation: 'cc-ping 1.6s cubic-bezier(0,0,.2,1) infinite' }} />
          <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#e6b800' }} />
        </span>
        Previews coming soon
      </span>
    </div>
  )
}
