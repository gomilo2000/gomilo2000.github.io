import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'

interface ProjectData {
  id: string
  title: string
  category: { en: string; no: string }
  desc: { en: string; no: string }
  tech: string[]
  images?: { src: string; label: { en: string; no: string } }[]
  details: {
    overview: { en: string; no: string }
    features: { en: string[]; no: string[] }
    challenges: { en: string; no: string }
    repo?: { en: string; no: string }
  }
}

const ASKIM_PROJECT: ProjectData = {
  id: 'askim-treningssenter',
  title: 'Askim Treningssenter',
  category: {
    en: 'Featured Project · Web Design',
    no: 'Utvalgt prosjekt · Nettside',
  },
  desc: {
    en: 'A modern, high-performance landing page designed for a 24/7 fitness center in Askim, Norway.',
    no: 'En moderne landingsside med høy ytelse, designet for et døgnåpent treningssenter i Askim, Norge.',
  },
  tech: ['React', 'TypeScript', 'Vite', 'Vanilla CSS', 'Responsive UI'],
  details: {
    overview: {
      en: 'I personally contacted the owner of the fitness center to propose modernizing and redesigning their existing website. After securing permission to pitch suggestions and improvements, I designed and developed this landing page as the final product of exactly that conversation.',
      no: 'Jeg tok personlig kontakt med eieren av treningssenteret for å foreslå en modernisering og re-design av deres eksisterende nettside. Etter å ha fått tillatelse til å komme med forslag og forbedringer, designet og utviklet jeg denne landingssiden som det endelige resultatet av akkurat den samtalen.',
    },
    features: {
      en: [
        'Sleek, modern design that elevates the gym\'s brand identity and provides a premium user experience.',
        'Interactive "blade" component where all four floors are lined up side-by-side; hovering over a floor expands it dynamically and pushes the others aside, eliminating endless scrolling.',
        'Redesigned cards that clearly display what the gym has to offer.',
        'Dynamic carousel right below the offering cards showcasing all additional services and activities the gym has to offer.',
      ],
      no: [
        'Tidsriktig og moderne design som løfter treningssenterets merkevare og gir en førsteklasses brukeropplevelse.',
        'Interaktiv "blade"-komponent der alle fire etasjene er stilt opp side om side; ved å holde musepekeren over en etasje utvides den og skyver de andre til siden, noe som gir et kompakt oppsett og fjerner behovet for endeløs scrolling.',
        'Forbedrede kort som tydelig viser hva treningssenteret har å tilby.',
        'Dynamisk karusell rett under informasjonskortene som viser alle andre tilbud og aktiviteter ved treningssenteret.',
      ],
    },
    challenges: {
      en: 'A key challenge was working with the existing website\'s image assets, which varied significantly in size, aspect ratio, and quality. To make them fit cohesively without distortion, I utilized CSS layout techniques like object-fit styling, aspect-ratio containers, and modern fallback card designs to unify the visual style. For future projects, this highlighted the value of requesting or personally capturing high-quality, standardized photography from the start.',
      no: 'En av de største utfordringene var å jobbe med de eksisterende bilderessursene, som varierte mye i størrelse, bildeforhold og kvalitet. For å få dem til å passe sammen uten forvrengning, brukte jeg CSS-teknikker som object-fit, faste bildeforhold for containere og moderne fallbacks for å skape en helhetlig visuell stil. Dette viste verdien av å be om, eller selv ta, høyoppløselige og standardiserte bilder fra starten av i fremtidige prosjekter.',
    },
    repo: {
      en: 'The repository for this project is private but can be provided upon request.',
      no: 'Repositoriet for dette prosjektet er privat, men kan oppgis ved forespørsel.',
    },
  },
}

