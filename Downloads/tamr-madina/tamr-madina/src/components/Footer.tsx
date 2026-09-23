import { useState, type FormEvent } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "./Icons";
import { useToast } from "./ToastProvider";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#bestsellers" },
  { label: "Date Varieties", href: "#varieties" },
  { label: "Gift Boxes", href: "#gift" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const careLinks = [
  "Shipping Policy",
  "Return & Refund",
  "Privacy Policy",
  "Terms & Conditions",
  "FAQ",
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "TikTok", Icon: TiktokIcon },
  { label: "YouTube", Icon: YoutubeIcon },
  { label: "WhatsApp", Icon: WhatsappIcon },
];

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-cream/20 px-3 py-1.5 text-[11px] tracking-wide text-cream/70">
      {label}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Thank you for subscribing.");
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-olive text-cream">
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2">
          <span className="font-serif text-2xl">Tamr Madina</span>
          <p className="mt-1 text-[11px] tracking-[0.16em] text-cream/50">
            PURE DATES. A BLESSING IN EVERY BITE
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Bringing premium dates to homes across Pakistan with quality,
            freshness and care.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full border border-cream/15 p-2.5 text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-wide text-gold">Customer Care</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/70">
            {careLinks.map((label) => (
              <li key={label}>
                <a href="#" className="transition-colors hover:text-cream">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-wide text-gold">Stay Connected</h4>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2.5">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-sm border border-cream/20 bg-transparent px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
          <p className="mt-6 font-serif text-lg italic text-cream/70">
            "Nature's Sweetest Blessings"
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-cream/50">
            © 2026 Tamr Madina. All rights reserved.
          </p>
          <div className="flex gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="Mastercard" />
            <PaymentBadge label="Easypaisa" />
            <PaymentBadge label="COD" />
          </div>
        </div>
      </div>
    </footer>
  );
}
