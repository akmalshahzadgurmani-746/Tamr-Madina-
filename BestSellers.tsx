import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { products } from "../data/products";

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState<"all" | "classics" | "stuffed" | "gifts">("all");

  const filteredProducts = products.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <section id="bestsellers" className="bg-cream/50 py-16 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Our Grand Selection"
          title="Best Selling Dates &amp; Delicacies"
          subtitle="Explore our extended collection of harvest dates, stuffed nuts, Belgian chocolate treats, and grand presentation platters."
        />

        {/* Filter Tabs */}
        <div className="mt-8 flex justify-center overflow-x-auto pb-2">
          <div className="inline-flex rounded-full border border-ink/10 bg-white/90 p-1 shadow-sm whitespace-nowrap">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-olive text-cream shadow-sm"
                  : "text-ink/70 hover:text-olive"
              }`}
            >
              All Items ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("classics")}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                activeTab === "classics"
                  ? "bg-olive text-cream shadow-sm"
                  : "text-ink/70 hover:text-olive"
              }`}
            >
              Madinah Classics
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stuffed")}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                activeTab === "stuffed"
                  ? "bg-olive text-cream shadow-sm"
                  : "text-ink/70 hover:text-olive"
              }`}
            >
              Stuffed &amp; Confectionery
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("gifts")}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider transition-all ${
                activeTab === "gifts"
                  ? "bg-olive text-cream shadow-sm"
                  : "text-ink/70 hover:text-olive"
              }`}
            >
              Gift Platters &amp; Hampers
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
