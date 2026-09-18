import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const programs = [
  {
    id: 'womb-care',
    label: 'WOMB CARE PROGRAM',
    title: 'Your Pregnancy, Your Journey',
    description:
      'Dedicated support to help you feel prepared, confident, and cared for throughout pregnancy.',
    image:
      'section/womb-care.jfif',
    imageAlt: 'Mother and baby',
    features: [
      'Prepare For Baby Health & Birthing',
      'Daily Live Yoga',
      'Personalized Nutrition Support',
      'Personalized Doctor Support',
      'Unlimited Doubt Clearing Support',
      'Childbirth classes & Labor preparation',
      'Personalized Emotional Care',
    ],
    button: 'Know More',
    href: '/program',
    disabled: false,
    highlighted: true,
  },
  {
    id: 'super-parenting',
    label: 'SUPER PARENTING PROGRAM',
    title: 'For your path as a parent',
    description:
      'Ongoing support for the next chapter, helping you feel more confident as you step into parenthood.',
    image:
      'section/parenting.jfif',
    imageAlt: 'Parent and child',
    features: [
      'Prepare for parenting',
      'Daily Live Postpartum Yoga',
      'Get the best nutrition advice',
      'Lactation Coach support',
      'Unlimited Doubt Clearing Support',
      'DIY Activities',
    ],
    button: 'Coming Soon...',
    href: '#',
    disabled: true,
    highlighted: false,
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="
        w-full
        max-w-full
        overflow-x-clip
        bg-white
        px-4
        py-20
        sm:px-5
        sm:py-10
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* -------------------------------------------------------- */}
        {/* Section heading                                           */}
        {/* -------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium tracking-[0.18em] text-blush-500">
            OUR PROGRAMS
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-ink
              sm:text-4xl
              md:text-5xl
            "
          >
            Support for every stage of your journey
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-muted
              sm:text-base
            "
          >
            From pregnancy preparation to your journey as a parent, Tomome is
            here to support you with expert guidance, practical care, and
            everyday help.
          </p>
        </motion.div>

        {/* -------------------------------------------------------- */}
        {/* Program cards                                              */}
        {/* -------------------------------------------------------- */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            md:mt-14
            md:grid-cols-2
            md:gap-7
            lg:gap-8
          "
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              className={`
                group
                flex
                h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-3xl
                border
                ${
                  program.highlighted
                    ? 'border-blush-200 bg-gradient-to-b from-blush-50 to-white shadow-soft'
                    : 'border-black/5 bg-white shadow-sm'
                }
              `}
            >
              {/* -------------------------------------------------- */}
              {/* Program image                                        */}
              {/* -------------------------------------------------- */}

              <div className="relative w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="
                    block
                    h-52
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                    sm:h-60
                    md:h-56
                    lg:h-64
                  "
                />

                {/* Soft image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/15
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* -------------------------------------------------- */}
              {/* Card content                                          */}
              {/* -------------------------------------------------- */}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Label */}
                <div>
                  <p
                    className={`
                      text-[11px]
                      font-semibold
                      tracking-[0.16em]
                      ${
                        program.highlighted
                          ? 'text-blush-500'
                          : 'text-muted'
                      }
                    `}
                  >
                    {program.label}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-ink
                      sm:text-3xl
                    "
                  >
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-md
                      text-sm
                      leading-relaxed
                      text-muted
                      sm:text-base
                    "
                  >
                    {program.description}
                  </p>
                </div>

                {/* ------------------------------------------------ */}
                {/* Features                                           */}
                {/* ------------------------------------------------ */}

                <div className="mt-7 flex-1">
                  <p className="mb-4 text-sm font-semibold text-ink">
                    What’s included
                  </p>

                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          leading-relaxed
                          text-ink/80
                        "
                      >
                        <span
                          className={`
                            mt-0.5
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            ${
                              program.highlighted
                                ? 'bg-blush-100 text-blush-500'
                                : 'bg-black/5 text-ink/60'
                            }
                          `}
                        >
                          <Check className="h-3 w-3" />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ------------------------------------------------ */}
                {/* CTA                                                */}
                {/* ------------------------------------------------ */}

                <div className="mt-8">
                  <a
                    href={program.disabled ? undefined : program.href}
                    aria-disabled={program.disabled}
                    tabIndex={program.disabled ? -1 : 0}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      px-5
                      py-3.5
                      text-sm
                      font-medium
                      transition-all
                      ${
                        program.disabled
                          ? 'cursor-not-allowed bg-black/5 text-muted'
                          : 'bg-blush-500 text-white shadow-sm hover:bg-blush-600 hover:shadow-md'
                      }
                    `}
                  >
                    {program.button}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}