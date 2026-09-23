import { useState } from "react";
import Benefits from "../components/Benefits";
import { LeafIcon, PackageIcon, ShieldIcon, TruckIcon } from "../components/Icons";

const whyChooseItems = [
  { title: "Direct Airlift from Madinah", Icon: ShieldIcon },
  { title: "100% Raw & Organic Harvest", Icon: LeafIcon },
  { title: "Aroma-Lock Fresh Packaging", Icon: PackageIcon },
  { title: "Nationwide Express Shipping", Icon: TruckIcon },
];

const giftFormats = [
  {
    title: "Imperial Velvet Hamper",
    tag: "Luxury Gift",
    desc: "Rigid box with gold foil calligraphy, filled with Ajwa & Sukkari",
    image: "/images/luxury_box.jpg",
  },
  {
    title: "Artisanal Stuffed Dates Tray",
    tag: "Handcrafted",
    desc: "Stuffed with Iranian pistachios, roasted almonds & gold leaf",
    image: "/images/sukkari.jpg",
  },
  {
    title: "Grand Tasting Platter",
    tag: "Signature Platter",
    desc: "All 5 authentic Madinah varieties served with raw nuts",
    image: "/images/hero.jpg",
  },
  {
    title: "Holy Ajwa Keepsake Box",
    tag: "Sunnah Special",
    desc: "Direct from the historic groves of Al-Aliya in Madinah",
    image: "/images/ajwa.jpg",
  },
];

export default function GiftFeature() {
  const [selectedImg, setSelectedImg] = useState(giftFormats[0]);

  return (
    <section id="gift" className="bg-beige/70 py-16 sm:py-24 border-y border-ink/5">
      <div className="container-page">
        {/* Main 2-column feature */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column Interactive Image Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group border-2 border-gold/30 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={selectedImg.image}
                alt={selectedImg.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/95 via-olive/30 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-ink w-fit">
                  {selectedImg.tag}
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-cream font-medium">
                  {selectedImg.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-cream/80 max-w-sm">
                  {selectedImg.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#bestsellers"
                    className="btn-gold py-2.5 px-5 text-xs uppercase tracking-wider font-semibold shadow-md"
                  >
                    Order This Gift Format
                  </a>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector with 4 Pictures */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {giftFormats.map((format) => (
                <button
                  key={format.title}
                  type="button"
                  onClick={() => setSelectedImg(format)}
                  className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImg.title === format.title
                      ? "border-olive ring-2 ring-gold shadow-md"
                      : "border-gold/30 hover:border-gold opacity-75 hover:opacity-100"
                  }`}
                >
                  <img
                    src={format.image}
                    alt={format.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-olive/80 py-1 text-[9px] text-cream text-center font-medium line-clamp-1 px-1">
                    {format.title.split(" ")[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column Promise & Standards */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6">
            <div>
              <span className="eyebrow">Artisanal Packaging &amp; Gifting</span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-ink leading-tight">
                Curated Luxury for Weddings, Eid &amp; Corporate Gestures
              </h2>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                Make every celebration unforgettable. Tamr Madina specializes in bespoke date arrangements, custom hot-stamped royal sleeves, and hand-stuffed assortments with premium nuts and Belgian chocolate.
              </p>
            </div>

            <div className="mt-2">
              <Benefits items={whyChooseItems} tone="light" />
            </div>

            <div className="rounded-xl border border-gold/30 bg-cream/80 p-5 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-base text-ink font-semibold">
                  Custom Corporate &amp; Event Orders
                </p>
                <p className="text-xs text-ink/65">
                  Tailored corporate logos, personalized calligraphy gift cards &amp; bulk rates.
                </p>
              </div>
              <a
                href="https://wa.me/923176591852?text=Assalam%20o%20Alaikum%2C%20I%20am%20interested%20in%20custom%20corporate%20date%20gifting"
                target="_blank"
                rel="noreferrer"
                className="btn-primary whitespace-nowrap text-xs py-3 px-5 tracking-wider shadow-sm"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 4-Item Picture Grid Showing All Formats */}
        <div className="mt-16 pt-12 border-t border-ink/10">
          <div className="text-center mb-10">
            <span className="eyebrow">Gift Collections</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold mt-1">
              Choose Your Presentation Style
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {giftFormats.map((item) => (
              <div
                key={item.title}
                onClick={() => setSelectedImg(item)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-gold/30 bg-cream/70 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-beige">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-base text-ink font-medium group-hover:text-olive transition-colors mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink/65 line-clamp-2 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