const ANGERMAN_PROJECT: ProjectData = {
  id: 'angerman-as',
  title: 'Angerman AS',
  category: {
    en: 'Featured Project · Bachelor Thesis',
    no: 'Utvalgt prosjekt · Bacheloroppgave',
  },
  desc: {
    en: 'A cross-platform React Native app digitalizing Angerman\'s physical training manuals for heavy machinery certification, streamlining hour logging and mentor approvals.',
    no: 'En tverrplattform React Native-app som digitaliserer Angermans fysiske opplæringsbøker for maskinførere, og forenkler timeregistrering og faddergodkjenning.',
  },
  tech: ['React Native', 'Expo', 'Tailwind CSS', 'Firebase'],
  details: {
    overview: {
      en: 'Developed as a bachelor project for Angerman AS, this cross-platform mobile application digitalizes physical safety training logbooks used by students seeking heavy machinery certifications (trucks, cranes, excavation vehicles). Working in an agile Scrum team (where I served as ScrumMaster), we built an intuitive mobile portal that connects Students, Mentors (Fadder), and Instructors. The system replaces manual paper workflows with a real-time database, enabling instant training hour tracking and automated document uploading.',
      no: 'Utviklet som et bachelorprosjekt for Angerman AS. Denne tverrplattform mobilapplikasjonen digitaliserer de fysiske opplæringsbøkene for elever som tar kompetansebevis på tunge maskiner (truck, kran og gravemaskiner). Gjennom smidig prosjektmetodikk (hvor jeg fungerte som ScrumMaster) utviklet vi en mobilportal som kobler sammen elever, faddere og instruktører. Systemet erstatter manuelle papirrutiner med en sanntidsdatabase for enkel sporing av timer og automatisk dokumentopplasting.',
    },
    features: {
      en: [
        'Multi-Role Authorization: Distinct user levels and custom dashboards for Students, Mentors, and Instructors.',
        'Smarter Module Hour Logger: Log practical hours easily for specific machinery modules (e.g., forklift, mobile crane, tower crane).',
        'Direct Mentor Verification: Push notification workflow allowing mentors to review and instantly approve logged hours.',
        'Digital Certificate Vault: Secure image and PDF uploading of licenses and qualifications powered by Cloud Firestore.',
        'Accessible Design System: High-contrast, large touch-target layouts built for a wide age demographic (18 to 78+ years old).',
        'Built-in Multi-Language Support: Seamless translation options between English, Norwegian, and Polish.'
      ],
      no: [
        'Flerrolle-autorisasjon: Egne tilgangsnivåer og tilpassede dashbord for elever, faddere og instruktører.',
        'Smidig timeregistrering: Loggføring av praktiske kjøretimer spesifisert per maskinklasse (f.eks. truck, mobilkran, tårnkran).',
        'Direkte faddergodkjenning: Varslingsflyt der faddere kan sjekke og umiddelbart godkjenne elevenes registrerte timer.',
        'Sikkert dokumentarkiv: Opplasting og lagring av kompetansebevis og sertifikater i Firebase og Cloud Firestore.',
        'Universelt utformet design (UU): Grensesnitt med høy kontrast og store berøringsflater, tilpasset alle aldersgrupper (18–78+ år).',
        'Integrert flerspråklighet: Enkelt bytte av språk i appen mellom norsk, engelsk og polsk.'
      ],
    },
    challenges: {
      en: 'User testing revealed two key accessibility and schema challenges. First, older users (up to 78 years old) struggled with standard mobile layouts. We resolved this by implementing oversized universal button components, simplifying navigation paths, and converting document upload zones into single broad touch targets. Second, mentors (faddere) frequently needed to enroll as students in other courses. We redesigned the Firebase database schemas and application state to support a dual-role interface, allowing users to switch seamlessly between logging hours as a student and approving hours as a mentor.',
      no: 'Brukertesting avdekket to kritiske utfordringer knyttet til universell utforming og databasearkitektur. For det første slet eldre brukere (opptil 78 år) med vanlige mobilknapper og rulling. Vi løste dette ved å designe store "universal-knapper", forenkle menyene og gjøre hele dokumentfeltet til én stor trykkflate. For det andre måtte faddere ofte registrere seg som elever på nye kurs. Vi redesignet Firebase-strukturen og appens state-håndtering for å støtte en flerrolle-profil, slik at man sømløst kan veksle mellom egne timelister og godkjenning av andres timer.',
    },
    repo: {
      en: 'The repository for this project is private but can be provided upon request.',
      no: 'Repositoriet for dette prosjektet er privat, men kan oppgis ved forespørsel.',
    },
  },
}

interface DetailCardProps {
  num: string
  title: string
  icon: ReactNode
  content: ReactNode
}

function DetailCard({ num, title, icon, content }: DetailCardProps) {
  return (
    <div style={{
      background: '#1d1e22',
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%',
    }}>
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#f58220', fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>{num}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon}
          <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{title}</span>
        </div>
      </div>

      {/* Content Row */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Left vertical line container */}
        <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)', height: '100%' }} />
        </div>
        {/* Content Container */}
        <div style={{ flex: 1 }}>
          {content}
        </div>
      </div>
    </div>
  )
}

