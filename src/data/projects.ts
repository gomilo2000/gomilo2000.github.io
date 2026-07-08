export interface ProjectData {
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

export const ASKIM_PROJECT: ProjectData = {
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

export const ANGERMAN_PROJECT: ProjectData = {
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

export const ASKIMTRENINGSSENTER_SLIDES = [
  '/project1/askimtreningssenter_desktop1.png',
  '/project1/askimtreningssenter_desktop2.png',
  '/project1/askimtreningssenter_desktop3.png',
  '/project1/askimtreningssenter_desktop4.png',
  '/project1/askimtreningssenter_desktop5.png',
  '/project1/askimtreningssenter_desktop6.png',
  '/project1/askimtreningssenter_desktop7.png',
  '/project1/askimtreningssenter_desktop8.png',
]

export const ANGERMAN_SLIDES = [
  '/project2/project2_phone1.png',
  '/project2/project2_phone2.png',
  '/project2/project2_phone3.png',
  '/project2/project2_phone4.png',
  '/project2/project2_figma1.png',
  '/project2/project2_figma2.png',
]
