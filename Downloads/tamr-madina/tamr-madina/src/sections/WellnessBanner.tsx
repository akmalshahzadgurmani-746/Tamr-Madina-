import Benefits from "../components/Benefits";
import { BoltIcon, HeartIcon, LeafIcon, MoonIcon } from "../components/Icons";

const wellnessItems = [
  { title: "Pure Natural Energy (Zero Added Sugar)", Icon: BoltIcon },
  { title: "Rich in Fiber & Digestive Enzymes", Icon: LeafIcon },
  { title: "Potassium & Magnesium for Heart Health", Icon: HeartIcon },
  { title: "Authentic Sunnah Practice (7 Daily Dates)", Icon: MoonIcon },
];

export default function WellnessBanner() {
  return (
    <section id="about" className="relative bg-olive py-16 sm:py-24 text-cream overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column Description */}
        <div className="flex flex-col items-start gap-6 z-10">
          <span className="eyebrow text-gold-light">Nourishment from the Sunnah</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Nature’s Most Perfect Superfood.
          </h2>
          <p className="text-base text-cream/80 leading-relaxed">
            For centuries, the dates of Madinah have nourished travelers, scholars, and families.
            Packed with essential electrolytes, vitamins B6, and prebiotic fiber, dates deliver sustained,
            clean vitality without the artificial crash of processed sugars.
          </p>

          {/* Hadith Quote Card */}
          <div className="rounded-lg border-l-2 border-gold bg-cream/5 backdrop-blur-sm p-4 text-xs italic text-cream/90 leading-relaxed">
            &ldquo;Whoever has seven Ajwa dates every morning he will not be harmed on that day by poison or magic.&rdquo;
            <span className="block mt-1.5 not-italic font-semibold text-gold-light text-[11px]">
              — Sahih al-Bukhari (5445)
            </span>
          </div>

          <div className="w-full">
            <Benefits items={wellnessItems} tone="dark" />
          </div>

          <a href="#bestsellers" className="btn-gold mt-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase">
            Shop Daily Wellness Dates
          </a>
        </div>

        {/* Right Column Realistic Visual */}
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl">
            <img
              src="/images/mabroom.jpg"
              alt="Mabroom and Ajwa Dates with Olive Wood"
              className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-olive/90 backdrop-blur-md p-4 border border-gold/20 flex items-center justify-between">
              <div>
                <p className="font-serif text-base text-cream font-medium">
                  Laboratory Tested &bull; Raw Unprocessed
                </p>
                <p className="text-[11px] text-cream/60">No glucose coating, zero preservatives</p>
              </div>
              <span className="rounded bg-gold/20 border border-gold/40 px-2.5 py-1 text-[11px] font-semibold text-gold-light">
                100% Pure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
