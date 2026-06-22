import type { CSSProperties } from 'react'

/**
 * Brand accent colour. Change this one value to re-theme the whole site —
 * it is exposed as the CSS custom property `--accent` on the root element
 * and referenced throughout (including hover/focus states in index.css).
 */
export const ACCENT = '#1a73ff'

/** Allow the `--accent` CSS custom property inside typed style objects. */
export type StyleVars = CSSProperties & { ['--accent']?: string }

/** Small right-pointing arrow used on buttons and links. */
export function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

/** Download / tray arrow used on the Resume button. */
export function DownloadIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  )
}
