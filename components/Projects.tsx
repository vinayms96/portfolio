'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="section-container">
        <SectionHeading
          number="02"
          title="Projects"
          subtitle="A selection of automation frameworks and test suites I've built."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
