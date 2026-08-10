export interface NpmPackage {
  name: string;
  version: string;
  description: string;
  installCmd: string;
  npmUrl: string;
  githubUrl: string;
  tags: string[];
  category: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  location: string;
  type: 'Bootcamp' | 'Degree';
  description?: string;
}

export const PERSONAL_DATA = {
  name: 'Doni Darmawan',
  title: 'Software Engineer',
  subtitle: 'Frontend & Full-Stack Specialist | 5+ Years Experience',
  bio: 'Software Engineer with 5+ years of experience specializing in building responsive, scalable, and high-performance web applications using Next.js, React, JavaScript, and TypeScript. Proven track record across product-driven microfinance (Amartha) and agile software house environments (TwisCode). Expert in WebView bridges, Jest testing (80%+ coverage), Node.js backend, and AI-assisted engineering workflows.',
  location: 'Depok, West Java, Indonesia',
  phone: '085761298781',
  email: 'darmawandoni6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/doni-darmawan/',
  github: 'https://github.com/darmawandoni6',
  profileImage: '/assets/me.png',
  cvPdf: '/assets/CV_Doni_Darmawan.pdf',
  referenceSite: 'https://darmawan.netlify.app/',
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Jest Test Coverage', value: '80%+' },
    { label: 'Published NPM Packages', value: '3' },
    { label: 'Client & Fintech Apps', value: '10+' },
  ],
};

