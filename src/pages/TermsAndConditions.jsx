
import { motion } from "motion/react";

const sections = [
  {
    title: "1. About Tomome",
    content: [
      "Tomome is a pregnancy and parenting support platform that provides educational, wellness, preparation, and supportive services for expecting parents and new parents.",
      "Our Services may include, depending on the program selected:",
    ],
    bullets: [
      "Pregnancy and parenting education",
      "Nutrition guidance",
      "Prenatal yoga and wellness sessions",
      "Childbirth and birth-preparation classes",
      "Emotional and psychological support",
      "Parenting guidance",
      "Consultations or guidance from qualified professionals",
      "General support and communication between scheduled sessions",
    ],
    after: [
      "Tomome may work with independent professionals, including qualified healthcare professionals, nutritionists, yoga trainers, childbirth educators, psychologists, parenting professionals, and other specialists.",
      "The exact Services available to you will depend on the program, package, or consultation you purchase or otherwise access.",
    ],
  },

  {
    title: "2. Important Medical Disclaimer",
    content: [
      "Tomome is intended to provide support, education, preparation, and wellness guidance. It is not a hospital, emergency service, or replacement for your treating doctor, obstetrician, paediatrician, or other healthcare provider.",
      "Some Services may be delivered by licensed or otherwise appropriately qualified healthcare professionals. Where such a professional provides clinical advice, diagnosis, consultation, or other professional services, that professional is responsible for the professional judgment and advice provided within their scope of practice.",
      "Tomome does not take the place of your existing treating healthcare team.",
      "Information provided through Tomome, including information shared during classes, calls, chats, videos, articles, or other materials, should not be treated as a substitute for an in-person medical assessment where one is required.",
      "You should contact your doctor or other qualified healthcare professional when you have a medical concern.",
      "In an emergency or situation requiring urgent medical attention, you should contact your local emergency services or go to the nearest appropriate emergency medical facility. Do not rely on Tomome messaging, chat, classes, or response times for emergency care.",
    ],
  },

  {
    title: "3. No Guarantee of Medical or Pregnancy Outcomes",
    content: [
      "Pregnancy, childbirth, recovery, breastfeeding, newborn care, and parenting outcomes vary from person to person.",
      "Tomome does not guarantee:",
    ],
    bullets: [
      "A particular pregnancy or childbirth outcome",
      "A complication-free pregnancy or delivery",
      "A specific health result",
      "A particular labour, breastfeeding, recovery, or parenting outcome",
      "That every recommendation will be suitable for every individual",
      "That every Service will produce a particular result",
    ],
    after: [
      "Recommendations should be considered in light of your personal circumstances and, where appropriate, confirmed with your treating healthcare professional.",
    ],
  },

  {
    title: "4. User Eligibility",
    content: [
      "You must provide accurate information when registering for or using our Services.",
      "You confirm that:",
    ],
    bullets: [
      "The information you provide is accurate, current, and not misleading.",
      "You will inform the relevant professional of information reasonably necessary for them to provide the Service safely and appropriately.",
      "You will not knowingly conceal important information that could affect the advice or Service provided to you.",
    ],
    after: [
      "Our Services are generally intended for adults aged 18 years and above.",
      "Where a Service is used on behalf of another person, the person making the booking is responsible for ensuring that the relevant individual understands and agrees to these Terms where applicable.",
    ],
  },

  {
    title: "5. User Responsibility",
    content: [
      "You remain responsible for your own healthcare decisions and for following the advice of your treating medical professionals.",
      "You agree to use reasonable judgment when participating in exercise, yoga, nutrition, childbirth preparation, wellness, or other activities.",
      "Before participating in a physical or wellness activity, you should disclose relevant information, including where applicable:",
    ],
    bullets: [
      "Existing medical conditions",
      "Pregnancy-related concerns or complications",
      "Medications",
      "Allergies",
      "Previous medical or pregnancy history",
      "Restrictions or instructions given by your doctor",
    ],
    after: [
      "If an expert or healthcare professional advises you not to participate in a particular activity, you should follow that advice.",
      "If you experience pain, discomfort, unusual symptoms, or any concerning change during a session or activity, stop the activity and seek appropriate medical advice.",
    ],
  },

  {
    title: "6. Voluntary Participation",
    content: [
      "Participation in Tomome's programs, classes, recommendations, exercises, and activities is voluntary.",
      "You may choose not to participate in a particular activity or session.",
      "Tomome may also recommend that you seek additional medical or professional care where your circumstances require it.",
    ],
  },

  {
    title: "7. Services Provided by Independent Professionals",
    content: [
      "Tomome may collaborate with independent professionals and external service providers.",
      "These professionals may operate independently and may have their own professional obligations, qualifications, availability, and methods of practice.",
      "Tomome does not guarantee the availability of a particular professional at all times and may replace or reassign an expert where reasonably necessary.",
      "Where a consultation is provided by a licensed professional, the professional's clinical or professional judgment remains independent.",
      "Tomome may coordinate appointments, communications, classes, and support, but does not control every aspect of an independent professional's professional decision-making.",
    ],
  },

  {
    title: "8. Appointments, Classes and Availability",
    content: [
      "Certain Services require prior booking or scheduled attendance.",
      "Session timings, availability, duration, class schedules, and participating experts may change from time to time due to operational, professional, technical, or other reasonable circumstances.",
      "Where reasonably possible, Tomome will communicate significant changes and may provide an alternative session, rescheduling option, or other appropriate arrangement.",
      "Unless otherwise stated for a particular program:",
    ],
    bullets: [
      "Users are responsible for attending scheduled sessions on time.",
      "Late arrival may reduce the available session time.",
      "Missed sessions or no-shows may not be eligible for rescheduling or refund.",
      "Any package-specific rescheduling or cancellation rules communicated at the time of purchase will apply to that package.",
    ],
  },

  {
    title: "9. Fees and Payments",
    content: [
      "The applicable fees for Tomome Services will be displayed or communicated before purchase.",
      "By purchasing a Service, you agree to pay the applicable fee using an accepted payment method.",
      "Prices may change from time to time. Any price change will apply to future purchases unless otherwise required by law or expressly communicated by Tomome.",
      "Tomome may use third-party payment processors or payment platforms. Payment processing may be subject to the relevant third party's terms and policies.",
      "Tomome does not store payment credentials such as card passwords or UPI PINs unless expressly stated in the applicable payment provider's documentation.",
    ],
  },

  {
    title: "10. Cancellations and Refunds",
    content: [
      "Cancellation and refund eligibility will depend on the Service or package purchased and any refund policy communicated to you before or at the time of purchase.",
      "Where a Service has specific cancellation, rescheduling, or refund conditions, those conditions will form part of your agreement with Tomome.",
      "Unless otherwise stated:",
    ],
    bullets: [
      "Fees for completed consultations, classes, or Services may not be refundable.",
      "Promotional, discounted, or specially priced Services may have different refund conditions.",
      "Refunds, where approved, may be processed through the original or another appropriate payment method.",
      "Processing times may depend on the payment provider or banking system.",
    ],
    after: [
      "Nothing in these Terms is intended to remove or restrict any consumer right or remedy that cannot lawfully be excluded.",
    ],
  },

  {
    title: "11. Communications and Support",
    content: [
      "Tomome may communicate with you through email, phone, WhatsApp, Google Meet, website forms, messaging services, or other communication channels.",
      "Support response times may vary depending on the nature of the enquiry, expert availability, weekends, holidays, technical issues, and service demand.",
      "Tomome does not promise immediate responses unless a particular Service specifically states otherwise.",
      "Tomome communication channels must not be used for emergency medical care.",
    ],
  },

  {
    title: "12. Third-Party Platforms and Services",
    content: [
      "Tomome may use third-party platforms and service providers to operate or deliver certain Services, including communication, video-conferencing, payment processing, hosting, analytics, scheduling, or customer-support tools.",
      "Your use of those third-party services may also be subject to their own terms and privacy policies.",
      "Tomome is not responsible for interruptions, failures, outages, or policies of third-party platforms that are outside Tomome's reasonable control.",
    ],
  },

  {
    title: "13. User Conduct",
    content: [
      "You agree to use Tomome Services lawfully and respectfully.",
      "You must not:",
    ],
    bullets: [
      "Harass, threaten, abuse, or intimidate Tomome personnel, experts, or other users.",
      "Use the Services for unlawful purposes.",
      "Provide knowingly false or misleading information.",
      "Attempt to gain unauthorised access to Tomome systems or accounts.",
      "Interfere with the operation or security of the website or Services.",
      "Copy, distribute, sell, publish, or commercially exploit Tomome content without permission.",
      "Record, reproduce, or distribute private sessions involving experts or other participants without appropriate permission.",
      "Upload or share content that infringes another person's privacy, intellectual property, or other legal rights.",
    ],
    after: [
      "Tomome may restrict, suspend, or terminate access where reasonably necessary because of misuse, unlawful activity, abusive conduct, security concerns, or material violation of these Terms.",
    ],
  },

  {
    title: "14. Intellectual Property",
    content: [
      "Unless otherwise stated, all content made available through Tomome, including:",
    ],
    bullets: [
      "Logos and branding",
      "Website design",
      "Written content",
      "Videos",
      "Graphics",
      "Illustrations",
      "Educational materials",
      "Course materials",
      "Program structures",
      "Templates",
      "Images",
      "Software and other digital content",
    ],
    after: [
      "is owned by or licensed to Tomome and is protected by applicable intellectual property laws.",
      "Your purchase or use of a Tomome Service does not transfer ownership of our intellectual property to you.",
      "You may use materials provided to you for your personal, non-commercial use in connection with the Service for which they were supplied.",
      "You may not reproduce, resell, republish, modify, distribute, publicly display, commercially exploit, or create derivative works from Tomome materials without prior written permission.",
    ],
  },

  {
    title: "15. User Content and Feedback",
    content: [
      "You may choose to provide feedback, reviews, suggestions, comments, or other information to Tomome.",
      "You agree that Tomome may use such feedback for internal improvement of its Services, provided that we do not publicly identify you without appropriate permission where such identification is required.",
      "Tomome will not assume that a testimonial, photograph, video, or personal story may be used for marketing merely because you have shared it privately with us. Separate permission may be requested where appropriate.",
    ],
  },

  {
    title: "16. Privacy and Personal Information",
    content: [
      "Tomome may collect and process personal information that you provide or that is generated through your use of the Services in order to provide, administer, secure, and improve our Services, communicate with you, process payments, manage appointments, and meet applicable legal obligations.",
      "Because our Services relate to pregnancy, health, wellness, and parenting, some information provided by users may be particularly sensitive in nature.",
      "Our collection and use of personal information is governed by our Privacy Policy, which forms part of these Terms.",
      "You should read our Privacy Policy before using the Services.",
      "Tomome will handle personal information in accordance with applicable laws and regulations, as amended or replaced from time to time.",
      "India's Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 are being brought into force in stages, so Tomome may update its Privacy Policy and related practices as applicable legal requirements come into effect.",
    ],
  },

  {
    title: "17. Confidentiality",
    content: [
      "Tomome will take reasonable steps to protect information shared with us through the Services, subject to applicable law and the circumstances described in our Privacy Policy.",
      "However, you understand that electronic communication and internet-based services cannot be guaranteed to be completely secure or error-free.",
      "You should avoid sharing information through an inappropriate communication channel where doing so could create unnecessary privacy or security risks.",
    ],
  },

  {
    title: "18. Service Changes, Suspension and Termination",
    content: [
      "Tomome may modify, suspend, discontinue, or replace any part of the Services when reasonably necessary.",
      "This may include changes to:",
    ],
    bullets: [
      "Programs",
      "Classes",
      "Experts",
      "Features",
      "Session schedules",
      "Communication methods",
      "Service availability",
      "Pricing for future purchases",
    ],
    after: [
      "Where a material change affects an already-purchased Service, Tomome will make reasonable efforts to provide an appropriate notice or alternative arrangement, subject to the nature of the change and applicable law.",
      "Tomome may suspend or terminate a user's access where the user materially violates these Terms or engages in unlawful, abusive, fraudulent, or harmful conduct.",
    ],
  },

  {
    title: "19. Force Majeure",
    content: [
      "Tomome will not be responsible for delay, interruption, or failure to provide a Service where that failure results from circumstances beyond its reasonable control.",
      "Such circumstances may include natural disasters, severe weather, government restrictions, internet or telecommunications failures, platform outages, power failures, public health emergencies, acts of third parties, or other events that could not reasonably be controlled or prevented.",
    ],
  },

  {
    title: "20. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Tomome will not be responsible for indirect, incidental, special, or consequential losses arising from your use of the Services.",
      "Tomome is not responsible for decisions made by users independently or for outcomes resulting from failure to follow appropriate medical or professional advice.",
      "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law, including any rights and remedies available to consumers under applicable consumer protection laws.",
    ],
  },

  {
    title: "21. No Waiver of Legal Rights",
    content: [
      "Nothing in these Terms is intended to:",
    ],
    bullets: [
      "Exclude rights that cannot legally be excluded.",
      "Prevent a consumer from exercising statutory rights.",
      "Remove remedies available under applicable law.",
      "Limit the professional duties of a qualified healthcare professional where those duties apply.",
    ],
    after: [
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },

  {
    title: "22. Complaints and Grievances",
    content: [
      "We want users to be able to raise concerns and complaints about our Services.",
      "You may contact us regarding:",
    ],
    bullets: [
      "Service quality",
      "Payments",
      "Refunds",
      "Appointments",
      "Expert interactions",
      "Privacy concerns",
      "Technical issues",
      "Other complaints relating to Tomome Services",
    ],
    after: [
      "We will review complaints and respond within a reasonable period having regard to the nature of the issue and applicable legal requirements.",
      "Where Tomome is required by applicable law to provide a designated grievance officer or a specific complaint-handling mechanism, the relevant details will be published on our website and updated as required. Consumer protection rules in India include requirements concerning consumer grievance mechanisms for applicable e-commerce entities.",
    ],
  },

  {
    title: "23. Governing Law and Jurisdiction",
    content: [
      "These Terms shall be governed by the laws of India.",
      "Subject to applicable consumer protection laws and other mandatory legal rights, disputes arising from these Terms or the Services will be subject to the jurisdiction of the courts having appropriate jurisdiction over the matter.",
    ],
  },

  {
    title: "24. Changes to These Terms",
    content: [
      "Tomome may update these Terms & Conditions from time to time to reflect changes to our Services, business practices, technology, or applicable laws.",
      "The updated version will be published on this page with a revised Last Updated date.",
      "Where required by applicable law, we may provide additional notice of material changes.",
      "Your continued use of the Services after the updated Terms become effective constitutes acceptance of the revised Terms, subject to any rights you may have under applicable law.",
    ],
  },

  {
    title: "25. Contact Us",
    content: [
      "For questions, complaints, or requests relating to these Terms & Conditions, please contact:",
    ],
    contact: true,
    after: [
      "We encourage you to contact us before raising a dispute so that we have an opportunity to understand and address the issue.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section
      id="terms"
      className="
        w-full
        overflow-hidden
        bg-[#fffdfd]
        px-4
        pb-20
        pt-28
        sm:px-6
        sm:pb-24
        sm:pt-32
        lg:px-8
        lg:pb-32
        lg:pt-36
      "
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="border-b border-blush-100 pb-10 sm:pb-12"
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
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm text-muted sm:text-base">
            Last Updated: 17 September 2026
          </p>

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-blush-200
              bg-blush-50
              p-5
              text-sm
              leading-relaxed
              text-muted
              sm:p-6
              sm:text-base
            "
          >
            Welcome to Tomome.
            <br />
            <br />
            These Terms & Conditions govern your access to and use of Tomome's
            website, programs, consultations, classes, digital content,
            communication channels, and related pregnancy and parenting
            support services (collectively, the <strong>Services</strong>).
            <br />
            <br />
            By accessing, enrolling in, booking, or using any Tomome Service,
            you acknowledge that you have read, understood, and agreed to these
            Terms & Conditions.
          </div>
        </motion.header>

        {/* Important Disclaimer */}
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            p-5
            text-sm
            leading-relaxed
            text-amber-950
            sm:p-6
            sm:text-base
          "
        >
          <p className="font-semibold">Important Medical Disclaimer</p>

          <p className="mt-2">
            Tomome is not a hospital, emergency service, or replacement for
            your treating doctor, obstetrician, paediatrician, or other
            healthcare provider. Do not rely on Tomome communication channels
            for emergency medical care.
          </p>
        </div>

        {/* Terms */}
        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: Math.min(index * 0.02, 0.15),
              }}
              className="
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

              <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
                {section.content?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item} className="list-disc pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.contact && (
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

                    <p className="mt-2">
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
                )}

                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className="
            mt-10
            rounded-2xl
            border
            border-blush-200
            bg-blush-50
            p-5
            text-sm
            leading-relaxed
            text-muted
            sm:mt-12
            sm:p-6
            sm:text-base
          "
        >
          <p className="font-semibold text-ink">Please Note</p>

          <p className="mt-2">
            These Terms & Conditions should be read together with Tomome's
            Privacy Policy, Refund/Cancellation Policy, and any
            package-specific terms displayed before payment.
          </p>
        </div>
      </div>
    </section>
  );
}

