'use client'

import { useEffect } from 'react'
import { Zap, FolderOpen, Briefcase, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { NavBar } from '@/components/ui/tubelight-navbar'

const navItems = [
  { name: 'Skills',     url: '#skills',     icon: Zap },
  { name: 'Projects',   url: '#projects',   icon: FolderOpen },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Contact',    url: '#footer',     icon: Mail },
]

export default function Navbar() {
  useEffect(() => {
    // Always clear hash and start at top on load/reload
    window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Logo + GitHub + ThemeToggle — transparent fixed strip, pointer-events only on children */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 pointer-events-none">
        <a
          href="#"
          className="font-mono text-accent font-bold text-lg hover:text-accent/80 transition-colors pointer-events-auto"
        >
          vinay.ms
        </a>
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-sm px-4 py-1.5 border border-accent text-accent rounded-md
                       hover:bg-accent hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Tubelight pill — z-40 so it sits below the header strip */}
      <NavBar items={navItems} className="sm:pt-16" />
    </>
  )
}
