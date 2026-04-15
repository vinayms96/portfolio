'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-border scroll-mt-24">
      <div className="section-container">
        <SectionHeading
          number="04"
          title="Education"
          subtitle="Academic background that laid the foundation for a technical career."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-text-muted bg-surface-2 px-2 py-0.5 rounded">
                  {entry.year}
                </span>
              </div>

              <h3 className="font-semibold text-text-primary text-base">{entry.degree}</h3>
              <p className="text-accent text-sm font-medium mt-0.5">{entry.field}</p>
              <p className="text-text-muted text-xs mt-2">{entry.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
