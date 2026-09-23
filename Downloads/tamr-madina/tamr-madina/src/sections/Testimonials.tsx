import SectionTitle from "../components/SectionTitle";
import { StarIcon, ShieldIcon } from "../components/Icons";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-beige/60 py-16 sm:py-24 border-t border-ink/5">
      <div className="container-page">
        <SectionTitle
          eyebrow="Verified Patron Stories"
          title="Loved by Homes Across Pakistan"
          subtitle="Read honest impressions from doctors, connoisseurs, and families who rely on Tamr Madina for daily nutrition and gifting."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-4 rounded-xl border border-gold/30 bg-cream/90 backdrop-blur-sm p-6 shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                  <ShieldIcon className="h-3 w-3" />
                  Verified Buyer
                </span>
              </div>

              <span className="text-[11px] font-semibold text-olive uppercase tracking-wider">
                Purchased: {t.product}
              </span>

              <blockquote className="text-xs sm:text-sm leading-relaxed text-ink/80 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto pt-3 border-t border-ink/10 text-xs">
                <span className="font-semibold text-ink block">{t.name}</span>
                <span className="text-ink/60">{t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
