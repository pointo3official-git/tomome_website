import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { testimonialsSection } from "../../data/content";
import { GOOGLE_FORM_URL,WHATSAPP_URL,categoryCaptions } from "../../data/program";

const feedbackImages = testimonialsSection.feedbacks;

const AUTO_SLIDE_INTERVAL_MS = 3500;

// -------------------------------------------------------------------
// WhatsApp icon (inline, inherits currentColor to stay on-theme)
// -------------------------------------------------------------------
function WhatsAppIcon({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 3.2C8.977 3.2 3.28 8.897 3.28 15.924c0 2.42.665 4.68 1.822 6.614L3.2 28.8l6.44-1.843a12.63 12.63 0 0 0 6.364 1.71h.005c7.027 0 12.723-5.697 12.723-12.724S23.03 3.2 16.004 3.2Zm0 23.077h-.004a10.5 10.5 0 0 1-5.35-1.465l-.384-.228-3.82 1.093 1.11-3.72-.25-.382a10.46 10.46 0 0 1-1.605-5.65c0-5.803 4.72-10.522 10.507-10.522 2.807 0 5.444 1.092 7.43 3.078a10.43 10.43 0 0 1 3.076 7.437c0 5.803-4.72 10.36-10.71 10.36Zm5.798-7.756c-.318-.16-1.882-.928-2.174-1.034-.291-.107-.503-.16-.715.16-.211.318-.82 1.033-1.005 1.245-.185.212-.37.239-.688.08-.318-.16-1.343-.495-2.558-1.578-.946-.843-1.584-1.885-1.769-2.203-.185-.318-.02-.49.14-.65.144-.143.318-.372.478-.557.16-.186.212-.318.318-.53.106-.212.053-.398-.026-.557-.08-.16-.715-1.723-.98-2.36-.258-.62-.52-.536-.715-.546l-.61-.011a1.17 1.17 0 0 0-.847.398c-.291.318-1.11 1.086-1.11 2.648 0 1.562 1.137 3.071 1.296 3.283.16.212 2.238 3.417 5.422 4.793.758.327 1.35.523 1.812.669.761.242 1.454.208 2.002.126.611-.091 1.882-.77 2.148-1.513.265-.744.265-1.38.185-1.513-.08-.132-.291-.212-.61-.371Z" />
    </svg>
  );
}

// -------------------------------------------------------------------
// Auto-rotating feedback carousel
// -------------------------------------------------------------------
function FeedbackCarousel({ feedbacks }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || feedbacks.length <= 1) return undefined;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, feedbacks.length]);

  if (feedbacks.length === 0) return null;

  const current = feedbacks[index];
  const caption =
    categoryCaptions[current.category] ?? categoryCaptions.default;

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-blush-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.alt}
            className="h-full w-full object-contain object-center"
          />

          {/* Caption legibility overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/55
              via-black/5
              to-transparent
            "
          />

          <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white sm:text-base">
            {caption}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute top-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {feedbacks.map((fb, i) => (
          <button
            key={fb.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show feedback ${i + 1} of ${feedbacks.length}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// Main component
// -------------------------------------------------------------------
export default function ProgramEnquiry() {
  return (
    <section
      id="programs"
      className="
        w-full
        max-w-full
        overflow-x-clip
        scroll-mt-24
        bg-white
        px-4
        pb-16
        pt-28
        sm:px-5
        sm:pb-10
        sm:pt-24
        lg:pb-16
        lg:pt-32
      "
      // scroll-mt-24 (~96px) reserves room for a fixed/sticky navbar
      // when this section is reached via an anchor link (#programs).
      // Tune it to your navbar's real height if it isn't ~96px.
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-8
            lg:gap-10
          "
        >
          {/* -------------------------------------------------- */}
          {/* Feedback images panel (top on mobile, right on desktop) */}
          {/* -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              order-1
              h-96
              w-full
              overflow-hidden
              rounded-3xl
              shadow-soft
              sm:h-[28rem]
              md:order-2
              md:h-[32rem]
              lg:h-[36rem]
            "
          >
            <FeedbackCarousel feedbacks={feedbackImages} />
          </motion.div>

          {/* -------------------------------------------------- */}
          {/* Enquiry panel (bottom on mobile, left on desktop) */}
          {/* -------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="
              order-2
              flex
              flex-col
              justify-center
              rounded-3xl
              border
              border-blush-200
              bg-gradient-to-b
              from-blush-50
              to-white
              p-6
              shadow-soft
              sm:p-8
              md:order-1
              md:p-10
              lg:p-12
            "
          >
            <p className="text-xs font-medium tracking-[0.18em] text-blush-500">
              WOMB CARE PROGRAM
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
              "
            >
              Your Pregnancy, Your Journey
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Experience a personalized, expert-led program that nurtures you
              and your baby with 24/7 care.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              Program starts at{" "}
              <span className="text-lg font-semibold text-ink sm:text-xl">
                ₹ 2,999/mo
              </span>{" "}
              <span className="text-sm text-muted line-through sm:text-base">
                ₹ 4,000/mo
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-blush-500
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-blush-600
                  hover:shadow-md
                "
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-blush-200
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-blush-600
                  transition-all
                  hover:bg-blush-50
                "
              >
                <WhatsAppIcon className="h-4 w-4" />
                Talk to us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
