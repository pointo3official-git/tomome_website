import { motion } from "motion/react";
import { SUPPORT_ITEMS } from "../../data/home";

export default function PartnerOrbit() {
  return (
    <section
      className="
        w-full
        max-w-full
        overflow-x-clip
        bg-white
        px-4
        py-20
        text-center
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ======================================================== */}
        {/* Heading                                                   */}
        {/* ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <p
            className="
              text-xs
              font-medium
              tracking-[0.18em]
              text-blush-500
            "
          >
            HOW TOMOME HELPS
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-3xl
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-ink
              sm:text-4xl
              md:text-5xl
            "
          >
            More than checkups.
            <br />
            <span className="text-blush-500">Support between every visit.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-muted
              sm:text-base
            "
          >
            Routine antenatal visits are essential for your medical care. But
            pregnancy is lived every day, not just on appointment days.
          </p>
        </motion.div>

        <div
          className="
            relative
            mx-auto
            mt-14
            h-[390px]
            w-full
            max-w-[560px]
            sm:mt-16
            sm:h-[500px]
          "
        >
          {/* Outer orbit (slate reference ring) */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[290px]
              w-[290px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-blush-200
             
              sm:h-[370px]
              sm:w-[370px]
            "
          />

          {/* Inner soft glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-44
              w-44
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blush-100/70
              blur-3xl
              sm:h-60
              sm:w-60
            "
          />

          {/* ====================================================== */}
          {/* Rotating orbit                                           */}
          {/* ====================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[290px]
              w-[290px]
              -translate-x-1/2
              -translate-y-1/2
              sm:h-[370px]
              sm:w-[370px]
            "
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                relative
                h-full
                w-full
                
              "
            >
              {SUPPORT_ITEMS.map((item, index) => {
                const Icon = item.icon;
                const count = SUPPORT_ITEMS.length;
                const angle = (index / count) * 2 * Math.PI;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);

                return (
                  <div
                    key={item.key}
                    className="
                      absolute
                      -translate-x-1/2
                      -translate-y-1/2
                      [--orbit-radius:145px]
                      sm:[--orbit-radius:185px]
                    "
                    style={{
                      left: `calc(50% + var(--orbit-radius) * ${cos})`,
                      top: `calc(50% + var(--orbit-radius) * ${sin})`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        flex
                        flex-col
                        items-center
                        justify-center
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-blush-100
                          bg-white
                          shadow-card
                          sm:h-14
                          sm:w-14
                        "
                      >
                        <Icon
                          className={`
    h-5
    w-5
    ${item.iconColor}
    sm:h-6
    sm:w-6
  `}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Text */}
                      <div
                        className="
                          mt-2
                          w-[100px]
                          rounded-xl
                          bg-white/95
                          px-2
                          py-1.5
                          shadow-sm
                          backdrop-blur-sm
                          sm:w-[130px]
                          sm:px-3
                          sm:py-2
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            leading-tight
                            text-ink
                            sm:text-xs
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[8px]
                            leading-tight
                            text-muted
                            sm:text-[10px]
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ====================================================== */}
          {/* Center Tomome logo                                      */}
          {/* ====================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              sm:h-32
              sm:w-32
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                rounded-full
                bg-white
                p-4
                shadow-card
                sm:p-5
              "
            >
              <img
                src="logos/tomome-logo.png"
                alt="Tomome"
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Main message                                              */}
        {/* ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mt-8 max-w-3xl sm:mt-10"
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
            Everything you need between those visits, in one place.
          </h3>
        </motion.div>

        {/* ======================================================== */}
        {/* Positioning box                                           */}
        {/* ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            rounded-2xl
            border
            border-blush-100
            bg-blush-50/60
            px-5
            py-5
            sm:mt-10
            sm:px-8
            sm:py-6
          "
        >
          <p
            className="
              text-sm
              font-medium
              leading-relaxed
              text-ink/80
              sm:text-base
            "
          >
            Your doctor takes care of your medical care.
            <span className="font-semibold text-ink">
              {" "}
              Tomome adds the ongoing education, preparation, wellness support,
              and day-to-day guidance you need throughout the journey.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
