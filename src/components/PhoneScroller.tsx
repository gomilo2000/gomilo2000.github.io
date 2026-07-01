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

function EmptyPhone({ imageSrc }: { imageSrc?: string }) {
  return (
    <div style={phone}>
      <div
        style={{
          ...screen,
          background: imageSrc ? '#0e1018' : 'repeating-linear-gradient(45deg,#e7e8ea 0 9px,#f1f2f4 9px 18px)',
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Phone preview"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        ) : (
          <div style={{ ...island, zIndex: 1 }} />
        )}
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
  language?: 'en' | 'no'
  activeColor?: string
}

const col1Images: (string | undefined)[] = [
  '/project1/askimtreningssenter_phone1.png',
  undefined,
]

const col2Images: (string | undefined)[] = [
  '/project2/angerman_phone1.png',
  undefined,
]

const col1Track = [...col1Images, ...col1Images]
const col2Track = [...col2Images, ...col2Images]

export default function PhoneScroller({ language = 'en', activeColor }: PhoneScrollerProps) {
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
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${primaryGlowColor}, transparent 65%)`,
            top: 'calc(50% - 250px)',
            left: 'calc(50% - 250px)',
            filter: 'blur(30px)',
            animation: 'cc-glow 7s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondaryGlowColor}, transparent 60%)`,
            bottom: 30,
            left: '15%',
            filter: 'blur(25px)',
            animation: 'cc-glow 9s ease-in-out infinite reverse',
            pointerEvents: 'none',
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
              {col1Track.map((imgSrc, i) => (
                <EmptyPhone key={i} imageSrc={imgSrc} />
              ))}
            </div>
          </div>
          <div style={{ ...column, marginTop: -46 }}>
            <div style={{ ...track, animation: 'he-down 24s linear infinite' }}>
              {col2Track.map((imgSrc, i) => (
                <EmptyPhone key={i} imageSrc={imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
