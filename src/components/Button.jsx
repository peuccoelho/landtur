export default function Button({
  children,
  className = '',
  variant = 'primary',
  href,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-ocean-600 text-white shadow-soft hover:bg-ocean-700 focus-visible:outline-ocean-600',
    outline:
      'border border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
    ghost:
      'border border-sand-200 text-ink-800 hover:bg-sand-100 focus-visible:outline-ocean-600',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
