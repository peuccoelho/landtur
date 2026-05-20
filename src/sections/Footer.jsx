import { Globe, Mail, MapPin } from 'lucide-react'
import Container from '../components/Container.jsx'
import { footerInfo, navLinks } from '../data/mockData.js'

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-white py-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink-900">Turismo em Foco</p>
            <p className="mt-2 text-sm text-ink-600">{footerInfo.project}</p>
            <p className="text-sm text-ink-600">{footerInfo.credits}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-ink-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-ocean-600"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-ink-600">
            <a href="#" aria-label="Site oficial" className="hover:text-ocean-600">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Contato" className="hover:text-ocean-600">
              <Mail size={18} />
            </a>
            <a href="#" aria-label="Localização" className="hover:text-ocean-600">
              <MapPin size={18} />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-ink-500">
          © {footerInfo.year} • {footerInfo.project}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
