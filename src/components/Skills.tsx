import { useState, type CSSProperties } from 'react'

interface SkillDetail {
  title: string
  level: string
  verified: boolean
  description: string
  checklist: string[]
}

const SKILL_DETAILS: Record<string, SkillDetail> = {
  'JavaScript': {
    title: 'JavaScript',
    level: 'Advanced / Core',
    verified: true,
    description: 'Expert in modern JavaScript (ES6+), asynchronous patterns, DOM manipulation, and browser execution lifecycle.',
    checklist: ['Asynchronous & Promises (Async/Await)', 'Functional Programming & Closures', 'Event Loop & Performance Optimization']
  },
  'TypeScript': {
    title: 'TypeScript',
    level: 'Advanced',
    verified: true,
    description: 'Strong type safety design patterns. Proficient in configuring compiler settings, structural typing, generics, and custom utilities.',
    checklist: ['Advanced Generics & Mapped Types', 'Strict Type Checking Configurations', 'Webpack & Vite Bundle Integrations']
  },
  'React': {
    title: 'React',
    level: 'Advanced / Primary',
    verified: true,
    description: 'Developed numerous React web applications with global state, responsive layouts, and performance tracking hooks.',
    checklist: ['Custom Hooks & Context APIs', 'Virtual DOM Performance Tuning', 'Component Componentization Design']
  },
  'Vue': {
    title: 'Vue',
    level: 'Intermediate',
    verified: true,
    description: 'Experienced in developing interactive web layouts using Vue 3 Composition API, Vuex, and Vue Router.',
    checklist: ['Vue 3 Composition API', 'SFC (Single File Components)', 'State Management via Pinia']
  },
  'React Native': {
    title: 'React Native',
    level: 'Advanced / Specialization',
    verified: true,
    description: 'Deep knowledge of cross-platform mobile development for iOS and Android. Experienced with Expo, native modules, and UI layout.',
    checklist: ['Cross-Platform UI Alignment', 'Expo & Native Builds Management', 'Device Sensors & Storage Integrations']
  },
  'Swift': {
    title: 'Swift',
    level: 'Proficient',
    verified: true,
    description: 'Experienced with native iOS programming using Swift and SwiftUI. Understands Apple Human Interface Guidelines and App Store deployment.',
    checklist: ['SwiftUI Declarative Layouts', 'MVC & MVVM Design Patterns', 'CoreData & URLSession Networking']
  },
  'Kotlin': {
    title: 'Kotlin',
    level: 'Proficient',
    verified: true,
    description: 'Developed native Android applications using Kotlin and Jetpack Compose. Proficient in Coroutines and material design elements.',
    checklist: ['Jetpack Compose UIs', 'Kotlin Coroutines for Async Tasks', 'Android SDK & Gradle Builds']
  },
  'Ionic': {
    title: 'Ionic',
    level: 'Intermediate',
    verified: true,
    description: 'Hybrid mobile app development using Capacitor and web technologies (React/Vue) wrapper configs.',
    checklist: ['Capacitor Runtime Configs', 'Hybrid Native Device Bridges', 'Ionic UI Web Component layouts']
  },
  'Java': {
    title: 'Java',
    level: 'Proficient',
    verified: true,
    description: 'Academic and project experience in enterprise backend structures using Java, OOP patterns, and Spring Boot.',
    checklist: ['Object-Oriented Programming (OOP)', 'Spring Boot REST Controllers', 'Unit Testing with JUnit']
  },
  'C#': {
    title: 'C#',
    level: 'Proficient',
    verified: true,
    description: 'Developed backend APIs and lightweight games using C#, .NET Framework, and Unity engine structures.',
    checklist: ['.NET Core API Handlers', 'Entity Framework (EF Core) database management', 'Asynchronous Task Programming']
  },
  'Python': {
    title: 'Python',
    level: 'Proficient',
    verified: true,
    description: 'Built data scripts, scraping engines, and lightweight backend routing using Flask, Django, and script routines.',
    checklist: ['Scripting & Web Scraping (BeautifulSoup)', 'Flask API Development', 'Data Processing via Pandas']
  },
  'SQL': {
    title: 'SQL',
    level: 'Advanced',
    verified: true,
    description: 'Proficient in relational databases, writing optimized complex queries, joins, and schemas in PostgreSQL and MySQL.',
    checklist: ['Database Schema & Normalization', 'Complex Joins & Stored Procedures', 'Indexes & Query Performance Tuning']
  },
  'HTML5': {
    title: 'HTML5 & CSS3',
    level: 'Expert',
    verified: true,
    description: 'Master of semantic markup and responsive layouts. Extensive knowledge in Flexbox, CSS Grid, and custom animations.',
    checklist: ['Semantic Web & accessibility standards', 'Flexbox & CSS Grid designs', 'Responsive Media Queries']
  },
  'Tailwind': {
    title: 'Tailwind CSS',
    level: 'Advanced',
    verified: true,
    description: 'Highly efficient with utility-first layouts, custom configurations, variants, and responsive layout styling.',
    checklist: ['Tailwind Config Customization', 'Responsive Utility Classes', 'Dark Mode & Custom Theme configs']
  },
  'Figma': {
    title: 'Figma',
    level: 'Proficient',
    verified: false,
    description: 'Used Figma to prototype web layouts, mobile wireframes, and design interactive visual flow mappings.',
    checklist: ['UI Mockup & Prototyping', 'Component Library usage', 'Vector Assets creation']
  },
  'Canva': {
    title: 'Canva',
    level: 'Proficient',
    verified: false,
    description: 'Created social media visual graphics, resume PDFs, and marketing assets for web page layouts.',
    checklist: ['Social Media Banners', 'Vector Layout & Assets', 'Presentation Designs']
  },
  'Git / GitHub': {
    title: 'Git / GitHub',
    level: 'Advanced',
    verified: true,
    description: 'Experienced in collaborative git workflows, pull requests, resolving merge conflicts, and publishing GitHub Pages.',
    checklist: ['Git Rebase & Branching strategies', 'GitHub Actions CI/CD workflows', 'Conflict Resolution & Code Reviews']
  },
  'REST APIs': {
    title: 'REST APIs',
    level: 'Advanced',
    verified: true,
    description: 'Designed and consumed RESTful APIs. Proficient in JSON data payloads, custom routing, query parameters, and CORS configurations.',
    checklist: ['API Endpoint Routing & JSON mapping', 'Token-based authentication (JWT)', 'Axios & Fetch Clients customization']
  },
  'Agile': {
    title: 'Agile Methodologies',
    level: 'Proficient',
    verified: true,
    description: 'Participated in Scrum sprints, daily standups, backlog grooming, and collaborated using Jira boards.',
    checklist: ['Scrum Framework & Sprint planning', 'Jira / Trello board coordination', 'Peer review & Continuous Delivery']
  }
}
const SKILL_THEME: Record<string, { color: string; icon: React.ReactNode }> = {
  'JavaScript': {
    color: '#f7df1e',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#f7df1e" />
        <path d="M15 15c0 1-.5 1.5-1.5 1.5s-1.5-.5-1.5-1.5h-2c0 2 1.5 3 3.5 3s3.5-1 3.5-3v-7h-2.5l.5 2h1.5v5ZM6 15c0 1.5 1 2 2.5 2s2.5-1 2.5-2.5v-1H9v-1.5h4V15c0 2.5-1.5 3.5-4.5 3.5S4.5 17 4.5 15h1.5Z" fill="#111" />
      </svg>
    )
  },
  'TypeScript': {
    color: '#2f74c0',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#2f74c0" />
        <path d="M12 18h6v-2h-2V8h-4v2h2v6h-2v2ZM6 8h4v2H8v6h2v2H6v-2h2v-6H6V8Z" fill="#fff" />
      </svg>
    )
  },
  'React': {
    color: '#58c4dc',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#58c4dc" />
      </svg>
    )
  },
  'Vue': {
    color: '#42b883',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 21L1.5 3h4.5L12 13.5 18 3h4.5L12 21Z" fill="#42b883" />
        <path d="M12 17L5 4.5h3L12 13l4-8.5h3L12 17Z" fill="#35495e" />
      </svg>
    )
  },
  'React Native': {
    color: '#58c4dc',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#58c4dc" strokeWidth="2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#58c4dc" />
      </svg>
    )
  },
  'Swift': {
    color: '#f05138',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2 19c6-1 10-6 11-10 1 3 3 5 5 6-3-5-3-11-2-12-3 2-6 5-8 9-2 2-3 4-6 7ZM22 22C14 20 8 13 9 7c1 3 2 5 4 6-2-4-1-8 1-9-1 2-2 4-2 6 2 0 6-3 8-7-2 4-2 8 0 11 1-2 2-3 2-5-1 4-1 9-2 11ZM12 21c-5-2-7-6-6-9 1 2 2 3 4 4-2-3-2-6-1-7-1 2-1 3-1 5 1 0 4-2 6-5-1 3-1 6 0 8 1-1 2-2 2-4-1 3-1 6-2 8Z" fill="#f05138" />
      </svg>
    )
  },
  'Kotlin': {
    color: '#7F52FF',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="kotlin-grad-skills" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#E2445C" />
          </linearGradient>
        </defs>
        <path d="M24 0H0v24h24L12 12Z" fill="url(#kotlin-grad-skills)" />
      </svg>
    )
  },
  'Ionic': {
    color: '#3880ff',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3880ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  'Java': {
    color: '#5382a1',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5382a1" strokeWidth="2" style={{ flexShrink: 0 }}>
        <path d="M6 22h8M4 18h12a2 2 0 0 0 2-2V8H2v8a2 2 0 0 0 2 2zM18 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
        <path d="M6 2c0 2-2 3-2 5M10 2c0 2-2 3-2 5M14 2c0 2-2 3-2 5" />
      </svg>
    )
  },
  'C#': {
    color: '#854cc7',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#854cc7" />
        <path d="M11 8c-2 0-3.5 1.5-3.5 4s1.5 4 3.5 4c1.2 0 2.2-.6 2.8-1.5l-1.5-1c-.3.5-.7.7-1.3.7-1 0-1.7-.8-1.7-2.2s.7-2.2 1.7-2.2c.6 0 1 .2 1.3.7l1.5-1C13.2 8.6 12.2 8 11 8Z" fill="#fff" />
        <path d="M14 9.5h5v1h-5v-1ZM14 12.5h5v1h-5v-1ZM15.5 8.5h1v6h-1v-6ZM17.5 8.5h1v6h-1v-6Z" fill="#fff" />
      </svg>
    )
  },
  'Python': {
    color: '#3776ab',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2c-2.7 0-2.5 1.2-2.5 1.2v1.6h5v.7h-5v2.8h-2.2S3 8 3 10.7s2.3 2.5 2.3 2.5h1.4v-2c0-1.4 1.2-2.5 2.5-2.5h5V5.5S14.7 2 12 2ZM12 22c2.7 0 2.5-1.2 2.5-1.2v-1.6h-5v-.7h5v-2.8h2.2S21 16 21 13.3s-2.3-2.5-2.3-2.5h-1.4v2c0 1.4-1.2 2.5-2.5 2.5h-5v3.2S9.3 22 12 22Z" fill="#3776ab" />
      </svg>
    )
  },
  'SQL': {
    color: '#0064a5',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0064a5" strokeWidth="2" style={{ flexShrink: 0 }}>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    )
  },
  'HTML5': {
    color: '#e34f26',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#e34f26" />
        <path d="M12 2.2v19.6l6.8-2.2 1.5-14.8H12z" fill="#ef652a" />
        <path d="M12 9.6H8.4l-.2-2.7H12V4.2H5.3l.7 8.1H12v-2.7z" fill="#fff" />
        <path d="M12 15.3l-3.1-1-.2-2.1H6l.4 4.8 5.6 1.8v-3.5z" fill="#ebebeb" />
        <path d="M12 9.6h5.3l-.5 5.7-4.8 1.5v-3.5l2.6-.8.2-2.9H12v-2.7z" fill="#fff" />
        <path d="M12 4.2h6.7l-.3 3.2H12v-3.2z" fill="#fff" />
      </svg>
    )
  },
  'Tailwind': {
    color: '#06b6d4',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 6c-2.4 0-3.6 1.2-3.6 3.6 0 2.4 1.2 3.6 3.6 3.6 2.4 0 3.6-1.2 3.6-3.6C15.6 7.2 14.4 6 12 6ZM6 12c-2.4 0-3.6 1.2-3.6 3.6 0 2.4 1.2 3.6 3.6 3.6 2.4 0 3.6-1.2 3.6-3.6C9.6 13.2 8.4 12 6 12Z" fill="#06b6d4" />
      </svg>
    )
  },
  'Figma': {
    color: '#f24e1e',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V6a4 4 0 0 0-4-4z" fill="#f24e1e" />
        <path d="M8 10a4 4 0 0 0-4 4 4 4 0 0 0 8 8h4v-4H8z" fill="#a259ff" />
        <path d="M8 6a4 4 0 0 0-4 4 4 4 0 0 0 8 8h4V10H8z" fill="#0acf83" />
        <path d="M12 10a4 4 0 0 0 4 4 4 4 0 0 0-4 4v-4h4z" fill="#1abc9c" stroke="#1abc9c" strokeWidth="1" />
        <path d="M16 6a4 4 0 0 0-4-4v8h4a4 4 0 0 0 0-4z" fill="#ff7262" />
      </svg>
    )
  },
  'Canva': {
    color: '#00c4cc',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c4cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M12 20a8 8 0 1 0-8-8" />
        <path d="M12 4a8 8 0 0 1 8 8" />
        <circle cx="12" cy="12" r="3" fill="#00c4cc" />
      </svg>
    )
  },
  'Git / GitHub': {
    color: '#f05032',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2.3 10.7l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4zm9.3-5.3h1v5.1c.5.3.9.8.9 1.4 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.9-1.4V5.4z" fill="#f05032" />
      </svg>
    )
  },
  'REST APIs': {
    color: '#00b894',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    )
  },
  'Agile': {
    color: '#00a8ff',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    )
  }
}

