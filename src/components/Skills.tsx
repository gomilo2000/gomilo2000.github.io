import { useState } from 'react'

interface SkillDetail {
  title: string
  description: string
  rating: number
  useCase: { en: string; no: string }
}

const SKILL_DETAILS: Record<string, SkillDetail> = {
  'JavaScript': {
    title: 'JavaScript',
    description: 'Comfortable building applications using modern JavaScript (ES6+), async patterns, and DOM manipulation.',
    rating: 4,
    useCase: {
      en: 'It used to be my primary scripting language for building web features, but I have recently started switching over to TypeScript more frequently.',
      no: 'Det pleide å være mitt primære skriptspråk for å bygge webfunksjoner, men jeg har nylig begynt å gå mer over til TypeScript.'
    }
  },
  'TypeScript': {
    title: 'TypeScript',
    description: 'Proficient in adding type safety to codebases, working with interfaces, compiler settings, and basic generics.',
    rating: 5,
    useCase: {
      en: 'Used to add strict type-safety, improving code readability and catching bugs early.',
      no: 'Brukt for å legge til strikt typesikkerhet, noe som forbedrer koden og fanger opp feil tidlig.'
    }
  },
  'React': {
    title: 'React',
    description: 'Familiar with structuring component-driven layouts, managing state with hooks, and using React context.',
    rating: 5,
    useCase: {
      en: 'My absolute favorite library for structuring component-driven web applications.',
      no: 'Mitt absolutte favorittbibliotek for strukturering av komponentdrevne webapplikasjoner.'
    }
  },
  'Vue': {
    title: 'Vue',
    description: 'Familiar with Vue 3 Composition API, reactive state, and single-file components for simple apps.',
    rating: 3,
    useCase: {
      en: 'Used for smaller reactive layouts and fast prototypes.',
      no: 'Brukt til mindre reaktive layouter og raske prototyper.'
    }
  },
  'React Native': {
    title: 'React Native',
    description: 'Experienced in building cross-platform layouts for iOS and Android, and managing builds via Expo.',
    rating: 5,
    useCase: {
      en: 'Applied in building cross-platform native iOS and Android apps with a shared codebase.',
      no: 'Brukt til å bygge kryssplattform native iOS- og Android-apper med en delt kodebase.'
    }
  },
  'Swift': {
    title: 'Swift',
    description: 'Familiar with native iOS app development using Swift and SwiftUI declarative layouts.',
    rating: 3,
    useCase: {
      en: 'Native iOS app development using Swift and SwiftUI during college projects.',
      no: 'Nativ iOS-apputvikling med Swift og SwiftUI under skoleprosjekter.'
    }
  },
  'Kotlin': {
    title: 'Kotlin',
    description: 'Familiar with native Android app layouts using Kotlin, Jetpack Compose, and basic coroutines.',
    rating: 3,
    useCase: {
      en: 'Native Android app development using Jetpack Compose and coroutines.',
      no: 'Nativ Android-apputvikling med Jetpack Compose og coroutines.'
    }
  },
  'Ionic': {
    title: 'Ionic',
    description: 'Familiar with hybrid app setups, bridging web layouts to mobile devices via Capacitor.',
    rating: 3,
    useCase: {
      en: 'Hybrid mobile app wrappers, bridging web code to native phone APIs.',
      no: 'Hybride mobilapp-wrappers, som brobygger webkode til enhetens egne API-er.'
    }
  },
  'Java': {
    title: 'Java',
    description: 'Familiar with Java basics, OOP design patterns, and building simple REST endpoints with Spring Boot.',
    rating: 3,
    useCase: {
      en: 'Used for back-end system components, REST APIs, and database configurations.',
      no: 'Brukt til backend-systemkomponenter, REST-API-er og databasekonfigurasjoner.'
    }
  },
  'C#': {
    title: 'C#',
    description: 'Familiar with C# programming, .NET core API structures, and light scripting in Unity game engine.',
    rating: 4,
    useCase: {
      en: 'Used in lightweight game projects using Unity and back-end API development.',
      no: 'Brukt i enkle spillprosjekter med Unity og backend-API-utvikling.'
    }
  },
  'Python': {
    title: 'Python',
    description: 'Comfortable writing scripts for automation, data scraping, and basic routing using Flask.',
    rating: 4,
    useCase: {
      en: 'Writing automation scripts, web scrapers, and quick data parsing utilities.',
      no: 'Skriving av automatiseringsskript, web-scrapers og kjappe verktøy for datatolkning.'
    }
  },
  'SQL': {
    title: 'SQL',
    description: 'Familiar with writing queries, executing joins, and designing simple relational schemas in PostgreSQL.',
    rating: 4,
    useCase: {
      en: 'Relational database schema modeling, writing queries, and managing Postgres/MySQL.',
      no: 'Relasjonell databaseskjemamodellering, skriving av spørringer og håndtering av Postgres/MySQL.'
    }
  },
  'MongoDB': {
    title: 'MongoDB',
    description: 'Familiar with NoSQL database concepts, document schemas, aggregation pipelines, and integration with Node.js/Mongoose.',
    rating: 3,
    useCase: {
      en: 'Used as a flexible document store for modern web applications and backend APIs.',
      no: 'Brukt som et fleksibelt dokumentlager for moderne webapplikasjoner og backend-API-er.'
    }
  },
  'Firebase': {
    title: 'Firebase',
    description: 'Experienced with Firebase services including Firestore, Authentication, Cloud Functions, and Hosting.',
    rating: 3,
    useCase: {
      en: 'Used for rapid backend prototyping, user authentication, and real-time database syncing.',
      no: 'Brukt til rask backend-prototyping, brukerautentisering og synkronisering av sanntidsdatabaser.'
    }
  },
  'HTML5': {
    title: 'HTML5 & CSS3',
    description: 'Proficient in writing clean, semantic HTML templates coupled with modern CSS structures.',
    rating: 5,
    useCase: {
      en: 'Crafting semantic, accessible HTML templates combined with modern CSS layouts.',
      no: 'Utforming av semantiske, universelt utformede HTML-maler koblet med moderne CSS-layouter.'
    }
  },
  'Tailwind': {
    title: 'Tailwind CSS',
    description: 'Experienced with utility-first layouts, responsive grids, and custom color configuration themes.',
    rating: 5,
    useCase: {
      en: 'Utility-first CSS styling for rapid UI development and prototyping.',
      no: 'Utility-first CSS-styling for rask UI-utvikling og prototyping.'
    }
  },
  'Figma': {
    title: 'Figma',
    description: 'Familiar with wireframing layouts, creating visual interactive prototypes, and using component libraries.',
    rating: 5,
    useCase: {
      en: 'Designing user interfaces, wireframes, and vector layouts before writing any code.',
      no: 'Design av brukergrensesnitt, wireframes og vektorlayouter før jeg skriver kode.'
    }
  },
  'Canva': {
    title: 'Canva',
    description: 'Experienced in creating presentation slides, marketing assets, and social media visual graphics.',
    rating: 5,
    useCase: {
      en: 'Creating presentation slides, promotional graphics, and asset design.',
      no: 'Oppretting av presentasjonsfoiler, kampanjegrafikk og ressursdesign.'
    }
  },
  'Git / GitHub': {
    title: 'Git / GitHub',
    description: 'Comfortable with version control workflows, tracking changes, branch management, and submitting PRs.',
    rating: 5,
    useCase: {
      en: 'Managing code versions, branch strategies, collaborative PRs, and hosting sites.',
      no: 'Håndtering av kodeversjoner, forgreningsstrategier, pull requests og hosting av nettsider.'
    }
  },
  'REST APIs': {
    title: 'REST APIs',
    description: 'Experienced in designing clean endpoints, mapping JSON payloads, and connecting frontend clients.',
    rating: 4,
    useCase: {
      en: 'Designing routes, mapping JSON payloads, and connecting frontend clients to backends.',
      no: 'Design av ruter, kartlegging av JSON-data og tilkobling av frontend-klienter til backend.'
    }
  },
  'Agile': {
    title: 'Agile Methodologies',
    description: 'Familiar with collaborative workflows, participating in sprint reviews, standups, and tracking tickets.',
    rating: 5,
    useCase: {
      en: 'Collaborating with teammates in Scrum-like sprints, tracking tasks on digital boards.',
      no: 'Samarbeid med teammedlemmer i Scrum-lignende sprinter, og sporing av oppgaver på digitale tavler.'
    }
  },
  'Claude': {
    title: 'Claude',
    description: 'Experienced in leveraging Anthropic Claude models for coding, text generation, and prompt engineering workflows.',
    rating: 5,
    useCase: {
      en: 'Using Claude for code generation, architectural design, and complex problem-solving.',
      no: 'Brukt til kodegenerering, arkitekturdesign og kompleks problemløsning.'
    }
  },
  'Google AI Studio': {
    title: 'Google AI Studio',
    description: 'Experienced in prompt engineering, system instructions, and integrating Gemini APIs into web applications.',
    rating: 5,
    useCase: {
      en: 'Designing structured prompts, configuring system instructions, and integrating Gemini model endpoints.',
      no: 'Design av strukturerte ledetekster, konfigurering av systeminstruksjoner og integrering av Gemini-endepunkter.'
    }
  },
  'Antigravity': {
    title: 'Antigravity',
    description: 'Familiar with using the Antigravity coding assistant for rapid development and pair programming.',
    rating: 5,
    useCase: {
      en: 'Leveraging workflows for editing codebases, running tasks, and speeding up development cycles.',
      no: 'Utnyttelse av arbeidsflyter for redigering av kodebaser, kjøring av oppgaver og raskere utvikling.'
    }
  },
  'Kling': {
    title: 'Kling',
    description: 'Experienced in generating high-quality AI video assets and cinematic animations using Kling AI.',
    rating: 4,
    useCase: {
      en: 'Generating custom video graphics and visual assets for creative projects.',
      no: 'Generering av skreddersydd videografikk og visuelle elementer til kreative prosjekter.'
    }
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
  'MongoDB': {
    color: '#47a248',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2C12 2 6 8.5 6 13.5C6 17 8.5 20 12 20C15.5 20 18 17 18 13.5C18 8.5 12 2 12 2Z" fill="#47a248" />
        <path d="M12 2V20" stroke="#fff" strokeWidth="1" />
      </svg>
    )
  },
  'Firebase': {
    color: '#ffca28',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M3.89 15.67L12.5 1.5c.1-.16.34-.16.44 0l1.83 3.01-10.88 11.16z" fill="#FFC228" />
        <path d="M15.82 7.6L12.94 2.87c-.1-.17-.35-.17-.45 0l-9.15 15c-.1.17 0 .41.2.45l9.28 1.63L20.46 9.6c.14-.24-.13-.5-.35-.39L15.82 7.6z" fill="#F57C00" />
        <path d="M3.54 18.23l8.96 1.77 8.12-10.23c.15-.19.46-.04.4.21l-2.02 8.7c-.05.2-.23.33-.44.33H3.97c-.28 0-.44-.32-.24-.51l-.19-.27z" fill="#FF9100" />
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
  },
  'Claude': {
    color: '#cc7a66',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cc7a66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M12 12l6.36-6.36M12 12L5.64 17.64M12 12l6.36 6.36M12 12L5.64 6.36" />
      </svg>
    )
  },
  'Google AI Studio': {
    color: '#4285f4',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2C12 2 12.5 8 16 10c-3.5 2-4 8-4 8s-.5-6-4-8c3.5-2 4-8 4-8Z" fill="#4285f4" />
        <path d="M18 14c0 0 .3 2.5 1.7 3.3-.8.4-1.7 2.3-1.7 2.3s-.3-2.5-1.7-3.3c.8-.4 1.7-2.3 1.7-2.3Z" fill="#34a853" />
      </svg>
    )
  },
  'Antigravity': {
    color: '#8b5cf6',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M12 17V3M12 3L7 8M12 3l5 5M4 21h16" />
      </svg>
    )
  },
  'Kling': {
    color: '#ff4757',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="2" y="4" width="14" height="16" rx="2" fill="none" />
        <path d="M16 8l6-4v16l-6-4" fill="#ff4757" />
      </svg>
    )
  }
}

