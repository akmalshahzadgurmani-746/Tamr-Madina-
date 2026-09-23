import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { CloseIcon, StarIcon, ShieldIcon, TruckIcon } from "./Icons";
import { useToast } from "./ToastProvider";

function formatPrice(value: number) {
  return `Rs. ${value.toLocaleString("en-PK")}`;
}

const getWeightMultiplier = (w: string) => {
  if (w === "1kg") return 1.9;
  if (w === "500g") return 1.0;
  return 0.55;
};

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedWeight, setSelectedWeight] = useState<string>("500g");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedWeight(quickViewProduct.weights[1] ?? quickViewProduct.weights[0]);
      setQuantity(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const currentPrice = Math.round(
    quickViewProduct.price * getWeightMultiplier(selectedWeight)
  );

  const fullStars = Math.floor(quickViewProduct.rating);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedWeight, quantity);
    closeQuickView();
    showToast(`Added ${quantity}x ${quickViewProduct.name} (${selectedWeight}) to cart`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-cream shadow-2xl border border-gold/25 z-10 animate-fadeUp">
        <button
          type="button"
          onClick={closeQuickView}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 rounded-full bg-cream/80 p-2 text-ink/70 hover:bg-beige hover:text-ink transition-colors shadow-sm"
        >
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden bg-beige">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="h-full w-full object-cover"
            />
            {quickViewProduct.tag && (
              <span className="absolute left-4 top-4 rounded bg-olive/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wide text-gold-light">
                {quickViewProduct.tag}
              </span>
            )}
            <div className="absolute bottom-3 left-3 right-3 rounded bg-cream/90 backdrop-blur px-3 py-2 text-[11px] text-ink/80 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldIcon className="h-3.5 w-3.5 text-gold-dark" />
                {quickViewProduct.origin}
              </span>
              <span className="text-olive font-semibold">100% Raw &amp; Pure</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 sm:p-8 justify-between">
            <div>
              <span className="eyebrow text-xs">Tamr Madina Reserve</span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink leading-tight">
                {quickViewProduct.name}
              </h2>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4"
                      filled={i < fullStars}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink/60 font-medium">
                  {quickViewProduct.rating} ({quickViewProduct.reviews} verified reviews)
                </span>
              </div>

              <p className="mt-3 font-serif text-2xl font-semibold text-olive">
                {formatPrice(currentPrice)}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-ink/75">
                {quickViewProduct.description}
              </p>

              {/* Nutrition highlights */}
              <div className="mt-4 grid grid-cols-3 gap-2 rounded bg-beige/50 p-2.5 text-center text-[11px]">
                <div>
                  <span className="block text-ink/50">Energy</span>
                  <span className="font-semibold text-ink">
                    {quickViewProduct.nutrition.calories}
                  </span>
                </div>
                <div>
                  <span className="block text-ink/50">Fiber</span>
                  <span className="font-semibold text-ink">
                    {quickViewProduct.nutrition.fiber}
                  </span>
                </div>
                <div>
                  <span className="block text-ink/50">Potassium</span>
                  <span className="font-semibold text-ink">
                    {quickViewProduct.nutrition.potassium}
                  </span>
                </div>
              </div>

              {/* Package size */}
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink/70 mb-2">
                  Select Weight Option
                </label>
                <div className="flex gap-2">
                  {quickViewProduct.weights.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedWeight(w)}
                      className={`flex-1 rounded border py-2 text-xs font-medium transition-all ${
                        selectedWeight === w
                          ? "border-olive bg-olive text-cream shadow-sm"
                          : "border-ink/20 text-ink/70 hover:border-olive/50 bg-white"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <label className="text-xs font-medium text-ink/70">Quantity:</label>
                <div className="flex items-center rounded border border-ink/20 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-sm text-ink/70 hover:bg-beige transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-ink">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-sm text-ink/70 hover:bg-beige transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 pt-4 border-t border-ink/10 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary w-full py-3.5 text-sm tracking-wider shadow-card hover:shadow-soft"
              >
                Add {quantity > 1 ? `${quantity} Items` : ""} to Cart &bull; {formatPrice(currentPrice * quantity)}
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-ink/60">
                <TruckIcon className="h-3.5 w-3.5 text-gold-dark" />
                <span>Fast express dispatch across Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
