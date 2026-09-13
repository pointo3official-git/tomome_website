import { motion } from "motion/react";
import { Check } from "lucide-react";

const HOW_ITEMS = [
  {
    id: "tailored-programs",
    title: "Tailor-made programs",
    description:
      "We shape your plan around your goals and your current stage, from trying to conceive through pregnancy and into early parenthood.",
    image: "/public/class_cards.png",
    imageAlt: "Illustration of a personalized pregnancy program",
  },
  {
    id: "expert-team",
    title: "A team you can lean on",
    description:
      "Our doctors, coaches, and specialists help you build healthy habits at a pace that works for you, every step of the way.",

    image: "/public/home_page_experts.png",
    imageAlt: "Illustration of Tomome's care team",
  },
];

export default function HowTomomeWorks() {
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
          <p className="text-xs font-medium tracking-[0.18em] text-blush-500">
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
      </div>
    </section>
  );
}
