import { useState, type FormEvent } from "react";
import { useToast } from "../components/ToastProvider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Thank you for joining! Use code BLESSED10 for 10% off your first order.");
    setEmail("");
  };

  return (
    <section className="bg-brown py-16 sm:py-24 text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5a3e2b_0%,#3A281C_70%,#261910_100%)] opacity-80" />

      <div className="container-page relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="eyebrow text-gold-light">Privilege Circle</span>
        <h2 className="max-w-xl font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Join the Tamr Madina Family
        </h2>
        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-cream/75">
          Receive private access to fresh seasonal harvests from Madinah, exclusive Ramadan gift boxes, and <strong>Rs. 300 off</strong> your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-3 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full flex-1 rounded-sm border border-cream/30 bg-cream/5 backdrop-blur px-4 py-3.5 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
          <button type="submit" className="btn-gold whitespace-nowrap px-7 py-3.5 text-xs font-semibold tracking-wider uppercase">
            Claim Discount
          </button>
        </form>

        <p className="text-[11px] text-cream/50">
          No spam, ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
