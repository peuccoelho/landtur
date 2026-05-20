import { motion } from 'framer-motion'
import { ArrowDownRight, PlayCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import { heroContent } from '../data/mockData.js'
import { useParallax } from '../hooks/useParallax.js'

export default function Hero() {
  const parallaxY = useParallax(160)

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden bg-ink-900 text-white"
    >
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.image})` }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/40 to-ink-900/80" />

      <Container className="relative z-10 flex min-h-[90vh] flex-col justify-center py-28 lg:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand-100/80">
            {heroContent.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {heroContent.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/90 sm:text-xl">
            {heroContent.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-sand-100/70">
            {heroContent.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#destinos" variant="primary">
              {heroContent.primaryCta}
              <ArrowDownRight size={18} />
            </Button>
            <Button href="#sobre" variant="outline">
              <PlayCircle size={18} />
              {heroContent.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
