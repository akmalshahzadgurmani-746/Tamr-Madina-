import type { Category } from "../data/categories";
import { ArrowRightIcon } from "./Icons";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="#bestsellers"
      className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
    >
      {/* Arched image container with luxury styling */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[999px_999px_14px_14px] border-2 border-gold/40 bg-beige/50 shadow-card transition-shadow duration-300 group-hover:shadow-soft group-hover:border-gold">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Subtle gradient vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-75" />

        {/* Profile Pill */}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/95 backdrop-blur-md px-3 py-1 text-[11px] font-medium tracking-wider text-olive shadow-sm whitespace-nowrap">
          {category.profile}
        </span>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <span className="font-serif text-sm text-gold-dark font-medium">
          {category.arabicName}
        </span>
        <h3 className="text-lg sm:text-xl font-serif text-ink group-hover:text-olive transition-colors font-medium">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-ink/65 line-clamp-2 px-1 max-w-[200px]">
          {category.description}
        </p>

        <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gold-dark group-hover:text-olive transition-colors">
          Explore Variety
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
