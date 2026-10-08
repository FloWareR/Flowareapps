export const PERSONAL_INFO = {
  name: 'Rafael Flores Galvan',
  shortName: 'Rafael Flores',
  title: 'Game Dev & Full-stack',
  heroPreTitle: 'Rafael Flores Galvan — Fullstack Developer (React · Go · Game Dev)',
  bio: 'I’m a fullstack and game developer, working across gameplay programming, backend architecture, and frontend development.\n\nMy stack includes C#, Unity, C, Godot, Go, JavaScript, and React, with 2D and 3D games for PC and mobile platforms, developing REST APIs and microservices, and deploying applications on Google Cloud.',
  aboutBio: "Hi! I'm Rafael, a Jr. Fullstack Developer and Game Developer based in Guadalajara, Mexico. Experience in Unity (C#) for mobile and PC, REST APIs in Go, enterprise applications with React, TypeScript, and Java Spring Boot, and cloud infrastructure on Google Cloud (GCP).",
  experienceTotal: '2 years',
  email: 'rfloresg@flowareapps.com',
  phone: '+52 33 20 47 8888',
  phoneDisplay: '+52 33 20 47 8888',
  location: 'Guadalajara, Jalisco, Mexico',
  portfolioUrl: 'https://www.flowareapps.com',
  resumeUrl: '/assets/resume.pdf',
  photoUrl: '/assets/me.png',
  links: {
    github: 'https://github.com/FloWareR',
    linkedin: 'https://www.linkedin.com/in/rafael-flores-85a5a4289/',
    itch: 'https://floware.itch.io',
    whatsapp: 'https://wa.me/523320478888'
  }
};

export const SKILL_CATEGORIES = [
  {
    id: 'gamedev',
    title: 'Game Dev',
    isAccent: true,
    skills: 'Unity (3D / 2D) / C# / SDL3 / Grid-based RPG mechanics / PC & Mobile Porting'
  },
  {
    id: 'frontend',
    title: 'Front-end',
    isAccent: false,
    skills: 'React / JavaScript / Modern Web Apps / UI & Controls'
  },
  {
    id: 'backend',
    title: 'Back-end',
    isAccent: false,
    skills: 'Go (Golang) / REST APIs / Microservices / High-Performance Backends'
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    isAccent: false,
    skills: 'Linux / Docker / Git / LLM Coding Agents (Antigravity, Codex, Claude)'
  }
];

export const EXPERIENCE = [
  {
    id: 'onemagearmy',
    period: '2026 — Present',
    duration: 'Active',
    initials: 'OMA',
    company: 'OneMageArmy',
    location: 'Mexico · Remote / Hybrid',
    role: 'Fullstack Developer | Game Developer',
    tech: 'Unity (C#) & Go',
    description: 'Grid-based RPG mechanics and systems in Unity for iOS/Android and PC porting. REST APIs in Go for psychometric applications and internal C/C# tooling powered by LLM coding agents.'
  },
  {
    id: 'encora',
    period: '2025 — 2026',
    duration: '1 year',
    initials: 'EN',
    company: 'Encora Mx',
    location: 'Guadalajara, MX · Remote',
    role: 'Fullstack Developer',
    tech: 'React, TypeScript & Spring Boot',
    description: 'Development of responsive enterprise web applications with React, TypeScript, and Java Spring Boot. Microservice containerization with Docker and deployment on Google Cloud Platform (GCP).'
  },
  {
    id: 'inotek',
    period: 'Summer 2024',
    duration: 'Internship',
    initials: 'IN',
    company: 'Inotek GDL',
    location: 'Guadalajara, Jalisco · On-site',
    role: 'Fullstack Developer Intern',
    tech: 'PHP, JavaScript & MySQL',
    description: 'SaaS platform for hotel management featuring an automated booking engine and real-time room occupancy analytics powered by MariaDB.'
  }
];

