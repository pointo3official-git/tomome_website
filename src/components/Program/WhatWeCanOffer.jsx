import { motion } from "motion/react";

const HOW_ITEMS = [
  {
    id: "yoga-class",
    title: "Daily Live Yoga Classes",
    description:
      "Stay active and prepare your body for delivery. Custom sessions including Sukshma yoga, Garbha yoga and Labour prep yoga, Couple yoga with flexible slots from morning to evening.",
    image: "experts/live_yoga.png",
    imageAlt: "Yoga class session with a tomome trainer",
  },
  {
    id: "nutrition-support",
    title: "Custom Nutrition Plans",
    description:
      "Weekly meal guides, easy recipes, and tailored diets based on your health condition and baby's development. Because what you eat directly impacts your baby's growth.",

    image: "section/nutrition_Support.png",
    imageAlt: "nutrition guidance with a tomome nutritionist",
  },

  {
    id: "mom-to-be-community",
    title: "Mom-to-Be Community",
    description:
      "A moderated, safe space to connect with other expecting mothers, share experiences, and learn together. Your safe space to learn, laugh and lean on other moms.",

    image: "section/tomome-community.png",
    imageAlt: "mom-to-be community image with a group of mothers and a tomome expert",
  },

  {
    id: "expert-support",
    title: "Personalized, Expert Support",
    description:
      "Get one-on-one guidance from Ayurvedic doctors, nutritionists, yoga coaches, and care managers – available via chat, call, or video, whenever you need it.",

    image: "section/Expert_Support.png",
    imageAlt: "Personalized expert support image with a tomome expert",
  },
];

// --------------------------------------------------------------
// Data for the "Childbirth classes" panel — four topic cards that
// float around a centered hero image on larger screens (matching
// the reference layout: two cards up top, two along the bottom),
// and drop into a simple 2-column grid below the image on mobile.
// Swap the `image` paths for your real assets when ready.
// --------------------------------------------------------------

const CHILDBIRTH_CLASSES = [
  {
    id: "labour-birth",
    title: "Understand Labour",
    description: "What is vaginal birth, the psychology of birth, and more.",
    image: "section/sam.jfif",
    imageAlt: "Understand labour and birth icon",
    wrapperClassName: "left-0 top-0 sm:left-[1%] sm:top-[6%] md:left-[6%]",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Breastfeeding, cesarean section, and more.",
    image: "section/pain_management.jfif",
    imageAlt: "Pain management icon",
    wrapperClassName: "right-0 top-0 sm:right-[1%] sm:top-[6%] md:right-[6%]",
  },
  {
    id: "newborn-care",
    title: "New Born Care",
    description: "Pee guide, potty training, and more.",
    image: "section/new_born_care.jfif",
    imageAlt: "New born care icon",
    wrapperClassName:
      "left-0 bottom-0 sm:left-[3%] sm:bottom-[8%] md:left-[10%]",
  },
  {
    id: "postpartum-wellness",
    title: "Postpartum Wellness",
    description: "Don'ts of exercise, warning signs, and more.",
    image: "section/postpartum.jfif",
    imageAlt: "Postpartum wellness icon",
    wrapperClassName:
      "right-0 bottom-0 sm:right-[3%] sm:bottom-[8%] md:right-[10%]",
  },
];

// Shared card visuals — a small square icon plus a title/description
// pair. Used both for the absolutely-positioned desktop cards and the
// plain-flow mobile grid, so the two stay visually identical.
function ClassCardContent({ item, className = "" }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl bg-white p-3 text-left shadow-lg ring-1 ring-black/5 ${className}`}
    >
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-blush-100">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug text-ink">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
}

// Only rendered from `sm` upward — see the mobile grid in the main
// component for the small-screen equivalent.
function FloatingClassCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + index * 0.1,
      }}
      className={`absolute z-20 w-[190px] md:w-[220px] ${item.wrapperClassName}`}
    >
      <ClassCardContent item={item} />
    </motion.div>
  );
}

export default function WhatWeCanOffer() {
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
            What we have for you
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
            From daily wellness to expert care, it's all here
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
            md:gap-y-20
            lg:gap-x-10
            lg:gap-y-24
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
        {/* Third panel: "Childbirth classes"                          */}
        {/* Sits below the two columns above, full width.              */}
        {/* >= sm: a centered hero image with four topic cards          */}
        {/* floating around it (two up top, two along the bottom),      */}
        {/* matching the reference design.                              */}
        {/* < sm: the same hero image, then the four cards laid out      */}
        {/* as a simple 2-column grid underneath.                        */}
        {/* -------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[2rem]
            border
            border-blush-100
            bg-gradient-to-br
            from-blush-50
            via-blush-50
            to-blush-100/60
            px-6
            py-14
            text-center
            shadow-soft
            sm:mt-14
            sm:px-10
            sm:py-20
          "
        >
          {/* Ambient glow behind the copy */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[30%]
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

          {/* Heading */}
          <div className="relative z-30 mx-auto max-w-xl">
            <h3
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-ink
                sm:text-3xl
                md:text-4xl
              "
            >
              And Mom, You'll get Childbirth Classes
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Weekly live sessions that walk you through labour, pain relief,
              newborn care and recovery, so you always know what's next.
            </p>
          </div>

          {/* Hero image + floating cards (sm and up only) */}
          <div
            className="
              relative
              mx-auto
              mt-10
              hidden
              max-w-3xl
              sm:flex
              sm:min-h-[420px]
              sm:items-center
              sm:justify-center
              md:min-h-[460px]
            "
          >
            {CHILDBIRTH_CLASSES.map((item, index) => (
              <FloatingClassCard key={item.id} item={item} index={index} />
            ))}

            <img
              src="section/pregnant_women.png"
              alt="Pregnant woman smiling while looking at her phone"
              className="relative z-10 w-[220px] drop-shadow-xl md:w-[260px]"
            />
          </div>

          {/* Mobile layout: hero image, then a 2-column card grid */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-6 sm:hidden">
            <img
              src="section/pregnant_women.png"
              alt="Pregnant woman smiling while looking at her phone"
              className="w-[190px] drop-shadow-xl"
            />

            <div className="grid w-full grid-cols-1 gap-3">
              {CHILDBIRTH_CLASSES.map((item) => (
                <ClassCardContent key={item.id} item={item} className="w-full" />
              ))}
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}