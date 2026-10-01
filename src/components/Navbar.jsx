import { AnimatePresence, motion } from 'framer-motion'
import { FileDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { links, navItems, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { ButtonLink } from './ui/Button'

const sectionIds = navItems.map((item) => item.id)

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="relative grid size-9 place-items-center overflow-hidden rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const elevated = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        elevated
          ? 'border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg border border-line-strong bg-surface font-mono text-xs font-semibold tracking-tight transition-colors group-hover:border-accent/60">
            RS
          </span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-surface-2"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {links.resume ? (
            <ButtonLink
              href={links.resume}
              external
              variant="secondary"
              size="sm"
              className="max-lg:hidden"
            >
              <FileDown className="size-3.5" />
              Resume
            </ButtonLink>
          ) : null}
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-fg md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pt-2 pb-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors ${
                      active === item.id ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {links.resume ? (
                <li className="pt-2">
                  <ButtonLink href={links.resume} external variant="secondary" className="w-full">
                    <FileDown className="size-4" />
                    Download Resume
                  </ButtonLink>
                </li>
              ) : null}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
