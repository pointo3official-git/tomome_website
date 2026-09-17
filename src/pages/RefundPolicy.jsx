import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

// --------------------------------------------------
// Policy details
// --------------------------------------------------
const EMAIL_ADDRESS = "pointo3official@gmail.com";
const WHATSAPP_NUMBER = "917306288896";

const WHATSAPP_MESSAGE =
  "Hi Tomome, I have a question about cancellation or refund.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// --------------------------------------------------
// Policy sections
// --------------------------------------------------
const refundSections = [
  {
    title: "1. Our 30-Day Try-Out Policy",
    paragraphs: [
      "When you purchase a 3-month, 6-month, or 9-month Tomome program, you can try the program for the first 30 days.",
      "If you decide that the program is not right for you, you can request cancellation and receive a refund for the unused full months remaining in your package.",
      "The first 30 days are treated as the used portion of the program.",
    ],
  },

  {
    title: "2. How the Refund Is Calculated",
    paragraphs: [
      "Your refund is calculated based on the portion of the package that has not yet been used.",
    ],
    formula: "Refund = Package Price × Remaining Full Months ÷ Total Package Months",
    examples: [
      {
        title: "Example: 3-Month Program",
        items: [
          ["Package price", "₹9,999"],
          ["Program duration", "3 months"],
          ["Used", "1 month"],
          ["Remaining", "2 months"],
        ],
        calculation: "₹9,999 × 2 ÷ 3 = ₹6,666 refund",
        note:
          "Therefore, if you purchase the 3-month program for ₹9,999 and cancel after completing the first 30 days, you will receive ₹6,666 for the two unused months.",
      },
      {
        title: "Example: Other Plans",
        items: [
          ["Example package", "6-month program"],
          ["Used", "1 month"],
          ["Remaining", "5 full months"],
        ],
        note:
          "The same calculation applies to our longer-duration programs. The refund will represent the full unused months remaining based on the package price.",
      },
    ],
  },

  {
    title: "3. How to Request a Refund",
    paragraphs: [
      "To request a refund, contact us at:",
    ],
    contactEmail: true,
    paragraphsAfter: [
      "Please include:",
    ],
    bullets: [
      "Your full name",
      "Registered mobile number or email address",
      "Package purchased",
      "Date of purchase",
      "Refund request",
    ],
    after: [
      "You should submit your cancellation/refund request within the first 30 days from the date your program starts.",
    ],
  },

  {
    title: "4. What Happens After You Request a Refund",
    paragraphs: [
      "Once we receive your request, we will verify your subscription and the applicable refund amount.",
      "After the refund is approved:",
    ],
    bullets: [
      "Your access to the remaining period of the program will be cancelled.",
      "The refund will be initiated to the original payment method, where reasonably possible.",
      "Refunds will normally be processed within 14 days of approval, subject to payment gateway and banking processing times.",
    ],
  },

  {
    title: "5. Important Points",
    subsections: [
      {
        title: "The first 30 days",
        paragraphs: [
          "The first 30 days are considered the used portion of your program, regardless of how many individual sessions you attend during that period.",
          "For example, if you purchase a 3-month program and attend only some of the sessions during the first month, the refund calculation will still be based on one month used and two months remaining.",
        ],
      },
      {
        title: "Unused months",
        paragraphs: [
          "Only full unused months are included in the refund calculation.",
          "Partially used months are not treated as unused full months.",
        ],
      },
      {
        title: "After 30 days",
        paragraphs: [
          "Our 30-day try-out refund applies only to requests made within the first 30 days from the program start date.",
          "After this period, refunds for unused portions will be considered according to the applicable package terms and applicable law.",
        ],
      },
      {
        title: "Promotional or special offers",
        paragraphs: [
          "Where a special package, discount, promotional offer, or separate refund condition is clearly communicated before purchase, the terms specifically applicable to that offer may apply.",
        ],
      },
    ],
  },

  {
    title: "6. Cancellation by Tomome",
    paragraphs: [
      "In certain circumstances, Tomome may need to suspend, modify, or discontinue a program or a particular service.",
      "Where Tomome cancels or materially discontinues a paid Service that you have already purchased, we will communicate the available options and provide an appropriate refund or alternative arrangement where applicable, subject to the circumstances and applicable law.",
    ],
  },

  {
    title: "7. Consumer Rights",
    paragraphs: [
      "Nothing in this Refund & Cancellation Policy is intended to remove or restrict any consumer right or remedy that cannot legally be excluded under applicable Indian law.",
      "Where applicable law provides a consumer with a right to a refund, cancellation, or other remedy, those rights will continue to apply.",
    ],
  },

  {
    title: "8. Changes to This Policy",
    paragraphs: [
      "Tomome may update this Refund & Cancellation Policy from time to time.",
      "Any updated version will be published on this page with a revised Last Updated date.",
      "The updated policy will apply to purchases made after the revised policy becomes effective, unless otherwise required by applicable law.",
    ],
  },

  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have any questions, concerns, or need assistance with your program, please reach out to our support team through the official Tomome support chat or contact us on +91 73062 88896.",
      "Our team will be happy to understand your concern and guide you with the next steps.",
    ],
    contactSupport: true,
  },
];

