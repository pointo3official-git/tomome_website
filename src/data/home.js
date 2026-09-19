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

