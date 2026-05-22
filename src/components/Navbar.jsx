"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/mockData.js'
import Button from './Button.jsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="fixed left-0 right-0 top-3 z-50 sm:top-4">
      <div className="flex w-full justify-center px-3 sm:px-4">
        <div className="flex w-full max-w-5xl items-center justify-between rounded-full bg-white/90 px-4 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur sm:px-5 sm:py-3">
          <div className="flex items-center gap-3">
            <motion.div
              className="flex h-10 w-10 items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 6 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src="/imgs/ucsal.png"
                alt="UCSAL"
                className="h-10 w-10 object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-ink-900">Turismo em Foco</p>
              <p className="text-xs text-ink-600">Jornalismo de dados</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-ink-700 lg:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="transition hover:text-ocean-600"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.03 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Button href="#dados" variant="ghost">
              Explorar conteúdo
            </Button>
          </motion.div>

          <motion.button
            className="flex items-center lg:hidden"
            onClick={toggleMenu}
            whileTap={{ scale: 0.92 }}
            aria-label="Abrir menu"
            type="button"
          >
            <Menu className="h-6 w-6 text-ink-900" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 px-6 pt-24 backdrop-blur lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute right-6 top-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              aria-label="Fechar menu"
              type="button"
            >
              <X className="h-6 w-6 text-ink-900" />
            </motion.button>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-ink-900"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                exit={{ opacity: 0, y: 14 }}
                className="pt-4"
              >
                <Button href="#dados" variant="primary" className="w-full">
                  Explorar conteúdo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
