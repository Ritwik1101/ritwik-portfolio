import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileDown, MapPin } from 'lucide-react'
import { links, profile } from '../data/portfolio'
import CodePanel from './CodePanel'
import { GitHubIcon, LinkedInIcon } from './ui/BrandIcons'
import { ButtonLink } from './ui/Button'

const ease = [0.22, 1, 0.36, 1]

const socials = [
  links.github && { href: links.github, label: 'GitHub', icon: GitHubIcon },
  links.linkedin && { href: links.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
].filter(Boolean)

const compactSocials = Boolean(links.resume) && socials.length > 1

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="hero-glow absolute inset-0" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="min-w-0">
            <motion.div {...enter(0)} className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur-sm">
                <span className="relative flex size-1.5" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
                </span>
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.shortLocation}
              </span>
            </motion.div>

            <motion.div {...enter(0.05)}>
              <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xl font-semibold tracking-tight sm:text-2xl">{profile.name}</span>
                <span className="font-mono text-sm text-subtle">
                  <span className="sr-only">, </span>
                  {profile.role} · Full Stack
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...enter(0.12)}
              className="mt-5 text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.1rem]"
            >
              {profile.headline.lead} <span className="text-gradient">{profile.headline.emphasis}</span>
            </motion.p>

            <motion.p
              {...enter(0.2)}
              className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
            >
              {profile.supporting}
            </motion.p>

            <motion.div {...enter(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects" variant="primary" size="lg">
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              {links.resume ? (
                <ButtonLink href={links.resume} external variant="secondary" size="lg">
                  <FileDown className="size-4" />
                  Download Resume
                </ButtonLink>
              ) : null}
              <div className="flex items-center gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <ButtonLink
                    key={label}
                    href={href}
                    external
                    variant="secondary"
                    size="lg"
                    aria-label={`${label} profile`}
                    title={label}
                    className={compactSocials ? 'w-11 px-0!' : ''}
                  >
                    <Icon />
                    {compactSocials ? null : <span>{label}</span>}
                  </ButtonLink>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="min-w-0"
          >
            <CodePanel />
          </motion.div>
        </div>

        <motion.dl
          {...enter(0.4)}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 lg:grid-cols-4"
          style={{ gap: '1px' }}
        >
          {profile.quickFacts.map((fact) => (
            <div key={fact.label} className="bg-bg/95 p-5 sm:p-6">
              <dt className="font-mono text-[0.68rem] tracking-wider text-subtle uppercase">{fact.label}</dt>
              <dd className="mt-2 text-base font-semibold tracking-tight sm:text-lg">{fact.value}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{fact.detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
