import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { students } from '../data/mockData.js'

export default function Students() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')

  const activeStudent = students[currentIndex]

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % students.length)
  }

  const handlePrev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + students.length) % students.length)
  }

  const handleThumbnailClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  const thumbnailStudents = students.filter((_, index) => index !== currentIndex).slice(0, 3)

  const imageVariants = {
    enter: (slideDirection) => ({
      y: slideDirection === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (slideDirection) => ({
      y: slideDirection === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  const textVariants = {
    enter: (slideDirection) => ({
      x: slideDirection === 'right' ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (slideDirection) => ({
      x: slideDirection === 'right' ? -50 : 50,
      opacity: 0,
    }),
  }

  return (
    <section id="alunos" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Equipe responsável"
          title="Alunos responsáveis pelo site"
          subtitle="Produção e desenvolvimento do especial de jornalismo de dados."
        />
        <Reveal className="mt-12">
          <div className="relative w-full overflow-hidden rounded-3xl bg-sand-50/80 p-5 sm:p-6 md:p-10">
            <div className="grid h-full grid-cols-1 gap-10 md:grid-cols-12">
              <div className="order-2 flex flex-col justify-between md:order-1 md:col-span-3">
                <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:space-y-4">
                  <span className="text-xs font-mono text-ink-500">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(students.length).padStart(2, '0')}
                  </span>
                  <p className="hidden text-xs font-semibold uppercase tracking-[0.4em] text-ink-400 md:block [writing-mode:vertical-rl] md:rotate-180">
                    Alunos
                  </p>
                </div>
                <div className="mt-6 flex gap-3 md:mt-0 md:flex-col">
                  {thumbnailStudents.map((student) => {
                    const originalIndex = students.findIndex((item) => item.id === student.id)
                    return (
                      <button
                        key={student.id}
                        onClick={() => handleThumbnailClick(originalIndex)}
                        className="h-16 w-12 overflow-hidden rounded-2xl border border-white/40 opacity-70 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600 sm:h-20 sm:w-16 md:h-24 md:w-20"
                        aria-label={`Ver aluno ${student.name}`}
                        type="button"
                      >
                        <img
                          src={student.image}
                          alt={student.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="order-1 relative h-64 sm:h-72 md:order-2 md:col-span-4 md:h-[480px]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={activeStudent.image}
                    alt={activeStudent.name}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-card"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>

              <div className="order-3 flex flex-col justify-between md:col-span-5 md:pl-6">
                <div className="relative min-h-[180px] overflow-hidden pt-2 sm:pt-4 md:min-h-[220px] md:pt-20">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-sage-600">
                        UCSAL
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-ink-900 md:text-3xl">
                        {activeStudent.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-ink-700">
                        Equipe responsável pelo site
                      </p>
                      <p className="mt-5 text-base text-ink-700">
                        Produção e desenvolvimento do especial de jornalismo de dados.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Aluno anterior"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-sand-200 text-ink-700 transition hover:border-ocean-400 hover:text-ocean-700"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próximo aluno"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-600 text-white shadow-soft transition hover:bg-ocean-700"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
