import type { CSSProperties } from 'react'

const hazard: CSSProperties = { height: 6, background: 'repeating-linear-gradient(135deg,#f6c700 0 18px,#1b1b1b 18px 36px)' }

/**
 * Projects section — intentionally "under construction" while fresh case
 * studies are being prepared. Swap this panel for a grid of project cards
 * when the work is ready to show.
 */
export default function Projects() {
  return (
    <section id="projects" style={{ scrollMarginTop: 90, padding: '110px clamp(48px, 5.5vw, 80px)', background: '#f5f5f7' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 44 }}>
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Work</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>Selected projects</h2>
        </div>
        <p style={{ margin: 0, fontSize: 17, color: '#5b6068', maxWidth: 480 }}>Fresh work is in progress, this section is getting a makeover.</p>
      </div>

      <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', border: '1px solid rgba(15,20,40,.08)', background: '#fff', boxShadow: '0 30px 60px -38px rgba(20,30,70,.30)' }}>
        <div style={{ padding: '72px 40px 76px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'radial-gradient(circle at 50% -10%, #fafafb, #fff 70%)' }}>
          {/* hard hat in soft disc */}
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
            Under construction
          </span>
          <h3 style={{ margin: '18px 0 0', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: '#14161a' }}>Pardon the dust</h3>
          <p style={{ margin: '16px 0 0', maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: '#5b6068' }}>
            I&apos;m wrapping up a few fresh projects right now. Check back soon.
          </p>

          {/* build progress */}
          <div style={{ width: '100%', maxWidth: 380, marginTop: 34 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#3c434c' }}>Building case studies</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#9aa0a6', fontFamily: "ui-monospace,'SF Mono',Menlo,monospace" }}>in&nbsp;progress</span>
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
