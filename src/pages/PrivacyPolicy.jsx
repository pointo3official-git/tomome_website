import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const privacySections = [
  {
    title: "1. Who We Are",
    paragraphs: [
      "Tomome is a pregnancy and parenting support platform that provides educational, wellness, preparation, and supportive services to expecting parents and new parents.",
      "Tomome may work with qualified professionals and service providers, including gynaecologists, nutritionists, yoga trainers, childbirth educators, psychologists, parenting professionals, and other specialists, depending on the Service you use.",
      "Tomome is currently operated under the Tomome brand. Where our legal entity or registered business details are applicable, those details may be updated on this page.",
    ],
    contact: true,
  },

  {
    title: "2. Information We Collect",
    paragraphs: [
      "Depending on how you use Tomome, we may collect the following categories of information.",
    ],
    subsections: [
      {
        title: "A. Information You Provide Directly",
        paragraphs: [
          "This may include:",
        ],
        bullets: [
          "Full name",
          "Email address",
          "Mobile number",
          "Age or date of birth",
          "City or general location",
          "Pregnancy-related information",
          "Expected due date",
          "Relevant health or medical information you choose to share",
          "Nutrition or dietary information",
          "Wellness and exercise information",
          "Parenting-related information",
          "Information provided during consultations or assessments",
          "Booking and appointment details",
          "Payment or transaction information",
          "Feedback, reviews, questions, and messages",
          "Information submitted through forms, surveys, WhatsApp, email, or other communication channels",
        ],
        after: [
          "You are generally able to choose what information you provide. However, certain information may be necessary for us to provide a particular Service.",
        ],
      },
      {
        title: "B. Information About Other People",
        paragraphs: [
          "You may choose to provide information about another person, such as a spouse, partner, baby, or child, when using certain Services.",
          "You should only provide another person's personal information when you are authorised to do so and where you have the appropriate permission or lawful basis to provide it.",
        ],
      },
      {
        title: "C. Information Collected Automatically",
        paragraphs: [
          "When you visit or use our website or digital Services, certain technical information may be collected automatically depending on the technologies and services used on our platform.",
          "This may include:",
        ],
        bullets: [
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "Pages or sections visited",
          "Date and time of access",
          "Referring website",
          "General usage and diagnostic information",
          "Cookies or similar technologies",
        ],
        after: [
          "We may use this information for security, analytics, troubleshooting, performance, and improving our Services.",
        ],
      },
    ],
  },

  {
    title: "3. Health and Pregnancy Information",
    paragraphs: [
      "Some Tomome Services may involve information related to pregnancy, health, nutrition, exercise, emotional well-being, or other personal circumstances.",
      "We may process information you voluntarily provide in order to:",
    ],
    bullets: [
      "Understand your needs",
      "Provide relevant support",
      "Help qualified professionals prepare for a consultation or session",
      "Personalise educational or wellness guidance",
      "Coordinate Services",
      "Maintain appropriate service records",
      "Improve our Services",
    ],
    after: [
      "You should avoid providing information that is not necessary for the Service.",
      "Tomome does not require you to disclose more personal or health information than is reasonably necessary for the Service you are requesting.",
    ],
  },

  {
    title: "4. How We Use Your Information",
    paragraphs: [
      "We may use personal information for purposes including:",
    ],
    bullets: [
      "Providing and administering Tomome Services",
      "Scheduling consultations, classes, and appointments",
      "Connecting you with relevant professionals",
      "Personalising support and educational content",
      "Communicating with you about your account, bookings, payments, sessions, and Services",
      "Responding to questions and support requests",
      "Processing and confirming payments",
      "Maintaining service and transaction records",
      "Improving our website, programs, and user experience",
      "Preventing fraud, misuse, and security incidents",
      "Troubleshooting technical problems",
      "Sending service-related communications",
      "Sending promotional communications where permitted and, where required, with your consent",
      "Complying with applicable laws, regulations, legal processes, or lawful requests from authorities",
      "Protecting the rights, safety, security, and property of Tomome, our users, professionals, and others",
    ],
    after: [
      "We will not use your personal information for a purpose that is materially different from the purpose for which it was collected unless permitted by applicable law or appropriately communicated to you.",
    ],
  },

  {
    title: "5. Legal Basis for Processing",
    paragraphs: [
      "Depending on the circumstances and the applicable law, Tomome may process personal information when:",
    ],
    bullets: [
      "You provide consent",
      "Processing is necessary to provide a Service you requested",
      "Processing is necessary for payment, account administration, security, or related operational purposes",
      "Processing is required or permitted under applicable law",
      "Another lawful basis permits the processing",
    ],
    after: [
      "Where applicable law gives you the right to withdraw consent, you may do so through the method described in this Privacy Policy or by contacting us.",
      "Withdrawal of consent may affect our ability to provide certain Services that depend on the relevant information.",
    ],
  },

  {
    title: "6. When We Share Your Information",
    paragraphs: [
      "Tomome does not sell or rent your personal information.",
      "We may share limited information where reasonably necessary to provide or operate our Services.",
      "This may include sharing information with:",
    ],
    subsections: [
      {
        title: "A. Professionals",
        paragraphs: [
          "Information may be shared with relevant professionals, such as gynaecologists, nutritionists, childbirth educators, yoga trainers, psychologists, parenting professionals, or other specialists involved in providing your selected Service.",
          "Only information relevant to the Service should be shared where reasonably practicable.",
        ],
      },
      {
        title: "B. Service Providers",
        paragraphs: [
          "We may use trusted third-party providers for services such as:",
        ],
        bullets: [
          "Payment processing",
          "Website and cloud hosting",
          "Email and communication",
          "Video conferencing",
          "Scheduling",
          "Customer support",
          "Analytics",
          "Security",
          "Technical maintenance",
          "Data storage",
        ],
        after: [
          "These providers may process information on our behalf and may be subject to their own contractual, legal, and security obligations.",
        ],
      },
      {
        title: "C. Legal and Regulatory Requirements",
        paragraphs: [
          "We may disclose information when reasonably necessary to:",
        ],
        bullets: [
          "Comply with applicable law",
          "Respond to a lawful government or regulatory request",
          "Comply with a court order or legal process",
          "Investigate fraud, security incidents, or unlawful activity",
          "Protect the safety, rights, or property of Tomome, users, or others",
        ],
      },
      {
        title: "D. Business Changes",
        paragraphs: [
          "If Tomome undergoes a merger, acquisition, restructuring, sale of assets, investment, or similar business transaction, personal information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.",
        ],
      },
    ],
  },

  {
    title: "7. Sharing With Experts",
    paragraphs: [
      "Some Tomome Services require you to interact with independent professionals.",
      "Where required for your Service, we may share relevant information with the professional assigned to or selected by you.",
      "Those professionals may have their own professional, ethical, confidentiality, and legal obligations.",
      "You should understand that information shared directly with a professional during a consultation may also be subject to the professional's own privacy and record-keeping requirements.",
    ],
  },

  {
    title: "8. Payments",
    paragraphs: [
      "When you make a payment to Tomome, payment-related information may be processed by third-party payment providers.",
      "Tomome may receive information such as:",
    ],
    bullets: [
      "Payment status",
      "Transaction reference",
      "Amount paid",
      "Payment date",
      "Selected payment method",
      "Other information necessary to reconcile the transaction",
    ],
    after: [
      "Your card number, UPI PIN, password, or other sensitive payment credentials should not be shared with Tomome through chat, email, or other communication channels.",
      "Payment providers may process your information according to their own privacy policies and applicable laws.",
    ],
  },

  {
    title: "9. Cookies and Similar Technologies",
    paragraphs: [
      "Tomome may use cookies and similar technologies to support website functionality, remember preferences, understand usage, improve performance, and maintain security.",
      "Some cookies may be placed by third-party services used on our website.",
      "You may be able to control or block cookies through your browser settings. Certain website functions may not operate properly when required cookies are disabled.",
    ],
  },

  {
    title: "10. Analytics and Technical Information",
    paragraphs: [
      "We may use analytics, security, or diagnostic tools to understand how our Services are used and to identify technical problems.",
      "Such information may include device, browser, IP address, usage, and error-related information.",
      "Where third-party technologies are used, those providers may process information according to their own privacy policies.",
      "We will update this Privacy Policy where necessary when our use of such technologies materially changes.",
    ],
  },

  {
    title: "11. Communications and Marketing",
    paragraphs: [
      "We may contact you regarding:",
    ],
    bullets: [
      "Appointments",
      "Classes",
      "Payments",
      "Account or Service updates",
      "Support requests",
      "Changes to programs",
      "Important operational information",
    ],
    after: [
      "Where permitted by law, we may also send information about Tomome programs, offers, educational content, events, or other updates.",
      "You may opt out of promotional communications by using the unsubscribe option where available or by contacting us.",
      "You may still receive necessary service-related communications after opting out of promotional messages.",
    ],
  },

  {
    title: "12. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing Services, maintaining business and transaction records, resolving disputes, enforcing agreements, preventing fraud, maintaining security, and complying with applicable legal obligations.",
      "The retention period may vary depending on:",
    ],
    bullets: [
      "The type and sensitivity of the information",
      "The purpose for which it was collected",
      "Whether you continue using our Services",
      "Legal, regulatory, accounting, or professional record-keeping requirements",
      "The need to establish or defend legal claims",
    ],
    after: [
      "When personal information is no longer reasonably required, we may delete it, anonymise it, or securely dispose of it, subject to applicable law.",
    ],
  },

  {
    title: "13. Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures intended to protect personal information against unauthorised access, loss, misuse, alteration, disclosure, or destruction.",
      "These measures may include:",
    ],
    bullets: [
      "Access restrictions",
      "Authentication controls",
      "Secure storage",
      "Appropriate administrative controls",
      "Monitoring and security practices",
      "Limiting access to information to people who need it for legitimate purposes",
    ],
    after: [
      "However, no website, electronic transmission, storage system, or internet-based communication method can be guaranteed to be completely secure.",
      "You should also take reasonable steps to protect your own accounts, devices, passwords, and communications.",
    ],
  },

  {
    title: "14. Confidentiality",
    paragraphs: [
      "Tomome treats personal and health-related information as private and uses it only for legitimate purposes connected with our Services, legal obligations, or other purposes described in this Privacy Policy.",
      "We do not sell or rent personal information to advertisers or other third parties.",
      "However, information may be processed by service providers, professionals, or other parties where reasonably necessary to provide or operate the Services, as explained in this Privacy Policy.",
    ],
  },

  {
    title: "15. Third-Party Websites and Services",
    paragraphs: [
      "Our website or communications may contain links to third-party websites, applications, payment services, video platforms, or other external services.",
      "Those third parties operate independently from Tomome and may have their own privacy policies and terms.",
      "We encourage you to review their privacy policies before providing personal information to them.",
      "Tomome is not responsible for the privacy practices of third-party services that we do not control.",
    ],
  },

  {
    title: "16. International Processing",
    paragraphs: [
      "Some technology, hosting, communication, payment, or other service providers used by Tomome may process information on servers or systems located outside India.",
      "Where personal information is processed outside India, Tomome will take steps required by applicable law in relation to such processing, transfers, and safeguards.",
    ],
  },

  {
    title: "17. Children's Privacy",
    paragraphs: [
      "Tomome's primary Services are intended for adults, particularly expecting parents and new parents.",
      "We do not knowingly provide independent access to our pregnancy support Services to children.",
      "Parents or guardians may provide information about their children where this is necessary for a parenting or child-related Service. By providing such information, the parent or guardian confirms that they are authorised to do so.",
      "Where applicable law requires parental or guardian consent or additional protections for children's personal information, Tomome will follow those requirements.",
    ],
  },

  {
    title: "18. Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law, you may have rights relating to your personal information, which may include the ability to:",
    ],
    bullets: [
      "Request information about personal data held by Tomome",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of information, subject to applicable legal or legitimate retention requirements",
      "Withdraw consent where processing is based on consent",
      "Raise a grievance regarding our handling of personal information",
      "Request information about certain uses or sharing of your personal information",
      "Exercise other rights available under applicable law",
    ],
    after: [
      "To make a privacy request, contact us using the details below.",
      "We may need to verify your identity before acting on a request to protect your information from unauthorised access.",
      "Some requests may be subject to legal, contractual, security, or operational limitations.",
    ],
  },

  {
    title: "19. How to Make a Privacy Request or Complaint",
    paragraphs: [
      "For privacy questions, requests, or complaints, contact:",
    ],
    contact: true,
    after: [
      "Please include enough information for us to understand your request, such as your name, registered email or phone number, and the nature of your request.",
      "We may request additional information to verify your identity before providing access to, changing, or deleting personal information.",
      "We will review and respond to requests within a reasonable period and in accordance with applicable law.",
      "Where applicable law requires Tomome to maintain a designated grievance or data-protection contact, the relevant details will be published or updated on this page.",
    ],
  },

  {
    title: "20. Personal Information You Should Not Send Through Public Channels",
    paragraphs: [
      "For your own privacy and security, please do not post sensitive personal, medical, financial, identity, or authentication information publicly on social media, website comments, or other public channels operated by Tomome.",
      "Use the appropriate private communication channel when you need to share information related to your Service.",
    ],
  },

  {
    title: "21. Changes to This Privacy Policy",
    paragraphs: [
      "Tomome may update this Privacy Policy from time to time.",
      "Changes may be made to reflect:",
    ],
    bullets: [
      "Changes in our Services",
      "New technologies or service providers",
      "Changes in our business practices",
      "Changes in applicable laws or regulations",
      "Changes in how personal information is collected or used",
    ],
    after: [
      "When we make changes, we will update the Last Updated date at the top of this page.",
      "Where required by applicable law, we will provide additional notice or obtain consent for material changes.",
    ],
  },

  {
    title: "22. Applicable Law",
    paragraphs: [
      "This Privacy Policy is intended to operate in accordance with applicable laws and regulations of India, as amended or replaced from time to time.",
      "India's Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 establish a framework for processing digital personal data and provide obligations and rights that are being brought into force in stages. Tomome may update this Privacy Policy and its data-handling practices as the applicable provisions become effective.",
    ],
  },

  {
    title: "23. Contact Us",
    paragraphs: [
      "For any question, privacy request, or complaint relating to this Privacy Policy, please contact us at:",
    ],
    contact: true,
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
// Contact card
// --------------------------------------------------
function PrivacyContactCard() {
  return (
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
      <p className="font-semibold text-ink">Tomome</p>

      <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
        Email:{" "}
        <a
          href="mailto:pointo3official@gmail.com"
          className="
            font-medium
            text-blush-600
            underline
            underline-offset-4
            transition-colors
            hover:text-blush-700
          "
        >
          pointo3official@gmail.com
        </a>
      </p>
    </div>
  );
}

// --------------------------------------------------
// Section content renderer
// --------------------------------------------------
function RenderContent({
  paragraphs,
  bullets,
  after,
  contact,
}) {
  return (
    <>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {bullets && (
        <ul className="space-y-2 pl-5">
          {bullets.map((item) => (
            <li key={item} className="list-disc pl-1">
              {item}
            </li>
          ))}
        </ul>
      )}

      {contact && <PrivacyContactCard />}

      {after?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

// --------------------------------------------------
// Main Component
// --------------------------------------------------
export default function PrivacyPolicyPage() {
  return (
    <main
      id="privacy"
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#fffdfd]
      "
    >
      {/* -------------------------------------------------- */}
      {/* Header */}
      {/* -------------------------------------------------- */}
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
              Privacy Policy
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
              At Tomome, we understand that pregnancy, health, parenting, and
              personal information are deeply private. We take the privacy of
              our users seriously and aim to handle your personal information
              responsibly.
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
              This Privacy Policy explains what information Tomome may
              collect, how we use it, when we may share it, how we protect it,
              and the choices available to you when you use our website,
              programs, consultations, classes, forms, communication channels,
              and related services.
            </p>
          </motion.header>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* Main */}
      {/* -------------------------------------------------- */}
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
          {/* ------------------------------------------------ */}
          {/* Table of contents */}
          {/* ------------------------------------------------ */}
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
                  {privacySections.map((section, index) => (
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

          {/* ------------------------------------------------ */}
          {/* Policy content */}
          {/* ------------------------------------------------ */}
          <div className="min-w-0">
            {/* Intro */}
            <div
              className="
                rounded-2xl
                border
                border-blush-200
                bg-blush-50
                p-5
                sm:p-6
              "
            >
              <p className="text-sm leading-7 text-muted sm:text-base">
                By accessing or using our Services, you acknowledge that you
                have read this Privacy Policy.
              </p>
            </div>

            {/* Privacy notice */}
            <div
              className="
                mt-6
                flex
                gap-3
                rounded-2xl
                border
                border-amber-200
                bg-amber-50
                p-5
                sm:p-6
              "
            >
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <div>
                <p className="font-semibold text-amber-950">
                  Privacy & Health Information
                </p>

                <p className="mt-2 text-sm leading-7 text-amber-900 sm:text-base">
                  Some Tomome Services may involve pregnancy, health,
                  nutrition, exercise, emotional well-being, or other personal
                  circumstances. Please avoid sharing information that is not
                  necessary for the Service you are requesting.
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {privacySections.map((section) => (
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
                  {/* Section heading */}
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

                  {/* Section content */}
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
                    <RenderContent
                      paragraphs={section.paragraphs}
                      bullets={section.bullets}
                      after={section.after}
                      contact={section.contact}
                    />

                    {/* Subsections */}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="pt-3">
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

                        <div className="mt-3 space-y-4">
                          <RenderContent
                            paragraphs={subsection.paragraphs}
                            bullets={subsection.bullets}
                            after={subsection.after}
                            contact={subsection.contact}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Back to top */}
            <div className="mt-8 flex justify-end">
              <a
                href="#privacy"
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

