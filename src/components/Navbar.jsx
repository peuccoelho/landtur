import { navLinks } from '../data/mockData.js'
import Button from './Button.jsx'
import Container from './Container.jsx'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center ">
            <img
              src="/imgs/ucsal.png"
              alt="UCSAL"
              className="h-80 w-80 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Turismo em Foco</p>
            <p className="text-xs text-ink-600">Jornalismo de viagem</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-ink-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-ocean-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#cta" variant="ghost" className="hidden lg:inline-flex">
          Explorar conteúdo
        </Button>
      </Container>
    </header>
  )
}
