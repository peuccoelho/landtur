import { Quote } from 'lucide-react'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { voices } from '../data/mockData.js'

export default function Voices() {
  return (
    <section id="vozes" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Vozes do turismo"
          title="Relatos e entrevistas prontos para entrar no ar"
          subtitle="Espaço para depoimentos curtos, entrevistas e narrativas pessoais."
        />
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {voices.map((voice, index) => (
            <Reveal key={voice.id} delay={index * 0.1} className="min-w-[260px] md:min-w-0">
              <div className="flex h-full flex-col rounded-3xl border border-sand-200 bg-sand-50 p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-ocean-600">
                  <Quote size={18} />
                </div>
                <p className="mt-4 text-sm text-ink-700">
                  &ldquo;{voice.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink-900">{voice.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-600">
                    {voice.role}
                  </p>
                  <p className="text-xs text-ink-500">{voice.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
