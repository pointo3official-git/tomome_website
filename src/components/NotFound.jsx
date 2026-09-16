import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";

// Router-agnostic on purpose: plain anchors work with react-router, Next,
// or a static build. If you use react-router, swap <a href> for <Link to>.
const QUICK_LINKS = [
  { label: "Womb Care Program", href: "/#program" },
  { label: "Meet our experts", href: "/#experts" },
  { label: "Stories from mothers", href: "/#testimonials" },
  { label: "Talk to us", href: "/#contact" },
];

export default function NotFound({
  homeHref = "/",
  links = QUICK_LINKS,
  supportHref = "mailto:care@tomome.in",
}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const previous = document.title;
    document.title = "Page not found · Tomome";
    return () => {
      document.title = previous;
    };
  }, []);

  // Browsers that landed here from an external link have no history to pop,
  // so fall back to home instead of leaving the button dead.
  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.assign(homeHref);
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cream px-6 py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(249,217,222,0.85), rgba(253,251,249,0))",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-xl text-center"
      >
        {/* ======================================================== */}
        {/* 404 mark - dashed ring echoes the orbit section           */}
        {/* ======================================================== */}

        <motion.div
          variants={item}
          className="relative mx-auto flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-blush-100/70 blur-3xl" />

          {/* rotation lives on its own node so it never fights the layout */}
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-blush-200"
          />

          <p className="relative text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            4<span className="text-blush-500">0</span>4
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* Message                                                   */}
        {/* ======================================================== */}

        <motion.h1
          variants={item}
          className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
        >
          We can't find that page
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base"
        >
          The link may have moved or expired. Nothing in your care plan is
          affected — pick up from anywhere below.
        </motion.p>

        {/* ======================================================== */}
        {/* Actions                                                   */}
        {/* ======================================================== */}

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={homeHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blush-500 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-colors hover:bg-blush-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Go to home
          </a>

          <button
            type="button"
            onClick={goBack}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition-colors hover:border-blush-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to previous page
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}