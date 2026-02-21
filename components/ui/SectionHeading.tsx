interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-accent text-sm tracking-wider">
        {'// '}{number}. {title.toLowerCase()}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary mt-1 max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
