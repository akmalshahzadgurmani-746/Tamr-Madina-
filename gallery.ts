export type GalleryItem = {
  id: string;
  label: string;
  subtitle: string;
  image: string;
  motif: "branch" | "bowl" | "cluster" | "palm" | "box";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    label: "Holy Ajwa Al-Aliya",
    subtitle: "Directly airlifted from Madinah Al-Munawwarah",
    image: "/images/ajwa.jpg",
    motif: "cluster",
  },
  {
    id: "g2",
    label: "Royal Sukkari Rutab",
    subtitle: "Caramel softness paired with cardamom coffee",
    image: "/images/sukkari.jpg",
    motif: "box",
  },
  {
    id: "g3",
    label: "Grand Feast Platter",
    subtitle: "Handpicked dates, roasted nuts & golden sultanas",
    image: "/images/hero.jpg",
    motif: "branch",
  },
  {
    id: "g4",
    label: "Pistachio Stuffed Dates",
    subtitle: "Hand-filled with slow roasted Iranian pistachios",
    image: "/images/luxury_box.jpg",
    motif: "box",
  },
  {
    id: "g5",
    label: "Imperial Velvet Hamper",
    subtitle: "Gold embossed royal presentation packaging",
    image: "/images/luxury_box.jpg",
    motif: "box",
  },
  {
    id: "g6",
    label: "Madinah Palm Oasis",
    subtitle: "Centuries-old date palms at golden sunrise",
    image: "/images/platter_closeup.jpg",
    motif: "palm",
  },
  {
    id: "g7",
    label: "Noble Mabroom Reserve",
    subtitle: "Elongated perfection with subtle woody notes",
    image: "/images/mabroom.jpg",
    motif: "bowl",
  },
  {
    id: "g8",
    label: "Arabic Coffee & Dates",
    subtitle: "Traditional brass Dallah hospitality ritual",
    image: "/images/qahwa_tea.jpg",
    motif: "branch",
  },
  {
    id: "g9",
    label: "Belgian Chocolate Dates",
    subtitle: "70% dark Belgian chocolate with hazelnut dust",
    image: "/images/sukkari.jpg",
    motif: "cluster",
  },
];
