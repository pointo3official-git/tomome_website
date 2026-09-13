import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsSection } from '../data/content';

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.55,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-card"
    >
      <Quote className="h-6 w-6 text-blush-300" strokeWidth={1.5} />
      <p className="mt-4 text-sm leading-relaxed text-ink/90">{testimonial.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-ink">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.meta}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden py-28">
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
          <div className="flex -space-x-3">
            {testimonialsSection.avatarStack.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-cream object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-muted">{testimonialsSection.reviewCount}</p>
        </motion.div>
      </div>

      <p className="mx-auto mt-4 max-w-lg px-6 text-sm leading-relaxed text-muted md:px-0">
        {testimonialsSection.paragraph}
      </p>

      {/* Embla swipeable testimonial track */}
      <div className="relative mx-auto mt-12 max-w-6xl px-6">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container -ml-4 md:-ml-6">
            {testimonialsSection.testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="embla__slide w-[80%] pl-4 sm:w-[55%] md:w-[36%] md:pl-6"
              >
                <TestimonialCard testimonial={testimonial} isActive={i === selectedIndex} />
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
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>

          <div className="flex items-center gap-1.5">
            {testimonialsSection.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
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
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
