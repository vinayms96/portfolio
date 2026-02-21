'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border py-16">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <p className="font-mono text-accent font-bold text-xl">vinay.ms</p>

          {/* Tagline */}
          <p className="text-text-muted text-sm max-w-sm leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-text-muted
                         hover:text-accent hover:border-accent
                         transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-text-muted
                         hover:text-accent hover:border-accent
                         transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg border border-border text-text-muted
                         hover:text-accent hover:border-accent
                         transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-border" />

          {/* Copyright */}
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Vinay MS &mdash; Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
