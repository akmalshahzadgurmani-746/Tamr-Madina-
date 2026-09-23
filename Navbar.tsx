import { useState } from "react";
import {
  AccountIcon,
  CartIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  WishlistIcon,
} from "./Icons";
import { useCart } from "../context/CartContext";
import { products, type Product } from "../data/products";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Date Varieties", href: "#varieties" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Luxury Gifts", href: "#gift" },
  { label: "Health & Sunnah", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalCount, openCart, openQuickView } = useCart();

  const closeMenu = () => setIsOpen(false);

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.origin.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectProduct = (p: Product) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    openQuickView(p);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/8 bg-cream/90 backdrop-blur-md transition-all">
        <div className="container-page flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group">
            <span className="font-serif text-2xl sm:text-3xl tracking-wide text-olive group-hover:text-gold-dark transition-colors">
              Tamr Madina
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-ink/60 font-medium">
              Pure Madinah Dates &bull; Pakistan
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-7 text-[14px] font-medium tracking-wide text-ink/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-2 transition-colors duration-200 hover:text-olive after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search dates"
              title="Search"
              className="rounded-full p-2.5 text-ink/75 transition-colors hover:bg-beige hover:text-olive"
            >
              <SearchIcon />
            </button>

            <a
              href="#bestsellers"
              aria-label="Wishlist"
              title="Customer Favorites"
              className="hidden sm:flex rounded-full p-2.5 text-ink/75 transition-colors hover:bg-beige hover:text-olive"
            >
              <WishlistIcon />
            </a>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Cart with ${totalCount} items`}
              title="Shopping Cart"
              className="relative rounded-full p-2.5 text-ink/75 transition-colors hover:bg-beige hover:text-olive"
            >
              <CartIcon />
              {totalCount > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-olive text-[11px] font-bold text-cream shadow-sm animate-fadeUp">
                  {totalCount}
                </span>
              ) : (
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold" />
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="ml-1 rounded-full p-2.5 text-olive lg:hidden hover:bg-beige transition-colors"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <nav
            aria-label="Mobile"
            className="border-t border-ink/10 bg-cream/98 backdrop-blur-lg px-6 pb-8 pt-3 lg:hidden animate-fadeUp"
          >
            <ul className="flex flex-col divide-y divide-ink/5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3.5 text-base font-medium text-ink/80 transition-colors hover:text-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-ink/10">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openCart();
                }}
                className="btn-primary w-full py-3 text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <CartIcon className="h-4 w-4" />
                View Cart ({totalCount} items)
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm animate-fadeIn"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-xl rounded-lg bg-cream shadow-2xl border border-gold/30 p-6 z-10 animate-fadeUp">
            <div className="flex items-center justify-between pb-3 border-b border-ink/10">
              <span className="font-serif text-xl text-ink">Find Your Date Variety</span>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="rounded-full p-1.5 text-ink/60 hover:bg-beige hover:text-ink transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Ajwa, Sukkari, Mabroom, Safawi..."
                className="w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
              />
            </div>

            {/* Results */}
            <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-ink/5">
              {searchQuery.trim() && filteredProducts.length === 0 && (
                <p className="py-6 text-center text-sm text-ink/50">
                  No date varieties matched "{searchQuery}". Try "Ajwa" or "Sukkari".
                </p>
              )}

              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p)}
                  className="flex items-center gap-3 py-3 px-2 rounded-md hover:bg-beige/60 cursor-pointer transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-12 w-12 rounded object-cover border border-gold/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-base text-ink font-medium">{p.name}</h4>
                    <p className="text-xs text-ink/60">{p.origin} &bull; Rs. {p.price.toLocaleString("en-PK")}</p>
                  </div>
                  <span className="text-xs font-semibold text-olive">Quick View &rarr;</span>
                </div>
              ))}

              {!searchQuery.trim() && (
                <div className="py-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                    Popular Collections:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Ajwa Dates", "Royal Sukkari", "Mabroom", "Safawi", "Gift Platter"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSearchQuery(tag.split(" ")[0])}
                          className="rounded-full border border-ink/15 bg-white/70 px-3 py-1 text-xs text-ink/70 hover:border-gold hover:text-olive transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
