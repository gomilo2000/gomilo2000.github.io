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

/* ==========================================================================
   Project Themes
   Each featured project has its own dedicated, bespoke theme matching its brand
   identity rather than a generic binary light/dark theme.
   ========================================================================== */

export interface DetailCardTheme {
  bg: string
  border: string
  numColor: string
  titleColor: string
  dividerColor: string
  contentColor: string
  shadow?: string
}

export interface ProjectTheme {
  id: string
  name: string
  cardBg: string
  cardBorder: string
  hoverOutline: string
  hoverShadow: string
  idleShadow: string
  visualBg: string
  accent: string
  accentMuted: string
  titleColor: string
  descColor: string
  categoryColor: string
  tagBg: string
  tagBorder: string
  tagText: string
  actionColorIdle: string
  actionColorHover: string
  detailCard: DetailCardTheme
  sourceBanner: {
    bg: string
    border: string
    textColor: string
    labelColor: string
  }
}

/** Theme 1: Askim Treningssenter — Dark fitness onyx with high-energy gym orange */
export const askimTheme: ProjectTheme = {
  id: 'askim',
  name: 'Askim Fitness',
  cardBg: '#18191b',
  cardBorder: '1px solid rgba(255, 255, 255, 0.06)',
  hoverOutline: '#f58220',
  hoverShadow: '0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 2px #f58220',
  idleShadow: '0 20px 45px -25px rgba(0,0,0,0.35)',
  visualBg: '#18191b',
  accent: '#f58220',
  accentMuted: 'rgba(245, 130, 32, 0.18)',
  titleColor: '#ffffff',
  descColor: 'rgba(255, 255, 255, 0.65)',
  categoryColor: '#f58220',
  tagBg: 'rgba(255, 255, 255, 0.04)',
  tagBorder: '1px solid rgba(255, 255, 255, 0.08)',
  tagText: '#e1e3e6',
  actionColorIdle: 'rgba(255, 255, 255, 0.45)',
  actionColorHover: '#f58220',
  detailCard: {
    bg: '#1d1e22',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    numColor: '#f58220',
    titleColor: '#ffffff',
    dividerColor: 'rgba(255, 255, 255, 0.15)',
    contentColor: 'rgba(255, 255, 255, 0.7)',
  },
  sourceBanner: {
    bg: '#141517',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    textColor: 'rgba(255, 255, 255, 0.65)',
    labelColor: '#f58220',
  },
}

/** Theme 2: Angerman AS — High-visibility industrial equipment safety gold & crisp white */
export const angermanTheme: ProjectTheme = {
  id: 'angerman',
  name: 'Angerman Industrial',
  cardBg: '#ffffff',
  cardBorder: '1px solid #e2e8f0',
  hoverOutline: '#ffd000',
  hoverShadow: '0 30px 60px -20px rgba(0,0,0,0.12), 0 0 0 2.5px #ffd000',
  idleShadow: '0 20px 45px -25px rgba(0,0,0,0.06)',
  visualBg: '#ffd000',
  accent: '#ffd000',
  accentMuted: 'rgba(255, 208, 0, 0.25)',
  titleColor: '#0f1115',
  descColor: '#4b5563',
  categoryColor: '#b27a00',
  tagBg: '#f8fafc',
  tagBorder: '1px solid #e2e8f0',
  tagText: '#334155',
  actionColorIdle: '#64748b',
  actionColorHover: '#b27a00',
  detailCard: {
    bg: '#ffffff',
    border: '1px solid #e2e8f0',
    numColor: '#b27a00',
    titleColor: '#0f1115',
    dividerColor: '#e2e8f0',
    contentColor: '#4b5563',
    shadow: '0 4px 12px rgba(0,0,0,0.02)',
  },
  sourceBanner: {
    bg: '#f8fafc',
    border: '1px solid #e2e8f0',
    textColor: '#475569',
    labelColor: '#b27a00',
  },
}

/** Theme 3: TIF RaidTools — Deep midnight slate operations center with mythic electric cyan/blue */
export const raidtoolsTheme: ProjectTheme = {
  id: 'raidtools',
  name: 'RaidTools Midnight',
  cardBg: '#0b111e',
  cardBorder: '1px solid rgba(59, 130, 246, 0.2)',
  hoverOutline: '#3b82f6',
  hoverShadow: '0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 2px #3b82f6',
  idleShadow: '0 20px 45px -25px rgba(0,0,0,0.45)',
  visualBg: '#080d17',
  accent: '#3b82f6',
  accentMuted: 'rgba(59, 130, 246, 0.2)',
  titleColor: '#f8fafc',
  descColor: '#94a3b8',
  categoryColor: '#60a5fa',
  tagBg: 'rgba(59, 130, 246, 0.08)',
  tagBorder: '1px solid rgba(59, 130, 246, 0.2)',
  tagText: '#93c5fd',
  actionColorIdle: '#64748b',
  actionColorHover: '#60a5fa',
  detailCard: {
    bg: '#0f172a',
    border: '1px solid rgba(59, 130, 246, 0.16)',
    numColor: '#60a5fa',
    titleColor: '#f8fafc',
    dividerColor: 'rgba(59, 130, 246, 0.2)',
    contentColor: '#cbd5e1',
    shadow: '0 8px 24px -8px rgba(0,0,0,0.45)',
  },
  sourceBanner: {
    bg: '#0a0f1d',
    border: '1px solid rgba(59, 130, 246, 0.18)',
    textColor: '#94a3b8',
    labelColor: '#60a5fa',
  },
}

export const PROJECT_THEMES = {
  askim: askimTheme,
  angerman: angermanTheme,
  raidtools: raidtoolsTheme,
} as const

export type ProjectThemeKey = keyof typeof PROJECT_THEMES

