import { ArrowUpRight } from 'lucide-react'
import { links } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import Reveal from './ui/Reveal'

function ProfileLink({ href, icon: Icon, label, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-bg/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong sm:p-6"
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2">
          <Icon className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block font-semibold tracking-tight">{label}</span>
          <span className="block truncate font-mono text-xs text-subtle">{handle}</span>
        </span>
      </span>
      <ArrowUpRight className="size-5 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
    </a>
  )
}

const handleFrom = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function ConnectCTA() {
  if (!links.github && !links.linkedin) return null

  return (
    <section className="py-12 sm:py-16" aria-labelledby="connect-title">
      <div className="container-page">
        <Reveal className="gradient-border overflow-hidden rounded-3xl bg-surface">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12">
            <div>
              <h2 id="connect-title" className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                See the code. Follow the work.
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-pretty text-muted">
                {links.github ? 'Project source code lives on GitHub. ' : ''}
                {links.linkedin ? 'For roles and professional updates, connect with me on LinkedIn.' : ''}
              </p>
            </div>
            <div className={`grid gap-3 ${links.github && links.linkedin ? 'sm:grid-cols-2 lg:grid-cols-1' : ''}`}>
              {links.github ? (
                <ProfileLink href={links.github} icon={GitHubIcon} label="GitHub" handle={handleFrom(links.github)} />
              ) : null}
              {links.linkedin ? (
                <ProfileLink
                  href={links.linkedin}
                  icon={LinkedInIcon}
                  label="LinkedIn"
                  handle={handleFrom(links.linkedin)}
                />
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
