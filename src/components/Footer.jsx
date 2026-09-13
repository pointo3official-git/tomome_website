import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Sparkle } from 'lucide-react';
import { footer, brand } from '../data/content';

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 rounded-xl3 md:grid-cols-2">
        <div className="flex flex-col gap-8 sm:flex-row">
          <a href="#home" className="flex items-center gap-2 text-ink">
            <Sparkle className="h-5 w-5 fill-blush-500 text-blush-500" strokeWidth={1.5} />
            <span className="text-lg font-semibold tracking-tight">{brand.name}</span>
          </a>

          <div className="flex gap-10 text-sm">
            {footer.columns.map((col, i) => (
              <ul key={i} className="space-y-2 text-muted">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-muted">GET IN TOUCH</p>
          <h3 className="mt-2 max-w-sm text-2xl font-semibold leading-snug tracking-tight text-ink">
            {footer.contact.heading}
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted">{footer.contact.paragraph}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex max-w-sm items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 shadow-sm"
          >
            <input
              type="email"
              required
              placeholder={footer.contact.placeholder}
              className="w-full bg-transparent px-3 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 rounded-full bg-gradient-to-r from-blush-300 to-blush-600 px-5 py-2.5 text-sm font-medium text-white"
            >
              {footer.contact.cta}
            </motion.button>
          </form>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6 border-t border-black/5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <span>{footer.contactInfo.email}</span>
          <span>{footer.contactInfo.phone}</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-ink">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-ink">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter/X" className="hover:text-ink">
            <Twitter className="h-4 w-4" />
          </a>
        </div>

        <p>{footer.legal}</p>

        <div className="flex gap-4">
          {footer.legalLinks.map((link) => (
            <a key={link} href="#" className="hover:text-ink">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
