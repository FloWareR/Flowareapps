export const PERSONAL_INFO = {
  name: 'Rafael Flores Galvan',
  shortName: 'Rafael Flores',
  title: 'Game Dev & Full-stack',
  heroPreTitle: 'Rafael Flores Galvan · Full-stack & Game Developer (React · Go · Unity)',
  bio: 'I make games and web apps. Most days that means gameplay code in Unity, backend services in Go, or front ends in React.\n\nI’ve shipped 2D and 3D games for PC and mobile, built REST APIs and microservices, and deployed them on Google Cloud. I also work in C, C#, Godot, and JavaScript.',
  aboutBio: "I'm Rafael, a junior full-stack and game developer in Guadalajara, Mexico. I've built Unity (C#) games for mobile and PC, REST APIs in Go, and enterprise apps with React, TypeScript, and Java Spring Boot running on Google Cloud.",
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
    skills: 'Unity (3D / 2D) / C# / SDL3 / Grid-based RPG mechanics / PC & mobile ports'
  },
  {
    id: 'frontend',
    title: 'Front-end',
    isAccent: false,
    skills: 'React / JavaScript / TypeScript / Responsive UI'
  },
  {
    id: 'backend',
    title: 'Back-end',
    isAccent: false,
    skills: 'Go (Golang) / Node.js / REST APIs / Microservices'
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
    description: 'I build grid-based RPG systems in Unity for iOS and Android, and port them to PC. I also write Go REST APIs for psychometric test apps and internal C/C# tools, using LLM coding agents along the way.'
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
    description: 'Built responsive enterprise web apps with React, TypeScript, and Java Spring Boot. Packaged the microservices in Docker and deployed them on Google Cloud (GCP).'
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
    description: 'Worked on a hotel management SaaS: an automated booking engine and live room-occupancy reports on MariaDB.'
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
    description: 'Main engine for mobile and PC games',
    isAccent: false
  },
  {
    id: 'csharp',
    badge: 'C#',
    name: 'C#',
    description: 'Gameplay code, mods, and tools',
    isAccent: false
  },
  {
    id: 'go',
    badge: 'Go',
    name: 'Go (Golang)',
    description: 'REST APIs and microservices',
    isAccent: false
  },
  {
    id: 'react',
    badge: 'Re',
    name: 'React',
    description: 'Websites and web app front ends',
    isAccent: false
  },
  {
    id: 'javascript',
    badge: 'JS',
    name: 'JavaScript',
    description: 'Front end and Node.js back end',
    isAccent: false
  },
  {
    id: 'sdl3',
    badge: 'SD',
    name: 'SDL3',
    description: 'Low-level graphics and input in C',
    isAccent: false
  },
  {
    id: 'linux',
    badge: 'Lx',
    name: 'Linux',
    description: 'My daily OS for development',
    isAccent: false
  },
  {
    id: 'docker',
    badge: 'Dk',
    name: 'Docker',
    description: 'Containers for APIs and databases',
    isAccent: false
  },
  {
    id: 'git',
    badge: 'Gt',
    name: 'Git',
    description: 'Version control, solo and in teams',
    isAccent: false
  },
  {
    id: 'llm',
    badge: 'AI',
    name: 'LLMs & AI Agents',
    description: 'Coding with Antigravity, Codex, and Claude',
    isAccent: false
  }
];

