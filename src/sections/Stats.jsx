import { Camera, Compass, Landmark, Sparkles } from 'lucide-react'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { stats } from '../data/mockData.js'
import { useCountUp } from '../hooks/useCountUp.js'

const iconMap = {
  compass: Compass,
  camera: Camera,
  sparkles: Sparkles,
  landmark: Landmark,
}

function StatCard({ item, index }) {
  const { ref, value } = useCountUp(item.value, { duration: 1400 })
  const Icon = iconMap[item.icon] ?? Compass
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 1,
  }).format(value)

  return (
    <Reveal delay={index * 0.1}>
      <div
        ref={ref}
        className="flex h-full flex-col justify-between rounded-3xl border border-sand-200 bg-white p-6 shadow-card"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-100 text-ocean-600">
          <Icon size={20} />
        </div>
        <div className="mt-6">
          <p className="text-3xl font-semibold text-ink-900">
            {formattedValue}
            {item.suffix}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink-600">
            {item.label}
          </p>
          <p className="mt-3 text-sm text-ink-700">{item.description}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Stats() {
  return (
    <section id="dados" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Curiosidades e dados"
          title="Indicadores que contextualizam o turismo"
          subtitle="Números animados e insights visuais para enriquecer a narrativa jornalística."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
