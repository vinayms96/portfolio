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
    skills: ['Playwright', 'Cypress', 'Selenium'],
  },
  {
    name: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Performance & Load Testing',
    icon: '⚡',
    skills: ['k6'],
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
  {
    title: 'Magento 2.3 Test Suite',
    description:
      'Comprehensive Java-based test suite for Magento 2.3 covering UI and API layers. Implements the Page Object Model pattern for maintainable, scalable test architecture.',
    tags: ['Java', 'Selenium', 'POM', 'API Testing', 'Magento'],
    githubUrl: 'https://github.com/vinayms96/Magento2.3',
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
    company: 'Powerschool India Pvt Ltd',
    role: 'QA Engineer II',
    duration: '4 years',
    period: '2021 — Present',
    location: 'Bengaluru, India',
    description:
      'Leading quality engineering efforts for EdTech SaaS products used by K-12 schools worldwide. Responsible for test strategy, automation architecture, and release quality sign-off.',
    highlights: [
      'Built and maintained Playwright-based E2E automation suite from the ground up',
      'Implemented performance and load testing pipelines with k6',
      'Containerized test environments using Docker for consistent CI execution',
      'Collaborated with cross-functional teams on test planning and risk assessment',
    ],
    current: true,
  },
  {
    company: 'Codilar Technologies Pvt Ltd',
    role: 'QA Engineer',
    duration: '3 years',
    period: '2018 — 2021',
    location: 'Bengaluru, India',
    description:
      'Quality assurance for Magento e-commerce platforms. Developed and maintained automated regression suites and championed best practices across project teams.',
    highlights: [
      'Automated regression testing for Magento 2.x using Selenium WebDriver and Java',
      'Developed Cypress automation for Progressive Web App (PWA) storefronts',
      'Created reusable test utilities and rich reporting frameworks with ExtentReports',
      'Mentored junior QA members on automation frameworks and testing strategies',
    ],
    current: false,
  },
]
