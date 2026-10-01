import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  Bug,
  Code2,
  Compass,
  FlaskConical,
  GitBranch,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { engineeringThinking as et } from '../data/portfolio'
import Reveal from './ui/Reveal'

const accelerateIcons = {
  Exploration: Compass,
  Debugging: Bug,
  Development: Code2,
  Experimentation: FlaskConical,
}

const ownIcons = {
  Architecture: Boxes,
  'System design': Network,
  'Technical decisions': GitBranch,
  'Trade-offs': Scale,
  'Implementation quality': ShieldCheck,
}

function Item({ icon: Icon, title, copy, index, tone }) {
  const reduce = useReducedMotion()
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: tone === 'ai' ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-line hover:bg-surface-2/50"
    >
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-lg border ${
          tone === 'ai'
            ? 'border-line bg-surface-2 text-muted'
            : 'border-accent/30 bg-accent/10 text-accent'
        }`}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <p className="font-medium tracking-tight">{title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">{copy}</p>
      </div>
    </motion.li>
  )
}

export default function EngineeringThinking() {
  return (
    <section id="engineering-thinking" className="py-12 sm:py-20" aria-labelledby="et-title">
      <div className="container-page">
        <Reveal className="gradient-border relative overflow-hidden rounded-3xl bg-surface">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_20%,transparent_80%)]" />
            <div className="absolute -top-40 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          </div>

          <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <p
                id="et-title"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
              >
                <Sparkles className="size-3.5" aria-hidden="true" />
                {et.title}
              </p>
              <h2 className="mt-7 text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl">
                <span className="text-muted">{et.quote.lead}</span>{' '}
                <span className="text-gradient">{et.quote.emphasis}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {et.body}
              </p>
            </div>

            <div className="mt-14 grid items-stretch gap-4 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
              <div className="rounded-2xl border border-line bg-bg/60 p-4 sm:p-5">
                <p className="mb-3 px-3 pt-1 font-mono text-[0.7rem] tracking-wider text-subtle uppercase">
                  {et.accelerates.label}
                </p>
                <ul className="space-y-1">
                  {et.accelerates.items.map((item, i) => (
                    <Item key={item.title} icon={accelerateIcons[item.title]} {...item} index={i} tone="ai" />
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center" aria-hidden="true">
                <span className="grid size-10 rotate-90 place-items-center rounded-full border border-line-strong bg-surface text-muted lg:rotate-0">
                  <ArrowRight className="size-4" />
                </span>
              </div>

              <div className="rounded-2xl border border-accent/25 bg-bg/60 p-4 sm:p-5">
                <p className="mb-3 px-3 pt-1 font-mono text-[0.7rem] tracking-wider text-accent uppercase">
                  {et.owns.label}
                </p>
                <ul className="space-y-1">
                  {et.owns.items.map((item, i) => (
                    <Item key={item.title} icon={ownIcons[item.title]} {...item} index={i} tone="owns" />
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 text-center font-mono text-xs text-subtle sm:text-sm">
              <span className="text-accent">→</span> {et.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
