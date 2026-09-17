import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section
      id="about"
      className="
        w-full
        overflow-x-clip
        scroll-mt-24
        bg-white
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-full
            text-center
          "
        >
          <h2
            className="
              mx-auto
              max-w-3xl
              text-3xl
              font-semibold
              leading-tight
              text-ink
              sm:text-4xl
              lg:text-[2.75rem]
            "
          >
            The right place for the mom-to-be
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-relaxed
              text-muted
              sm:text-lg
            "
          >
            Pregnancy can feel overwhelming endless searches, conflicting
            opinions, and the quiet ache of wondering if you're doing it
            right. We've been there.
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-relaxed
              text-muted
              sm:text-lg
            "
          >
            Tomome was born to bring everything a mother needs into one warm,
            trusted place: expert gynecologists, nutritionists, prenatal yoga,
            education, and emotional companionship gently woven around your
            unique journey.
          </p>

          <blockquote
            className="
              mx-auto
              mt-8
              max-w-2xl
              border-l-0
              pl-0
              text-lg
              italic
              leading-snug
              text-ink
              sm:text-xl
            "
          >
            "You don't have to figure this out alone. We're here, every step."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}