'use client'

import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, MapPin } from 'lucide-react'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { personalInfo } from '@/lib/data'

const roles = ['QA Engineer II', 'Test Automation Architect', 'Quality Strategist']

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const typedText = useTypingEffect(roles)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Small label */}
          <motion.span
            variants={item}
            className="font-mono text-accent text-sm tracking-widest"
          >
            {'// hello, world'}
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            variants={item}
            className="mt-4 h-10 flex items-center"
          >
            <span className="text-xl sm:text-2xl text-text-secondary font-mono">
              {typedText}
              <span className="animate-blink text-accent ml-0.5">|</span>
            </span>
          </motion.div>

          {/* Location */}
          <motion.div variants={item} className="mt-3 flex items-center gap-1.5 text-text-muted text-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="mt-6 text-text-secondary leading-relaxed max-w-xl"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover
                         text-white font-medium rounded-lg transition-all duration-200
                         hover:shadow-lg hover:shadow-accent/25"
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3
                         border border-border text-text-secondary rounded-lg
                         hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '2', label: 'Companies' },
              { value: '3+', label: 'Automation Frameworks' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to section bottom, never overlaps content */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent animate-float" />
      </motion.div>
    </section>
  )
}
