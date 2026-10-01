import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import ProjectVisual from './ArchitectureFlow'
import { GitHubIcon } from './ui/BrandIcons'
import { Button, ButtonLink } from './ui/Button'

function Metric({ metric }) {
  return (
    <div className="inline-flex items-baseline gap-2 rounded-lg border border-accent/25 bg-accent/[0.07] px-3 py-1.5">
      <span className="font-mono text-sm font-medium text-accent">{metric.value}</span>
      <span className="text-xs text-muted">{metric.label}</span>
    </div>
  )
}

function Actions({ project, onOpen }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary" size="md" onClick={() => onOpen(project.id)} aria-haspopup="dialog">
        View case study
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Button>
      {project.githubUrl ? (
        <ButtonLink
          href={project.githubUrl}
          external
          variant="secondary"
          aria-label={`${project.name} source code on GitHub`}
        >
          <GitHubIcon />
          GitHub
        </ButtonLink>
      ) : null}
      {project.liveUrl ? (
        <ButtonLink href={project.liveUrl} external variant="secondary" aria-label={`${project.name} live demo`}>
          <ExternalLink className="size-4" />
          Live demo
        </ButtonLink>
      ) : null}
    </div>
  )
}

function Header({ project, index }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs">
      <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
      <span className="text-subtle">{project.category}</span>
      {project.badge ? (
        <span className="rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 text-[0.65rem] text-signal">
          {project.badge}
        </span>
      ) : null}
    </div>
  )
}

function Features({ items }) {
  return (
    <ul className="grid gap-2 text-sm text-muted">
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5">
          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  )
}

function FeatureTiles({ items }) {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {items.map((feature, i) => (
        <li key={feature} className="rounded-xl border border-line bg-surface-2/40 p-3.5">
          <span className="font-mono text-[0.65rem] text-accent">{String(i + 1).padStart(2, '0')}</span>
          <p className="mt-1.5 text-sm leading-snug font-medium text-fg/90">{feature}</p>
        </li>
      ))}
    </ul>
  )
}

function Technologies({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectCard({ project, index, onOpen }) {
  const reduce = useReducedMotion()
  const featured = project.featured

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: featured ? 0 : (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group/card card relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/40 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        aria-hidden="true"
      />

      {featured ? (
        <div className="grid flex-1 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <Header project={project} index={index} />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
              {project.context ? <p className="mt-1.5 font-mono text-xs text-subtle">{project.context}</p> : null}
              <p className="mt-3 max-w-xl leading-relaxed text-pretty text-muted">{project.shortDescription}</p>
            </div>
            {project.metric ? (
              <div>
                <Metric metric={project.metric} />
              </div>
            ) : null}
            <Technologies items={project.technologies} />
            <div className="mt-auto pt-2">
              <Actions project={project} onOpen={onOpen} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 border-t border-line bg-surface-2/30 p-6 sm:p-8 md:border-t-0 md:border-l">
            <div>
              <p className="mb-3 font-mono text-[0.68rem] tracking-wider text-subtle uppercase">Key features</p>
              <Features items={project.features} />
            </div>
            {project.flow || project.files ? (
              <div>
                <p className="mb-3 font-mono text-[0.68rem] tracking-wider text-subtle uppercase">Architecture</p>
                <ProjectVisual project={project} compact />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
          <Header project={project} index={index} />
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</h3>
            {project.context ? <p className="mt-1 font-mono text-xs text-subtle">{project.context}</p> : null}
            <p className="mt-3 leading-relaxed text-pretty text-muted">{project.shortDescription}</p>
          </div>
          {project.metric ? (
            <div>
              <Metric metric={project.metric} />
            </div>
          ) : null}
          {project.flow || project.files ? (
            <>
              <Features items={project.features} />
              <ProjectVisual project={project} compact />
            </>
          ) : (
            <FeatureTiles items={project.features} />
          )}
          <Technologies items={project.technologies} />
          <div className="mt-auto pt-2">
            <Actions project={project} onOpen={onOpen} />
          </div>
        </div>
      )}
    </motion.article>
  )
}
