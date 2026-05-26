import { useState } from 'react'
import { MapPin, MessageCircle } from 'lucide-react'
import Container from '../components/Container.jsx'
import { footerInfo, navLinks } from '../data/mockData.js'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle')

  const usefulLinks = [
    ...navLinks,
    { label: 'Referências das imagens', href: '/referencias.html' },
  ]
  const socialLinks = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/557196000206',
      icon: <MessageCircle size={18} />,
    },
    {
      label: 'Av. Prof. Pinto de Aguiar, 2589 - Pituaçu, Salvador - BA',
      href:
        'https://maps.google.com/?q=Av.%20Prof.%20Pinto%20de%20Aguiar%2C%202589%20-%20Pitua%C3%A7u%2C%20Salvador%20-%20BA',
      icon: <MapPin size={18} />,
    },
  ]

  const handleSubscribe = async (event) => {
    event.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    setSubscriptionStatus('success')
    setIsSubmitting(false)
    setEmail('')

    setTimeout(() => {
      setSubscriptionStatus('idle')
    }, 3000)
  }

  return (
    <footer className="border-t border-sand-200 bg-sand-50 py-14">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/imgs/ucsal.png"
                alt="UCSAL"
                className="h-10 w-10 object-contain"
                loading="lazy"
                decoding="async"
            />
            <div>
              <p className="text-lg font-semibold text-ink-900">Turismo em Foco</p>
              <p className="text-xs text-ink-600">{footerInfo.project}</p>
            </div>
          </div>
          <p className="text-sm text-ink-600">{footerInfo.credits}</p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="mb-4 text-base font-semibold text-ink-900">Links úteis</h3>
          <ul className="space-y-2 text-sm text-ink-600">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-ocean-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-center">
          <h3 className="mb-4 text-base font-semibold text-ink-900">Contato</h3>
          <ul className="space-y-3 text-sm text-ink-600">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex items-center gap-2 transition hover:text-ocean-600"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-ink-900">
            Receba novidades
          </h3>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
            <div className="relative">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={isSubmitting || subscriptionStatus !== 'idle'}
                required
                aria-label="E-mail para novidades"
                className="w-full rounded-full border border-sand-200 bg-white px-4 py-3 pr-28 text-sm text-ink-900 placeholder:text-ink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600"
              />
              <button
                type="submit"
                disabled={isSubmitting || subscriptionStatus !== 'idle'}
                className="absolute right-1 top-1 h-[calc(100%-0.5rem)] rounded-full bg-ocean-600 px-4 text-sm font-semibold text-white transition hover:bg-ocean-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Enviando...' : 'Inscrever'}
              </button>
            </div>
            {(subscriptionStatus === 'success' || subscriptionStatus === 'error') && (
              <div
                key={subscriptionStatus}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-white/80 text-center text-sm backdrop-blur"
              >
                {subscriptionStatus === 'success' ? (
                  <span className="font-semibold text-emerald-600">
                    Inscrito com sucesso!
                  </span>
                ) : (
                  <span className="font-semibold text-rose-600">
                    Falha ao inscrever. Tente novamente.
                  </span>
                )}
              </div>
            )}
          </form>
        </div>
      </Container>

      <Container>
        <p className="mt-10 text-xs text-ink-500">
          © {footerInfo.year} • {footerInfo.project}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
