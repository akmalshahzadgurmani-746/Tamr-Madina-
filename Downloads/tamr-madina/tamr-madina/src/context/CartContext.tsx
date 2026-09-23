import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../data/products";

export type CartItem = {
  product: Product;
  weight: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, weight?: string, quantity?: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 2999;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("tamr_madina_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("tamr_madina_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, weight?: string, quantity = 1) => {
    const chosenWeight = weight || product.weights[0];
    setCart((prev) => {
      const index = prev.findIndex(
        (item) => item.product.id === product.id && item.weight === chosenWeight
      );
      if (index > -1) {
        const next = [...prev];
        next[index].quantity += quantity;
        return next;
      }
      return [...prev, { product, weight: chosenWeight, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, weight: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.weight === weight)
      )
    );
  };

  const updateQuantity = (productId: string, weight: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.weight === weight) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getWeightMultiplier = (w: string) => {
    if (w === "1kg") return 1.9;
    if (w === "500g") return 1.0;
    return 0.55; // 250g
  };

  const subtotal = cart.reduce((sum, item) => {
    const basePrice = item.product.price;
    const mult = getWeightMultiplier(item.weight);
    const itemPrice = Math.round(basePrice * mult);
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        totalCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        quickViewProduct,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
