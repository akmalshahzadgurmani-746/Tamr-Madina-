import React, { useEffect, useState } from "react";
import { useCart, FREE_SHIPPING_THRESHOLD } from "../context/CartContext";
import { CloseIcon, ShieldIcon, TruckIcon, WhatsappGlyph } from "./Icons";
import { useToast } from "./ToastProvider";

const MERCHANT_WHATSAPP = "923176591852";

function formatPrice(value: number) {
  return `Rs. ${value.toLocaleString("en-PK")}`;
}

const getWeightMultiplier = (w: string) => {
  if (w === "1kg") return 1.9;
  if (w === "500g") return 1.0;
  return 0.55;
};

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();
  const { showToast } = useToast();

  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lahore");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery (COD)");
  const [orderId, setOrderId] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset step back to cart when closed if on success
      if (step === "success") {
        setStep("cart");
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen, step]);

  const freeShippingDiff = FREE_SHIPPING_THRESHOLD - subtotal;
  const deliveryFee = freeShippingDiff <= 0 ? 0 : 250;
  const grandTotal = subtotal + deliveryFee;
  const progressPercent = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  const handlePlaceOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      showToast("Please complete all required delivery details.");
      return;
    }

    const generatedId = `TM-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(generatedId);

    // Build structured WhatsApp message
    const dateStr = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const itemsText = cart
      .map((item, index) => {
        const itemPrice = Math.round(
          item.product.price * getWeightMultiplier(item.weight)
        );
        return `${index + 1}. *${item.product.name}* (${item.weight})\n   Quantity: ${item.quantity} | ${formatPrice(itemPrice * item.quantity)}`;
      })
      .join("\n\n");

    const message = `*🌙 NEW ORDER - TAMR MADINA*
*Order ID:* #${generatedId}
*Date:* ${dateStr}

*👤 CUSTOMER DETAILS:*
• *Name:* ${name.trim()}
• *Phone:* ${phone.trim()}
• *City:* ${city.trim()}
• *Delivery Address:* ${address.trim()}
${notes.trim() ? `• *Special Note:* ${notes.trim()}\n` : ""}
*📦 ORDERED ITEMS:*
${itemsText}

*💰 BILLING DETAILS:*
• *Subtotal:* ${formatPrice(subtotal)}
• *Shipping:* ${deliveryFee === 0 ? "FREE (Orders over Rs. 2,999)" : "Rs. 250"}
• *Grand Total:* *${formatPrice(grandTotal)}*
• *Payment Method:* ${paymentMethod}

