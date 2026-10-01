import { Braces, Brain, Code2, Database, PanelsTopLeft, Server } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const icons = {
  languages: Code2,
  backend: Server,
  frontend: PanelsTopLeft,
  database: Database,
  engineering: Braces,
  ai: Brain,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Skills"
          title="What I work with."
          copy="Grouped by where they sit in the products I build."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.key]
            return (
              <Reveal
                key={group.key}
                delay={(i % 3) * 0.05}
                className="card group p-6 transition-colors hover:border-line-strong"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-colors group-hover:text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-bg/50 px-3 py-1.5 text-sm text-fg/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
