import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, copy, className = '' }) {
  return (
    <Reveal className={`mb-12 max-w-2xl sm:mb-14 ${className}`}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-wide text-subtle">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        <span className="uppercase">{label}</span>
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-relaxed text-pretty text-muted">{copy}</p> : null}
    </Reveal>
  )
}
