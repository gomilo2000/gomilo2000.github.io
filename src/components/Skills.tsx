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

const categories = [
  { title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Vue'] },
  { title: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Ionic'] },
  { title: 'Backend & DB', items: ['Java', 'C#', 'Python', 'SQL'] },
  { title: 'Tools & Styling', items: ['HTML5', 'Tailwind', 'Figma', 'Canva', 'Git / GitHub', 'REST APIs', 'Agile'] },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string>('React')

  const activeDetail = SKILL_DETAILS[selectedSkill] || SKILL_DETAILS['React']

  return (
    <section
      id="skills"
      style={{
        scrollMarginTop: 90,
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        background: '#fcfcfd',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      {/* Blurred background image container scaled to prevent edge artifacts */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          left: -10,
          right: -10,
          bottom: -10,
          backgroundImage: 'url(/skills-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
          zIndex: 0,
        }}
      />
      {/* Semi-transparent tint overlay on top of the blur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(252, 252, 254, 0.86)',
          zIndex: 1,
        }}
      />

      {/* The actual grid layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '90px 48px',
        }}
      >
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
                    return (
                      <button
                        key={item}
                        onClick={() => setSelectedSkill(item)}
                        style={{
                          border: '1px solid transparent',
                          fontSize: 14,
                          fontWeight: 600,
                          color: isActive ? '#fff' : '#3c434c',
                          background: isActive ? 'var(--accent)' : '#f4f4f6',
                          padding: '10px 16px',
                          borderRadius: 12,
                          cursor: 'pointer',
                          transform: isActive ? 'scale(1.04)' : 'scale(1)',
                          borderColor: isActive ? 'var(--accent)' : 'transparent',
                          boxShadow: isActive ? '0 8px 20px -8px var(--accent)' : 'none',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.background = '#e9e9eb'
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.background = '#f4f4f6'
                        }}
                      >
                        {item}
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
            }}
          >
            {/* Key prop triggers re-mount on change, re-running the entry animation */}
            <div key={activeDetail.title} className="skills-sidebar-fade" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'color-mix(in srgb, var(--accent) 11%, #fff)',
                    color: 'var(--accent)',
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
                      <span style={{ display: 'inline-flex', marginTop: 3, color: 'var(--accent)' }}>
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
      </div>
    </section>
  )
}
