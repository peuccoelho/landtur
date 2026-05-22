import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Cta() {
  return (
    <section id="cta" className="bg-sand-50 py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="rounded-3xl bg-ocean-700 px-8 py-12 text-white shadow-soft md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand-100/70">
                  Continue explorando
                </p>
                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                  Continue explorando histórias e destinos.
                </h3>
                <p className="mt-4 max-w-2xl text-sm text-sand-100/80">
                  O especial está pronto para receber novas reportagens, vídeos e dados
                  atualizados pela turma.
                </p>
              </div>
              <Button href="#contexto" variant="outline" className="self-start">
                Ver contexto
                <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
