import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, y = 16, as = 'div' }) {
  const reduce = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
