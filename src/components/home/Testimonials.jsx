import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsSection } from '../../data/content';
import { CATEGORY_LABELS, FILTERS } from '../../data/home';

function FeedbackCard({ feedback, isActive }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.93,
        opacity: isActive ? 1 : 0.55,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-card"
    >
      <span className="absolute left-3 top-3 z-10 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-medium text-ink shadow-sm">
        {CATEGORY_LABELS[feedback.category] ?? feedback.category}
      </span>
      {/* object-contain (not cover) so screenshot text never gets cropped */}
      <img
        src={feedback.image}
        alt={feedback.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-xl object-contain"
      />
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');

  const feedbacks = useMemo(() => {
    if (activeFilter === 'all') return testimonialsSection.feedbacks;
    return testimonialsSection.feedbacks.filter((f) => f.category === activeFilter);
  }, [activeFilter]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'trimSnaps' },
    // 6s delay - screenshots hold more to read than a one-line quote did
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Rebuild the track and restart autoplay whenever the filter changes the slide set
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    setSelectedIndex(0);
    emblaApi.plugins()?.autoplay?.reset();
  }, [emblaApi, feedbacks]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden py-15">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(249,217,222,0.85), rgba(253,251,249,0))',
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <p className="text-xs font-medium tracking-wide text-muted">{testimonialsSection.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink">
            {testimonialsSection.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
        </motion.div>
      </div>

      <p className="mx-auto mt-4 max-w-lg px-6 text-sm leading-relaxed text-muted md:px-0">
        {testimonialsSection.paragraph}
      </p>

      {/* category filters */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-2 px-6">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveFilter(key)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeFilter === key
                ? 'border-blush-500 bg-blush-500 text-white'
                : 'border-black/10 bg-white text-ink hover:border-blush-300'
            }`}
          >
            {key === 'all' ? 'All' : CATEGORY_LABELS[key]}
          </button>
        ))}
      </div>

      {/* Embla swipeable feedback-screenshot track */}
      <div className="relative mx-auto mt-8 max-w-6xl px-6">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container -ml-4 md:-ml-6">
            {feedbacks.map((feedback, i) => (
              <div
                key={feedback.image}
                className="embla__slide w-[70%] pl-4 sm:w-[45%] md:w-[28%] md:pl-6"
              >
                <FeedbackCard feedback={feedback} isActive={i === selectedIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* nav arrows */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.button
            onClick={scrollPrev}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous feedback"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>

          <div className="flex items-center gap-1.5">
            {feedbacks.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                aria-label={`Go to feedback ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? 'w-6 bg-blush-500' : 'w-1.5 bg-blush-200'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next feedback"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}