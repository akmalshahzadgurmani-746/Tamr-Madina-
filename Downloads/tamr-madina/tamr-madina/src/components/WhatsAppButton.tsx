import { WhatsappGlyph } from "./Icons";

const WHATSAPP_URL =
  "https://wa.me/923176591852?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20know%20more%20about%20Tamr%20Madina%20dates.";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-4 z-[90] sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tamr Madina on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full
          bg-[#25D366] text-white shadow-soft ring-2 ring-cream/70
          transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:ring-gold hover:shadow-[0_16px_36px_-12px_rgba(32,40,20,0.45)]
          active:scale-95 sm:h-14 sm:w-14"
      >
        <WhatsappGlyph className="h-6 w-6 sm:h-7 sm:w-7" />

        {/* Desktop tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2
            whitespace-nowrap rounded-sm bg-olive px-3.5 py-2 text-xs tracking-wide text-cream
            opacity-0 shadow-card transition-opacity duration-200
            group-hover:opacity-100 sm:block"
        >
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
