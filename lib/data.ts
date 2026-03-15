// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Vinay MS',
  role: 'QA Engineer II',
  tagline: 'Building confidence in software through systematic quality engineering.',
  bio: 'I am a QA Engineer with 7+ years of experience in test automation, quality strategy, and CI/CD integration. I specialize in building robust automation frameworks with Playwright, Cypress, and Selenium — ensuring software ships reliably at scale.',
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
    skills: ['Playwright', 'Cypress', 'Selenium', 'ExtentReports'],
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
    skills: ['Docker', 'MySQL'],
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
    title: 'SauceDemo Playwright Automation Suite',
    description:
      'Comprehensive test automation framework for SauceDemo e-commerce application using Playwright and TypeScript. Implements the Page Object Model pattern with tests for authentication, shopping workflows, and checkout flows. Includes 13+ tests with parallel execution, screenshot capture, and detailed HTML reporting.',
    tags: ['Playwright', 'TypeScript', 'E2E Testing', 'POM'],
    githubUrl: 'https://github.com/vinayms96/saucedemo_playwright',
  },
  {
    title: 'AI-Powered k6 Performance Testing Framework',
    description:
      'Performance testing framework where AI generates complete, standards-compliant k6 scripts from natural language prompts. Integrates Claude and OpenAI APIs to interpret test requirements, scaffold TypeScript test files, and enforce framework conventions via safety guards. Supports 6 executor types (ramping VUs, constant arrival-rate, and more), custom Trend/Rate/Counter metrics, and per-method SLO thresholds across a full CRUD load test suite.',
    tags: ['k6', 'TypeScript', 'AI', 'Performance Testing', 'Claude', 'OpenAI'],
    githubUrl: 'https://github.com/vinayms96/performance-k6',
  },
  {
    title: 'Cypress E2E Automation Suite',
    description:
      'End-to-end test automation framework for a Progressive Web App (PWA) using Cypress. Covers critical user journeys including authentication, product catalog, and checkout flows with comprehensive test reporting.',
    tags: ['Cypress', 'JavaScript', 'E2E Testing', 'PWA'],
    githubUrl: 'https://github.com/vinayms96/Cypress_NexPWA',
  },
  {
    title: 'Java Selenium Framework with ExtentReports',
    description:
      'Data-driven Selenium automation framework with ExtentReports integration for rich HTML test reports. Built for Magento 2.3 e-commerce regression testing with reusable utilities.',
    tags: ['Java', 'Selenium', 'ExtentReports', 'Magento'],
    githubUrl: 'https://github.com/vinayms96/AutoFrame_ExtentReports',
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
      'Built and maintained Cypress-based E2E automation suite covering critical user workflows',
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
