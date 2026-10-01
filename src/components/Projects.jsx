import { useCallback, useState } from 'react'
import { links, projects } from '../data/portfolio'
import CaseStudyModal from './CaseStudyModal'
import ProjectCard from './ProjectCard'
import { GitHubIcon } from './ui/BrandIcons'
import { ButtonLink } from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  const open = useCallback((id) => setActiveIndex(projects.findIndex((p) => p.id === id)), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + projects.length) % projects.length)),
    [],
  )
  const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % projects.length)), [])

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
            label="Featured projects"
            title="Selected work."
            copy="Production product work alongside AI, Web3 and data projects. Open a case study for the problem, approach, architecture and outcome."
            className="mb-0! sm:mb-0!"
          />
          {links.github ? (
            <Reveal className="shrink-0">
              <ButtonLink href={links.github} external variant="ghost" size="sm">
                <GitHubIcon className="size-3.5" />
                All repositories
              </ButtonLink>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={activeIndex === null ? null : projects[activeIndex]}
        index={activeIndex ?? 0}
        total={projects.length}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
