import {
  Apple,
  PersonStanding,
  HeartHandshake,
  BookOpen,
  Brain,
} from "lucide-react";

//=====hero data======
export const hero = {
  heading1: "Your Baby Deserves",
  heading2: "The Best Start",
  primaryCta: "Book Free Demo",
  secondaryCta: "Start Journey",
  heroImage: "section/hero.png",
  floatingCards: {
    chat: {
      name: `Anjana`,
      time: "I gained 2.5 kg within one month 😊",
    },
    chat2: {
      name: `Gifty`,
      time: "Having a yoga trainer, nutrition, gynaecologist,and phycologist available troughout the journey has been such a blessing 💖",
    },
    chat3: {
      name: `Keerthana`,
      time: "Since i start yoga, i have experienced better sleep, reduced body pain and overall improvement in my wellbeing 🤍",
    },
    chat4: {
      name: `Farha`,
      time: "What I loved most about Tomome was that I never felt like I was going through pregnancy alone. Whenever I had a doubt or felt worried, there was someone to guide me and explain things clearly🥰",
    },
  },
};

//=====orbit data=====
export const SUPPORT_ITEMS = [
  {
    key: "nutrition",
    label: "Nutrition",
    description: "Personalized nutrition guidance",
    icon: Apple,
    iconColor: "text-green-500",
  },
  {
    key: "yoga",
    label: "Prenatal Yoga",
    description: "Daily movement & wellness",
    icon: PersonStanding,
    iconColor: "text-blue-500",
  },
  {
    key: "support",
    label: "Care Team",
    description: "Expert support between visits",
    icon: HeartHandshake,
    iconColor: "text-rose-500",
  },
  {
    key: "birth_class",
    label: "Childbirth Classes",
    description: "Prepare for birth with confidence",
    icon: BookOpen,
    iconColor: "text-yellow-600",
  },
  {
    key: "emotional_support",
    label: "Emotional Support",
    description: "Psychologist support for your wellbeing",
    icon: Brain,
    iconColor: "text-purple-500",
  },
];

//====program data=====
export const programs = [
  {
    id: 'womb-care',
    label: 'WOMB CARE PROGRAM',
    title: 'Your Pregnancy, Your Journey',
    description:
      'Dedicated support to help you feel prepared, confident, and cared for throughout pregnancy.',
    image:
      'section/womb-care.jfif',
    imageAlt: 'Mother and baby',
    features: [
      'Prepare For Baby Health & Birthing',
      'Daily Live Yoga',
      'Personalized Nutrition Support',
      'Personalized Doctor Support',
      'Unlimited Doubt Clearing Support',
      'Childbirth classes & Labor preparation',
      'Personalized Emotional Care',
    ],
    button: 'Know More',
    href: '/program',
    disabled: false,
    highlighted: true,
  },
  {
    id: 'super-parenting',
    label: 'SUPER PARENTING PROGRAM',
    title: 'For your path as a parent',
    description:
      'Ongoing support for the next chapter, helping you feel more confident as you step into parenthood.',
    image:
      'section/parenting.jfif',
    imageAlt: 'Parent and child',
    features: [
      'Prepare for parenting',
      'Daily Live Postpartum Yoga',
      'Get the best nutrition advice',
      'Lactation Coach support',
      'Unlimited Doubt Clearing Support',
      'DIY Activities',
    ],
    button: 'Coming Soon...',
    href: '#',
    disabled: true,
    highlighted: false,
  },
];

//=====testimonials data=====
export const CATEGORY_LABELS = {
  'birth-stories': 'Birth stories',
  yoga: 'Yoga',
  nutrition: 'Nutrition',
  'dr-support': 'Doctor support',
};

export const FILTERS = ['all', 'birth-stories', 'yoga', 'nutrition', 'dr-support'];

// ==== How it works data =====
export const HOW_ITEMS = [
  {
    id: "tailored-programs",
    title: "Tailor-made programs",
    description:
      "We shape your plan around your goals and your current stage, from trying to conceive through pregnancy and into early parenthood.",
    image: "section/class_cards.png",
    imageAlt: "Illustration of a personalized pregnancy program",
  },
  {
    id: "expert-team",
    title: "Team of trained experts & coaches help you build habits",
    description:
      "All the coaches and team of experts are very well qualified & help you integrate lifestyle changes slowly so you achieve your desired goal.",

    image: "experts/home_page_experts.png",
    imageAlt: "Illustration of Tomome's care team",
  },
];

export const MONITORING_HIGHLIGHTS = [
  {
    id: "meal-plan",
    type: "meal",
    eyebrow: "Breakfast, 8 am",
    title: "Caesar Salad",
    meta: "220 Kcal · 3 mins preparation",
    image: "section/cesar_salad.png",
    imageAlt: "Caesar salad breakfast plate",
    wrapperClassName:
      "left-[3%] top-[8%] w-[164px] sm:left-[7%] sm:top-[10%] sm:w-[190px]",
  },
  {
    id: "consultation",
    type: "consultation",
    title: "Consultation with Dr. Hamna",
    meta: "6 June · 4:30 pm",
    cta: "Join Now",
    image: "experts/hamna.png",
    imageAlt: "Dr. Hamna",
    wrapperClassName:
      "right-[1%] top-[6%] w-[240px] sm:right-[5%] sm:top-[8%] sm:w-[288px]",
  },
  {
    id: "avoid-pcod",
    type: "avoid",
    title: "Things to Avoid in PCOD 🚫",
    items: [
      { label: "Sugary Food", image: "section/sugar_food.png" },
      { label: "Fast Food", image: "section/fast_food.png" },
      { label: "Caffeine", image: "section/coffee.png" },
    ],
    wrapperClassName:
      "-right-[4%] top-[42%] w-[172px] sm:right-[2%] sm:top-[40%] sm:w-[196px]",
  },
  {
    id: "childbirth-class",
    type: "progress",
    title: "Childbirth Class",
    percent: 77,
    image: "section/monitor_childbirth.png",
    imageAlt: "Childbirth class session",
    wrapperClassName:
      "left-[4%] bottom-[18%] w-[182px] sm:left-[9%] sm:bottom-[16%] sm:w-[208px]",
  },
  {
    id: "yoga-class",
    type: "session",
    title: "Yoga Class with Ramya",
    meta: "7:30 pm – 8:00 pm",
    image: "experts/ramya.png",
    imageAlt: "Yoga class session",
    wrapperClassName:
      "left-1/2 bottom-[5%] w-[250px] -translate-x-1/2 sm:w-[296px]",
  },
];

export const GHOST_CARDS = [
  { id: "ghost-left", wrapperClassName: "-left-10 top-[28%] sm:-left-8" },
  { id: "ghost-right", wrapperClassName: "-right-10 -bottom-[2%] sm:-right-8" },
];
