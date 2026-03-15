'use client'

import { TestTube2, Activity, Zap, Code2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'
import { projects } from '@/lib/data'

const bentoItems: BentoItem[] = [
  {
    title: projects[0].title,
    description: projects[0].description,
    icon: <TestTube2 className="w-4 h-4 text-accent" />,
    status: 'E2E',
    tags: projects[0].tags,
    meta: '13+ tests',
    href: projects[0].githubUrl,
    cta: 'View on GitHub →',
    colSpan: 2,
  },
  {
    title: projects[1].title,
    description: projects[1].description,
    icon: <Activity className="w-4 h-4 text-accent" />,
    status: 'AI + Load',
    tags: projects[1].tags,
    meta: 'Claude · OpenAI',
    href: projects[1].githubUrl,
    cta: 'View on GitHub →',
    colSpan: 3,
  },
  {
    title: projects[2].title,
    description: projects[2].description,
    icon: <Zap className="w-4 h-4 text-accent" />,
    status: 'E2E',
    tags: projects[2].tags,
    meta: 'PWA',
    href: projects[2].githubUrl,
    cta: 'View on GitHub →',
    colSpan: 3,
  },
  {
    title: projects[3].title,
    description: projects[3].description,
    icon: <Code2 className="w-4 h-4 text-accent" />,
    status: 'Framework',
    tags: projects[3].tags,
    meta: 'Data-driven',
    href: projects[3].githubUrl,
    cta: 'View on GitHub →',
    colSpan: 2,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="section-container">
        <SectionHeading
          number="02"
          title="Projects"
          subtitle="A selection of automation frameworks and test suites I've built."
        />
        <div className="mt-16">
          <BentoGrid items={bentoItems} />
        </div>
      </div>
    </section>
  )
}
