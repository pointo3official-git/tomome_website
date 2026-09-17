
import { motion } from "motion/react";
import { ArrowRight, Instagram } from "lucide-react";
import { footer } from "../../data/content";

// --------------------------------------------------
// Contact details
// --------------------------------------------------
const WHATSAPP_NUMBER = "917306288896";

const WHATSAPP_MESSAGE =
  "Hi Tomome, I would like to know more about your program.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// --------------------------------------------------
// WhatsApp Icon
// --------------------------------------------------
function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16.004 3.2C8.977 3.2 3.28 8.897 3.28 15.924c0 2.42.665 4.68 1.822 6.614L3.2 28.8l6.44-1.843a12.63 12.63 0 0 0 6.364 1.71h.005c7.027 0 12.723-5.697 12.723-12.724S23.03 3.2 16.004 3.2Zm0 23.077h-.004a10.5 10.5 0 0 1-5.35-1.465l-.384-.228-3.82 1.093 1.11-3.72-.25-.382a10.46 10.46 0 0 1-1.605-5.65c0-5.803 4.72-10.522 10.507-10.522 2.807 0 5.444 1.092 7.43 3.078a10.43 10.43 0 0 1 3.076 7.437c0 5.803-4.72 10.36-10.71 10.36Zm5.798-7.756c-.318-.16-1.882-.928-2.174-1.034-.291-.107-.503-.16-.715.16-.211.318-.82 1.033-1.005 1.245-.185.212-.37.239-.688.08-.318-.16-1.343-.495-2.558-1.578-.946-.843-1.584-1.885-1.769-2.203-.185-.318-.02-.49.14-.65.144-.143.318-.372.478-.557.16-.186.212-.318.318-.53.106-.212.053-.398-.026-.557-.08-.16-.715-1.723-.98-2.36-.258-.62-.52-.536-.715-.546l-.61-.011a1.17 1.17 0 0 0-.847.398c-.291.318-1.11 1.086-1.11 2.648 0 1.562 1.137 3.071 1.296 3.283.16.212 2.238 3.417 5.422 4.793.758.327 1.35.523 1.812.669.761.242 1.454.208 2.002.126.611-.091 1.882-.77 2.148-1.513.265-.744.265-1.38.185-1.513-.08-.132-.291-.212-.61-.371Z"
      />
    </svg>
  );
}

// --------------------------------------------------
// Main Component
// --------------------------------------------------
export default function Contact() {
  return (
    <section
      id="contact"
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-blush-200
            bg-gradient-to-br
            from-blush-50
            via-white
            to-blush-50
            px-6
            py-10
            text-center
            shadow-soft
            sm:px-10
            sm:py-14
            lg:px-20
            lg:py-16
          "
        >
          {/* Decorative background elements */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-blush-100/60
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-rose-100/50
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Eyebrow */}
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-blush-500
                sm:text-sm
              "
            >
              WE'RE HERE FOR YOU
            </p>

            {/* Main heading */}
            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-ink
                sm:text-4xl
                lg:text-5xl
              "
            >
                Get in touch with Tomome Support
              {/* <span className="block">doesn't have to feel overwhelming.</span> */}
            </h2>

            {/* Supporting text */}
            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-muted
                sm:mt-6
                sm:text-lg
              "
            >
             Reach us out for any query regarding our pregnancy or parenting services.
            </p>

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
              Have questions about our program? Talk to us directly and we'll
              help you understand how Tomome can support your journey.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mx-auto
                mt-8
                flex
                w-full
                max-w-xl
                flex-col
                gap-3
                sm:mt-10
                sm:flex-row
                sm:justify-center
              "
            >
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tomome on WhatsApp"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-blush-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blush-600
                  hover:shadow-lg
                  sm:w-auto
                  sm:min-w-[190px]
                "
              >
                <WhatsAppIcon className="h-5 w-5" />

                <span>Chat on WhatsApp</span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Instagram */}
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tomome on Instagram"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-blush-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-blush-600
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blush-50
                  hover:shadow-md
                  sm:w-auto
                  sm:min-w-[190px]
                "
              >
                <Instagram className="h-5 w-5" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

