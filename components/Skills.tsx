'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillBadge from '@/components/ui/SkillBadge'
import { skillCategories } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="section-container">
        <SectionHeading
          number="01"
          title="Skills"
          subtitle="Technologies and tools I work with to build and maintain quality software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">
                {category.icon}&nbsp;&nbsp;{category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <SkillBadge name={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
