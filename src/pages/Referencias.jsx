import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { imageReferences } from '../data/mockData.js'
import Footer from '../sections/Footer.jsx'

const formatSource = (href) =>
  href ? new URL(href).hostname.replace(/^www\./, '') : 'Fonte local do projeto'

const formatAbntReference = (item) => {
  const link = item.href ?? 'Fonte local do projeto'
  return `${item.author}. ${item.title}. Disponível em: ${link}. Acesso em: ${item.accessDate}.`
}

const ReferenceCard = ({ item, index }) => {
  const source = formatSource(item.href)
  const abntReference = formatAbntReference(item)

  return (
    <Reveal delay={index * 0.05}>
      <article className="group rounded-3xl border border-sand-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-sand-100 md:h-28 md:w-44">
            <img
              src={item.image}
              alt={`Miniatura - ${item.title}`}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-lg font-semibold text-ink-900">
              {item.title}
            </p>
            <p className="text-sm text-ink-600">
              {item.description}
            </p>
          </div>
        </div>

        <dl className="mt-5 grid gap-4 text-sm text-ink-700 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
              Autor
            </dt>
            <dd className="mt-1">{item.author}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
              Fonte/origem
            </dt>
            <dd className="mt-1">{source}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
              Link original
            </dt>
            <dd className="mt-1">
              {item.href ? (
                <a
                  href={item.href}
                  className="break-all text-ocean-600 transition hover:text-ocean-700"
                >
                  {item.href}
                </a>
              ) : (
                <span>Fonte local do projeto</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
              Data de acesso
            </dt>
            <dd className="mt-1">{item.accessDate}</dd>
          </div>
        </dl>

        <div className="mt-5 rounded-2xl border border-sand-200 bg-sand-50 p-4 text-sm text-ink-700">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
            Referência ABNT
          </p>
          <p className="mt-2 leading-relaxed">{abntReference}</p>
        </div>
      </article>
    </Reveal>
  )
}

export default function Referencias() {
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
              <p className="text-xs text-ink-600">Referências de imagens</p>
            </div>
          </div>
          <Button href="/" variant="ghost">
            Voltar ao especial
          </Button>
        </Container>
      </header>

      <main>
        <section className="pb-16 pt-28 sm:pt-32 lg:pt-36">
          <Container>
            <nav className="mb-6 text-sm text-ink-500">
              <a href="/" className="transition hover:text-ocean-600">
                Início
              </a>
              <span className="mx-2 text-ink-400">/</span>
              <span>Referências das imagens</span>
            </nav>
            <SectionHeading
              eyebrow="Transparência editorial"
              title="Referências das imagens"
              subtitle="As imagens utilizadas no site possuem seus devidos créditos e referências, organizados abaixo conforme as normas da ABNT."
            />
            <p className="mt-6 max-w-3xl text-sm text-ink-600">
              Cada cartão apresenta a miniatura da imagem, descrição, autoria,
              fonte, link original, data de acesso e a referência completa em
              formato ABNT.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {imageReferences.map((item, index) => (
                <ReferenceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="rounded-3xl border border-sand-200 bg-white p-6 text-sm text-ink-700 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">
                Observações
              </p>
              <p className="mt-3 leading-relaxed">
                As imagens pertencem aos seus respectivos autores e estão sendo
                utilizadas apenas para fins informativos e educacionais, quando
                aplicável. Caso alguma informação de autoria ou origem não esteja
                disponível, ela é indicada como “Autor não identificado” ou
                “Fonte local do projeto”.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