export const EDUCATION = [
  {
    degree: 'B.S. in Software & Video Game Development',
    period: '2022 — 2026',
    institution: 'Amerike Zapopan · GPA: 3.7 / 4.0 (9.3 / 10.0)'
  },
  {
    degree: 'Mechatronics Engineering',
    period: '2019 — 2021',
    institution: 'CETI Colomos · Guadalajara, Jalisco'
  }
];

export const CERTIFICATIONS = [
  {
    name: 'Associate Cloud Engineer Certification',
    issuer: 'Google',
    year: '2025',
    issued: 'Oct 2025',
    expires: 'Oct 2028'
  },
  {
    name: 'Gen AI Training Path - Technical Track',
    issuer: 'Coursera',
    year: '2025',
    issued: 'Aug 2025',
    credentialId: '7phgVe5MT_iYYFXuTL_4bg'
  },
  {
    name: 'Gen AI Training Path - Foundational',
    issuer: 'Coursera',
    year: '2025',
    issued: 'Aug 2025',
    credentialId: 'hrKjNiySSiyyoZYskuos7w'
  },
  {
    name: 'Advanced Prompt Engineering for Everyone',
    issuer: 'Vanderbilt University',
    year: '2025',
    issued: 'Aug 2025',
    credentialId: 'D9PCCDPYRRXY'
  },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
    issued: 'Aug 2025',
    credentialId: '6GLPXSD369W3'
  }
];

export const TOOLS = [
  {
    id: 'unity',
    badge: 'Un',
    name: 'Unity (3D / 2D)',
    description: 'Main engine · C# gameplay systems, mobile & PC',
    isAccent: true
  },
  {
    id: 'csharp',
    badge: 'C#',
    name: 'C#',
    description: 'Game mechanics, engine scripting & tooling',
    isAccent: false
  },
  {
    id: 'go',
    badge: 'Go',
    name: 'Go (Golang)',
    description: 'High-performance backend & REST microservices',
    isAccent: false
  },
  {
    id: 'react',
    badge: 'Re',
    name: 'React',
    description: 'Modern front-end applications & interactive UI',
    isAccent: false
  },
  {
    id: 'javascript',
    badge: 'JS',
    name: 'JavaScript',
    description: 'Dynamic web applications & runtime scripting',
    isAccent: false
  },
  {
    id: 'sdl3',
    badge: 'SD',
    name: 'SDL3',
    description: 'Low-level multimedia & cross-platform dev',
    isAccent: false
  },
  {
    id: 'linux',
    badge: 'Lx',
    name: 'Linux',
    description: 'Primary OS & native development environment',
    isAccent: false
  },
  {
    id: 'docker',
    badge: 'Dk',
    name: 'Docker',
    description: 'Containerization & reproducible environments',
    isAccent: false
  },
  {
    id: 'git',
    badge: 'Gt',
    name: 'Git',
    description: 'Distributed version control & team workflows',
    isAccent: false
  },
  {
    id: 'llm',
    badge: 'AI',
    name: 'LLMs & AI Agents',
    description: 'Antigravity, Codex & Claude workflows',
    isAccent: true
  }
];

