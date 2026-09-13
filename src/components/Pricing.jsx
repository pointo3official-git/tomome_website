import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { pricing } from '../data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-center text-xs font-medium tracking-wide text-muted">
        {pricing.eyebrow}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            className={`flex flex-col overflow-hidden rounded-xl3 shadow-card ${
              plan.emphasized ? 'bg-ink text-white' : 'bg-white text-ink'
            }`}
          >
            <div className="relative h-40 w-full">
              <img src={plan.image} alt={plan.name} className="h-full w-full object-cover" />
              {plan.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink">
                  {plan.tag}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className={`text-xs font-medium ${plan.emphasized ? 'text-white/70' : 'text-muted'}`}>
                {plan.name}
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">{plan.price}</p>

              {plan.note && (
                <p className={`mt-3 text-xs leading-relaxed ${plan.emphasized ? 'text-white/70' : 'text-muted'}`}>
                  {plan.note}
                </p>
              )}

              {plan.features.length > 0 && (
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          plan.emphasized ? 'text-blush-300' : 'text-blush-500'
                        }`}
                      />
                      <span className={plan.emphasized ? 'text-white/90' : 'text-ink/80'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <motion.a
                href="#choose-plan"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-6 w-full rounded-full py-3 text-center text-sm font-medium ${
                  plan.emphasized
                    ? 'bg-white text-ink'
                    : 'bg-ink text-white'
                }`}
              >
                {plan.cta}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
