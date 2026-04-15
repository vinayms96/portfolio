// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Vinay MS',
  role: 'QA Automation Engineer',
  tagline: 'Building confidence in software through systematic quality engineering.',
  bio: 'I am a QA Automation Engineer with 7+ years building scalable test frameworks with Playwright, Cypress, and Selenium. I specialise in end-to-end automation, CI/CD integration, and performance testing — shipping quality at speed. Actively upskilling in AI-driven testing and intelligent automation.',
  github: 'https://github.com/vinayms96',
  linkedin: 'https://www.linkedin.com/in/vinay-m-s/',
  email: 'vinay96ms@outlook.com',
  location: 'Bengaluru, India',
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export type SkillCategory = {
  name: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Test Automation',
    icon: '🤖',
    skills: ['Playwright', 'Cypress', 'Selenium'],
  },
  {
    name: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    name: 'Performance & Load Testing',
    icon: '⚡',
    skills: ['k6'],
  },
  {
    name: 'AI Integration',
    icon: '🧠',
    skills: ['Claude API', 'OpenAI API'],
  },
  {
    name: 'Infrastructure & Data',
    icon: '🛠',
    skills: ['Docker', 'AWS', 'MySQL'],
  },
  {
    name: 'Tools & Workflow',
    icon: '🔧',
    skills: ['Git', 'GitHub Actions', 'JIRA', 'Postman', 'ClaudeCode', 'Agile', 'Scrum'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Playwright Test Automation Framework – SauceDemo',
    description:
      'Structured around Page Object Model with strict separation of test logic and selectors. Automated end-to-end user flows including authentication, product selection, cart management, and checkout. 13+ test cases with parallel execution to reduce test cycle time.',
    tags: ['Playwright', 'TypeScript', 'E2E Testing', 'POM'],
    githubUrl: 'https://github.com/vinayms96/saucedemo_playwright',
  },
  {
    title: 'AI-Driven Performance Testing Framework (k6)',
    description:
      'Generates standards-compliant k6 scripts from natural language prompts using Claude and OpenAI APIs. Supports multiple executor types, custom Trend/Rate/Counter metrics, and SLO-based thresholds. Covers full CRUD performance scenarios with validation guards to enforce framework conventions.',
    tags: ['k6', 'TypeScript', 'AI', 'Performance Testing', 'Claude', 'OpenAI'],
    githubUrl: 'https://github.com/vinayms96/performance-k6',
  },
  {
    title: 'Cypress Automation Suite – NexPWA',
    description:
      'Full-coverage test automation framework for a Progressive Web App using Cypress. Tackled PWA-specific challenges like service worker state and offline behaviour — areas traditional E2E tools often miss. Implemented comprehensive test reporting to streamline failure analysis.',
    tags: ['Cypress', 'JavaScript', 'E2E Testing', 'PWA'],
    githubUrl: 'https://github.com/vinayms96/Cypress_NexPWA',
  },
  {
    title: 'Java Selenium Framework with ExtentReports',
    description:
      'Data-driven Selenium automation framework for Magento 2.3 regression testing. Designed reusable utilities and modular components to reduce duplication. Integrated ExtentReports for rich HTML reporting, enhancing test visibility and debugging efficiency.',
    tags: ['Java', 'Selenium', 'ExtentReports', 'Magento'],
    githubUrl: 'https://github.com/vinayms96/AutoFrame_ExtentReports',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export type EducationEntry = {
  degree: string
  field: string
  institution: string
  year: string
}

export const education: EducationEntry[] = [
  {
    degree: 'B.Tech',
    field: 'Electrical and Electronics Engineering',
    institution: 'Dayananda Sagar Academy Of Technology And Management',
    year: 'May 2018',
  },
  {
    degree: 'Pre University',
    field: 'Computer Science',
    institution: 'Vidya Vardhaka Sangha',
    year: 'May 2014',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export type ExperienceEntry = {
  company: string
  role: string
  duration: string
  period: string
  location: string
  description: string
  highlights: string[]
  current: boolean
}

export const experiences: ExperienceEntry[] = [
  {
    company: 'PowerSchool India Pvt Ltd',
    role: 'QA Engineer II',
    duration: '2 years',
    period: 'Apr 2024 — Present',
    location: 'Bengaluru, India',
    description:
      'Leading quality engineering for EdTech products used by K-12 schools worldwide. Driving test strategy, automation architecture, and release quality sign-off across product teams.',
    highlights: [
      'Built and scaled a Playwright-based test automation framework for end-to-end and regression testing, improving execution speed and reliability',
      'Set up CI/CD pipelines to execute automated test suites on regular intervals and on every deployment',
      'Implemented performance and load testing applications using k6 to ensure system scalability',
      'Collaborated with cross-functional teams on test planning, risk assessment, and release readiness',
    ],
    current: true,
  },
  {
    company: 'PowerSchool India Pvt Ltd',
    role: 'QA Engineer I',
    duration: '2 years 4 months',
    period: 'Dec 2021 — Mar 2024',
    location: 'Bengaluru, India',
    description:
      'Responsible for manual and automation testing of EdTech platform features. Worked closely with developers and product managers to ensure quality across functional and regression test cycles.',
    highlights: [
      'Designed and executed test cases, test scenarios, and test plans for new features and releases',
      'Reported and tracked defects in defect tracking tools, ensuring timely resolution',
      'Contributed to building Cypress automation scripts and managing them in version control',
      'Participated in sprint ceremonies and provided QA sign-off for production deployments',
    ],
    current: false,
  },
  {
    company: 'Codilar Technologies Pvt Ltd',
    role: 'Software Test Engineer',
    duration: '3 years 2 months',
    period: 'Nov 2018 — Dec 2021',
    location: 'Bengaluru, India',
    description:
      'Quality assurance for Magento-based e-commerce platforms. Developed automated regression suites and established testing best practices across project teams.',
    highlights: [
      'Automated regression testing for Magento 2.x storefronts using Selenium WebDriver and Java',
      'Developed Cypress automation for Progressive Web App (PWA) e-commerce storefronts',
      'Created reusable test utilities and rich HTML reporting frameworks with ExtentReports',
      'Prepared test cases, test scenarios, and test plans; reported defects in defect tracking tools',
    ],
    current: false,
  },
]