export const PROJECTS = [
  {
    id: 'argo-in-dp',
    projectNumber: 'Project 01',
    title: 'Argo In Delivery Protocol',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game · 2.5D Puzzle Strategy',
    kind: '2.5D Grid Puzzle · Unity · PC & Mobile · 2026',
    blurb: 'Reshape the grid, adapt to modifiers, and engineer the perfect autonomous run in this 2.5D puzzle experience.',
    stack: 'Unity / C# / 2.5D Grid / Multiplatform',
    coverText: '[SCREENSHOT · ARGO IN DELIVERY PROTOCOL]',
    image: '/assets/argo.png',
    demoUrl: 'https://floware.itch.io/argo-in-dp',
    featured: true,
    details: {
      intro: 'A 2.5D grid-based puzzle experience where you don’t control the delivery robot directly—you engineer its autonomous path, modifiers, and package constraints.',
      role: 'Tech Lead & Gameplay Programming',
      engine: 'Unity / C#',
      duration: 'Alpha v0.3.6 · Active Development',
      platform: 'Windows · macOS · Linux · Android',
      demoUrl: 'https://floware.itch.io/argo-in-dp',
      demoText: 'Download on itch.io',
      videoUrl: 'https://www.youtube.com/watch?v=UjNZgRV2RYU',
      challenge: 'Engineering an autonomous execution loop where the player designs the path in edit mode, applies rule-altering perks, and accounts for delicate package physics before hitting simulate.',
      context: 'Developed by a collaborative team: Rafael Flores (Tech Lead & Programming), Valeria Meza (2D Art & Asset Design), and Cecilia Morales (3D Art & Level Design). Handcrafted levels built to challenge spatial reasoning and emergent mechanics.',
      features: [
        {
          num: '01',
          title: 'Design & Edit Mode',
          desc: 'Modify the 2.5D grid layout in real-time edit mode to craft optimal delivery trajectories before simulation begins.'
        },
        {
          num: '02',
          title: 'Modifier & Perk System',
          desc: 'Select three gameplay perks that dynamically alter physical rules, movement speed, and obstacle interactions.'
        },
        {
          num: '03',
          title: 'Special Delivery Packages',
          desc: 'Transport fragile cargo requiring unique handling constraints, inertia balancing, and hazard avoidance.'
        },
        {
          num: '04',
          title: 'Iterative Simulation Engine',
          desc: 'Watch ARGO autonomously execute your planned path with instant telemetry and failure feedback to refine future runs.'
        }
      ],
      gallery: [
        { src: '/assets/argo_gameplay.png', label: '[SCREENSHOT · GAMEPLAY]', title: 'Autonomous Delivery Simulation' },
        { src: '/assets/argo_edit.png', label: '[SCREENSHOT · EDIT MODE]', title: 'Level & Grid Path Editing' },
        { src: '/assets/argo_run.png', label: '[SCREENSHOT · MODIFIERS]', title: 'Perk Modifiers & Constraints' }
      ],
      results: [
        { metric: 'v0.3.6', label: 'playable alpha release', isAccent: true },
        { metric: '4 OS', label: 'cross-platform: Win, Mac, Linux, Android', isAccent: false },
        { metric: '5+', label: 'handcrafted puzzle levels', isAccent: false }
      ],
      stackTags: ['Unity', 'C#', '2.5D Grid', 'Windows', 'macOS', 'Linux', 'Android', 'itch.io']
    }
  },
  {
    id: 'fish-flex',
    projectNumber: 'Project 02',
    title: 'Fish Flex',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game · 2D Top-down',
    kind: '2D Top-down Shooter · Unity · 2023',
    blurb: 'Frantic 2D top-down shooter built in Unity, featuring aquatic enemy hordes and modular weapon progression.',
    stack: 'Unity 2022 / C# / Aseprite',
    coverText: '[SCREENSHOT · FISH FLEX]',
    image: '/assets/fishflex.png',
    demoUrl: 'https://floware.itch.io/fish-flex',
    featured: true,
    details: {
      intro: 'An arcade shooter where you control a buff fish armed to the gills battling marine apex predators.',
      role: 'Lead Game Developer',
      engine: 'Unity 2022 / C#',
      duration: '4 months',
      platform: 'PC · itch.io',
      demoUrl: 'https://floware.itch.io/fish-flex',
      demoText: 'Play on itch.io',
      challenge: 'Optimizing physics for hundreds of simultaneous projectiles while tuning an addictive roguelite upgrade curve.',
      context: 'Inspired by classic arcade titles, merging retro pixel art with modern particle effects and screen shake.',
      features: [
        {
          num: '01',
          title: '360° twin-stick firing',
          desc: 'Fluid controls with mouse or right gamepad stick with tactile recoil.'
        },
        {
          num: '02',
          title: 'Perk upgrade system',
          desc: 'Randomized perk tree on leveling up each run.'
        },
        {
          num: '03',
          title: 'Enemy diversity',
          desc: 'Charging sharks, electric jellyfish, and camouflaged octopuses.'
        },
        {
          num: '04',
          title: 'Punchy impact feedback',
          desc: 'Hit-stop frames, bubble particle bursts, and crisp audio cues.'
        }
      ],
      gallery: [
        { src: '/assets/fishflex.png', label: '[SCREENSHOT · GAMEPLAY]', title: 'Intense Seabed Combat' }
      ],
      results: [
        { metric: '2.5k+', label: 'plays on itch.io', isAccent: true },
        { metric: '60 FPS', label: 'silky-smooth performance', isAccent: false }
      ],
      stackTags: ['Unity', 'C#', '2D Physics', 'Aseprite', 'itch.io']
    }
  },
  {
    id: 'primal-race',
    projectNumber: 'Project 03',
    title: 'Primal Race',
    type: 'jam',
    cat: 'Game Jam',
    badge: 'Game Jam · GameJamPlus 24/25',
    kind: '2.5D Combat Racing · Unity · 2024',
    blurb: 'Prehistoric 2.5D combat racer created for GameJamPlus 2024/2025: race, use power-ups, and grab meat before your rival!',
    stack: 'Unity / C# / 2.5D Physics / Game Jam',
    coverText: '[SCREENSHOT · PRIMAL RACE]',
    image: '/assets/primal_race.png',
    demoUrl: 'https://juanf4r-dev.itch.io/gamejam-plus-2024',
    featured: true,
    details: {
      intro: 'A third-person 2.5D prehistoric racer where you take control of a caveman racing for survival, fighting rival cavemen for meat across dynamic obstacle tracks.',
      role: 'Gameplay Programmer & Mechanics',
      engine: 'Unity / C#',
      duration: 'GameJamPlus 2024/2025 Submission',
      platform: 'PC (itch.io)',
      demoUrl: 'https://juanf4r-dev.itch.io/gamejam-plus-2024',
      demoText: 'Play on itch.io',
      challenge: 'Implementing responsive kart-style steering and drifting physics, interactive hazards, and synchronized power-up collection under competitive jam deadlines.',
      context: 'Developed for GameJamPlus 2024/2025 by a collaborative crew: Programmers Rafael Flores Galvan, Juan Pablo Saavedra, and Juan Fernando Aispuro; Game Designers Juan Fernando Aispuro & Julio Tonatiuh Aguilera; Artist Águeda Isabel.',
      features: [
        {
          num: '01',
          title: 'Caveman Racing & Drifts',
          desc: 'Responsive handling, obstacle navigation, and tight steering around prehistoric tracks.'
        },
        {
          num: '02',
          title: 'Strategic Power-Ups',
          desc: 'Speed boosts, offensive traps, and defensive tactical items scattered across the circuit.'
        },
        {
          num: '03',
          title: 'Competitive Meat Retrieval',
          desc: 'Objective-driven racing where grabbing 3 pieces of meat before your opponent seals victory.'
        },
        {
          num: '04',
          title: 'Multiplayer Combat Dynamics',
          desc: 'Bumping, nudging, and close-quarters rivalry mechanics that keep every lap tense.'
        }
      ],
      gallery: [
        { src: '/assets/primal_race.png', label: '[SCREENSHOT · PRIMAL RACE]', title: 'Prehistoric Circuit & Meat Duel' }
      ],
      results: [
        { metric: 'GJ+ 24/25', label: 'official competition entry', isAccent: true },
        { metric: '60 FPS', label: 'smooth arcade performance', isAccent: false },
        { metric: '3-Dev', label: 'collaborative engineering team', isAccent: false }
      ],
      stackTags: ['Unity', 'C#', '2.5D Physics', 'Game Jam', 'itch.io']
    }
  },
  {
    id: 'bubblegun',
    projectNumber: 'Project 04',
    title: 'BubbleGun',
    type: 'jam',
    cat: 'Game Jam',
    badge: 'Game Jam · GGJ 2025',
    kind: '2D Platformer · Unity 6 · 2025',
    blurb: '2D platformer crafted for Global Game Jam 2025: shoot bubbles to trap foes, clean the villagers, and float to new heights.',
    stack: 'Unity 6 / C# / 2D Physics',
    coverText: '[SCREENSHOT · BUBBLEGUN]',
    image: '/assets/bubblegun.png',
    demoUrl: 'https://juan-pablo-sr.itch.io/bubble-gun',
    featured: true,
    details: {
      intro: 'An eccentric 2D platformer built during Global Game Jam 2025 (theme: Bubble). Play as a cleaning specialist hired to resolve an escalating dispute between two stained tribes before conflict erupts.',
      role: 'Game Programmer',
      engine: 'Unity 6 / C#',
      duration: '48 hours',
      platform: 'Web · PC (itch.io)',
      demoUrl: 'https://juan-pablo-sr.itch.io/bubble-gun',
      demoText: 'Play on itch.io',
      challenge: 'Engineering bubble entities that double as both offensive traps and buoyant floating platforms for the player to reach higher elevations.',
      context: 'Created by Rafael Flores and Juan Saavedra (Programming), Juanfer Aispuro (Game Design), Alex Cordova (Art), and David Ville (Mentor) during the GGJ 2025 weekend.',
      features: [
        {
          num: '01',
          title: 'Buoyancy Physics',
          desc: 'Bubbles naturally drift with airflow currents and bounce under the player’s weight.'
        },
        {
          num: '02',
          title: 'Enemy Encapsulation',
          desc: 'Trap and clean contaminated villagers and enemies in bubbles to defuse tensions.'
        },
        {
          num: '03',
          title: 'Bubble Jumping',
          desc: 'Use floating bubbles as stepping stones across hazard-filled chasms.'
        },
        {
          num: '04',
          title: 'Rapid Jam Delivery',
          desc: 'Designed, implemented, and delivered under the strict 48-hour jam deadline.'
        }
      ],
      gallery: [
        { src: '/assets/bubblegun.png', label: '[SCREENSHOT · LEVEL 1]', title: 'Floating Platforms & Bubbles' }
      ],
      results: [
        { metric: 'GGJ 25', label: 'official on-time submission', isAccent: true },
        { metric: '48h', label: 'rapid turnaround', isAccent: false }
      ],
      stackTags: ['Unity 6', 'C#', '2D Physics', 'Game Jam', 'itch.io']
    }
  },
  {
    id: 'risk-of-death',
    projectNumber: 'Project 05',
    title: 'Risk of Death',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game / Mod',
    kind: 'Risk of Rain 2 Mod · C# + R2API · 2025',
    blurb: 'Active expansion mod for Risk of Rain 2 introducing 7 new custom items, 1 elite monster type, and new status effects.',
    stack: 'C# / R2API / BepInEx / Unity',
    coverText: '[SCREENSHOT · RISK OF DEATH]',
    image: '/assets/rod.png',
    sourceUrl: 'https://github.com/FloWareR/RiskofDeath',
    featured: true,
    details: {
      intro: 'Expansive mod for the acclaimed roguelike Risk of Rain 2, built in C# leveraging BepInEx and the community R2API.',
      role: 'Mod Developer & Reverse Engineering',
      engine: 'C# / R2API / Unity',
      duration: 'Active Development (2025)',
      platform: 'PC (Steam / Thunderstore)',
      sourceUrl: 'https://github.com/FloWareR/RiskofDeath',
      challenge: 'Injecting IL code and hooking engine functions seamlessly without desyncing co-op multiplayer sessions.',
      context: 'Created to deepen tactical build options on Eclipse / Monsoon difficulties while keeping balance aligned with base game items.',
      features: [
        {
          num: '01',
          title: '7 Original Items',
          desc: 'Unique passive effects with custom mathematical formulas for item stacking.'
        },
        {
          num: '02',
          title: 'New Elite Enemy Variant',
          desc: 'Modded monsters with combat auras and custom behavioral modifiers.'
        },
        {
          num: '03',
          title: 'Co-op Multiplayer Safe',
          desc: 'Clean IL hooking and RPC synchronization preserving online stability.'
        }
      ],
      gallery: [
        { src: '/assets/rod.png', label: '[SCREENSHOT · MOD]', title: 'Items Registered in the Game Logbook' }
      ],
      results: [
        { metric: 'Active', label: 'maintained & balanced', isAccent: true },
        { metric: '100% C#', label: 'modular, high-performance code', isAccent: false }
      ],
      stackTags: ['C#', 'R2API', 'Risk of Rain 2', 'BepInEx', 'Unity']
    }
  },
  {
    id: 'floware-inventory',
    projectNumber: 'Project 06',
    title: 'FLOWARE Inventory System',
    type: 'web',
    cat: 'Web',
    badge: 'Fullstack · React & PHP API',
    kind: 'Inventory System · React & PHP API · 2024',
    blurb: 'Full-stack inventory and order management system with a reactive React frontend SPA, custom PHP REST API, and Docker containerization.',
    stack: 'React / PHP 8.1 / MySQL / Docker / Tailwind',
    coverText: '[SYSTEM · FLOWARE INVENTORY ARCHITECTURE]',
    image: '/assets/logo.png',
    sourceUrl: 'https://github.com/FloWareR/Floware',
    clientSourceUrl: 'https://github.com/FloWareR/Floware-front',
    featured: true,
    details: {
      intro: 'A decoupled full-stack inventory management system featuring a custom PHP REST API backend and a modern React frontend SPA. Developed as an on-premise, Docker-containerized business solution for managing product catalogs, warehouse inventory transactions, orders, and customer accounts.',
      role: 'Full-stack Developer & System Architect',
      engine: 'React (Vite SPA) · PHP 8.1 (Custom REST API) · MySQL · Docker',
      duration: '4 months · Self-hosted / Local',
      platform: 'Docker · Web Browser (Local / On-Premise)',
      sourceUrl: 'https://github.com/FloWareR/Floware',
      sourceText: 'Backend API (PHP)',
      clientSourceUrl: 'https://github.com/FloWareR/Floware-front',
      clientSourceText: 'Frontend SPA (React)',
      challenge: 'Architecting a high-performance decoupled stack without bloated frameworks: implementing a custom PHP router, JWT role authentication (Admin, Manager, Staff), and database transaction managers to guarantee strict ACID stock balance during order processing.',
      context: 'Built as an end-to-end inventory management platform for retail and warehouse operations. Designed to run smoothly in isolated containers via Docker Compose, coordinating a PHP-FPM API, MySQL database with initial seeds, and a reactive Vite/Tailwind front-end.',
      features: [
        {
          num: '01',
          title: 'Custom PHP REST API',
          desc: 'Modular routing engine, controller layer, authentication middleware, and database abstractions implemented in pure PHP 8.1.'
        },
        {
          num: '02',
          title: 'React & Tailwind SPA',
          desc: 'Modern responsive dashboard with interactive product catalogs, real-time quantity adjustments, modal forms, and orders ledger.'
        },
        {
          num: '03',
          title: 'Inventory & Order Lifecycle',
          desc: 'Atomic transaction tracking for stock deductions, supplier shipments, product SKU indexing, and customer invoices.'
        },
        {
          num: '04',
          title: 'Docker Containerized Stack',
          desc: 'Turnkey orchestration with docker-compose.yml coordinating PHP, MySQL database with seed scripts, and frontend server.'
        }
      ],
      gallery: [
        { src: '/assets/logo.png', label: '[ARCHITECTURE · FLOWARE]', title: 'FLOWARE System Identity & Architecture' }
      ],
      results: [
        { metric: 'React+PHP', label: 'fully decoupled full-stack architecture', isAccent: true },
        { metric: 'Docker', label: 'containerized & reproducible environment', isAccent: false },
        { metric: 'ACID Safe', label: 'transaction-guaranteed stock consistency', isAccent: false }
      ],
      stackTags: ['React', 'PHP 8.1', 'MySQL', 'Docker', 'Docker Compose', 'Tailwind CSS', 'Vite', 'REST API']
    }
  }
];

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Video Game Demos' },
  { id: 'web', label: 'Web' },
  { id: 'jam', label: 'Game Jams' }
];
