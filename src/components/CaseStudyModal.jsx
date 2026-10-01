import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import ProjectVisual from './ArchitectureFlow'
import { GitHubIcon } from './ui/BrandIcons'
import { Button, ButtonLink } from './ui/Button'

function Block({ title, children }) {
  return (
    <section className="grid gap-3 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <h3 className="font-mono text-[0.7rem] tracking-wider text-subtle uppercase sm:pt-1">{title}</h3>
      <div className="min-w-0 leading-relaxed text-pretty text-muted">{children}</div>
    </section>
  )
}

function useModalBehaviour(open, onClose, onPrev, onNext, dialogRef) {
  useEffect(() => {
    if (!open) return undefined

    const previouslyFocused = document.activeElement
    const { body, documentElement } = document
    const scrollbar = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`

    const focusTimer = setTimeout(() => dialogRef.current?.focus(), 30)

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKey)
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
      previouslyFocused?.focus?.({ preventScroll: true })
    }
  }, [open, onClose, onPrev, onNext, dialogRef])
}

export default function CaseStudyModal({ project, index, total, onClose, onPrev, onNext }) {
  const reduce = useReducedMotion()
  const dialogRef = useRef(null)
  const scrollRef = useRef(null)
  const open = Boolean(project)

  useModalBehaviour(open, onClose, onPrev, onNext, dialogRef)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [project?.id])

  const cs = project?.caseStudy

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            tabIndex={-1}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line-strong bg-surface shadow-2xl outline-none sm:rounded-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 sm:px-7">
              <p className="font-mono text-xs text-subtle">
                Case study <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-subtle/60"> / {String(total).padStart(2, '0')}</span>
              </p>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={onPrev} aria-label="Previous case study" className="px-2!">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={onNext} aria-label="Next case study" className="px-2!">
                  <ChevronRight className="size-4" />
                </Button>
                <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
                <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close case study" className="px-2!">
                  <X className="size-4" />
                </Button>
              </div>
            </div>

            <div ref={scrollRef} className="overflow-y-auto overscroll-contain px-5 pb-8 sm:px-7">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={project.id}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  <header className="py-7">
                    <p className="font-mono text-xs text-subtle">{project.category}</p>
                    <h2 id="case-study-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {project.name}
                    </h2>
                    {project.context ? (
                      <p className="mt-1.5 font-mono text-xs text-subtle">{project.context}</p>
                    ) : null}
                    <p className="mt-4 leading-relaxed text-pretty text-muted">{project.shortDescription}</p>
                    {project.githubUrl || project.liveUrl ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.githubUrl ? (
                          <ButtonLink href={project.githubUrl} external variant="secondary" size="sm">
                            <GitHubIcon className="size-3.5" />
                            View on GitHub
                          </ButtonLink>
                        ) : null}
                        {project.liveUrl ? (
                          <ButtonLink href={project.liveUrl} external variant="secondary" size="sm">
                            <ExternalLink className="size-3.5" />
                            Live demo
                          </ButtonLink>
                        ) : null}
                      </div>
                    ) : null}
                  </header>

                  {cs.problem ? <Block title="Problem">{cs.problem}</Block> : null}
                  {cs.approach ? <Block title="Approach">{cs.approach}</Block> : null}
                  {cs.architecture || project.flow || project.files ? (
                    <Block title="Architecture">
                      {cs.architecture ? <p>{cs.architecture}</p> : null}
                      {project.flow || project.files ? (
                        <div className={cs.architecture ? 'mt-4' : ''}>
                          <ProjectVisual project={project} />
                        </div>
                      ) : null}
                    </Block>
                  ) : null}
                  {cs.contribution ? <Block title="My contribution">{cs.contribution}</Block> : null}
                  <Block title="Technologies">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Block>
                  {cs.details?.length ? (
                    <Block title="Key implementation details">
                      <ul className="space-y-2">
                        {cs.details.map((detail) => (
                          <li key={detail} className="flex gap-3">
                            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </Block>
                  ) : null}
                  {cs.outcome ? (
                    <Block title="Outcome">
                      {project.metric ? (
                        <p className="mb-3 flex items-baseline gap-2">
                          <span className="text-3xl font-semibold tracking-tight text-fg">{project.metric.value}</span>
                          <span className="text-sm">{project.metric.label}</span>
                        </p>
                      ) : null}
                      <p>{cs.outcome}</p>
                    </Block>
                  ) : null}
                  {cs.note ? (
                    <p className="rounded-xl border border-line bg-surface-2/50 px-4 py-3 text-sm text-muted">
                      {cs.note}
                    </p>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