const SKILL_DETAILS_NO: Record<string, { description: string }> = {
  'JavaScript': {
    description: 'Komfortabel med å bygge applikasjoner ved bruk av moderne JavaScript (ES6+), asynkrone mønstre og DOM-manipulering.'
  },
  'TypeScript': {
    description: 'Erfaren med å legge til typesikkerhet i kodebaser, jobbe med interfaces, compiler-innstillinger og grunnleggende generics.'
  },
  'React': {
    description: 'Kjent med å strukturere komponentdrevne layouter, håndtere tilstand med hooks og bruke React context.'
  },
  'Vue': {
    description: 'Kjent med Vue 3 Composition API, reaktiv tilstand og single-file komponenter for enkle apper.'
  },
  'React Native': {
    description: 'Erfaring med å bygge kryssplattform-layouter for iOS og Android, samt administrere bygg via Expo.'
  },
  'Swift': {
    description: 'Kjent med nativ iOS-apputvikling ved bruk av Swift og deklarative layouter i SwiftUI.'
  },
  'Kotlin': {
    description: 'Kjent med nativ Android-apputvikling ved bruk av Kotlin, Jetpack Compose og grunnleggende coroutines.'
  },
  'Ionic': {
    description: 'Kjent med oppsett av hybride apper, og brobygging av weblayouter til mobil via Capacitor.'
  },
  'Java': {
    description: 'Kjent med grunnleggende Java, OOP-designmønstre og bygge enkle REST-endepunkter med Spring Boot.'
  },
  'C#': {
    description: 'Kjent med programmering i C#, .NET core API-strukturer og enkel skriving av skript i spillmotoren Unity.'
  },
  'Python': {
    description: 'Komfortabel med å skrive skript for automatisering, datainnsamling og enkel ruting med Flask.'
  },
  'SQL': {
    description: 'Kjent med å skrive spørringer, utføre joins og designe enkle relasjonelle skjemaer i PostgreSQL.'
  },
  'MongoDB': {
    description: 'Kjent med NoSQL-databasekonsepter, dokumentskjemaer, aggregerings-pipelines og integrasjon med Node.js/Mongoose.'
  },
  'Firebase': {
    description: 'Erfaren med Firebase-tjenester inkludert Firestore, Authentication, Cloud Functions og Hosting.'
  },
  'HTML5': {
    description: 'Erfaren med å skrive ryddige, semantiske HTML-maler koblet med moderne CSS-strukturer.'
  },
  'Tailwind': {
    description: 'Erfaring med utility-first layouter, responsive nett og egendefinerte fargetemaer.'
  },
  'Figma': {
    description: 'Kjent med wireframing, oppretting av visuelle interaktive prototyper og bruk av komponentbiblioteker.'
  },
  'Canva': {
    description: 'Erfaring med å lage presentasjonsfoiler, markedsføringsmateriell og grafikk til sosiale medier.'
  },
  'Git / GitHub': {
    description: 'Komfortabel med versjonskontroll, sporing av endringer, grenhåndtering og innsending av PR-er.'
  },
  'REST APIs': {
    description: 'Erfaring med å designe ryddige endepunkter, kartlegge JSON-data og koble til frontend-klienter.'
  },
  'Agile': {
    description: 'Kjent med samarbeid i team, deltakelse i standups, sprint-evalueringer og sporing av oppgaver.'
  },
  'Claude': {
    description: 'Erfaren med å utnytte Anthropic Claude-modeller til koding, tekstgenerering og prompt-engineering-arbeidsflyter.'
  },
  'Google AI Studio': {
    description: 'Erfaren med prompt engineering, systeminstruksjoner og integrering av Gemini-API-er i webapplikasjoner.'
  },
  'Antigravity': {
    description: 'Kjent med bruk av kodeassistenten Antigravity for rask utvikling og parprogrammering.'
  },
  'Kling': {
    description: 'Erfaren med å skape videoer og animasjoner av høy kvalitet ved hjelp av Kling AI.'
  }
}

