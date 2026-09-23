export type Testimonial = {
  id: string;
  name: string;
  city: string;
  product: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Amna Sheikh",
    city: "Lahore (DHA)",
    product: "Ajwa Al-Aliya (1kg)",
    quote:
      "SubhanAllah, the softness and authentic wrinkling of these Ajwa dates is unmatched. Having seven every morning has become a cherished Sunnah for my whole family.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Bilal Farooqi",
    city: "Karachi (Clifton)",
    product: "Royal Sukkari Rutab (1kg)",
    quote:
      "By far the best Sukkari dates available in Pakistan. They melt in your mouth like pure caramel toffee with zero artificial syrup. Delivered fresh within 48 hours.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Hira Tariq Malik",
    city: "Islamabad (F-7)",
    product: "Grand Tasting Platter",
    quote:
      "Ordered 12 gift platters for our corporate partners. The gold embossing and selection of stuffed dates with pistachios received non-stop compliments.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Usman Tariq Chaudhry",
    city: "Peshawar",
    product: "Gourmet Mabroom Selection",
    quote:
      "Outstanding firmness and subtle sweetness. You can tell they were harvested properly and not dried out. The aroma upon unboxing is breathtaking.",
    rating: 5,
  },
];

