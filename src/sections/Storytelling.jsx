import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { storytelling } from '../data/mockData.js'

export default function Storytelling() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400

  const navigate = useCallback((direction) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (direction > 0) {
        return prev === storytelling.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? storytelling.length - 1 : prev - 1
    })
  }, [])

  const handleWheel = useCallback(
    (event) => {
      if (Math.abs(event.deltaY) > 30) {
        navigate(event.deltaY > 0 ? 1 : -1)
      }
    },
    [navigate],
  )

  const handleDragEnd = (_event, info) => {
    const threshold = 50
    if (info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const getCardStyle = (index) => {
    const total = storytelling.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
    }
    if (diff === -1) {
      return { y: -160, scale: 0.84, opacity: 0.6, zIndex: 4, rotateX: 8 }
    }
    if (diff === -2) {
      return { y: -280, scale: 0.72, opacity: 0.3, zIndex: 3, rotateX: 15 }
    }
    if (diff === 1) {
      return { y: 160, scale: 0.84, opacity: 0.6, zIndex: 4, rotateX: -8 }
    }
    if (diff === 2) {
      return { y: 280, scale: 0.72, opacity: 0.3, zIndex: 3, rotateX: -15 }
    }
    return {
      y: diff > 0 ? 400 : -400,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      rotateX: diff > 0 ? -20 : 20,
    }
  }

  const isVisible = (index) => {
    const total = storytelling.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  const activeStory = storytelling[currentIndex]

  return (
    <section id="storytelling" className="bg-sand-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Storytelling visual"
          title="Narrativas imersivas em camadas visuais"
          subtitle="Arraste, role e explore imagens que ativam trechos editoriais e dados de contexto."
          className="max-w-3xl"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div
            className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white"
            onWheel={handleWheel}
            style={{ perspective: '1200px' }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-100/40 blur-3xl" />
            </div>

            <div className="relative flex h-[420px] w-[300px] items-center justify-center">
              {storytelling.map((story, index) => {
                if (!isVisible(index)) return null
                const style = getCardStyle(index)
                const isCurrent = index === currentIndex

                return (
                  <motion.div
                    key={story.id}
                    className="absolute cursor-grab active:cursor-grabbing"
                    animate={{
                      y: style.y,
                      scale: style.scale,
                      opacity: style.opacity,
                      rotateX: style.rotateX,
                      zIndex: style.zIndex,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 28,
                      mass: 1,
                    }}
                    drag={isCurrent ? 'y' : false}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{ transformStyle: 'preserve-3d', zIndex: style.zIndex }}
                  >
                    <div
                      className="relative h-[380px] w-[260px] overflow-hidden rounded-3xl bg-sand-100 ring-1 ring-sand-200/60"
                      style={{
                        boxShadow: isCurrent
                          ? '0 30px 60px -20px rgba(17, 75, 116, 0.35)'
                          : '0 12px 30px -16px rgba(17, 75, 116, 0.25)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 via-transparent to-transparent" />
                      <img
                        src={story.image}
                        alt={story.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-900/40 to-transparent" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {storytelling.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'h-6 bg-ocean-600'
                      : 'bg-ink-300 hover:bg-ink-500'
                  }`}
                  aria-label={`Ir para história ${index + 1}`}
                  type="button"
                />
              ))}
            </div>

            <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex">
              <span className="text-3xl font-light text-ink-700 tabular-nums">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <div className="my-2 h-px w-8 bg-ink-200" />
              <span className="text-xs text-ink-500 tabular-nums">
                {String(storytelling.length).padStart(2, '0')}
              </span>
            </div>

            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex flex-col items-center gap-2 text-ink-500">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7-7 7 7" />
                  </svg>
                </motion.div>
                <span className="text-[10px] font-medium uppercase tracking-[0.4em]">
                  Role ou arraste
                </span>
              </div>
            </motion.div>
          </div>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ocean-600">
                  {activeStory.tag}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-ink-900">
                  {activeStory.title}
                </h3>
                <p className="mt-5 text-base text-ink-700">{activeStory.text}</p>
                <div className="mt-6 inline-flex rounded-full border border-sand-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink-600">
                  {activeStory.data}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
