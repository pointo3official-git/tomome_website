import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const HOW_ITEMS = [
  {
    id: "tailored-programs",
    title: "Tailor-made programs",
    description:
      "We shape your plan around your goals and your current stage, from trying to conceive through pregnancy and into early parenthood.",
    image: "section/class_cards.png",
    imageAlt: "Illustration of a personalized pregnancy program",
  },
  {
    id: "expert-team",
    title: "Team of trained experts & coaches help you build habits",
    description:
      "All the coaches and team of experts are very well qualified & help you integrate lifestyle changes slowly so you achieve your desired goal.",

    image: "experts/home_page_experts.png",
    imageAlt: "Illustration of Tomome's care team",
  },
];

// --------------------------------------------------------------
// Data for the "Constant monitoring & tips" panel — each entry is
// a small notification-style card that pops up around the copy on
// larger screens, and stacks in normal flow on mobile (see the
// FloatingCard / mobile-collage split in the render below).
// Swap the `image` paths for your real assets when ready.
// --------------------------------------------------------------

const MONITORING_HIGHLIGHTS = [
  {
    id: "meal-plan",
    type: "meal",
    eyebrow: "Breakfast, 8 am",
    title: "Caesar Salad",
    meta: "220 Kcal · 3 mins preparation",
    image: "section/cesar_salad.png",
    imageAlt: "Caesar salad breakfast plate",
    wrapperClassName:
      "left-[3%] top-[8%] w-[164px] sm:left-[7%] sm:top-[10%] sm:w-[190px]",
  },
  {
    id: "consultation",
    type: "consultation",
    title: "Consultation with Dr. Hamna",
    meta: "6 June · 4:30 pm",
    cta: "Join Now",
    image: "experts/hamna.png",
    imageAlt: "Dr. Hamna",
    // Widened further (was w-[200px]/sm:w-[240px]) so the full
    // title no longer gets clipped.
    wrapperClassName:
      "right-[1%] top-[6%] w-[240px] sm:right-[5%] sm:top-[8%] sm:w-[288px]",
  },
  {
    id: "avoid-pcod",
    type: "avoid",
    title: "Things to Avoid in PCOD 🚫",
    items: [
      { label: "Sugary Food", image: "section/sugar_food.png" },
      { label: "Fast Food", image: "section/fast_food.png" },
      { label: "Caffeine", image: "section/coffee.png" },
    ],
    wrapperClassName:
      "-right-[4%] top-[42%] w-[172px] sm:right-[2%] sm:top-[40%] sm:w-[196px]",
  },
  {
    id: "childbirth-class",
    type: "progress",
    title: "Childbirth Class",
    percent: 77,
    image: "section/monitor_childbirth.png",
    imageAlt: "Childbirth class session",
    wrapperClassName:
      "left-[4%] bottom-[18%] w-[182px] sm:left-[9%] sm:bottom-[16%] sm:w-[208px]",
  },
  {
    id: "yoga-class",
    type: "session",
    title: "Yoga Class with Ramya",
    meta: "7:30 pm – 8:00 pm",
    image: "experts/ramya.png",
    imageAlt: "Yoga class session",
    // Widened further (was w-[210px]/sm:w-[248px]) so the full
    // title no longer gets clipped.
    wrapperClassName:
      "left-1/2 bottom-[5%] w-[250px] -translate-x-1/2 sm:w-[296px]",
  },
];

// Faint, unlabeled cards peeking off the edges — hints at more
// content living just outside the frame, matching the reference.
const GHOST_CARDS = [
  { id: "ghost-left", wrapperClassName: "-left-10 top-[28%] sm:-left-8" },
  { id: "ghost-right", wrapperClassName: "-right-10 -bottom-[2%] sm:-right-8" },
];

