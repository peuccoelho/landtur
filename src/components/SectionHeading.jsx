export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ocean-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-ink-700 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
