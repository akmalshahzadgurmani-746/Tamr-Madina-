import { useState } from "react";
import type { Product } from "../data/products";
import { StarIcon, WishlistIcon } from "./Icons";
import { useToast } from "./ToastProvider";
import { useCart } from "../context/CartContext";

function formatPrice(value: number) {
  return `Rs. ${value.toLocaleString("en-PK")}`;
}

const getWeightMultiplier = (w: string) => {
  if (w === "1kg") return 1.9;
  if (w === "500g") return 1.0;
  return 0.55;
};

export default function ProductCard({ product }: { product: Product }) {
  const [weight, setWeight] = useState(product.weights[1] ?? product.weights[0]);
  const [wishlisted, setWishlisted] = useState(false);
  const { showToast } = useToast();
  const { addToCart, openQuickView } = useCart();

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - fullStars >= 0.5;

  const currentPrice = Math.round(product.price * getWeightMultiplier(weight));

  const handleAddToCart = () => {
    addToCart(product, weight, 1);
    showToast(`Added ${product.name} (${weight}) to your cart`);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white/70 backdrop-blur-sm shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-beige/40">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Tag Badge */}
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-olive/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium tracking-wide text-gold-light shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          onClick={() => {
            setWishlisted((v) => !v);
            showToast(wishlisted ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className={`absolute right-3 top-3 rounded-full bg-cream/90 backdrop-blur p-2 shadow-card transition-transform duration-200 hover:scale-110 ${
            wishlisted ? "text-gold-dark fill-current" : "text-ink/60 hover:text-olive"
          }`}
        >
          <WishlistIcon className="h-4 w-4" />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="w-full rounded bg-cream/95 backdrop-blur-md py-2.5 text-xs font-semibold tracking-wider text-ink shadow-md transition-all hover:bg-olive hover:text-cream"
          >
            Quick View &bull; Nutrition
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-ink/50 mb-1">
            <span>{product.origin}</span>
            <span className="text-olive font-medium">Fresh Harvest</span>
          </div>

          <h3
            onClick={() => openQuickView(product)}
            className="font-serif text-lg sm:text-xl text-ink font-medium leading-snug cursor-pointer hover:text-olive transition-colors line-clamp-1"
          >
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-3.5 w-3.5"
                  filled={i < fullStars || (i === fullStars && hasHalfStar)}
                />
              ))}
            </div>
            <span className="text-xs text-ink/60">({product.reviews})</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-olive">
              {formatPrice(currentPrice)}
            </p>
            <span className="text-[11px] text-ink/50 font-normal">/ {weight}</span>
          </div>

          {/* Weight Selectors */}
          <div className="mt-3 flex gap-1.5" role="group" aria-label={`${product.name} weight`}>
            {product.weights.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setWeight(w)}
                aria-pressed={weight === w}
                className={`flex-1 rounded py-1.5 text-xs tracking-wider font-medium transition-all ${
                  weight === w
                    ? "border border-olive bg-olive text-cream shadow-sm"
                    : "border border-ink/15 text-ink/70 hover:border-olive/50 bg-white/50"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="btn-primary mt-4 w-full py-3 text-xs sm:text-sm tracking-wider active:scale-[0.98] shadow-card hover:shadow-soft"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