const categories = [
  { title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Vue'] },
  { title: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Ionic'] },
  { title: 'Backend & DB', items: ['Java', 'C#', 'Python', 'SQL'] },
  { title: 'Tools & Styling', items: ['HTML5', 'Tailwind', 'Figma', 'Canva', 'Git / GitHub', 'REST APIs', 'Agile'] },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string>('React')

  const activeDetail = SKILL_DETAILS[selectedSkill] || SKILL_DETAILS['React']
  const activeSkillColor = SKILL_THEME[selectedSkill]?.color || '#1a73ff'

  return (
    <section id="skills" style={{ scrollMarginTop: 90, padding: '130px clamp(48px, 8vw, 160px)' }}>
      <div style={{ marginBottom: 44 }}>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Skills</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>What I work with</h2>
        </div>

        <div className="skills-layout" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 32, alignItems: 'start' }}>
          
          {/* Left column: categories grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {categories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  border: '1px solid rgba(15,20,40,.07)',
                  borderRadius: 18,
                  padding: '24px 24px 28px',
                  background: '#fff',
                  boxShadow: '0 4px 14px -10px rgba(0,0,0,0.05)',
                }}
              >
                <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#14161a' }}>{cat.title}</h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {cat.items.map((item) => {
                    const isActive = selectedSkill === item
                    const brandColor = SKILL_THEME[item]?.color || '#1a73ff'
                    return (
                      <button
                        key={item}
                        onClick={() => setSelectedSkill(item)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                          border: '1.5px solid',
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#3c434c',
                          background: isActive ? '#fff' : '#f4f4f6',
                          borderColor: isActive ? brandColor : 'transparent',
                          padding: '10px 16px',
                          borderRadius: 12,
                          cursor: 'pointer',
                          transform: isActive ? 'scale(1.04) translateY(-1px)' : 'scale(1)',
                          boxShadow: isActive ? `0 8px 20px -8px ${brandColor}80, 0 0 12px ${brandColor}20` : 'none',
                          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.background = '#e9e9eb'
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.background = '#f4f4f6'
                        }}
                      >
                        {SKILL_THEME[item]?.icon}
                        <span style={{ color: isActive ? '#14161a' : 'inherit' }}>{item}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right column: detailed description sidebar */}
          <div
            style={{
              position: 'sticky',
              top: 100,
              border: '1px solid rgba(15,20,40,.08)',
              borderRadius: 20,
              padding: 32,
              background: '#fff',
              boxShadow: '0 24px 50px -32px rgba(20,30,70,.2)',
              minHeight: 380,
              overflow: 'hidden',
            }}
          >
            {/* Dynamic SVG Wave Background matching active color */}
            <svg
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 240,
                height: 240,
                zIndex: 0,
                pointerEvents: 'none',
              }}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 60,200 C 110,190 130,130 160,80 C 180,47 190,20 200,0 L 200,200 Z"
                fill={activeSkillColor}
                style={{ opacity: 0.08, transition: 'fill 0.4s ease' }}
              />
              <path
                d="M 90,200 C 130,195 150,150 175,110 C 190,80 195,50 200,20 L 200,200 Z"
                fill={activeSkillColor}
                style={{ opacity: 0.04, transition: 'fill 0.4s ease' }}
              />
            </svg>

            {/* Key prop triggers re-mount on change, re-running the entry animation */}
            <div key={activeDetail.title} className="skills-sidebar-fade" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: `color-mix(in srgb, ${activeSkillColor} 11%, #fff)`,
                    color: activeSkillColor,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    borderRadius: 99,
                  }}
                >
                  Skill Profile
                </span>
                
                {activeDetail.verified ? (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      background: '#e6f4ea',
                      color: '#137333',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '6px 12px',
                      borderRadius: 99,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </span>
                ) : (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: '#f1f3f4',
                      color: '#5f6368',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '6px 12px',
                      borderRadius: 99,
                    }}
                  >
                    Design Tool
                  </span>
                )}
              </div>

              <div>
                <h3 style={{ margin: '8px 0 2px', fontSize: 24, fontWeight: 800, color: '#111418' }}>
                  {activeDetail.title}
                </h3>
                <div style={{ fontSize: 13, color: '#9aa0a6', fontWeight: 600 }}>
                  Level: {activeDetail.level}
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#56606c' }}>
                {activeDetail.description}
              </p>

              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa0a6', marginBottom: 12 }}>
                  Key Competencies
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {activeDetail.checklist.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, color: '#3c434c', lineHeight: 1.4 }}>
                      <span style={{ display: 'inline-flex', marginTop: 3, color: activeSkillColor }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}
