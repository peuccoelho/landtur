import { motion } from 'framer-motion'
import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import { aboutContent } from '../data/mockData.js'

export default function About() {
  const iconMap = {
    globe: Globe,
    mail: Mail,
    map: MapPin,
  }

  return (
    <section id="sobre" className="bg-sand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-ink-500">
                <span className="text-ocean-600 animate-spin">✱</span>
                <span>{aboutContent.label}</span>
              </div>
            </Reveal>
            <div className="flex gap-3">
              {aboutContent.socials.map((social, index) => {
                const Icon = iconMap[social.icon] ?? Globe
                return (
                  <Reveal key={social.label} delay={index * 0.1}>
                    <a
                      href={social.href}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-sand-200 bg-white text-ink-600 transition hover:border-ocean-300 hover:text-ocean-700"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <motion.figure
            className="mt-10"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <clipPath id="clip-about-image" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-about-image)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href={aboutContent.image}
              />
            </svg>
          </motion.figure>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <Reveal className="flex flex-wrap items-center gap-6">
              {aboutContent.stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3 text-xs">
                  <span className="text-ocean-600 text-base font-semibold">
                    {stat.value}
                  </span>
                  <span className="uppercase tracking-[0.2em] text-ink-600">
                    {stat.label}
                  </span>
                  {index < aboutContent.stats.length - 1 ? (
                    <span className="text-ink-300">|</span>
                  ) : null}
                </div>
              ))}
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-ocean-600">
                  {aboutContent.impact.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-ink-600">
                  {aboutContent.impact.label}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <Reveal>
              <h2 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
                {aboutContent.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base text-ink-700">
                {aboutContent.description}
              </p>
            </Reveal>
            <div className="mt-6 grid gap-6 text-sm text-ink-700 md:grid-cols-2">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.2 + index * 0.1}>
                  <p className="leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 md:text-right">
            <Reveal>
              <p className="text-2xl font-semibold text-ocean-600">
                {aboutContent.aside.name}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-2 text-sm text-ink-600">{aboutContent.aside.role}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm font-medium text-ink-900">
                {aboutContent.aside.ctaTitle}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button
                variant="primary"
                href={aboutContent.aside.ctaHref}
                className="mt-4 inline-flex"
              >
                {aboutContent.aside.ctaLabel}
                <ArrowRight size={16} />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