export const NPM_PACKAGES: NpmPackage[] = [
  {
    name: 'socketio-kit',
    version: '0.2.0',
    description:
      'Developer-friendly Socket.IO SDK wrapper for Client & Express Server with type-safety, room helpers, React hooks, and automatic cleanup.',
    installCmd: 'npm i socketio-kit',
    npmUrl: 'https://www.npmjs.com/package/socketio-kit',
    githubUrl: 'https://github.com/darmawandoni6/socket-kit',
    tags: ['Socket.IO', 'TypeScript', 'React Hooks', 'Express', 'Real-Time'],
    category: 'SDK / Realtime',
  },
  {
    name: 'template-ui-react',
    version: '2.0.1',
    description:
      'A CLI tool & starter boilerplate to quickly scaffold modern React projects with ready-to-use UI components and best practice structure.',
    installCmd: 'npm i template-ui-react',
    npmUrl: 'https://www.npmjs.com/package/template-ui-react',
    githubUrl: 'https://github.com/darmawandoni6/template-ui-react',
    tags: ['React', 'Boilerplate', 'CLI Tool', 'Scaffolding'],
    category: 'CLI / Boilerplate',
  },
  {
    name: 'sidebar-menu-ui',
    version: '1.0.3',
    description:
      'Lightweight, customizable, and smooth UI sidebar menu component built for React web applications.',
    installCmd: 'npm i sidebar-menu-ui',
    npmUrl: 'https://www.npmjs.com/package/sidebar-menu-ui',
    githubUrl: 'https://github.com/darmawandoni6/sidebar-menu-ui',
    tags: ['React', 'UI Component', 'Sidebar', 'Responsive'],
    category: 'UI Component',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'AmarthaFin Mobile App (Hybrid WebView)',
    subtitle: 'Hybrid WebView Architecture & Core Financial Workflows',
    description:
      'Engineered responsive Next.js & TypeScript WebView modules integrated directly inside the AmarthaFin mobile application (Android & iOS). Built seamless JavaScript bridges for native app communication, real-time KYC verification workflows, CleverTap behavior tracking, and 80%+ Jest unit test coverage.',
    url: 'https://play.google.com/store/apps/details?id=com.amarthaplus.amarthabeyond&hl=id',
    tags: [
      'Next.js',
      'TypeScript',
      'WebView Bridges',
      'AmarthaFin App',
      'Jest (80%+)',
      'CleverTap',
    ],
    featured: true,
  },
  {
    title: 'Core UI Next',
    subtitle: 'Enterprise Dashboard Starter System',
    description:
      'Modular React & Next.js admin dashboard template designed for scalability, dark mode aesthetics, and seamless state management.',
    url: 'https://github.com/darmawandoni6/core-ui-next',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    featured: true,
  },
  {
    title: 'Catat Uang PWA',
    subtitle: 'Personal Finance & Expense Tracker',
    description:
      'Progressive Web Application for real-time daily expense tracking with intuitive data visualization and offline support.',
    url: 'https://github.com/darmawandoni6/catat-uang',
    tags: ['PWA', 'React', 'Chart.js', 'State Management'],
    featured: false,
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    company: 'Amartha Microfinance',
    role: 'Software Engineer',
    period: 'August 2021 – Present',
    location: 'South Jakarta, Indonesia (Hybrid)',
    type: 'Full-Time',
    highlights: [
      'Maintained & optimized the core P2P lending marketplace application using Next.js, improving UI performance, frontend stability, and Core Web Vitals.',
      'Formulated and executed comprehensive unit tests using Jest, achieving an 80%+ code coverage threshold to minimize regression issues and enhance application reliability.',
      'Spearheaded the migration of marketplace modules into a hybrid WebView-based platform, building seamless JavaScript bridges to enable robust frontend and mobile app collaboration.',
      'Integrated CleverTap tracking systems to capture user behavior data, allowing product teams to analyze user journeys and optimize engagement.',
      'Leveraged cutting-edge AI-assisted development tools to streamline coding workflows, accelerating feature delivery and sprint velocity.',
      'Authored and maintained comprehensive technical documentation in Confluence, standardizing onboarding guides, architecture patterns, and API contracts.',
      'Built and refactored the critical KYC (Know Your Customer) verification workflow using WebView, incorporating secure REST API integration for real-time identity validation.',
      'Supported Loan Engineering team by optimizing core loan services within internal dashboard, focusing on error handling, state management, and data integrity.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Jest',
      'WebView Bridges',
      'CleverTap',
      'Confluence',
      'Jira',
      'AI Tools',
    ],
  },
  {
    company: 'TwisCode',
    role: 'Front-End Developer',
    period: 'May 2020 – August 2021',
    location: 'Surabaya, Indonesia (Remote/On-site)',
    type: 'Full-Time',
    highlights: [
      'Developed and delivered multiple concurrent client projects in a high-velocity software house environment, adapting to rapid shifts in requirements.',
      'Engineered responsive and modular admin dashboards using Next.js and React, integrating secure authentication and complex data tables.',
      'Built and customized professional client landing pages using WordPress and Elementor, optimizing page speed, SEO structures, and responsive layouts.',
      'Collaborated closely with UI/UX designers and Backend engineers to ensure pixel-perfect implementation and seamless API integration under tight deadlines.',
    ],
    techStack: [
      'React',
      'Next.js',
      'JavaScript',
      'WordPress',
      'Elementor',
      'REST API',
      'Figma',
      'CSS3',
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Stack',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Next.js',
      'React',
      'HTML5',
      'CSS3',
      'WebView',
      'WordPress',
      'Elementor',
      'Figma',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'Golang', 'REST API', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools, DevOps & Testing',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Jest (80%+ Coverage)',
      'CleverTap',
      'Confluence',
      'Jira',
      'Postman',
      'AI-Assisted Dev Tools',
      'Agile / Scrum',
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: 'Alterra Academy',
    program: 'Back End Golang Developer Intensive Bootcamp',
    period: 'July 2021 – August 2021',
    location: 'Indonesia',
    type: 'Bootcamp',
    description:
      'Intensive backend engineering program focusing on Golang microservices, REST APIs, database management, and clean architecture.',
  },
  {
    institution: 'PT. DumbWays Indonesia Teknologi',
    program: 'Full Stack Developer JavaScript Intensive Bootcamp',
    period: 'February 2020 – May 2020',
    location: 'Indonesia',
    type: 'Bootcamp',
    description:
      'Full stack engineering bootcamp covering React.js, Node.js, Express, database integrations, and deployment.',
  },
  {
    institution: 'Universitas Mikroskil',
    program: 'Diploma Degree (D3) in Manajemen Informatika',
    period: 'January 2016 – November 2019',
    location: 'Medan, Indonesia',
    type: 'Degree',
    description:
      'Computer Information Systems degree covering software fundamentals, database systems, web development, and algorithms.',
  },
];
