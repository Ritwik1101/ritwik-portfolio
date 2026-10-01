import { GraduationCap, MapPin } from 'lucide-react'
import { about, profile } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  const [lead, ...rest] = about.paragraphs

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading index="01" label="About" title="Engineer across the stack, from API to interface." />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="space-y-5">
            <p className="text-xl leading-relaxed font-medium tracking-tight text-pretty sm:text-2xl sm:leading-relaxed">
              {lead}
            </p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="mb-3 font-mono text-[0.68rem] tracking-wider text-subtle uppercase">
                Core technologies
              </p>
              <ul className="flex flex-wrap gap-2">
                {about.coreTechnologies.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="card p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border border-line bg-surface-2 text-muted">
                  <GraduationCap className="size-4" aria-hidden="true" />
                </span>
                <p className="font-mono text-[0.68rem] tracking-wider text-subtle uppercase">Education</p>
              </div>
              <p className="text-lg font-semibold tracking-tight">{about.education.degree}</p>
              <p className="text-muted">{about.education.field}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{about.education.school}</p>
              <p className="mt-3 inline-flex rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
                {about.education.period}
              </p>
            </div>

            <div className="card flex items-center gap-4 p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-muted">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[0.68rem] tracking-wider text-subtle uppercase">Location</p>
                <p className="mt-0.5 font-medium">{profile.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
