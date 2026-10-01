import { ArrowUp } from 'lucide-react'
import { links, navItems, profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.shortLocation}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navItems.slice(1).map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <GitHubIcon />
            </a>
          ) : null}
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <LinkedInIcon />
            </a>
          ) : null}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 font-mono text-xs text-subtle">
          © {year} {profile.name}. Built with React, Vite and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
