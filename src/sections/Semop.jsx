import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contextAnalysis } from '../data/mockData.js'

export default function Semop() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400

  const navigate = useCallback((direction) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (direction > 0) {
        return prev === contextAnalysis.images.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? contextAnalysis.images.length - 1 : prev - 1
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
    const total = contextAnalysis.images.length
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
    const total = contextAnalysis.images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  const activeImage = contextAnalysis.images[currentIndex]

  return (
    <section id="analise" className="bg-sand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={contextAnalysis.eyebrow}
          title={contextAnalysis.title}
          subtitle={contextAnalysis.subtitle}
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div
            className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white sm:h-[520px]"
            onWheel={handleWheel}
            style={{ perspective: '1200px' }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-100/40 blur-3xl" />
            </div>

            <div className="relative flex h-[320px] w-[230px] items-center justify-center sm:h-[420px] sm:w-[300px]">
              {contextAnalysis.images.map((image, index) => {
                if (!isVisible(index)) return null
                const style = getCardStyle(index)
                const isCurrent = index === currentIndex

                return (
                  <motion.div
                    key={image.id}
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
                      className="relative h-[280px] w-[200px] overflow-hidden rounded-3xl bg-sand-100 ring-1 ring-sand-200/60 sm:h-[380px] sm:w-[260px]"
                      style={{
                        boxShadow: isCurrent
                          ? '0 30px 60px -20px rgba(17, 75, 116, 0.35)'
                          : '0 12px 30px -16px rgba(17, 75, 116, 0.25)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 via-transparent to-transparent" />
                      <img
                        src={image.src}
                        alt={image.title}
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
              {contextAnalysis.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'h-6 bg-ocean-600' : 'bg-ink-300 hover:bg-ink-500'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
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
                {String(contextAnalysis.images.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ocean-600">
                  {activeImage.title}
                </p>
                <p className="mt-6 text-sm text-ink-700">{activeImage.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
