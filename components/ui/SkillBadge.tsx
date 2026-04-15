'use client'

import { motion } from 'framer-motion'
import {
  SiCypress,
  SiSelenium,
  SiJavascript,
  SiTypescript,
  SiK6,
  SiDocker,
  SiMysql,
  SiGit,
  SiGithubactions,
  SiJira,
  SiPostman,
} from 'react-icons/si'
import { FaJava, FaTheaterMasks, FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'

// Playwright uses theater masks in its own branding — FaTheaterMasks is the closest match
const iconMap: Record<string, IconType> = {
  Playwright:      FaTheaterMasks,
  Cypress:         SiCypress,
  Selenium:        SiSelenium,
  Java:            FaJava,
  JavaScript:      SiJavascript,
  TypeScript:      SiTypescript,
  k6:              SiK6,
  Docker:          SiDocker,
  AWS:             FaAws,
  MySQL:           SiMysql,
  Git:             SiGit,
  'GitHub Actions': SiGithubactions,
  JIRA:            SiJira,
  Postman:         SiPostman,
}

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  const Icon = iconMap[name]

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-mono
                 bg-surface border border-border rounded-md
                 text-text-secondary cursor-default
                 hover:border-accent hover:text-accent hover:bg-accent-muted
                 transition-colors duration-200"
    >
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
      {name}
    </motion.span>
  )
}
