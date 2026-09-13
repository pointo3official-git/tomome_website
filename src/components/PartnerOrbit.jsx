import { motion } from 'motion/react';
import {
  Heart,
  Shield,
  Sparkles,
  Sun,
  Droplet,
  Leaf,
  Flame,
  CircleDot,
  Sparkle,
} from 'lucide-react';
import { partners, brand } from '../data/content';

const ICONS = {
  heart: Heart,
  shield: Shield,
  sparkles: Sparkles,
  sun: Sun,
  droplet: Droplet,
  leaf: Leaf,
  flame: Flame,
  'circle-dot': CircleDot,
};

const ICON_COLORS = [
  'text-rose-400',
  'text-sky-400',
  'text-amber-400',
  'text-emerald-400',
  'text-fuchsia-400',
  'text-lime-500',
  'text-orange-400',
  'text-indigo-400',
];

export default function PartnerOrbit() {
  const radius = 170;
  const count = partners.icons.length;

  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <p className="text-xs font-medium tracking-wide text-muted">{partners.eyebrow}</p>
      <h2 className="mx-auto mt-3 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-ink">
        {partners.heading}
      </h2>

      <div className="relative mx-auto mt-16 flex h-[220px] max-w-lg items-center justify-center">
        {/* connecting orbit ring */}
        <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-blush-200" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute h-[340px] w-[340px]"
        >
          {partners.icons.map((key, i) => {
            const Icon = ICONS[key] ?? Heart;
            const angle = (i / count) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <motion.div
                key={key}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card"
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                }}
              >
                <Icon className={`h-4 w-4 ${ICON_COLORS[i % ICON_COLORS.length]}`} strokeWidth={2} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* center badge */}
        <div className="z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-blush-200 to-blush-400 px-6 py-3 shadow-card">
          <Sparkle className="h-5 w-5 fill-white text-white" strokeWidth={1.5} />
          <span className="text-lg font-semibold tracking-tight text-white">{brand.name}</span>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-md text-sm leading-relaxed text-muted">
        {partners.paragraph}
      </p>
    </section>
  );
}
