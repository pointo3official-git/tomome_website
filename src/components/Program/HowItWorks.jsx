import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../../data/program';

function StepText({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      className="pt-1"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-500">
        {step.step}
      </span>

      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {step.title}
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
        {step.description}
      </p>
    </motion.div>
  );
}

function StepImage({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      className="overflow-hidden rounded-3xl bg-blush-50 shadow-soft ring-1 ring-blush-100"
    >
      <img
        src={step.image}
        alt={step.imageAlt}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className="h-auto w-full object-contain"
      />
    </motion.div>
  );
}

/** Mobile-only stacked version (text → image) */
function StepContentMobile({ step, index }) {
  return (
    <div className="flex flex-col gap-6">
      <StepText step={step} index={index} />
      <StepImage step={step} index={index} />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="programs"
      aria-labelledby="how-it-works-heading"
      className="
        w-full
        overflow-x-clip
        scroll-mt-24
        bg-white
        px-4
        pb-16
        pt-24
        sm:px-5
        sm:pb-20
        sm:pt-28
        lg:pb-24
        lg:pt-32
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="how-it-works-heading"
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-ink
              sm:text-4xl
              lg:text-5xl
            "
          >
            How it works?
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base lg:text-lg">
            In just a few steps, you&apos;ll unlock personalized guidance, daily
            care routines, and expert-led sessions, all designed for you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Pink timeline line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-10
              left-4
              top-10
              w-0.5
              bg-blush-300
              sm:left-5
              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              // Even steps (0, 2) → image left, text right
              // Odd steps  (1, 3) → text left, image right
              const imageOnLeft = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="
                    relative
                    grid
                    grid-cols-[32px_minmax(0,1fr)]
                    gap-5
                    lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)]
                    lg:gap-8
                  "
                >
                  {/* Timeline number (always centered on the line) */}
                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      flex
                      justify-start
                      pt-1
                      lg:col-start-2
                      lg:justify-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-blush-500
                        ring-2
                        ring-blush-300
                        lg:h-10
                        lg:w-10
                      "
                    >
                      <span className="text-[10px] font-bold text-white lg:text-xs">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* ========== MOBILE ==========
                      Text + image stacked, always to the right of the line
                  */}
                  <div className="col-start-2 lg:hidden">
                    <StepContentMobile step={step} index={index} />
                  </div>

                  {/* ========== DESKTOP ==========
                      Alternate image / text around the center line
                  */}

                  {/* Left column */}
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1 lg:pr-2">
                    {imageOnLeft ? (
                      <StepImage step={step} index={index} />
                    ) : (
                      <StepText step={step} index={index} />
                    )}
                  </div>

                  {/* Right column */}
                  <div className="hidden lg:block lg:col-start-3 lg:row-start-1 lg:pl-2">
                    {imageOnLeft ? (
                      <StepText step={step} index={index} />
                    ) : (
                      <StepImage step={step} index={index} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}