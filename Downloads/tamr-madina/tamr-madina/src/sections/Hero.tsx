import { ShieldIcon, TruckIcon } from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-beige/60 via-beige/30 to-cream py-12 sm:py-16 lg:py-20">
      {/* Background subtle Islamic arch pattern element */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 C20 20, 20 60, 40 80 C60 60, 60 20, 40 0 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column Text */}
        <div className="flex flex-col items-start gap-6 lg:col-span-6 animate-fadeUp">
          <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-cream/90 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-olive uppercase">
              Fresh 2026 Harvest Airlifted
            </span>
          </div>

          <h1 className="font-serif text-[2.75rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem] tracking-tight">
            More Than a Date.
            <br />
            <span className="italic text-olive font-normal">A Sunnah, A Blessing.</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink/75">
            Indulge in authentic, handpicked dates directly from the blessed palm groves of
            Madinah Al-Munawwarah. Airlifted fresh and delivered with reverence to your doorstep
            anywhere in Pakistan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#bestsellers" className="btn-primary px-8 py-4 text-sm tracking-wider shadow-card hover:shadow-soft">
              Shop Madinah Collection
            </a>
            <a href="#varieties" className="btn-outline px-8 py-4 text-sm tracking-wider">
              Explore 5 Varieties
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["1", "2", "3", "4"].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-cream bg-olive text-cream text-[10px] font-bold flex items-center justify-center"
                  >
                    ★
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-ink block">4.9 / 5.0 Rating</span>
                <span className="text-ink/60">50,000+ Satisfied Patrons</span>
              </div>
            </div>

            <div className="h-8 w-px bg-ink/15 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs text-ink/75">
              <TruckIcon className="h-4 w-4 text-gold-dark" />
              <span>Free Delivery on Rs. 10,000+</span>
            </div>
          </div>
        </div>

        {/* Right Column Realistic Visual */}
        <div className="relative lg:col-span-6 animate-fadeIn">
          <div className="relative overflow-hidden rounded-2xl border-4 border-cream shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Authentic Madinah Dates on Antique Brass Platter"
              className="h-full w-full object-cover aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] transform transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle luxury glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-olive/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-xl bg-cream/90 backdrop-blur-md p-4 sm:p-5 border border-gold/30 shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                  Origin Certified
                </span>
                <p className="font-serif text-lg sm:text-xl text-olive font-semibold">
                  Madinah Al-Munawwarah
                </p>
                <p className="text-[11px] text-ink/60">Direct farm-to-table traceability</p>
              </div>

              <div className="text-right">
                <span className="font-serif text-2xl font-bold text-olive">100%</span>
                <span className="block text-[10px] tracking-wide text-ink/60">Pure &amp; Natural</span>
              </div>
            </div>
          </div>

          {/* Floating Pill Top Right */}
          <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 rounded-full border border-gold/40 bg-cream/95 backdrop-blur px-4 py-2 shadow-card">
            <ShieldIcon className="h-4 w-4 text-gold-dark" />
            <span className="text-xs font-semibold text-ink">Sunnah Superfood</span>
          </div>
        </div>
      </div>
    </section>
  );
}
