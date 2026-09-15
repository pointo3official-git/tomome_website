import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { brand, nav } from '../data/content';

export default function NotFound() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50  px-4 py-4 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5"
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo - left. Swap the src below for your uploaded Tomomo mark */}
        <a href="#home" className="z-10 flex shrink-0 items-center">
          <img
            src="logos/tomomo-logo.png"
            alt={brand?.name ?? 'Tomomo'}
            className="h-10 w-auto sm:h-15"
          />
        </a>

        {/* Centered nav links - desktop only, truly centered regardless of logo/button width */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-black/5 bg-white/80 p-1 shadow-sm backdrop-blur md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                link.active ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger toggle - mobile / tablet only */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Collapsible mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl bg-blush-100/95 shadow-card backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                    link.active
                      ? 'bg-white text-ink shadow-sm'
                      : 'text-ink/80 hover:bg-white/70 hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}