interface SkillsProps {
  language: 'en' | 'no'
}

export default function Skills({ language }: SkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<string>('React')
  const [activeTab, setActiveTab] = useState<string>('Frontend')

  const baseDetail = SKILL_DETAILS[selectedSkill] || SKILL_DETAILS['React']
  const activeDetail = {
    ...baseDetail,
    description: language === 'en'
      ? baseDetail.description
      : (SKILL_DETAILS_NO[selectedSkill]?.description || baseDetail.description)
  }

  const categories = [
    { id: 'Frontend', title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Vue'] },
    { id: 'Mobile', title: language === 'en' ? 'Mobile' : 'Mobil', items: ['React Native', 'Swift', 'Kotlin', 'Ionic'] },
    { id: 'Backend & DB', title: 'Backend & DB', items: ['Java', 'C#', 'Python', 'SQL', 'MongoDB', 'Firebase'] },
    { id: 'Tools & Styling', title: language === 'en' ? 'Tools & Styling' : 'Verktøy & Styling', items: ['Claude', 'Google AI Studio', 'Antigravity', 'Kling', 'HTML5', 'Tailwind', 'Figma', 'Canva', 'Git / GitHub', 'REST APIs', 'Agile'] },
  ]

  const t = {
    eyebrow: language === 'en' ? 'Skills' : 'Ferdigheter',
    heading: language === 'en' ? 'Tech I have experience with' : 'Teknologi jeg har erfaring med',
    sidebarProfile: language === 'en' ? 'Skill Profile' : 'Kompetanseprofil',
  }

  return (
    <section
      id="skills"
      style={{
        scrollMarginTop: 90,
        position: 'relative',
      }}
    >
      {/* Background container that clips the blurred image and prevents overflow issues with position: sticky */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
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
          }}
        />
        {/* Semi-transparent tint overlay on top of the blur */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(252, 252, 254, 0.86)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '130px clamp(48px, 8vw, 160px)',
        }}
      >
        <div style={{ marginBottom: 44 }}>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{t.eyebrow}</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>{t.heading}</h2>
        </div>

        <div className="skills-layout" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 32, alignItems: 'start' }}>
          
          {/* Left column: categories grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
            {/* Mobile Category Tabs */}
            <div className="skills-mobile-tabs">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id)
                      const targetSkill = cat.items[0]
                      if (targetSkill) {
                        setSelectedSkill(targetSkill)
                      }
                    }}
                    className="skills-mobile-tab-btn"
                    style={{
                      borderColor: isActive ? 'transparent' : 'rgba(15,20,40,.06)',
                      background: isActive ? 'var(--accent, #1a73ff)' : '#f4f4f6',
                      color: isActive ? '#fff' : '#56606c',
                      boxShadow: isActive ? '0 8px 16px -6px color-mix(in srgb, var(--accent, #1a73ff) 60%, transparent)' : 'none',
                    }}
                  >
                    {cat.title}
                  </button>
                )
              })}
            </div>

            {categories.map((cat) => {
              const isCategoryActive = cat.items.includes(selectedSkill)
              return (
                <div
                  key={cat.id}
                  className={`skills-category-card ${activeTab === cat.id ? 'active' : ''}`}
                  style={{
                    border: '1px solid rgba(15,20,40,.07)',
                    borderLeft: `4px solid ${isCategoryActive ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.08)'}`,
                    borderRadius: 18,
                    padding: '24px 24px 28px',
                    background: '#fff',
                    boxShadow: '0 4px 14px -10px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-left-color 0.3s ease',
                  }}
                >
                  {/* Dynamic SVG Tech Arcs matching active color (Concentric Rings style) */}
                  <svg
                    style={{
                      position: 'absolute',
                      bottom: -20,
                      right: -20,
                      width: 140,
                      height: 140,
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="var(--accent, #1a73ff)"
                      strokeWidth="2"
                      style={{ opacity: 0.08, transition: 'stroke 0.4s ease' }}
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="55"
                      stroke="var(--accent, #1a73ff)"
                      strokeWidth="2"
                      style={{ opacity: 0.05, transition: 'stroke 0.4s ease' }}
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="30"
                      stroke="var(--accent, #1a73ff)"
                      strokeWidth="2"
                      style={{ opacity: 0.03, transition: 'stroke 0.4s ease' }}
                    />
                  </svg>

                  <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#14161a', position: 'relative', zIndex: 1 }}>{cat.title}</h3>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                    {cat.items.map((item) => {
                      const isActive = selectedSkill === item
                      return (
                        <button
                          key={item}
                          onClick={() => setSelectedSkill(item)}
                          className={`skill-btn ${isActive ? 'active' : ''}`}
                        >
                          {SKILL_THEME[item]?.icon}
                          <span>{item}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
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
                fill="var(--accent, #1a73ff)"
                style={{ opacity: 0.08, transition: 'fill 0.4s ease' }}
              />
              <path
                d="M 90,200 C 130,195 150,150 175,110 C 190,80 195,50 200,20 L 200,200 Z"
                fill="var(--accent, #1a73ff)"
                style={{ opacity: 0.04, transition: 'fill 0.4s ease' }}
              />
            </svg>

            {/* Key prop triggers re-mount on change, re-running the entry animation */}
            <div key={activeDetail.title} className="skills-sidebar-fade" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'color-mix(in srgb, var(--accent, #1a73ff) 10%, #fff)',
                  color: 'var(--accent, #1a73ff)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 99,
                  width: 'fit-content'
                }}
              >
                {t.sidebarProfile}
              </span>

              <div>
                <h3 style={{ margin: '8px 0 2px', fontSize: 24, fontWeight: 800, color: '#111418' }}>
                  {activeDetail.title}
                </h3>
              </div>

              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#56606c' }}>
                {activeDetail.description}
              </p>

              {/* Enjoyment Level */}
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa0a6' }}>
                  {language === 'en' ? 'Enjoyment Level' : 'Trivsel & Interesse'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const rating = baseDetail.rating || 5
                    const active = idx < rating
                    return (
                      <svg
                        key={idx}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={active ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.08)'}
                        stroke={active ? 'var(--accent, #1a73ff)' : 'rgba(15,20,40,.12)'}
                        strokeWidth="1.5"
                        style={{ transition: 'all 0.3s ease', transform: active ? 'scale(1.08)' : 'scale(1)' }}
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    )
                  })}
                  <span style={{ fontSize: 13, color: '#56606c', fontWeight: 600, marginLeft: 8 }}>
                    {baseDetail.rating || 5}/5
                  </span>
                </div>
              </div>

              {/* Usage & Context Box */}
              <div
                style={{
                  marginTop: 12,
                  padding: '16px 20px',
                  borderRadius: 14,
                  borderLeft: '4px solid var(--accent, #1a73ff)',
                  background: 'color-mix(in srgb, var(--accent, #1a73ff) 3%, rgba(15,20,40,0.015))',
                  borderTop: '1px solid rgba(15,20,40,0.04)',
                  borderRight: '1px solid rgba(15,20,40,0.04)',
                  borderBottom: '1px solid rgba(15,20,40,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa0a6' }}>
                  {language === 'en' ? 'Usage & Context' : 'Bruk og Kontekst'}
                </span>
                <span style={{ fontSize: 14.5, color: '#3c434c', lineHeight: 1.45 }}>
                  {baseDetail.useCase[language]}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

