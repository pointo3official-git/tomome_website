import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { hero } from "../../data/content";

/* ------------------------------------------------------------------ */
/* Floating animation                                                  */
/* ------------------------------------------------------------------ */

const float = (delay = 0) => ({
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

/* ------------------------------------------------------------------ */
/* Shared card                                                         */
/* ------------------------------------------------------------------ */

const card =
  "absolute z-20 box-border rounded-xl bg-white/95 shadow-card backdrop-blur-sm " +
  "p-2.5 sm:rounded-2xl sm:p-3 md:p-4 " +
  "overflow-hidden min-w-0";

/* ------------------------------------------------------------------ */
/* Chat bubble                                                         */
/* ------------------------------------------------------------------ */

function ChatBubble({ name, message }) {
  return (
    <div className="min-w-0">
      <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blush-500/10 sm:h-5 sm:w-5">
          <MessageCircle className="h-2.5 w-2.5 text-blush-500 sm:h-3 sm:w-3" />
        </span>

        <p className="min-w-0 truncate text-[10px] font-medium text-ink sm:text-xs">
          {name}
        </p>
      </div>

      {/* 
        No truncate / line-clamp here.
        The complete message is allowed to wrap naturally.
      */}
      <p
        className="
          mt-1.5
          whitespace-normal
          break-words
          text-[9px]
          leading-[1.35]
          text-muted
          sm:mt-2
          sm:text-[11px]
          sm:leading-[1.4]
        "
      >
        {message}
      </p>
    </div>
  );
}

export default function Hero() {
  const { chat, chat2, chat3, chat4 } = hero.floatingCards;

  return (
    <section
      id="home"
      className="
        relative
        isolate
        w-full
        max-w-full
        overflow-x-clip
        overflow-y-visible
      "
    >
      {/* ------------------------------------------------------------ */}
      {/* Hero viewport                                                  */}
      {/* ------------------------------------------------------------ */}

      <div
        className="
          relative
          min-h-[100svh]
          w-full
          max-w-full
          overflow-hidden
          sm:min-h-[100dvh]
        "
      >
        {/* Background image */}
        <img
          src={hero.heroImage}
          alt="Mother holding newborn baby"
          className="
            absolute
            inset-0
            h-full
            w-full
            max-w-full
            object-cover
          "
        />

        {/* Soft overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            "
          // from-black/10
          // via-transparent
          // to-black/10
        />

        {/* ---------------------------------------------------------- */}
        {/* Hero heading                                                 */}
        {/* ---------------------------------------------------------- */}

        <div
          className="
            absolute
            inset-x-0
            top-[44%]
            z-10
            -translate-y-1/2
            px-4
            text-center
            sm:top-1/2
            sm:px-8
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="
              mx-auto
              max-w-4xl
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-white
              drop-shadow-sm
              sm:text-5xl
              md:text-6xl
            "
          >
            {hero.heading1}
            <br />
            {hero.heading2}
          </motion.h1>
        </div>

        {/* ========================================================== */}
        {/* MOBILE + DESKTOP FLOATING CARDS                            */}
        {/* ========================================================== */}

        {/* ---------------------------------------------------------- */}
        {/* 1. Angana                                                    */}
        {/* ---------------------------------------------------------- */}

        <motion.div
          animate={float(0)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className={`
            ${card}

            left-3
            top-24
            w-[calc(50%-1rem)]
            max-w-[190px]

            sm:left-4
            sm:top-28
            sm:w-44

            md:left-6
            md:top-32
            md:w-56
          `}
        >
          <ChatBubble name={chat.name} message={chat.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 2. Gifity                                                    */}
        {/* ---------------------------------------------------------- */}

        <motion.div
          animate={float(0.4)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.55,
          }}
          className={`
            ${card}

            right-3
            top-24
            w-[calc(50%-1rem)]
            max-w-[190px]

            sm:right-4
            sm:top-28
            sm:w-44

            md:right-6
            md:top-32
            md:w-56

            xl:w-60
          `}
        >
          <ChatBubble name={chat2.name} message={chat2.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 3. Megha                                                     */}
        {/* ---------------------------------------------------------- */}

        <motion.div
          animate={float(0.8)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className={`
            ${card}

            bottom-24
            left-3
            w-[calc(50%-1rem)]
            max-w-[190px]

            sm:bottom-12
            sm:left-4
            sm:w-48

            md:bottom-16
            md:left-6
            md:w-56

            xl:w-60
          `}
        >
          <ChatBubble name={chat3.name} message={chat3.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 4. Rosy                                                      */}
        {/* ---------------------------------------------------------- */}

        <motion.div
          animate={float(1.2)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.65,
          }}
          className={`
            ${card}

            bottom-24
            right-3
            w-[calc(50%-1rem)]
            max-w-[190px]

            sm:bottom-12
            sm:right-4
            sm:w-44

            md:bottom-16
            md:right-6
            md:w-56

            xl:w-60
          `}
        >
          <ChatBubble name={chat4.name} message={chat4.time} />
        </motion.div>
      </div>
    </section>
  );
}
