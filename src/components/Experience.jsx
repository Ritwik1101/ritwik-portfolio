import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { experience } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function Highlight({ text }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <span>{text}</span>
    </li>
  )
}

function Role({ job }) {
  const [expanded, setExpanded] = useState(false)
  const limit = job.visibleHighlights ?? job.highlights.length
  const visible = job.highlights.slice(0, limit)
  const hidden = job.highlights.slice(limit)

  return (
    <Reveal as="li" className="relative pl-8 sm:pl-10">
      <span
        className={`absolute top-1.5 left-0 grid size-4 place-items-center rounded-full border-2 bg-bg ${
          job.current ? 'border-accent' : 'border-line-strong'
        }`}
        aria-hidden="true"
      >
        {job.current ? <span className="size-1.5 rounded-full bg-accent" /> : null}
      </span>

      <div className="card overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
            <p className="mt-1 text-base">
              <span className="font-medium text-fg">{job.company}</span>
              <span className="text-muted"> · {job.companyDetail}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {job.current ? (
              <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-signal">
                Current
              </span>
            ) : null}
            <span className="font-mono text-xs whitespace-nowrap text-subtle">{job.period}</span>
          </div>
        </div>

        {job.stats ? (
          <dl className="grid grid-cols-2 gap-px border-b border-line bg-line md:grid-cols-5">
            {job.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-surface px-5 py-4 md:px-4 lg:px-6 ${
                  i === job.stats.length - 1 && job.stats.length % 2 === 1 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-semibold tracking-tight md:text-lg lg:text-xl">{stat.value}</dd>
                <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="p-6 sm:p-7">
          <ul className="space-y-3 text-sm leading-relaxed text-pretty text-muted sm:text-[0.95rem]">
            {visible.map((text) => (
              <Highlight key={text} text={text} />
            ))}
          </ul>

          {hidden.length ? (
            <>
              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    id={`${job.id}-more`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 pt-3 text-sm leading-relaxed text-pretty text-muted sm:text-[0.95rem]">
                      {hidden.map((text) => (
                        <Highlight key={text} text={text} />
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                aria-controls={`${job.id}-more`}
                className="mt-4 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                {expanded ? 'Show less' : `Show ${hidden.length} more`}
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {job.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Experience"
          title="Shipping production software for real users."
          copy="Web, mobile, backend and AI features — owned from requirements and API design through to production release."
        />

        <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line-strong">
          {experience.map((job) => (
            <Role key={job.id} job={job} />
          ))}
        </ol>
      </div>
    </section>
  )
}