const ASKIMTRENINGSSENTER_SLIDES = [
  '/project1/askimtreningssenter_desktop1.png',
  '/project1/askimtreningssenter_desktop2.png',
  '/project1/askimtreningssenter_desktop3.png',
  '/project1/askimtreningssenter_desktop4.png',
  '/project1/askimtreningssenter_desktop5.png',
  '/project1/askimtreningssenter_desktop6.png',
  '/project1/askimtreningssenter_desktop7.png',
  '/project1/askimtreningssenter_desktop8.png',
]

const ANGERMAN_SLIDES = [
  '/project2/project2_phone1.png',
  '/project2/project2_phone2.png',
  '/project2/project2_phone3.png',
  '/project2/project2_phone4.png',
  '/project2/project2_figma1.png',
  '/project2/project2_figma2.png',
]

interface ProjectsProps {
  language: 'en' | 'no'
}

export default function Projects({ language }: ProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  
  const [isExpanded2, setIsExpanded2] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [activeSlide2, setActiveSlide2] = useState(0)
  const [isZoomed2, setIsZoomed2] = useState(false)
  
  const [isMobile, setIsMobile] = useState(false)

  const currentSlide2 = ANGERMAN_SLIDES[activeSlide2]
  const isFigmaSlide2 = !!(currentSlide2 && currentSlide2.includes('figma'))

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 860
      setIsMobile(mobile)
      if (mobile) {
        setIsExpanded(false)
        setIsExpanded2(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!isZoomed2) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveSlide2((prev) => (prev === 0 ? ANGERMAN_SLIDES.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setActiveSlide2((prev) => (prev === ANGERMAN_SLIDES.length - 1 ? 0 : prev + 1))
      } else if (e.key === 'Escape') {
        setIsZoomed2(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isZoomed2])

  useEffect(() => {
    if (!isZoomed) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev === 0 ? ASKIMTRENINGSSENTER_SLIDES.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev === ASKIMTRENINGSSENTER_SLIDES.length - 1 ? 0 : prev + 1))
      } else if (e.key === 'Escape') {
        setIsZoomed(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isZoomed])

  const t = {
    eyebrow: language === 'en' ? 'Projects' : 'Prosjekter',
    heading: language === 'en' ? 'Selected projects' : 'Utvalgte prosjekter',
    viewProject: language === 'en' ? 'View project details' : 'Se detaljer om prosjektet',
    hideProject: language === 'en' ? 'Hide project details' : 'Skjul detaljer',
    techTitle: language === 'en' ? 'Technologies used' : 'Teknologier brukt',
    overviewTitle: language === 'en' ? 'Overview' : 'Oversikt',
    featuresTitle: language === 'en' ? 'Key Features' : 'Viktige funksjoner',
    challengesTitle: language === 'en' ? 'Challenges & Solutions' : 'Utfordringer og løsninger',
    repoTitle: language === 'en' ? 'Code' : 'Kode',
  }

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  return (
    <section id="projects" style={{ scrollMarginTop: 90, padding: '130px clamp(48px, 8vw, 160px)', background: '#f5f5f7' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 64 }}>
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{t.eyebrow}</p>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,42px)', fontWeight: 700, letterSpacing: '-.025em', color: '#14161a', lineHeight: 1.08 }}>{t.heading}</h2>
        </div>
      </div>

      {/* Featured Project Card (Askim Treningssenter) */}
      <div
        onClick={() => {
          if (!isMobile) {
            setIsExpanded((prev) => !prev)
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card-container"
        style={{
          position: 'relative',
          borderRadius: 24,
          background: '#18191b', // dark brand background
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered && !isMobile
            ? '0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 2px #f58220'
            : '0 20px 45px -25px rgba(0,0,0,0.35)',
          cursor: isMobile ? 'default' : 'pointer',
          padding: 0, // removed general card padding for edge-to-edge canvas visual
          marginTop: 40,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered && !isExpanded && !isMobile ? 'translateY(-6px)' : 'translateY(0)',
          overflow: 'visible', // allow mockups to stick out of the top
        }}
      >
        {/* Left Side: Details */}
        <div style={{ zIndex: 2, padding: '36px clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#f58220' }}>
            {ASKIM_PROJECT.category[language]}
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-.02em' }}>
            {ASKIM_PROJECT.title}
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
            {ASKIM_PROJECT.desc[language]}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 0 }}>
            {ASKIM_PROJECT.tech.map((tech) => (
              <span key={tech} style={{ fontSize: 12, fontWeight: 600, color: '#e1e3e6', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: 8 }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action indicator (Desktop only) */}
          {!isMobile && (
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, color: hovered ? '#f58220' : 'rgba(255,255,255,0.45)', transition: 'color 0.25s ease' }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                {isExpanded 
                  ? (language === 'en' ? 'Click to show less' : 'Klikk for å lukke')
                  : (language === 'en' ? 'Click to view details' : 'Klikk for detaljer')
                }
              </span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)' 
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>

        {/* Right Side: Dark glowing dot mesh canvas containing floating mockups */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 320,
            background: '#18191b', // matching dark brand background
            borderRadius: isMobile ? '0 0 24px 24px' : (isExpanded ? '0 24px 0 0' : '0 24px 24px 0'),
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
            borderTop: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
            zIndex: 2,
          }}
        >
          {/* Dot Grid and Glow Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              backgroundPosition: 'center',
              borderRadius: isMobile ? '0 0 23px 23px' : (isExpanded ? '0 23px 0 0' : '0 23px 23px 0'),
              overflow: 'hidden',
            }}
          >
            {/* Ambient Glows */}
            <div
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 130, 32, 0.18) 0%, transparent 70%)',
                top: '-50px',
                left: '-20px',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 130, 32, 0.08) 0%, transparent 70%)',
                bottom: '-40px',
                right: '-20px',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* macOS Browser Mockup - Centered vertically */}
          <div
            style={{
              position: 'absolute',
              left: '6%',
              top: '30px',    // Centered vertically (320px height - 260px mockup) / 2
              height: '260px',
              width: '84%',
              background: '#1a1c23',
              borderRadius: '10px',
              boxShadow: '0 25px 50px -15px rgba(0,0,0,0.65)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 1,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              transform: hovered && !isExpanded ? 'translateY(-4px) scale(1.01) rotate(-0.5deg)' : 'rotate(0deg)',
            }}
          >
            {/* macOS Title Bar */}
            <div
              style={{
                height: 24,
                background: '#1a1c23',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 10,
                gap: 6,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
            </div>
            {/* Screen */}
            <div style={{ flex: 1, background: '#000', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/project1/askimtreningssenter_desktop1.png"
                alt="Askim Treningssenter Desktop"
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>

          {/* Phone Mockup - Centered vertically overlapping macOS browser window */}
          <div
            style={{
              position: 'absolute',
              right: '4%',
              top: '45px',    // Centered vertically (320px height - 230px mockup) / 2
              height: '230px', // fixed height to prevent stretching
              aspectRatio: '9/18.5',
              background: '#090a0f',
              borderRadius: '16px',
              padding: '4px',
              border: '2px solid #1f2026',
              boxShadow: '0 30px 50px -12px rgba(0,0,0,0.7)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              transform: hovered && !isExpanded ? 'translateY(-6px) scale(1.02) rotate(1.5deg)' : 'rotate(0deg)',
            }}
          >
            <div style={{ flex: 1, background: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/project1/askimtreningssenter_phone1.png"
                alt="Askim Treningssenter Phone"
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              {/* Glare effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
                borderRadius: '12px',
                pointerEvents: 'none',
                zIndex: 5,
              }} />
            </div>
          </div>

          {/* Floating Askim Logo without pill, positioned to overlap desktop mockup screen */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px', // slightly sticks out below the bottom of the PC screen (which is at bottom: 30px)
              left: 'calc(6% - 15px)', // slightly sticks out to the left of the PC screen (which is at left: 6%)
              zIndex: 4,
              pointerEvents: 'none',
              transition: 'all 0.35s ease',
              transform: hovered && !isExpanded ? 'translateY(-3px)' : 'translateY(0)',
            }}
          >
            <img
              src="/project1/askim_logo.png"
              alt="Askim Treningssenter Logo"
              draggable={false}
              style={{ height: 28, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Row 2: Expanded Inline Details */}
        {isExpanded && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              gridColumn: 'span 2',
              paddingTop: 48,
              paddingBottom: 56, // padding at the bottom to prevent card shape cut-off
              paddingInline: 'clamp(24px, 4vw, 48px)',
              background: '#14161a', // matching gym project alt card background
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              animation: 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
               {/* Top Row: 3-Column Detailed Information Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: 32, 
                  alignItems: 'stretch' 
                }}
              >
                {/* Overview Card */}
                {ASKIM_PROJECT.details.overview[language] && (
                  <DetailCard
                    num="01"
                    title={t.overviewTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>
                        {ASKIM_PROJECT.details.overview[language]}
                      </p>
                    }
                  />
                )}

                {/* Features Card */}
                {ASKIM_PROJECT.details.features[language] && ASKIM_PROJECT.details.features[language].length > 0 && (
                  <DetailCard
                    num="02"
                    title={t.featuresTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 17 2 2 4-4" />
                        <path d="m3 7 2 2 4-4" />
                        <line x1="13" x2="21" y1="6" y2="6" />
                        <line x1="13" x2="21" y1="12" y2="12" />
                        <line x1="13" x2="21" y1="18" y2="18" />
                        <path d="m3 12 2 2 4-4" />
                      </svg>
                    }
                    content={
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {ASKIM_PROJECT.details.features[language].map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <div style={{
                              flexShrink: 0,
                              width: 18,
                              height: 18,
                              borderRadius: 5,
                              background: 'rgba(245, 130, 32, 0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 2,
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    }
                  />
                )}

                {/* Challenges & Solutions Card */}
                {ASKIM_PROJECT.details.challenges[language] && (
                  <DetailCard
                    num="03"
                    title={t.challengesTitle}
                    icon={
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    }
                    content={
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>
                        {ASKIM_PROJECT.details.challenges[language]}
                      </p>
                    }
                  />
                )}


              </div>


              {/* Bottom Row: Full-width macOS Mockup Widescreen Slideshow */}
              <div
                style={{
                  background: '#0a0c10',
                  borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '16/9.5',
                  maxHeight: 580,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                }}
              >
                {/* macOS Title Bar */}
                <div
                  style={{
                    height: 32,
                    background: '#1a1c23',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 16,
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                </div>
                {/* Screen Content */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#18191b',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* The Slide Image */}
                  <img
                    src={ASKIMTRENINGSSENTER_SLIDES[activeSlide]}
                    alt={`Slide ${activeSlide + 1}`}
                    onClick={() => setIsZoomed(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transition: 'opacity 0.3s ease-in-out',
                      cursor: 'zoom-in',
                    }}
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === 0 ? ASKIMTRENINGSSENTER_SLIDES.length - 1 : prev - 1));
                    }}
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === ASKIMTRENINGSSENTER_SLIDES.length - 1 ? 0 : prev + 1));
                    }}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicator Dots */}
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 6,
                    zIndex: 5,
                    background: 'rgba(17, 20, 24, 0.5)',
                    backdropFilter: 'blur(4px)',
                    padding: '6px 10px',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {ASKIMTRENINGSSENTER_SLIDES.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide(idx);
                        }}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: activeSlide === idx ? '#f58220' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>


                </div>
              </div>

            </div>

            {/* Source Code / Request Access Banner */}
            {ASKIM_PROJECT.details.repo && (
              <div style={{
                marginTop: 32,
                background: 'linear-gradient(90deg, #1d1a18 0%, #15161a 100%)',
                borderRadius: 16,
                border: '1px solid rgba(245, 130, 32, 0.15)',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                flexWrap: 'wrap',
              }}>
                {/* Left Side: Icon & Texts */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 280, flex: 1 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(245, 130, 32, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>
                      {language === 'en' ? 'Source code' : 'Kildekode'}
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                      {language === 'en'
                        ? 'Repository is private but can be provided upon request.'
                        : 'Kildekoden er privat, men kan oppgis ved forespørsel.'}
                    </p>
                  </div>
                </div>

                {/* Right Side: Request Access Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'transparent',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '10px 20px',
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {language === 'en' ? 'Request access' : 'Be om tilgang'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Featured Project Card 2 (Angerman AS) */}
      <div
        onClick={() => {
          if (!isMobile) {
            setIsExpanded2((prev) => !prev)
          }
        }}
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
        className="project-card-container"
        style={{
          position: 'relative',
          borderRadius: 24,
          background: '#ffffff', // premium light theme background
          border: '1px solid #e2e8f0', // soft border
          boxShadow: hovered2 && !isMobile
            ? '0 30px 60px -20px rgba(0,0,0,0.12), 0 0 0 2.5px #ffd000' // yellow outline glow
            : '0 20px 45px -25px rgba(0,0,0,0.06)',
          cursor: isMobile ? 'default' : 'pointer',
          padding: 0,
          marginTop: 60,
          marginBottom: 60,
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
          transform: hovered2 && !isExpanded2 && !isMobile ? 'translateY(-6px)' : 'translateY(0)',
          overflow: 'visible',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
        }}
      >
        {/* Left Side (Desktop): Visual Mockups (3 Phones) */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            minHeight: 320, // same height as the previous card
            background: '#ffd000', // vibrant yellow brand background
            borderRadius: isMobile ? (isExpanded2 ? '0' : '0 0 24px 24px') : (isExpanded2 ? '24px 0 0 0' : '24px 0 0 24px'),
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: isMobile ? 'none' : '1px solid rgba(0,0,0,0.06)',
            borderBottom: isMobile ? '1px solid rgba(0,0,0,0.06)' : 'none',
            zIndex: 2,
            order: isMobile ? 2 : 1, // display on the left (first) on desktop
          }}
        >
          {/* Dot Grid and Glow Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              backgroundPosition: 'center',
              borderRadius: isMobile ? '0 0 23px 23px' : (isExpanded2 ? '23px 0 0 0' : '23px 0 0 23px'),
              overflow: 'hidden',
            }}
          >
            {/* Ambient Glossy Highlights */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                top: '-60px',
                left: '-40px',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
                bottom: '-40px',
                right: '-20px',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* 3 Phones Stack Layout - Anchored to center with translateX for perfect tight spacing */}
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Phone 1 (Left, Tilted) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 110px)', // centered vertically for 220px height
                height: '220px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '16px',
                padding: '2px', // ultra-thin bezel padding
                border: '1px solid #2e3039', // sleek bezel line
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered2 && !isExpanded2 ? 'translateX(-115%) translateY(4px) rotate(-10deg) scale(1.02)' : 'translateX(-100%) rotate(-6deg)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '13px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone2.png"
                  alt="Angerman Screen Left"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Phone 2 (Center, Main) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 130px)', // centered vertically for 260px height
                height: '260px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '20px',
                padding: '3px', // sleek bezel padding
                border: '1.5px solid #2e3039', // sleek bezel line
                boxShadow: '0 25px 45px -12px rgba(0,0,0,0.45)',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered2 && !isExpanded2 ? 'translateX(-50%) translateY(-6px) scale(1.04)' : 'translateX(-50%)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '16px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone1.png"
                  alt="Angerman Screen Center"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Phone 3 (Right, Tilted) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 110px)', // centered vertically for 220px height
                height: '220px',
                aspectRatio: '9/19.5', // standard taller smartphone aspect ratio
                background: '#090a0f',
                borderRadius: '16px',
                padding: '2px', // ultra-thin bezel padding
                border: '1px solid #2e3039', // sleek bezel line
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: hovered2 && !isExpanded2 ? 'translateX(15%) translateY(4px) rotate(10deg) scale(1.02)' : 'translateX(0%) rotate(6deg)',
              }}
            >
              <div style={{ flex: 1, background: '#000', borderRadius: '13px', overflow: 'hidden' }}>
                <img
                  src="/project2/project2_phone3.png"
                  alt="Angerman Screen Right"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>

          {/* Floating Angerman Logo - Scaled up on the bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              zIndex: 4,
              pointerEvents: 'none',
              transition: 'all 0.35s ease',
              transform: hovered2 && !isExpanded2 ? 'translateY(-3px)' : 'translateY(0)',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.18))',
            }}
          >
            <img
              src="/project2/angerman_logo.png"
              alt="Angerman AS Logo"
              draggable={false}
              style={{ height: 56, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right Side (Desktop): Details (Light Themed) */}
        <div
          style={{
            zIndex: 2,
            padding: '40px clamp(24px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: isMobile ? 1 : 2, // display on the right (second) on desktop
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#b27a00' }}>
            {ANGERMAN_PROJECT.category[language]}
          </span>
          <h3 style={{ margin: '8px 0 12px', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: '#0f1115', letterSpacing: '-.02em' }}>
            Angerman AS
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#4b5563', marginBottom: 24 }}>
            {ANGERMAN_PROJECT.desc[language]}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 0 }}>
            {ANGERMAN_PROJECT.tech.map((tech) => (
              <span 
                key={tech} 
                style={{ 
                  fontSize: 12, 
                  fontWeight: 600, 
                  color: '#374151', 
                  background: '#f1f5f9', 
                  border: '1px solid #e2e8f0', 
                  padding: '6px 12px', 
                  borderRadius: 8 
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action indicator (Desktop only) */}
          {!isMobile && (
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, color: hovered2 ? '#b27a00' : '#6b7280', transition: 'color 0.25s ease' }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                {isExpanded2 
                  ? (language === 'en' ? 'Click to show less' : 'Klikk for å lukke')
                  : (language === 'en' ? 'Click to view details' : 'Klikk for detaljer')
                }
              </span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  transform: isExpanded2 ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)' 
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>

        {/* Row 2: Expanded Inline Details (Light Themed) */}
        {isExpanded2 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              gridColumn: 'span 2',
              order: 3, // keeps this drawer at the bottom of the grid
              paddingTop: 48,
              paddingBottom: 56,
              paddingInline: 'clamp(24px, 4vw, 48px)',
              background: '#f8fafc',
              borderRadius: '0 0 24px 24px',
              borderTop: '1px solid #e2e8f0',
              animation: 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {/* Detailed Cards Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: 32, 
                  alignItems: 'stretch' 
                }}
              >
                {/* Overview Card */}
                {ANGERMAN_PROJECT.details.overview[language] && (
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    border: '1px solid #e2e8f0',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: 20, fontWeight: 700, color: '#b27a00', fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>01</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        <span style={{ fontSize: 16, fontWeight: 700, color: '#0f1115' }}>{t.overviewTitle}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
                        <div style={{ width: 1, background: '#e2e8f0', height: '100%' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#4b5563' }}>
                          {ANGERMAN_PROJECT.details.overview[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Card */}
                {ANGERMAN_PROJECT.details.features[language] && ANGERMAN_PROJECT.details.features[language].length > 0 && (
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    border: '1px solid #e2e8f0',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: 20, fontWeight: 700, color: '#b27a00', fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>02</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 17 2 2 4-4" />
                          <path d="m3 7 2 2 4-4" />
                          <line x1="13" x2="21" y1="6" y2="6" />
                          <line x1="13" x2="21" y1="12" y2="12" />
                          <line x1="13" x2="21" y1="18" y2="18" />
                          <path d="m3 12 2 2 4-4" />
                        </svg>
                        <span style={{ fontSize: 16, fontWeight: 700, color: '#0f1115' }}>{t.featuresTitle}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
                        <div style={{ width: 1, background: '#e2e8f0', height: '100%' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          {ANGERMAN_PROJECT.details.features[language].map((feat, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                              <div style={{
                                flexShrink: 0,
                                width: 18,
                                height: 18,
                                borderRadius: 5,
                                background: 'rgba(255, 179, 0, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 2,
                              }}>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span style={{ fontSize: 14, lineHeight: 1.5, color: '#4b5563' }}>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Challenges & Solutions Card */}
                {ANGERMAN_PROJECT.details.challenges[language] && (
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    border: '1px solid #e2e8f0',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: 20, fontWeight: 700, color: '#b27a00', fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>03</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                        <span style={{ fontSize: 16, fontWeight: 700, color: '#0f1115' }}>{t.challengesTitle}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{ width: 26, display: 'flex', justifyContent: 'center', paddingBlock: 4 }}>
                        <div style={{ width: 1, background: '#e2e8f0', height: '100%' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#4b5563' }}>
                          {ANGERMAN_PROJECT.details.challenges[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Row: Full-width macOS Mockup Widescreen Slideshow */}
              <div
                style={{
                  background: '#0a0c10',
                  borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '16/9.5',
                  maxHeight: 580,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                }}
              >
                {/* macOS Title Bar */}
                <div
                  style={{
                    height: 32,
                    background: '#1a1c23',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 16,
                    gap: 8,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                </div>
                
                {/* Screen Content */}
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#18191b',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* The Slide Image */}
                  <img
                    src={currentSlide2}
                    alt={`Slide ${activeSlide2 + 1}`}
                    onClick={() => setIsZoomed2(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transition: 'opacity 0.3s ease-in-out',
                      cursor: 'zoom-in',
                    }}
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide2((prev) => (prev === 0 ? ANGERMAN_SLIDES.length - 1 : prev - 1));
                    }}
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide2((prev) => (prev === ANGERMAN_SLIDES.length - 1 ? 0 : prev + 1));
                    }}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(17, 20, 24, 0.65)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 5,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(17, 20, 24, 0.65)'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Slide Indicator Dots */}
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 6,
                    zIndex: 5,
                    background: 'rgba(17, 20, 24, 0.5)',
                    backdropFilter: 'blur(4px)',
                    padding: '6px 10px',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {ANGERMAN_SLIDES.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide2(idx);
                        }}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: activeSlide2 === idx ? '#ffd000' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Source Code Banner (Light Themed) */}
              {ANGERMAN_PROJECT.details.repo && (
                <div style={{
                  marginTop: 32,
                  background: 'linear-gradient(90deg, #fffbeb 0%, #ffffff 100%)',
                  borderRadius: 16,
                  border: '1px solid rgba(255, 208, 0, 0.3)',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                  flexWrap: 'wrap',
                  boxShadow: '0 4px 12px rgba(255, 208, 0, 0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 280, flex: 1 }}>
                    <div style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'rgba(255, 208, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b27a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f1115' }}>
                        {language === 'en' ? 'Source code' : 'Kildekode'}
                      </h4>
                      <p style={{ margin: '4px 0 0', fontSize: 14, color: '#4b5563' }}>
                        {language === 'en'
                          ? 'Repository is private but can be provided upon request.'
                          : 'Kildekoden er privat, men kan oppgis ved forespørsel.'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      border: '1px solid #cbd5e1',
                      background: 'transparent',
                      color: '#334155',
                      fontSize: 14,
                      fontWeight: 600,
                      padding: '10px 20px',
                      borderRadius: 10,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f8fafc'
                      e.currentTarget.style.borderColor = '#94a3b8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = '#cbd5e1'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {language === 'en' ? 'Request access' : 'Be om tilgang'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>


      {/* Lightbox Modal Zoom for Slideshow */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 12, 22, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '24px',
            animation: 'fade-in 0.25s ease-out forwards',
          }}
        >
          {/* Zoomed Image */}
          <img
            src={ASKIMTRENINGSSENTER_SLIDES[activeSlide]}
            alt="Project screenshot zoomed"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
              border: '1px solid rgba(255,255,255,0.08)',
              cursor: 'default',
            }}
          />

          {/* Lightbox Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlide((prev) => (prev === 0 ? ASKIMTRENINGSSENTER_SLIDES.length - 1 : prev - 1));
            }}
            style={{
              position: 'absolute',
              left: 'clamp(12px, 3vw, 40px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Lightbox Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlide((prev) => (prev === ASKIMTRENINGSSENTER_SLIDES.length - 1 ? 0 : prev + 1));
            }}
            style={{
              position: 'absolute',
              right: 'clamp(12px, 3vw, 40px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          {/* Lightbox Slide Indicator Dots */}
          <div style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            zIndex: 10000,
            background: 'rgba(17, 20, 24, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '8px 14px',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {ASKIMTRENINGSSENTER_SLIDES.map((_, idx) => (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlide(idx);
                }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: activeSlide === idx ? '#f58220' : 'rgba(255,255,255,0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsZoomed(false)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: 44,
              height: 44,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              transition: 'background 0.2s',
              zIndex: 10001,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ✕
          </button>
        </div>
      )}

      {/* Lightbox Modal Zoom for Slideshow 2 */}
      {isZoomed2 && (
        <div
          onClick={() => setIsZoomed2(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 12, 22, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '24px',
            animation: 'fade-in 0.25s ease-out forwards',
          }}
        >
          {/* Zoomed Image */}
          <img
            src={ANGERMAN_SLIDES[activeSlide2]}
            alt="Project screenshot zoomed"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              objectFit: 'contain',
              borderRadius: '24px',
              boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
              border: '3px solid #1f2026',
              cursor: 'default',
            }}
          />

          {/* Lightbox Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlide2((prev) => (prev === 0 ? ANGERMAN_SLIDES.length - 1 : prev - 1));
            }}
            style={{
              position: 'absolute',
              left: 'clamp(12px, 3vw, 40px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Lightbox Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlide2((prev) => (prev === ANGERMAN_SLIDES.length - 1 ? 0 : prev + 1));
            }}
            style={{
              position: 'absolute',
              right: 'clamp(12px, 3vw, 40px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Lightbox Slide Indicator Dots */}
          <div style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            zIndex: 10000,
            background: 'rgba(17, 20, 24, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '8px 14px',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {ANGERMAN_SLIDES.map((_, idx) => (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlide2(idx);
                }}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: activeSlide2 === idx ? '#ffd000' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: activeSlide2 === idx ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsZoomed2(false)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: 44,
              height: 44,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              transition: 'background 0.2s',
              zIndex: 10001,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
