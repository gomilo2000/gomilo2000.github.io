import { type ReactNode } from 'react'

export interface DetailCardProps {
  num: string
  title: string
  icon: ReactNode
  content: ReactNode
  theme?: 'dark' | 'light'
}

export default function DetailCard({ num, title, icon, content, theme = 'dark' }: DetailCardProps) {
  const isLight = theme === 'light'
  
  return (
    <div style={{
      background: isLight ? '#ffffff' : '#1d1e22',
      borderRadius: 16,
      border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
      boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.02)' : undefined,
    }}>
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ 
            fontSize: 20, 
            fontWeight: 700, 
            color: isLight ? '#b27a00' : '#f58220', 
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" 
          }}>
            {num}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon}
          <span style={{ fontSize: 16, fontWeight: 700, color: isLight ? '#0f1115' : '#fff' }}>
            {title}
          </span>
        </div>
      </div>

      {/* Content Row */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Left vertical line container */}
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
          <div style={{ width: 1, background: isLight ? '#e2e8f0' : 'rgba(255,255,255,0.15)', height: '100%' }} />
        </div>
        {/* Content Container */}
        <div style={{ flex: 1, color: isLight ? '#4b5563' : 'rgba(255,255,255,0.7)' }}>
          {content}
        </div>
      </div>
    </div>
  )
}

