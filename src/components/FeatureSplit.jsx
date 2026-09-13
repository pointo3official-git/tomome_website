import { motion } from 'motion/react';
import { featureSplit } from '../data/content';

export default function FeatureSplit() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-medium tracking-wide text-muted">{featureSplit.eyebrow}</p>
          <h2 className="mt-3 max-w-md text-4xl font-semibold leading-tight tracking-tight text-ink">
            {featureSplit.heading}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {featureSplit.paragraph1}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {featureSplit.paragraph2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-sm overflow-hidden rounded-xl3 bg-gradient-to-b from-blush-100 to-blush-300 p-3 shadow-soft"
        >
          <div className="rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt={featureSplit.mockup.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-medium text-ink">{featureSplit.mockup.name}</p>
                <p className="text-[10px] text-muted">{featureSplit.mockup.time}</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink/80">
              {featureSplit.mockup.message}
            </p>
            <p className="mt-2 text-right text-[11px] italic text-blush-500">
              {featureSplit.mockup.signature}
            </p>
          </div>
          <img
            src={featureSplit.mockup.image}
            alt="Expecting mother"
            className="mt-3 h-72 w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
