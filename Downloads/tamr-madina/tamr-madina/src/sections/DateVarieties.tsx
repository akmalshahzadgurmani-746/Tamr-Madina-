import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import { categories } from "../data/categories";
import { ArrowRightIcon } from "../components/Icons";

export default function DateVarieties() {
  return (
    <section id="varieties" className="bg-cream py-16 sm:py-24 border-b border-ink/5">
      <div className="container-page">
        <SectionTitle
          eyebrow="The Noble Harvest"
          title="Five Distinct Varieties"
          subtitle="Directly imported from the heritage farms of Madinah Al-Munawwarah. Each variety hand-graded for supreme texture, sweetness, and purity."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-ink/60 max-w-md">
            Not sure which variety to choose? Our Grand Tasting Platter offers a curated selection of all five varieties.
          </p>
          <a
            href="#bestsellers"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-olive px-8 py-3.5 text-sm font-medium tracking-wider text-cream transition-all duration-300 hover:bg-olive-light shadow-card hover:shadow-soft"
          >
            Shop Complete Collection
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