export const PROJECTS = [
  {
    id: 'sportgestion',
    projectNumber: 'Project 01',
    title: 'SportGestión',
    type: 'web',
    cat: 'Web',
    badge: 'Fullstack · React & Express API',
    kind: 'Company Website & Blog · React + Express · 2026',
    blurb: 'Company website for a Guadalajara sports consultancy, with a news blog the staff update themselves from a private admin page.',
    stack: 'React 19 / Vite / Express 5 / MySQL / Node.js',
    image: '/assets/sportgestion_home.jpg',
    demoUrl: 'https://beta.sportgestion.mx',
    featured: true,
    details: {
      intro: 'SportGestión is a Guadalajara consultancy that runs sports programs for government, companies, and community groups. Their site presents the firm and its services, takes contact requests, and has a "Noticias" blog the team writes from a private admin page.',
      role: 'Full-stack Developer',
      engine: 'React 19 (Vite SPA) · Express 5 (REST API) · MySQL · Hostinger Node.js',
      duration: 'Beta · Active Development (2026)',
      platform: 'Web Browser',
      demoUrl: 'https://beta.sportgestion.mx',
      demoText: 'Visit beta.sportgestion.mx',
      challenge: 'The client wanted to post news without calling a developer, so the site needed a blog with a login, and the public side had to stay safe from whatever got typed into the editor.',
      context: 'Real client project. The React front end and an Express API run on Hostinger with a MySQL database behind them.',
      features: [
        {
          num: '01',
          title: 'Contact form',
          desc: 'Visitors send requests through the API, which limits how often one IP can submit.'
        },
        {
          num: '02',
          title: 'News blog',
          desc: 'List and detail pages with cover images and readable Spanish URLs. Drafts stay hidden until published.'
        },
        {
          num: '03',
          title: 'Admin editor',
          desc: 'Password-protected page where staff write posts in a visual editor or Markdown and drop images into the text.'
        },
        {
          num: '04',
          title: 'Safe posts and uploads',
          desc: 'Post content is escaped before it reaches the page, and uploaded images are checked for type and size.'
        }
      ],
      gallery: [
        { src: '/assets/sportgestion_about.jpg', title: 'About the company' },
        { src: '/assets/sportgestion_services.jpg', title: 'Services list' },
        { src: '/assets/sportgestion_contact.jpg', title: 'Contact form' },
        { src: '/assets/sportgestion_admin.jpg', title: 'News admin' }
      ],
      results: [
        { metric: 'Live beta', label: 'running at beta.sportgestion.mx', isAccent: true }
      ],
      stackTags: ['React', 'Vite', 'Node.js', 'Express 5', 'MySQL', 'REST API', 'Markdown', 'Hostinger']
    }
  },
  {
    id: 'argo-in-dp',
    projectNumber: 'Project 02',
    title: 'Argo In Delivery Protocol',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game · 2.5D Puzzle Strategy',
    kind: '2.5D Grid Puzzle · Unity · PC & Mobile · 2026',
    blurb: 'Puzzle game where you plan the route for a delivery robot, then watch it drive on its own and hope the package survives.',
    stack: 'Unity / C# / 2.5D Grid / Multiplatform',
    image: '/assets/argo.png',
    demoUrl: 'https://floware.itch.io/argo-in-dp',
    featured: true,
    details: {
      intro: 'A 2.5D grid puzzle game. You never steer ARGO, the delivery robot. You edit the level to lay out its path, pick perks that change the rules, and then hit run.',
      role: 'Tech Lead & Gameplay Programming',
      engine: 'Unity / C#',
      duration: 'Alpha v0.3.6 · Active Development',
      platform: 'Windows · macOS · Linux · Android',
      demoUrl: 'https://floware.itch.io/argo-in-dp',
      demoText: 'Download on itch.io',
      videoUrl: 'https://www.youtube.com/watch?v=UjNZgRV2RYU',
      challenge: 'Splitting the game into a planning phase and a hands-off run phase, where perks and fragile packages can change how the robot behaves partway through.',
      context: 'Made with Valeria Meza (2D art) and Cecilia Morales (3D art and level design). I led the tech side and wrote the gameplay code.',
      features: [
        {
          num: '01',
          title: 'Edit mode',
          desc: 'Move pieces on the grid to build the route before the run starts.'
        },
        {
          num: '02',
          title: 'Perks',
          desc: 'Pick three perks per level that change speed, physics, or how obstacles behave.'
        },
        {
          num: '03',
          title: 'Fragile packages',
          desc: 'Some deliveries break on hard turns or hazards, so the route has to account for them.'
        },
        {
          num: '04',
          title: 'Run and retry',
          desc: 'ARGO drives the route by itself. When it fails, the game shows where, and you go back to editing.'
        }
      ],
      gallery: [
        { src: '/assets/argo_gameplay.png', title: 'ARGO on a delivery run' },
        { src: '/assets/argo_edit.png', title: 'Editing the route' },
        { src: '/assets/argo_run.png', title: 'Perks in action' }
      ],
      results: [
        { metric: 'v0.3.6', label: 'playable alpha', isAccent: true },
        { metric: '4 OS', label: 'Windows, macOS, Linux, Android', isAccent: false },
        { metric: '5+', label: 'handmade levels', isAccent: false }
      ],
      stackTags: ['Unity', 'C#', '2.5D Grid', 'Windows', 'macOS', 'Linux', 'Android', 'itch.io']
    }
  },
  {
    id: 'fish-flex',
    projectNumber: 'Project 03',
    title: 'Fish Flex',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game · 2D Top-down',
    kind: '2D Top-down Shooter · Unity · 2023',
    blurb: 'Top-down arcade shooter where a very buff fish fights off waves of sea predators and levels up between fights.',
    stack: 'Unity 2022 / C# / Aseprite',
    image: '/assets/fishflex.png',
    demoUrl: 'https://floware.itch.io/fish-flex',
    featured: true,
    details: {
      intro: 'You play a buff fish with a gun, shooting your way through sharks, jellyfish, and octopuses. Each level-up gives you a random perk to build on.',
      role: 'Lead Game Developer',
      engine: 'Unity 2022 / C#',
      duration: '4 months',
      platform: 'PC · itch.io',
      demoUrl: 'https://floware.itch.io/fish-flex',
      demoText: 'Play on itch.io',
      challenge: 'Keeping hundreds of bullets on screen without slowdowns, and balancing perks so runs get stronger without breaking.',
      context: 'Pixel art in the style of old arcade games, with particles and screen shake on top.',
      features: [
        {
          num: '01',
          title: 'Twin-stick aiming',
          desc: 'Aim in any direction with the mouse or the right gamepad stick.'
        },
        {
          num: '02',
          title: 'Random perks',
          desc: 'Pick from a random set of upgrades every time you level up.'
        },
        {
          num: '03',
          title: 'Enemy types',
          desc: 'Sharks that charge, jellyfish that shock, and octopuses that hide.'
        },
        {
          num: '04',
          title: 'Hit feedback',
          desc: 'Short freeze frames, bubble bursts, and sound on every hit.'
        }
      ],
      gallery: [
        { src: '/assets/fishflex.png', title: 'Fighting on the seabed' }
      ],
      results: [
        { metric: '2.5k+', label: 'plays on itch.io', isAccent: true }
      ],
      stackTags: ['Unity', 'C#', '2D Physics', 'Aseprite', 'itch.io']
    }
  },
  {
    id: 'primal-race',
    projectNumber: 'Project 04',
    title: 'Primal Race',
    type: 'jam',
    cat: 'Game Jam',
    badge: 'Game Jam · GameJamPlus 24/25',
    kind: '2.5D Combat Racing · Unity · 2024',
    blurb: 'Caveman racing game from GameJamPlus 2024/25. First to grab three pieces of meat wins, and power-ups help you get there.',
    stack: 'Unity / C# / 2.5D Physics / Game Jam',
    image: '/assets/primal_race.png',
    demoUrl: 'https://juanf4r-dev.itch.io/gamejam-plus-2024',
    featured: true,
    details: {
      intro: 'A 2.5D racing game where two cavemen race around obstacle tracks fighting over meat. Grab three pieces before your rival does.',
      role: 'Gameplay Programmer & Mechanics',
      engine: 'Unity / C#',
      duration: 'GameJamPlus 2024/2025 Submission',
      platform: 'PC (itch.io)',
      demoUrl: 'https://juanf4r-dev.itch.io/gamejam-plus-2024',
      demoText: 'Play on itch.io',
      challenge: 'Getting kart-style steering and drifting to feel right, plus hazards and power-ups, within the jam deadline.',
      context: 'Programmed with Juan Pablo Saavedra and Juan Fernando Aispuro. Design by Juan Fernando Aispuro and Julio Tonatiuh Aguilera, art by Águeda Isabel.',
      features: [
        {
          num: '01',
          title: 'Steering and drifts',
          desc: 'Tight kart-style handling for weaving around obstacles.'
        },
        {
          num: '02',
          title: 'Power-ups',
          desc: 'Speed boosts, traps to drop on your rival, and defensive items along the track.'
        },
        {
          num: '03',
          title: 'Meat objective',
          desc: 'The first player to collect three pieces of meat wins the race.'
        },
        {
          num: '04',
          title: 'Bumping',
          desc: 'Ram and nudge the other caveman off the racing line.'
        }
      ],
      gallery: [
        { src: '/assets/primal_race.png', title: 'Racing for meat' }
      ],
      results: [
        { metric: 'GJ+ 24/25', label: 'GameJamPlus entry', isAccent: true },
        { metric: '3', label: 'programmers on the team', isAccent: false }
      ],
      stackTags: ['Unity', 'C#', '2.5D Physics', 'Game Jam', 'itch.io']
    }
  },
  {
    id: 'bubblegun',
    projectNumber: 'Project 05',
    title: 'BubbleGun',
    type: 'jam',
    cat: 'Game Jam',
    badge: 'Game Jam · GGJ 2025',
    kind: '2D Platformer · Unity 6 · 2025',
    blurb: 'Global Game Jam 2025 platformer. Shoot bubbles to trap and clean dirty villagers, then jump on the bubbles to climb higher.',
    stack: 'Unity 6 / C# / 2D Physics',
    image: '/assets/bubblegun.png',
    demoUrl: 'https://juan-pablo-sr.itch.io/bubble-gun',
    featured: true,
    details: {
      intro: 'A 2D platformer made in 48 hours for Global Game Jam 2025 (theme: Bubble). You play a cleaner hired to wash two stained tribes before their feud turns into a fight.',
      role: 'Game Programmer',
      engine: 'Unity 6 / C#',
      duration: '48 hours',
      platform: 'Web · PC (itch.io)',
      demoUrl: 'https://juan-pablo-sr.itch.io/bubble-gun',
      demoText: 'Play on itch.io',
      challenge: 'Making one bubble do two jobs: trap an enemy, and hold the player up as a platform.',
      context: 'Programmed with Juan Saavedra. Design by Juanfer Aispuro, art by Alex Cordova, with David Ville as mentor.',
      features: [
        {
          num: '01',
          title: 'Floating bubbles',
          desc: 'Bubbles drift on air currents and sink a little when you stand on them.'
        },
        {
          num: '02',
          title: 'Trap and clean',
          desc: 'Catch dirty villagers and enemies in a bubble to clean them.'
        },
        {
          num: '03',
          title: 'Bubble jumping',
          desc: 'Use bubbles as stepping stones over gaps and hazards.'
        }
      ],
      gallery: [
        { src: '/assets/bubblegun.png', title: 'Bubbles as platforms' }
      ],
      results: [
        { metric: 'GGJ 25', label: 'submitted on time', isAccent: true },
        { metric: '48h', label: 'from idea to build', isAccent: false }
      ],
      stackTags: ['Unity 6', 'C#', '2D Physics', 'Game Jam', 'itch.io']
    }
  },
  {
    id: 'risk-of-death',
    projectNumber: 'Project 06',
    title: 'Risk of Death',
    type: 'game',
    cat: 'Video Game',
    badge: 'Video Game / Mod',
    kind: 'Risk of Rain 2 Mod · C# + R2API · 2025',
    blurb: 'Risk of Rain 2 mod that adds 7 new items, a new elite enemy type, and new status effects.',
    stack: 'C# / R2API / BepInEx / Unity',
    image: '/assets/rod.png',
    sourceUrl: 'https://github.com/FloWareR/RiskofDeath',
    featured: true,
    details: {
      intro: 'A content mod for the roguelike Risk of Rain 2, written in C# with BepInEx and the community R2API. It gives players more build options on the harder difficulties.',
      role: 'Mod Developer & Reverse Engineering',
      engine: 'C# / R2API / Unity',
      duration: 'Active Development (2025)',
      platform: 'PC (Steam / Thunderstore)',
      sourceUrl: 'https://github.com/FloWareR/RiskofDeath',
      challenge: 'Hooking into the game’s code with IL patches without breaking online co-op, where every player has to see the same items and effects.',
      context: 'Aimed at Monsoon and Eclipse runs, with the new items balanced against the base game’s.',
      features: [
        {
          num: '01',
          title: '7 new items',
          desc: 'Passive effects, each with its own rule for how it scales when you stack copies.'
        },
        {
          num: '02',
          title: 'New elite enemy',
          desc: 'An elite type with a combat aura and changed behavior.'
        },
        {
          num: '03',
          title: 'Works in co-op',
          desc: 'Effects sync between players over the network.'
        }
      ],
      gallery: [
        { src: '/assets/rod.png', title: 'The new items in the logbook' }
      ],
      results: [
        { metric: 'Active', label: 'still updated and rebalanced', isAccent: true }
      ],
      stackTags: ['C#', 'R2API', 'Risk of Rain 2', 'BepInEx', 'Unity']
    }
  },
  {
    id: 'floware-inventory',
    projectNumber: 'Project 07',
    title: 'FLOWARE Inventory System',
    type: 'web',
    cat: 'Web',
    badge: 'Fullstack · React & PHP API',
    kind: 'Inventory System · React & PHP API · 2024',
    blurb: 'Inventory and order tracker for a small store or warehouse: products, stock, orders, and customers, with a React dashboard and a PHP API.',
    stack: 'React / PHP 8.1 / MySQL / Docker / Tailwind',
    image: '/assets/logo.png',
    sourceUrl: 'https://github.com/FloWareR/Floware',
    clientSourceUrl: 'https://github.com/FloWareR/Floware-front',
    featured: true,
    details: {
      intro: 'A self-hosted system for keeping track of what a business has in stock. Staff manage the product catalog, record stock coming in and going out, take orders, and keep customer records. It runs locally in Docker.',
      role: 'Full-stack Developer & System Architect',
      engine: 'React (Vite SPA) · PHP 8.1 (Custom REST API) · MySQL · Docker',
      duration: '4 months · Self-hosted / Local',
      platform: 'Docker · Web Browser (Local / On-Premise)',
      sourceUrl: 'https://github.com/FloWareR/Floware',
      sourceText: 'Backend API (PHP)',
      clientSourceUrl: 'https://github.com/FloWareR/Floware-front',
      clientSourceText: 'Frontend SPA (React)',
      challenge: 'Stock counts can’t drift. When an order goes through, the stock deduction and the order have to save together or not at all, and each role (Admin, Manager, Staff) only gets the actions it should.',
      context: 'The API is plain PHP 8.1 with no framework: my own router, JWT login with roles, and database transactions. Docker Compose starts the API, a seeded MySQL database, and the front end with one command.',
      features: [
        {
          num: '01',
          title: 'Products and stock',
          desc: 'Catalog with SKUs, plus a record of every stock change and supplier shipment.'
        },
        {
          num: '02',
          title: 'Orders and customers',
          desc: 'Create orders that take items out of stock and keep each customer’s invoices.'
        },
        {
          num: '03',
          title: 'Dashboard',
          desc: 'React and Tailwind front end to browse products, adjust quantities, and review orders.'
        },
        {
          num: '04',
          title: 'Roles',
          desc: 'Admin, Manager, and Staff logins, each limited to its own actions.'
        }
      ],
      gallery: [
        { src: '/assets/logo.png', title: 'FLOWARE logo' }
      ],
      results: [
        { metric: 'Docker', label: 'runs locally with one command', isAccent: true }
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
