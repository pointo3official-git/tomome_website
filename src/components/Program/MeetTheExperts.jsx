import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { expertsSection } from '../../data/content';

const REPEATS = 3;

function ExpertCard({ expert }) {
  return (
    <article className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-blush-200/40 shadow-card ring-1 ring-black/5">
      <img
        src={expert.image}
        alt={expert.name}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="h-full w-full select-none object-cover object-top"
      />

      <span className="absolute left-3 top-3 z-10 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-medium text-ink shadow-sm">
        {expert.role}
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="absolute inset-x-3 bottom-3 rounded-xl border border-black/5 bg-white/95 px-3.5 py-3 shadow-sm backdrop-blur-sm">
        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
          {expert.name}
        </h3>

        <p className="mt-2 flex items-start gap-2 text-[12px] leading-snug text-muted">
          <GraduationCap className="mt-px h-3.5 w-3.5 shrink-0 text-blush-500" />
          <span>{expert.qualification}</span>
        </p>
      </div>
    </article>
  );
}

export default function Experts() {
  const prefersReducedMotion = useReducedMotion();
  const { experts } = expertsSection;

  const repeats = prefersReducedMotion ? 1 : REPEATS;
  const slides = Array.from({ length: repeats }, () => experts).flat();

  return (
    <section className="relative overflow-hidden py-15">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(249,217,222,0.85), rgba(253,251,249,0))',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <p className="text-xs font-medium tracking-wide text-muted">{expertsSection.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {expertsSection.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          {expertsSection.paragraph}
        </p>
      </motion.div>

      <div
        className={`experts-marquee mt-10 md:mt-12 ${
          prefersReducedMotion ? 'experts-marquee--static' : ''
        }`}
      >
        <div className="experts-marquee__track" aria-label="Our experts" role="list">
          {slides.map((expert, i) => (
            <div
              key={`${expert.name}-${i}`}
              role="listitem"
              className="w-[68vw] max-w-[280px] shrink-0 pr-4 sm:w-[46vw] md:w-[300px] md:pr-6 lg:w-[290px] xl:w-[300px]"
              aria-hidden={i >= experts.length ? 'true' : undefined}
            >
              <ExpertCard expert={expert} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experts-marquee {
          overflow: hidden;
          /* soft fade at both edges so cards enter and leave instead of clipping */
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }

        .experts-marquee__track {
          display: flex;
          width: max-content;
          padding-left: 1rem;
          animation: experts-marquee-slide var(--experts-marquee-duration, 34s) linear infinite;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .experts-marquee__track {
            padding-left: 1.5rem;
            --experts-marquee-duration: 44s;
          }
        }

        @keyframes experts-marquee-slide {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.3333%, 0, 0); }
        }

        /* pause only where a real pointer exists — never traps touch users */
        @media (hover: hover) and (pointer: fine) {
          .experts-marquee:hover .experts-marquee__track {
            animation-play-state: paused;
          }
        }

        .experts-marquee--static {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .experts-marquee--static::-webkit-scrollbar { display: none; }
        .experts-marquee--static .experts-marquee__track {
          animation: none;
          padding-right: 1rem;
        }
        .experts-marquee--static .experts-marquee__track > * {
          scroll-snap-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .experts-marquee__track { animation: none; }
        }
      `}</style>
    </section>
  );
}