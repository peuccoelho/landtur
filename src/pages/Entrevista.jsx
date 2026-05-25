import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import BlurFade from '../components/BlurFade.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { useParallax } from '../hooks/useParallax.js'
import Footer from '../sections/Footer.jsx'

const heroTitle =
  'Turistas revelam como Salvador transformou\ncultura em experiência'

const interviewGallery = [
  {
    quote:
      'A cultura aparece em cada detalhe da cidade e cria uma sensação de acolhimento imediato.',
    name: 'Tainá',
    designation: 'Turista de São Paulo',
    src: '/imgs/taina.png',
  },
  {
    quote:
      'A energia de Salvador é diferente de tudo o que já vimos — viva, profunda e autêntica.',
    name: 'Moacir',
    designation: 'Turista de São Paulo',
    src: '/imgs/moci.png',
  },
]

const AnimatedInterviewGallery = ({ items, autoplay = true }) => {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [autoplay, handleNext])

  const isActive = (index) => index === active

  const randomRotate = () => `${Math.floor(Math.random() * 10) - 5}deg`

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-[0.9fr_1.1fr] md:gap-x-16">
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-md sm:h-[420px]">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 50,
                    rotate: randomRotate(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.92,
                    y: isActive(index) ? 0 : 18,
                    zIndex: isActive(index)
                      ? items.length
                      : items.length - Math.abs(index - active),
                    rotate: isActive(index) ? '0deg' : randomRotate(),
                  }}
                  exit={{ opacity: 0, scale: 0.92, y: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 origin-bottom"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={item.src}
                      alt={item.name}
                      width={680}
                      height={680}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-card"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-ink-900/35 via-transparent to-transparent" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-600">
                Galeria editorial
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
                {items[active].name}
              </h3>
              <p className="text-sm text-ink-600">{items[active].designation}</p>
              <p className="mt-6 text-base leading-relaxed text-ink-700">
                “{items[active].quote}”
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-3 pt-10">
            <button
              onClick={handlePrev}
              aria-label="Imagem anterior"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white text-ink-700 transition hover:border-ocean-400 hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600"
              type="button"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-ocean-600 text-white shadow-soft transition hover:bg-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600"
              type="button"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Entrevista() {
  const parallaxY = useParallax(140)

  return (
    <div className="bg-sand-50 text-ink-900">
      <header className="fixed left-0 right-0 top-4 z-40">
        <Container className="flex items-center justify-between rounded-full bg-white/90 px-4 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur">
          <div className="flex items-center gap-3">
            <img
              src="/imgs/ucsal.png"
              alt="UCSAL"
              className="h-9 w-9 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-ink-900">
                Turismo em Foco
              </p>
              <p className="text-xs text-ink-600">Entrevista especial</p>
            </div>
          </div>
          <Button href="/" variant="ghost">
            Voltar ao especial
          </Button>
        </Container>
      </header>

      <main>
        <section className="relative min-h-[75vh] overflow-hidden bg-ink-900 text-white">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/imgs/foto1_entrevista.png)' }}
            />
            <div className="absolute inset-0 bg-hero-gradient" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/55 to-ink-900/80" />

          <Container className="relative z-10 flex min-h-[75vh] flex-col justify-center pb-24 pt-32 sm:pt-36 lg:pt-40">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand-100/80">
                Entrevista editorial
              </p>
            </Reveal>
            <div className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {heroTitle.split('\n').map((line, index) => (
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
                Visitantes de São Paulo relatam como a identidade cultural
                baiana se tornou o ponto mais marcante da viagem.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-sand-100/70">
                <span className="font-medium">Salvador, Bahia</span>
                <span className="text-sand-100/40">•</span>
                <span className="font-medium">Maio de 2026</span>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow="Registro visual"
              title="Galeria de imagens da entrevista"
              subtitle="Momentos capturados durante a conversa com os visitantes."
              className="max-w-3xl"
            />
            <Reveal className="mt-12">
              <AnimatedInterviewGallery items={interviewGallery} />
            </Reveal>
          </Container>
        </section>

        <section className="bg-sand-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <Reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-600">
                    Bloco principal
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl">
                    Uma experiência que vai além dos cartões-postais
                  </h2>
                </Reveal>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-700">
                  <Reveal delay={0.16}>
                    <p>
                      Durante a visita à cidade, Tainá e Moacir, turistas vindos
                      de São Paulo, destacaram que a experiência em Salvador
                      superou a ideia de apenas conhecer locais turísticos.
                    </p>
                  </Reveal>
                  <Reveal delay={0.22}>
                    <p>
                      Segundo eles, o que mais chamou atenção foi justamente a
                      forma como a cultura baiana está presente no cotidiano da
                      cidade.
                    </p>
                  </Reveal>
                  <Reveal delay={0.28}>
                    <blockquote className="border-l-2 border-ocean-500 pl-6 text-lg text-ink-800">
                      ‘Quando a gente decidiu vir pra Salvador, queria conhecer
                      um lugar que tivesse uma cultura muito forte e uma energia
                      diferente. E foi exatamente isso que encontramos aqui.
                      Tudo parece muito vivo, muito conectado com a identidade
                      da cidade, e isso faz a experiência ser muito mais
                      marcante’, afirmaram.
                    </blockquote>
                  </Reveal>
                </div>
              </div>
              <Reveal delay={0.2}>
                <div className="relative h-72 overflow-hidden rounded-3xl bg-sand-100 shadow-card sm:h-96">
                  <img
                    src="/imgs/foto2_entrevista.png"
                    alt="Registro da entrevista em Salvador"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-600">
                  Conclusão
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-ink-700">
                  A percepção dos turistas reforça como Salvador mantém sua
                  força como um dos principais destinos turísticos do país,
                  unindo patrimônio cultural, tradição e experiências que vão
                  além da paisagem, criando uma relação mais próxima entre
                  visitantes e a identidade local.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
