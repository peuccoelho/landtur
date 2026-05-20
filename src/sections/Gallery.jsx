import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { galleryItems } from '../data/mockData.js'

export default function Gallery() {
  return (
    <section id="galeria" className="bg-sand-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Galeria multimídia"
          title="Imagens, vídeos e registros prontos para publicação"
          subtitle="Layout editorial com grid fluido e foco na narrativa visual."
          className="max-w-3xl"
        />
        <div className="mt-12 columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <div className="break-inside-avoid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  className="h-64"
                  imageClassName="hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-sage-600">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-ink-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
