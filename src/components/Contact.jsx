import { ArrowUpRight, Check, Copy, FileDown, Mail } from 'lucide-react'
import { useState } from 'react'
import { links, profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import { Button, ButtonLink } from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <Button variant="secondary" size="lg" onClick={copy} aria-label={copied ? 'Email copied' : 'Copy email address'}>
      {copied ? <Check className="size-4 text-signal" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </Button>
  )
}

function ChannelRow({ href, icon: Icon, label, value, external }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <li>
      <a
        href={href}
        {...externalProps}
        className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2/50 sm:px-6"
      >
        <span className="flex min-w-0 items-center gap-4">
          <Icon className="size-4 shrink-0 text-subtle transition-colors group-hover:text-fg" />
          <span className="min-w-0">
            <span className="block font-mono text-[0.68rem] tracking-wider text-subtle uppercase">{label}</span>
            <span className="block truncate text-sm font-medium">{value}</span>
          </span>
        </span>
        <ArrowUpRight className="size-4 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
      </a>
    </li>
  )
}

const handleFrom = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const contactFacts = [
  { label: 'Role', value: `${profile.role} · ${profile.secondaryRole}` },
  { label: 'Experience', value: `${profile.experience}, production` },
  { label: 'Core stack', value: 'Python, FastAPI, React, PostgreSQL' },
  { label: 'Location', value: profile.location },
]

export default function Contact() {
  const channels = [
    links.email && { href: `mailto:${links.email}`, icon: Mail, label: 'Email', value: links.email },
    links.linkedin && {
      href: links.linkedin,
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: handleFrom(links.linkedin),
      external: true,
    },
    links.github && {
      href: links.github,
      icon: GitHubIcon,
      label: 'GitHub',
      value: handleFrom(links.github),
      external: true,
    },
    links.resume && { href: links.resume, icon: FileDown, label: 'Resume', value: 'Download PDF', external: true },
  ].filter(Boolean)

  const primary = links.email
    ? { href: `mailto:${links.email}`, label: 'Send an email', icon: Mail }
    : links.linkedin
      ? { href: links.linkedin, label: 'Message on LinkedIn', icon: LinkedInIcon, external: true }
      : links.github
        ? { href: links.github, label: 'Find me on GitHub', icon: GitHubIcon, external: true }
        : null

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              index="06"
              label="Contact"
              title="Let's talk about your next engineering hire."
              copy="I'm open to Software Engineering opportunities across full-stack, backend and AI-powered product work. Reach out and I'll get back to you."
              className="mb-8!"
            />
            <Reveal delay={0.05} className="flex flex-wrap gap-3">
              {primary ? (
                <ButtonLink href={primary.href} external={primary.external} variant="primary" size="lg">
                  <primary.icon className="size-4" />
                  {primary.label}
                </ButtonLink>
              ) : null}
              {links.email ? <CopyEmail email={links.email} /> : null}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="card self-end overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-signal" />
                </span>
                {profile.availability}
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {contactFacts.map((fact) => (
                  <div key={fact.label} className="min-w-0">
                    <dt className="font-mono text-[0.68rem] tracking-wider text-subtle uppercase">{fact.label}</dt>
                    <dd className="mt-1 text-fg/90">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {channels.length ? (
              <ul className="divide-y divide-line border-t border-line">
                {channels.map((channel) => (
                  <ChannelRow key={channel.label} {...channel} />
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
