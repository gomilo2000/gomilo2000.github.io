import { type ReactNode } from 'react'
import { type ProjectTheme, type ProjectThemeKey, PROJECT_THEMES, askimTheme } from '../../theme'

export interface DetailCardProps {
  num: string
  title: string
  icon: ReactNode
  content: ReactNode
  theme?: ProjectTheme | ProjectThemeKey
}

export default function DetailCard({ num, title, icon, content, theme = 'askim' }: DetailCardProps) {
  const activeTheme: ProjectTheme = typeof theme === 'string' ? (PROJECT_THEMES[theme] ?? askimTheme) : theme
  const { detailCard } = activeTheme

  return (
    <div style={{
      background: detailCard.bg,
      borderRadius: 16,
      border: detailCard.border,
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxShadow: detailCard.shadow,
    }}>
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ 
            fontSize: 20, 
            fontWeight: 700, 
            color: detailCard.numColor, 
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" 
          }}>
            {num}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon}
          <span style={{ fontSize: 16, fontWeight: 700, color: detailCard.titleColor }}>
            {title}
          </span>
        </div>
      </div>

      {/* Content Row */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Left vertical line container */}
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
          <div style={{ width: 1, background: detailCard.dividerColor, height: '100%' }} />
        </div>
        {/* Content Container */}
        <div style={{ flex: 1, color: detailCard.contentColor }}>
          {content}
        </div>
      </div>
    </div>
  )
}

