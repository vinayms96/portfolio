'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/ui/timeline'
import { experiences } from '@/lib/data'

function ExperienceCard({ entry }: { entry: (typeof experiences)[number] }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <h3 className="font-semibold text-text-primary text-base">{entry.role}</h3>
        <span className="text-xs font-mono text-text-muted bg-surface-2 px-2 py-0.5 rounded w-fit">
          {entry.duration}
        </span>
      </div>
      <p className="text-accent text-sm font-medium mb-0.5">{entry.company}</p>
      <p className="text-text-muted text-xs mb-4">{entry.location}</p>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{entry.description}</p>

      {/* Highlights */}
      <ul className="space-y-2">
        {entry.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent mt-0.5 flex-shrink-0 font-bold">▹</span>
            {highlight}
          </li>
        ))}
      </ul>

      {entry.current && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
          <span className="glow-dot" />
          <span className="text-xs font-mono text-accent">Currently here</span>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const timelineData = experiences.map((entry) => ({
    title: entry.period,
    content: <ExperienceCard entry={entry} />,
  }))

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="section-container">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="7+ years building quality engineering practices across EdTech and e-commerce."
        />
      </div>

      <Timeline data={timelineData} />
    </section>
  )
}