function MonitoringCardContent({ card }) {
  switch (card.type) {
    case "meal":
    case "session":
      return (
        <div className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-lg ring-1 ring-black/5">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl ">
            <img
              src={card.image}
              alt={card.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            {card.eyebrow && (
              <p className="text-[10px] font-medium text-muted">
                {card.eyebrow}
              </p>
            )}
            <p className="truncate text-sm font-semibold text-ink">
              {card.title}
            </p>
            {card.meta && (
              <p className="text-[11px] text-muted">{card.meta}</p>
            )}
          </div>
          {card.type === "session" && (
            <ArrowRight className="ml-auto h-4 w-4 shrink-0 " />
          )}
        </div>
      );

    case "consultation":
      return (
        <div className="flex items-center gap-3 bg-white rounded-2xl  p-3 pr-5 text-black shadow-lg">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
            <img
              src={card.image}
              alt={card.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{card.title}</p>
            <p className="text-[11px] text-black/80">{card.meta}</p>
            <p className="mt-1 text-[11px] font-medium underline underline-offset-2">
              {card.cta}
            </p>
          </div>
        </div>
      );

    case "avoid":
      return (
        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-black/5">
          <p className="mb-2 text-[11px] font-medium text-ink">
            {card.title}
          </p>
          <div className="flex items-center justify-between gap-3">
            {card.items.map(({ label, image }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ">
                  <img
                    src={image}
                    alt={label}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-center text-[9px] leading-tight text-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case "progress":
      return (
        <div className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lg ring-1 ring-black/5">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ">
            <img
              src={card.image}
              alt={card.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-ink">
              {card.title}
            </p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-blush-100">
              <div
                className="h-full rounded-full bg-blush-500"
                style={{ width: `${card.percent}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-muted">
              {card.percent}% completed
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Only rendered from `sm` upward — see the mobile collage in the
// main component for the small-screen equivalent.
function FloatingCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + index * 0.12,
      }}
      className={`absolute z-20 hidden sm:block ${card.wrapperClassName}`}
    >
      <MonitoringCardContent card={card} />
    </motion.div>
  );
}

function GhostCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.7, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={`absolute z-0 hidden h-20 w-40 rounded-2xl bg-white/60 shadow-md ring-1 ring-black/5 sm:block sm:w-48 ${card.wrapperClassName}`}
    />
  );
}

export default function HowTomomeWorks() {
  // Pulled out by id so the mobile collage below can lay each card
  // out individually instead of just mapping the array in order.
  const [mealCard, consultationCard, avoidCard, progressCard, yogaCard] =
    MONITORING_HIGHLIGHTS;

  return (
    <section
      id="how-it-works"
      className="
        w-full
        max-w-full
        overflow-x-clip
        bg-white
        px-4
        pb-28
        pt-20
        sm:px-6
        sm:pb-32
        sm:pt-24
        lg:pt-28
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium tracking-[0.18em]">
            HOW IT WORKS
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
            How Tomome Helps You
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
            Tomome is the support system that helps you go from trying to
            conceive, through pregnancy, and into early parenthood, with
            guidance built around you.
          </p>
        </motion.div>

        {/* -------------------------------------------------------- */}
        {/* Columns                                                    */}
        {/* -------------------------------------------------------- */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-x-8
            gap-y-32
            sm:mt-20
            md:grid-cols-2
            md:gap-y-0
            lg:gap-x-10
          "
        >
          {HOW_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="
                relative
                flex
                min-w-0
                flex-col
                rounded-[2rem]
                border
                border-blush-100
                bg-gradient-to-b
                from-blush-50
                to-blush-50/30
                px-6
                pb-40
                pt-8
                text-left
                shadow-soft
                sm:px-8
                sm:pb-48
                sm:pt-10
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  text-ink
                  sm:text-2xl
                "
              >
                {item.title}
              </h3>

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
                {item.description}
              </p>

              {/* ------------------------------------------------ */}
              {/* Image, popping up on its own once it scrolls        */}
              {/* into view — independent of the card's animation.    */}
              {/* ------------------------------------------------ */}

              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25,
                }}
                className="
    pointer-events-none
    absolute
    bottom-0
    left-[20%]
    -translate-x-1/2
    w-[62%]
    max-w-[220px]
    sm:left-[25%]
    sm:w-[55%]
    sm:max-w-[260px]
  "
              >
                {/* Soft glow behind the image */}
                <div
                  className="
      absolute
      inset-x-6
      bottom-4
      h-24
      rounded-full
      bg-blush-200/60
      blur-3xl
    "
                />

                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="
      relative
      z-10
      block
      w-full
      drop-shadow-xl
    "
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* -------------------------------------------------------- */}
        {/* Third panel: "Constant monitoring & tips"                 */}
        {/* Sits below the two columns above, full width.              */}
        {/* >= sm: scattered floating cards around the centered copy.  */}
        {/* < sm: a staggered mobile collage — copy up top, cards       */}
        {/* below in a scattered, varied-width arrangement (see the     */}
        {/* reference design) instead of a plain uniform stacked list.  */}
        {/* -------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative
            mt-10
            flex
            flex-col
            items-center
            justify-start
            gap-8
            overflow-hidden
            rounded-[2rem]
            border
            border-blush-100
            bg-gradient-to-br
            from-blush-50
            via-blush-50
            to-blush-100/60
            px-6
            py-12
            text-center
            shadow-soft
            sm:mt-14
            sm:min-h-[500px]
            sm:justify-center
            sm:px-10
            sm:py-20
            md:min-h-[520px]
          "
        >
          {/* Ambient glow behind the copy */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blush-200/50
              blur-3xl
              sm:h-56
              sm:w-56
            "
          />

          {/* Ghost cards peeking off the edges (sm and up only) */}
          {GHOST_CARDS.map((card, index) => (
            <GhostCard key={card.id} card={card} index={index} />
          ))}

          {/* Floating highlight cards (sm and up only) */}
          {MONITORING_HIGHLIGHTS.map((card, index) => (
            <FloatingCard key={card.id} card={card} index={index} />
          ))}

          {/* Copy — left-aligned and up top on mobile (matching the
              reference), centered like before from sm upward */}
          <div className="relative z-30 w-full max-w-sm text-left sm:mx-auto sm:text-center">
            <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Constant monitoring & tips
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Our experts will not just make your plan but will constantly
              monitor and guide you in your journey
            </p>
          </div>

          {/* Mobile collage — replaces the old plain stacked list with a
              staggered, varied-width arrangement (plus a faint ghost
              accent) that echoes the reference design, using the same
              colors/cards as everywhere else in this panel. */}
          <div className="relative z-30 flex w-full flex-col gap-4 text-left sm:hidden">
            {/* Row 1: meal card, with a faint card peeking out beside it */}
            <div className="relative">
              <div className="absolute -right-3 top-2 h-14 w-24 rounded-2xl bg-white/50 shadow-md ring-1 ring-black/5" />
              <div className="relative z-10 w-[62%]">
                <MonitoringCardContent card={mealCard} />
              </div>
            </div>

            {/* Row 2: progress, left-aligned */}
            <div className="w-[62%]">
              <MonitoringCardContent card={progressCard} />
            </div>

            {/* Row 3: consultation, right-aligned and wide enough that
                the full title is visible */}
            <div className="ml-auto w-[78%]">
              <MonitoringCardContent card={consultationCard} />
            </div>

            {/* Row 4: things to avoid */}
            <div className="w-[80%]">
              <MonitoringCardContent card={avoidCard} />
            </div>

            {/* Row 5: yoga card, centered and wide enough that the full
                title is visible */}
            <div className="mx-auto w-[92%]">
              <MonitoringCardContent card={yogaCard} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}