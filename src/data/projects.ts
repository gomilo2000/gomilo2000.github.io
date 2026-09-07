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
  '/project2/angerman_phone1.png',
  '/project2/angerman_phone2.png',
  '/project2/angerman_phone3.png',
  '/project2/angerman_phone4.png',
  '/project2/angerman_figma1.png',
  '/project2/angerman_figma2.png',
]

export const RAIDTOOLS_PROJECT: ProjectData = {
  id: 'tif-raidtools',
  title: 'TIF RaidTools',
  category: {
    en: 'Featured Project · Web Application',
    no: 'Utvalgt prosjekt · Webapplikasjon',
  },
  desc: {
    en: 'A full-stack web application built for the World of Warcraft guild <this is fine>, streamlining raid lineup planning, character gear tracking, and guild bank finances.',
    no: 'En fullstack-webapplikasjon utviklet for World of Warcraft-guildet <this is fine>, som forenkler planlegging av lagoppstillinger, utstyrssporing og guild-økonomi.',
  },
  tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Discord API', 'Vite'],
  details: {
    overview: {
      en: 'Developed for <this is fine>, a competitive World of Warcraft raiding guild, this full-stack web application replaces fragmented spreadsheets with a centralized management portal. Built with React, TypeScript, and Supabase, the system connects raid leaders, officers, and team members in one place. It handles boss-by-boss lineup planning, automated gear syncing via Raider.io, instant exports into the game and Discord, and a clear treasury ledger tracking gold deposits and withdrawals across guild vaults.',
      no: 'Utviklet for <this is fine>, et aktivt World of Warcraft raiding-guild. Denne fullstack-webapplikasjonen erstatter uoversiktlige regneark med en samlet administrasjonsportal. Bygget med React, TypeScript og Supabase, samler systemet raid-ledere, offiserer og spillere på én felles plattform. Løsningen håndterer lagoppstillinger for hver enkelt boss, automatisk synkronisering av utstyrsnivå via Raider.io, rask eksport rett inn i spillet og til Discord, samt et oversiktlig regnskap for guildens bank og felles gull.',
    },
    features: {
      en: [
        'Discord Role Authorization: Automated login via Discord that verifies guild roles (Officer vs. Raider), ensuring sensitive team plans stay secure and manageable.',
        'Dynamic Roster Matrix: Interactive drag-and-drop grid for assigning players and alts across bosses and raid difficulties, complete with absence tracking.',
        'Addon & Discord Export: One-click export that generates formatted text for the Method Raid Tools (MRT) in-game addon, or creates a clean image preview ready to paste into Discord.',
        'Automated Raider.io Sync: Integrated client that fetches character classes, realms, and item levels (ilvl) directly from Raider.io with a single click.',
        'Guild Bank Treasury: A shared financial ledger that tracks deposits, withdrawals, and balance updates across guild vaults, with support for receipt image attachments.',
        'Raid Tier Analytics & Excel Export: Visual summaries of gold spent and earned across raid tiers, with full transaction history exportable to Excel (xlsx).',
      ],
      no: [
        'Discord-autentisering: Sikker innlogging via Discord som automatisk sjekker roller (offiser vs. raider), slik at lagoppstillinger og planer holdes skjermet.',
        'Dynamisk lagoppstilling: Interaktivt rutenett med dra-og-slipp for å fordele spillere og alts på ulike bosser og vanskelighetsgrader, med innebygd fraværssporing.',
        'Eksport til addon og Discord: Ett-klikks eksport som genererer formatert tekst for Method Raid Tools (MRT)-tillegget i spillet, eller et ferdig bilde klart til å limes inn i Discord.',
        'Automatisk Raider.io-synk: Integrert løsning som henter klasser, servere og utstyrsnivå (ilvl) direkte fra Raider.io med ett tastetrykk.',
        'Guild-bank og regnskap: Felles økonomisk oversikt som sporer innskudd, uttak og saldoer på tvers av bank-karakterer, med mulighet for å laste opp kvitteringsbilder.',
        'Sesongstatistikk og Excel-eksport: Visuell oversikt over gull brukt og tjent gjennom raid-sesongen, med mulighet til å laste ned hele transaksjonshistorikken til Excel.',
      ],
    },
    challenges: {
      en: 'Connecting web-based planning with fast-paced in-game raid nights presented two main challenges. First, roster changes during a raid needed to reach the game immediately without manual typing. We resolved this by building dual export paths: one generating structured syntax for direct import into the Method Raid Tools (MRT) addon, and another generating a clipboard-ready graphic for Discord. Second, managing guild funds across multiple bank-alt characters made it easy for numbers to drift out of sync. We engineered a ledger system with Supabase that lets officers log transactions, attach image receipts, and quickly verify balances against in-game logs.',
      no: 'Å koble planlegging i nettleseren med hektisk spilling under raid-kvelder bød på to konkrete utfordringer. For det første krevde endringer i lagoppstillingen underveis i raidet umiddelbar oppdatering i spillet uten manuell tasting. Dette løste vi med to raske eksportløp: ett som lager formatert tekst for Method Raid Tools (MRT)-tillegget i spillet, og ett som kopierer et ferdig oppsettbilde rett til utklippstavlen for Discord. For det andre førte styring av felles midler fordelt på flere ulike bank-karakterer til at saldoer lett kom ut av synk. Vi utviklet et regnskapssystem i Supabase der offiserer enkelt kan føre innskudd og uttak, legge ved bildekvitteringer og raskt kontrollere tallene mot spillogger.',
    },
    repo: {
      en: 'The repository for this project is private but can be provided upon request.',
      no: 'Repositoriet for dette prosjektet er privat, men kan oppgis ved forespørsel.',
    },
  },
}

export const RAIDTOOLS_SLIDES = [
  '/project3/raidtools_desktop1.png',
  '/project3/raidtools_desktop2.png',
  '/project3/raidtools_desktop3.png',
  '/project3/raidtools_desktop4.png',
  '/project3/raidtools_desktop5.png',
  '/project3/raidtools_desktop6.png',
]

