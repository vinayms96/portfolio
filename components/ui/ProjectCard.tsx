'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="relative flex flex-col h-full bg-surface border border-border rounded-xl p-6
                 transition-colors duration-300 hover:border-accent/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 30px rgba(99, 102, 241, 0.12)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-text-primary text-base leading-snug pr-4
                     hover:text-accent transition-colors duration-200 group"
        >
          {project.title}
          <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100
                                   transition-opacity duration-200 -translate-y-0.5" />
        </a>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200"
            aria-label="GitHub repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm flex-1 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono
                       bg-accent-muted text-accent border border-accent/20 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted
                   hover:text-accent transition-colors duration-200 mt-auto pt-3
                   border-t border-border w-full"
      >
        <Github className="w-3.5 h-3.5" />
        View on GitHub
        <ArrowUpRight className="w-3 h-3 ml-auto" />
      </a>
    </motion.div>
  )
}
