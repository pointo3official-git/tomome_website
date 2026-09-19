// how it works data
export const HOW_IT_WORKS_STEPS = [
  {
    step: "Step 1",
    title: "Personalised Consultation",
    description:
      "Start with a 1:1 session with a senior doctor who will understand your body constitution, condition, food routine, and practices in tailored ways.",
    image: "section/docter_consultation.png",
    imageAlt: "Personalised consultation for pregnancy care",
  },
  {
    step: "Step 2",
    title: "Get Your Treatment Plan",
    description:
      "Receive a detailed, holistic regimen including diet, home remedies, practices, and lifestyle changes based on your body's needs.",
    image: "section/Nurition_chat.png",
    imageAlt: "Personalised treatment plan",
  },
  {
    step: "Step 3",
    title: "Daily Coaching & Support",
    description:
      "Join customized daily live classes, get personalized daily yoga exercises, get meal checks, and stay compliant with your weekly plan.",
    image: "section/yoga_nurition.png",
    imageAlt: "Daily coaching and support",
  },
  {
    step: "Step 4",
    title: "Childbirth Classes",
    description:
      "Attend live childbirth classes to learn about labor, delivery, and postpartum care, ensuring you are well-prepared for the journey ahead.",
    image: "section/childbirth_class.jpg",
    imageAlt: "Childbirth classes",
  },
  {
    step: "Step 5",
    title: "Track Progress & Follow-Up",
    description:
      "Document what is helping in your daily routine, notice if something is not working, and use regular follow-ups to review feedback and refine your plan.",
    image: "section/couple.jpg",
    imageAlt: "Progress tracking and follow-up",
  },
];

//======program enquiry data=====
export const categoryCaptions = {
  yoga: "Daily Live Yoga Sessions",
  "dr-support": "Doctor Support, Anytime",
  nutrition: "Expert Nutrition Guidance",
  "birth-stories": "Real Birth Stories from Tomome Moms",
  default: "Real Stories from Tomome Mothers",
};

// -------------------------------------------------------------------
// Enquiry links
// -------------------------------------------------------------------
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSceUa_B6n48yDCF4cUv376xxwfG63WZCwK6s8SpkL2kOgx6ZA/viewform";

const WHATSAPP_NUMBER = "917306288896"; // +91 73062 88896
const WHATSAPP_MESSAGE =
  "Hi Tomome, I'd like to know more about the Womb Care Program.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

//==== what we offer data =====
export const HOW_ITEMS = [
  {
    id: "yoga-class",
    title: "Daily Live Yoga Classes",
    description:
      "Stay active and prepare your body for delivery. Custom sessions including Sukshma yoga, Garbha yoga and Labour prep yoga with flexible slots from morning to evening.",
    image: "experts/live_yoga.png",
    imageAlt: "Yoga class session with a tomome trainer",
  },
  {
    id: "nutrition-support",
    title: "Custom Nutrition Plans",
    description:
      "Weekly meal guides, easy recipes, and tailored diets based on your health condition and baby's development. Because what you eat directly impacts your baby's growth.",

    image: "section/nutrition_Support.png",
    imageAlt: "nutrition guidance with a tomome nutritionist",
  },

  {
    id: "mom-to-be-community",
    title: "Mom-to-Be Community",
    description:
      "A moderated, safe space to connect with other expecting mothers, share experiences, and learn together. Your safe space to learn, laugh and lean on other moms.",

    image: "section/tomome-community.png",
    imageAlt:
      "mom-to-be community image with a group of mothers and a tomome expert",
  },

  {
    id: "expert-support",
    title: "Personalized, Expert Support",
    description:
      "Get one-on-one guidance from Ayurvedic doctors, nutritionists, yoga coaches, and care managers – available via chat, call, or video, whenever you need it.",

    image: "section/Expert_Support.png",
    imageAlt: "Personalized expert support image with a tomome expert",
  },
];

export const CHILDBIRTH_CLASSES = [
  {
    id: "labour-birth",
    title: "Understand Labour",
    description: "What is vaginal birth, the psychology of birth, and more.",
    image: "section/sam.jfif",
    imageAlt: "Understand labour and birth icon",
    wrapperClassName: "left-0 top-0 sm:left-[1%] sm:top-[6%] md:left-[6%]",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Breastfeeding, cesarean section, and more.",
    image: "section/pain_management.jfif",
    imageAlt: "Pain management icon",
    wrapperClassName: "right-0 top-0 sm:right-[1%] sm:top-[6%] md:right-[6%]",
  },
  {
    id: "newborn-care",
    title: "New Born Care",
    description: "Pee guide, potty training, and more.",
    image: "section/new_born_care.jfif",
    imageAlt: "New born care icon",
    wrapperClassName:
      "left-0 bottom-0 sm:left-[3%] sm:bottom-[8%] md:left-[10%]",
  },
  {
    id: "postpartum-wellness",
    title: "Postpartum Wellness",
    description: "Don'ts of exercise, warning signs, and more.",
    image: "section/postpartum.jfif",
    imageAlt: "Postpartum wellness icon",
    wrapperClassName:
      "right-0 bottom-0 sm:right-[3%] sm:bottom-[8%] md:right-[10%]",
  },
];
