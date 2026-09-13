import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import { hero } from '../data/content';

/* ------------------------------------------------------------------ */
/* shared helpers                                                      */
/* ------------------------------------------------------------------ */

/* gentle up/down drift – each card floats forever, staggered by delay */
const float = (delay = 0) => ({
  y: [0, -10, 0],
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
});

/* one shell for every floating card so padding / radius live in one place */
const card =
  'absolute z-10 rounded-xl bg-white/95 p-2 shadow-card backdrop-blur-sm sm:rounded-2xl sm:p-3 md:p-4';

/* the chat bubble rendered inside all four chat motion divs */
function ChatBubble({ name, message }) {
  return (
    <>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blush-500/10 sm:h-5 sm:w-5">
          <MessageCircle className="h-2.5 w-2.5 text-blush-500 sm:h-3 sm:w-3" />
        </span>
        <p className="truncate text-[10px] font-medium text-ink sm:text-xs">
          {name}
        </p>
      </div>
      <p className="mt-1 line-clamp-2 text-[9px] leading-snug text-muted sm:mt-1.5 sm:text-[11px] lg:line-clamp-3">
        {message}
      </p>
    </>
  );
}

export default function Hero() {
  const { chat, chat2, chat3, chat4, checklist, stat } = hero.floatingCards;

  return (
    <section id="home" className="relative overflow-hidden">
      {/* full-screen hero image. 100dvh avoids mobile browser chrome cutting off content */}
      <div className="relative h-[100dvh] w-full">
        <img
          src={hero.heroImage}
          alt="Mother holding newborn baby"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* from-black/10 via-black/5 to-black/10 */}
        <div className="absolute inset-0 bg-gradient-to-b" />

        {/* heading + CTAs, nudged up slightly on small screens so it never collides with the corner cards */}
        <div className="absolute inset-x-0 top-[42%] -translate-y-1/2 px-5 text-center sm:top-1/2 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl"
          >
            {hero.heading1}
            <br />
            {hero.heading2}
          </motion.h1>

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-3"
          >
            <motion.a
              href="#book-demo"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full max-w-[220px] rounded-full bg-white px-6 py-3 text-sm font-medium text-ink shadow-card sm:w-auto"
            >
              {hero.primaryCta}
            </motion.a>
            <motion.a
              href="#start-journey"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full max-w-[220px] rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur sm:w-auto"
            >
              {hero.secondaryCta}
            </motion.a>
          </motion.div> */}
        </div>

        {/* ---------------------------------------------------------- */}
        {/* 1 · Angana – top left (visible on every breakpoint)         */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          animate={float(0)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`${card} left-3 top-20 w-32 sm:left-4 sm:top-24 sm:w-44 md:left-6 md:top-28 md:w-56`}
        >
          <ChatBubble name={chat.name} message={chat.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 2 · Baby this week – top right                              */}
        {/* ---------------------------------------------------------- */}
        {/* <motion.div
          animate={float(0.3)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className={`${card} right-3 top-20 w-28 sm:right-4 sm:top-24 sm:w-40 md:right-6 md:top-28 md:w-48`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink sm:text-sm">
              {stat.title}
            </p>
            <Clock className="h-3 w-3 shrink-0 text-blush-400 sm:h-4 sm:w-4" />
          </div>
          <p className="mt-1 text-[10px] text-muted sm:mt-2 sm:text-xs">
            Week {stat.week}
          </p>
          <div className="mt-1 flex items-center justify-between text-xs font-medium text-ink sm:mt-2 sm:text-sm">
            <span>{stat.length}</span>
            <span>{stat.weight}</span>
          </div>
        </motion.div> */}

        {/* ---------------------------------------------------------- */}
        {/* 3 · Gifity (yoga / nutrition) – left, from lg up only       */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          animate={float(0.6)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${card} hidden w-56 lg:left-6 lg:top-52 lg:block xl:w-60`}
        >
          <ChatBubble name={chat2.name} message={chat2.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 4 · Gifity (better sleep) – right, from lg up only          */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          animate={float(0.9)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className={`${card} hidden w-56 lg:right-6 lg:top-52 lg:block xl:w-60`}
        >
          <ChatBubble name={chat3.name} message={chat3.time} />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 5 · Week's checklist – bottom left                          */}
        {/* ---------------------------------------------------------- */}
        {/* <motion.div
          animate={float(1.2)}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`${card} bottom-6 left-3 w-36 sm:bottom-10 sm:left-4 sm:w-48 md:bottom-16 md:left-6 md:w-60`}
        >
          <p className="text-[9px] font-medium tracking-wide text-blush-500 sm:text-[10px]">
            {checklist.eyebrow}
          </p>
          <p className="mt-1 text-xs font-semibold text-ink sm:text-sm">
            {checklist.title}
          </p>
          <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5">
            {checklist.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-[10px] text-muted sm:gap-2 sm:text-xs"
              >
                <CheckCircle2 className="h-3 w-3 shrink-0 text-blush-400 sm:h-3.5 sm:w-3.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div> */}

        {/* ---------------------------------------------------------- */}
        {/* 6 · Rosy – bottom right (visible on every breakpoint)       */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          animate={float(1.5)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className={`${card} bottom-6 right-3 w-32 sm:bottom-10 sm:right-4 sm:w-44 md:bottom-16 md:right-6 md:w-56`}
        >
          <ChatBubble name={chat4.name} message={chat4.time} />
        </motion.div>
      </div>
    </section>
  );
}