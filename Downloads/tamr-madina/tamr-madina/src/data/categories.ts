export type Category = {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  motif: "branch" | "bowl" | "cluster" | "palm" | "box";
  image: string;
  profile: string;
  origin: string;
  texture: string;
  sweetness: string;
};

export const categories: Category[] = [
  {
    id: "ajwa",
    name: "Ajwa Al-Aliya",
    arabicName: "عجوة المدينة",
    description: "Revered Holy dates with fine wrinkles and profound earthy richness.",
    motif: "branch",
    image: "/images/ajwa.jpg",
    profile: "Revered Sunnah",
    origin: "Madinah Al-Munawwarah",
    texture: "Soft & Finely Wrinkled",
    sweetness: "Gentle & Fruity",
  },
  {
    id: "sukkari",
    name: "Royal Sukkari",
    arabicName: "سكري ملكي",
    description: "Melt-in-your-mouth golden honey dates with natural caramel notes.",
    motif: "cluster",
    image: "/images/sukkari.jpg",
    profile: "Golden Caramel",
    origin: "Al-Qassim & Madinah",
    texture: "Ultra-Soft & Luscious",
    sweetness: "Intense Caramel Sweet",
  },
  {
    id: "mabroom",
    name: "Premium Mabroom",
    arabicName: "مبروم فاخر",
    description: "Slender, noble elongated dates with a firm pleasant chew.",
    motif: "palm",
    image: "/images/mabroom.jpg",
    profile: "Slender & Noble",
    origin: "Madinah Al-Munawwarah",
    texture: "Chewy & Firm",
    sweetness: "Balanced & Woody",
  },
  {
    id: "safawi",
    name: "Dark Safawi",
    arabicName: "صفاوي أسود",
    description: "Deep glossy dark dates brimming with essential minerals and fiber.",
    motif: "bowl",
    image: "/images/safawi.jpg",
    profile: "Mineral-Rich",
    origin: "Madinah Region",
    texture: "Moist & Soft Chewy",
    sweetness: "Moderate & Refined",
  },
  {
    id: "khudri",
    name: "Harvest Khudri",
    arabicName: "خضري فاخر",
    description: "Plump, amber-brown everyday dates loved for snacking and gifting.",
    motif: "box",
    image: "/images/khudri.jpg",
    profile: "Everyday Staple",
    origin: "Arabian Peninsula",
    texture: "Pleasantly Chewy",
    sweetness: "Rich & Satisfying",
  },
];

