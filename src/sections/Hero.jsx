import { motion } from 'framer-motion'
import { ArrowDownRight, PlayCircle } from 'lucide-react'
import BlurFade from '../components/BlurFade.jsx'
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
      className="relative min-h-[80vh] overflow-hidden bg-ink-900 text-white sm:min-h-[90vh]"
    >
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-right sm:bg-center"
          style={{ backgroundImage: `url(${heroContent.image})` }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/40 to-ink-900/80" />

      <Container className="relative z-10 flex min-h-[80vh] flex-col justify-center py-24 sm:min-h-[90vh] sm:py-28 lg:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand-100/80">
            {heroContent.eyebrow}
          </p>
        </Reveal>
        <div className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {heroContent.headline.split('\n').map((line, index) => (
            <BlurFade
              key={line}
              className="block"
              delay={index * 0.12}
              inView
            >
              <span className="block">{line}</span>
            </BlurFade>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/90 sm:text-xl">
            {heroContent.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-sand-100/70">
            {heroContent.metadata.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-medium">{item}</span>
                {index < heroContent.metadata.length - 1 ? (
                  <span className="text-sand-100/40">•</span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>
        
        

        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={heroContent.primaryCtaHref} variant="primary">
              {heroContent.primaryCta}
              <ArrowDownRight size={18} />
            </Button>
            <Button href={heroContent.secondaryCtaHref} variant="outline">
              <PlayCircle size={18} />
              {heroContent.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