// --------------------------------------------------
// Helpers
// --------------------------------------------------
const getSectionId = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// --------------------------------------------------
// Main Component
// --------------------------------------------------
export default function RefundPolicyPage() {
  return (
    <main
      id="refund-policy"
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#fffdfd]
      "
    >
      {/* ==================================================
          HEADER
      ================================================== */}
      <section
        className="
          border-b
          border-blush-100
          bg-white
          px-4
          pb-10
          pt-28
          sm:px-6
          sm:pb-12
          sm:pt-32
          lg:px-8
          lg:pb-14
          lg:pt-36
        "
      >
        <div className="mx-auto w-full max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl"
          >
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
              TOMOME
            </p>

            <h1
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
              Refund & Cancellation Policy
            </h1>

            <p className="mt-4 text-sm text-muted sm:text-base">
              Last Updated: 17 September 2026
            </p>

            <p
              className="
                mt-6
                text-base
                leading-relaxed
                text-muted
                sm:text-lg
              "
            >
              At Tomome, we want you to feel comfortable before making a
              longer-term commitment.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-muted
                sm:text-base
              "
            >
              That is why our multi-month programs include a simple 30-day
              try-out period. You can experience the program for one month and
              decide whether Tomome is right for you.
            </p>
          </motion.header>
        </div>
      </section>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}
      <section
        className="
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            grid-cols-1
            gap-8
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-12
          "
        >
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-sm
                sm:p-5
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-blush-500
                "
              >
                On this page
              </p>

              <nav className="mt-4">
                <div
                  className="
                    flex
                    gap-2
                    overflow-x-auto
                    pb-1
                    lg:block
                    lg:overflow-visible
                  "
                >
                  {refundSections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#${getSectionId(section.title)}`}
                      className="
                        inline-flex
                        shrink-0
                        rounded-full
                        border
                        border-gray-100
                        bg-gray-50
                        px-3
                        py-2
                        text-xs
                        leading-none
                        text-muted
                        transition-colors
                        hover:border-blush-200
                        hover:bg-blush-50
                        hover:text-blush-600
                        lg:mb-1.5
                        lg:flex
                        lg:rounded-lg
                        lg:border-0
                        lg:bg-transparent
                        lg:px-2
                        lg:py-1.5
                      "
                    >
                      {index + 1}.{" "}
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          {/* ==================================================
              POLICY CONTENT
          ================================================== */}
          <div className="min-w-0">
            {/* 30-day highlight */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="
                rounded-2xl
                border
                border-blush-200
                bg-gradient-to-br
                from-blush-50
                via-white
                to-rose-50
                p-5
                sm:p-7
              "
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="
                    mt-0.5
                    h-6
                    w-6
                    shrink-0
                    text-blush-500
                  "
                  aria-hidden="true"
                />

                <div>
                  <h2
                    className="
                      text-lg
                      font-semibold
                      text-ink
                      sm:text-xl
                    "
                  >
                    30-Day Try-Out Period
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-muted
                      sm:text-base
                    "
                  >
                    Multi-month Tomome programs include a 30-day try-out
                    period. If you decide the program is not right for you,
                    you can request cancellation and receive a refund for the
                    unused full months remaining in your package.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy sections */}
            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {refundSections.map((section) => (
                <motion.article
                  key={section.title}
                  id={getSectionId(section.title)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="
                    scroll-mt-28
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-5
                    shadow-sm
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* Heading */}
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        mt-1
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-blush-400
                      "
                    />

                    <h2
                      className="
                        text-xl
                        font-semibold
                        leading-tight
                        text-ink
                        sm:text-2xl
                      "
                    >
                      {section.title}
                    </h2>
                  </div>

                  {/* Main paragraphs */}
                  <div
                    className="
                      mt-5
                      space-y-4
                      text-sm
                      leading-7
                      text-muted
                      sm:text-base
                    "
                  >
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {/* Formula */}
                    {section.formula && (
                      <div
                        className="
                          my-5
                          overflow-x-auto
                          rounded-xl
                          border
                          border-blush-200
                          bg-blush-50
                          px-4
                          py-4
                          text-center
                          sm:px-6
                        "
                      >
                        <p
                          className="
                            whitespace-nowrap
                            text-sm
                            font-semibold
                            text-ink
                            sm:text-base
                          "
                        >
                          {section.formula}
                        </p>
                      </div>
                    )}

                    {/* Bullet list */}
                    {section.bullets && (
                      <ul className="space-y-2 pl-5">
                        {section.bullets.map((item) => (
                          <li key={item} className="list-disc pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Email */}
                    {section.contactEmail && (
                      <div
                        className="
                          rounded-xl
                          border
                          border-blush-100
                          bg-blush-50
                          p-4
                          sm:p-5
                        "
                      >
                        <p className="font-semibold text-ink">
                          Refund Support
                        </p>

                        <a
                          href={`mailto:${EMAIL_ADDRESS}`}
                          className="
                            mt-2
                            inline-flex
                            items-center
                            gap-2
                            font-medium
                            text-blush-600
                            underline
                            underline-offset-4
                            transition-colors
                            hover:text-blush-700
                          "
                        >
                          <Mail className="h-4 w-4" />
                          {EMAIL_ADDRESS}
                        </a>
                      </div>
                    )}

                    {/* Content before bullets */}
                    {section.paragraphsAfter?.map((paragraph) => (
                      <p key={paragraph} className="pt-1">
                        {paragraph}
                      </p>
                    ))}

                    {/* Examples */}
                    {section.examples?.map((example) => (
                      <div
                        key={example.title}
                        className="
                          mt-6
                          rounded-2xl
                          border
                          border-gray-100
                          bg-gray-50/70
                          p-5
                          sm:p-6
                        "
                      >
                        <h3
                          className="
                            text-base
                            font-semibold
                            text-ink
                            sm:text-lg
                          "
                        >
                          {example.title}
                        </h3>

                        {example.items && (
                          <div className="mt-4 space-y-2">
                            {example.items.map(([label, value]) => (
                              <div
                                key={label}
                                className="
                                  flex
                                  flex-col
                                  gap-1
                                  border-b
                                  border-gray-100
                                  py-2.5
                                  last:border-b-0
                                  sm:flex-row
                                  sm:items-center
                                  sm:justify-between
                                  sm:gap-6
                                "
                              >
                                <span className="text-sm text-muted">
                                  {label}
                                </span>

                                <span className="text-sm font-medium text-ink sm:text-right">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {example.calculation && (
                          <div
                            className="
                              mt-4
                              rounded-xl
                              bg-white
                              p-4
                              text-center
                              shadow-sm
                            "
                          >
                            <p
                              className="
                                text-base
                                font-semibold
                                text-blush-600
                                sm:text-lg
                              "
                            >
                              {example.calculation}
                            </p>
                          </div>
                        )}

                        {example.note && (
                          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                            {example.note}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Subsections */}
                    {section.subsections?.map((subsection) => (
                      <div
                        key={subsection.title}
                        className="
                          rounded-xl
                          border
                          border-gray-100
                          bg-gray-50/60
                          p-4
                          sm:p-5
                        "
                      >
                        <h3
                          className="
                            text-base
                            font-semibold
                            text-ink
                            sm:text-lg
                          "
                        >
                          {subsection.title}
                        </h3>

                        <div
                          className="
                            mt-3
                            space-y-4
                            text-sm
                            leading-7
                            text-muted
                            sm:text-base
                          "
                        >
                          {subsection.paragraphs?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}

                          {subsection.bullets && (
                            <ul className="space-y-2 pl-5">
                              {subsection.bullets.map((item) => (
                                <li key={item} className="list-disc pl-1">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}

                          {subsection.after?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Contact support CTA */}
                    {section.contactSupport && (
                      <div
                        className="
                          mt-5
                          rounded-2xl
                          border
                          border-blush-200
                          bg-gradient-to-br
                          from-blush-50
                          to-white
                          p-5
                          sm:p-6
                        "
                      >
                        <p className="font-semibold text-ink">
                          Need help with your refund or cancellation?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                          Our support team can help you understand the next
                          steps for your program.
                        </p>

                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group
                            mt-5
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-blush-500
                            px-5
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-blush-600
                            hover:shadow-md
                            sm:w-auto
                          "
                        >
                          Contact Tomome Support

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

                        <p className="mt-3 text-xs text-muted sm:text-sm">
                          WhatsApp: +91 73062 88896
                        </p>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>



            {/* Back to top */}
            <div className="mt-8 flex justify-end">
              <a
                href="#refund-policy"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-sm
                  font-medium
                  text-blush-600
                  transition-colors
                  hover:text-blush-700
                "
              >
                Back to top
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

