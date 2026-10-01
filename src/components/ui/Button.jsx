const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none'

const variants = {
  primary: 'bg-fg text-bg hover:opacity-90',
  secondary: 'border border-line-strong bg-surface/60 text-fg hover:border-fg/30 hover:bg-surface-2',
  ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
}

const sizes = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-11 px-5',
}

function buttonClass({ variant = 'secondary', size = 'md', className = '' } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`
}

export function ButtonLink({ href, external, variant, size, className, children, ...rest }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={buttonClass({ variant, size, className })} {...externalProps} {...rest}>
      {children}
    </a>
  )
}

export function Button({ variant, size, className, children, type = 'button', ...rest }) {
  return (
    <button type={type} className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </button>
  )
}
