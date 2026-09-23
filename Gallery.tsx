import SectionTitle from "../components/SectionTitle";
import { galleryItems } from "../data/gallery";
import { InstagramIcon } from "../components/Icons";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-16 sm:py-24 border-t border-ink/5">
      <div className="container-page">
        <SectionTitle
          eyebrow="Follow @tamrmadina"
          title="Moments from the Groves"
          subtitle="A glimpse into the authentic harvest, handcrafted wooden packaging, and daily rituals of date lovers across Pakistan."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl border border-gold/30 bg-beige/40 shadow-sm transition-all duration-300 hover:shadow-soft"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 sm:p-6">
                <span className="inline-flex items-center gap-1.5 text-gold-light text-xs font-medium mb-1">
                  <InstagramIcon className="h-3.5 w-3.5" />
                  @tamrmadina
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-cream font-medium">
                  {item.label}
                </h4>
                <p className="text-xs text-cream/80 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-2.5 text-xs font-semibold tracking-wider text-ink transition-colors hover:border-gold hover:text-olive hover:shadow-sm"
          >
            <InstagramIcon className="h-4 w-4 text-gold-dark" />
            Follow us on Instagram &bull; @tamrmadina
          </a>
        </div>
      </div>
    </section>
  );
}