_Assalam o Alaikum! I have placed this order on Tamr Madina. Please confirm my order and share dispatch details._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${MERCHANT_WHATSAPP}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setStep("success");
    clearCart();
    showToast("Order notification sent to WhatsApp!");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-cream shadow-2xl flex flex-col transform transition-transform duration-300 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 bg-beige/40">
            <div className="flex items-center gap-2.5">
              {step === "checkout" && (
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="rounded-full p-1 text-ink/60 hover:text-ink mr-1"
                  title="Back to cart"
                >
                  &larr;
                </button>
              )}
              <h2 className="font-serif text-2xl text-ink">
                {step === "cart"
                  ? "Your Selection"
                  : step === "checkout"
                  ? "Checkout & Delivery"
                  : "Order Confirmed!"}
              </h2>
              {step === "cart" && (
                <span className="rounded-full bg-olive px-2.5 py-0.5 text-xs font-medium text-cream">
                  {totalCount}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="rounded-full p-2 text-ink/60 hover:bg-beige hover:text-ink transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* VIEW: CART ITEMS */}
          {step === "cart" && (
            <>
              {/* Free Shipping Progress */}
              <div className="border-b border-ink/10 bg-cream px-6 py-3.5">
                <div className="flex items-center justify-between text-xs tracking-wide text-ink/80 mb-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <TruckIcon className="h-4 w-4 text-gold-dark" />
                    {freeShippingDiff <= 0
                      ? "🎉 You have qualified for FREE Nationwide Delivery!"
                      : `Add ${formatPrice(freeShippingDiff)} more for FREE Delivery`}
                  </span>
                  <span className="font-semibold text-olive">{progressPercent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-beige">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-olive transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-ink/5">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-beige flex items-center justify-center text-olive mb-4">
                      <svg
                        className="w-10 h-10 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl text-ink">Your basket is empty</h3>
                    <p className="mt-1 text-sm text-ink/60 max-w-xs">
                      Discover pure, handpicked dates straight from the blessed groves of Madinah.
                    </p>
                    <button
                      type="button"
                      onClick={closeCart}
                      className="btn-primary mt-6 text-xs"
                    >
                      Explore Best Sellers
                    </button>
                  </div>
                ) : (
                  cart.map((item) => {
                    const itemPrice = Math.round(
                      item.product.price * getWeightMultiplier(item.weight)
                    );
                    return (
                      <div
                        key={`${item.product.id}-${item.weight}`}
                        className="flex gap-4 py-4 items-center group"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-20 w-20 flex-shrink-0 rounded-md object-cover border border-gold/20 shadow-sm"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-serif text-base text-ink line-clamp-1">
                                {item.product.name}
                              </h4>
                              <span className="inline-block rounded bg-beige px-2 py-0.5 text-[11px] font-medium text-olive mt-0.5">
                                Pack: {item.weight}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id, item.weight)}
                              className="text-ink/40 hover:text-red-600 transition-colors p-1"
                              title="Remove item"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center rounded border border-ink/15 bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.weight, -1)}
                                className="px-2.5 py-1 text-sm text-ink/70 hover:bg-beige/60 transition-colors"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-semibold text-ink min-w-[24px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.weight, 1)}
                                className="px-2.5 py-1 text-sm text-ink/70 hover:bg-beige/60 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-medium text-olive text-sm">
                              {formatPrice(itemPrice * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Checkout */}
              {cart.length > 0 && (
                <div className="border-t border-ink/10 bg-beige/30 p-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-ink/70">Subtotal</span>
                    <span className="font-serif text-xl font-semibold text-olive">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-ink/60 mb-4">
                    <span>Shipping across Pakistan</span>
                    <span className="text-olive font-medium">
                      {deliveryFee === 0 ? "FREE" : "Rs. 250"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep("checkout")}
                    className="btn-primary w-full py-4 text-base tracking-wide flex items-center justify-center gap-2 shadow-card hover:shadow-soft"
                  >
                    Proceed to Delivery &bull; {formatPrice(grandTotal)}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-ink/60">
                    <span className="flex items-center gap-1">
                      <ShieldIcon className="h-3.5 w-3.5 text-gold-dark" />
                      100% Madinah Airlift
                    </span>
                    <span>&bull;</span>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* VIEW: CHECKOUT FORM WITH WHATSAPP NOTIFICATION */}
          {step === "checkout" && (
            <form onSubmit={handlePlaceOrderWhatsApp} className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-900 flex items-start gap-2.5">
                  <WhatsappGlyph className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Your order details will be sent directly to our official WhatsApp (<strong>+92 317 6591852</strong>) for immediate confirmation and tracking.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amna Sheikh"
                    className="w-full rounded border border-ink/20 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                    WhatsApp / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0317 6591852"
                    className="w-full rounded border border-ink/20 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Other City">Other City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                      Payment
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full rounded border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
                    >
                      <option value="Cash on Delivery (COD)">Cash on Delivery</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                    Complete Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Apartment #, Street, Area/Sector..."
                    className="w-full rounded border border-ink/20 bg-white px-3.5 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink/75 mb-1">
                    Special Instructions / Gift Message
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Please add Eid greeting card"
                    className="w-full rounded border border-ink/20 bg-white px-3.5 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Compact Order Review */}
                <div className="rounded-lg bg-beige/40 p-3.5 border border-gold/25 space-y-1.5 text-xs">
                  <div className="flex justify-between text-ink/70">
                    <span>Items ({totalCount}):</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-ink/70">
                    <span>Shipping Fee:</span>
                    <span className="text-olive font-medium">
                      {deliveryFee === 0 ? "FREE" : "Rs. 250"}
                    </span>
                  </div>
                  <div className="flex justify-between font-serif text-base font-semibold text-olive pt-1 border-t border-ink/10">
                    <span>Grand Total:</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Bottom WhatsApp Submit Button */}
              <div className="border-t border-ink/10 bg-beige/30 p-6">
                <button
                  type="submit"
                  className="w-full py-4 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-card hover:shadow-soft transition-all"
                >
                  <WhatsappGlyph className="h-5 w-5" />
                  Confirm &amp; Place Order on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="w-full mt-2.5 text-center text-xs text-ink/60 hover:text-ink transition-colors"
                >
                  &larr; Review Cart Items
                </button>
              </div>
            </form>
          )}

          {/* VIEW: ORDER SUCCESS */}
          {step === "success" && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fadeUp">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span className="eyebrow text-xs">Alhamdulillah</span>
              <h3 className="font-serif text-3xl text-ink font-semibold mt-1">
                Order Received!
              </h3>
              <p className="mt-2 text-xs font-mono font-bold text-olive bg-beige px-3 py-1 rounded">
                Order Ref: #{orderId}
              </p>

              <div className="mt-5 rounded-lg bg-beige/50 border border-gold/30 p-4 text-xs text-ink/80 text-left space-y-2">
                <p className="font-medium text-ink flex items-center gap-2">
                  <WhatsappGlyph className="h-4 w-4 text-emerald-600" />
                  Notification sent to WhatsApp:
                </p>
                <p className="text-[11px] text-ink/70">
                  We have dispatched your order details to <strong>+92 317 6591852</strong>. Our customer care team will verify your address and send your courier tracking number within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep("cart");
                  closeCart();
                }}
                className="btn-primary mt-8 w-full py-3.5 text-xs tracking-wider"
              >
                Back to Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
