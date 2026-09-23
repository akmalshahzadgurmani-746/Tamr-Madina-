type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.35-4.35" />
    </svg>
  );
}

export function AccountIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.6-4 4.3-6 7.5-6s5.9 2 7.5 6" />
    </svg>
  );
}

export function WishlistIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20s-7-4.3-9.5-8.8C1 8 2.4 4.8 5.7 4.2c2-.4 3.8.6 4.9 2.2 1.1-1.6 2.9-2.6 4.9-2.2 3.3.6 4.7 3.8 3.2 7C19 15.7 12 20 12 20Z" />
    </svg>
  );
}

export function CartIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="21" r="1.4" />
      <circle cx="17" cy="21" r="1.4" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

export function LeafIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 19c9 1 14-4 14-13-9 0-14 4-14 13Z" />
      <path d="M5 19c2-4 5-7 9-9" />
    </svg>
  );
}

export function TruckIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4", filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v6H14v-6h2.6l.4-3H14V9.8c0-.5.2-.8.6-.8Z" />
    </svg>
  );
}

export function TiktokIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 4v10.3a3.3 3.3 0 1 1-3-3.3" />
      <path d="M14 4c.4 2.3 2 4 4.5 4.3" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 18.5 4.5 21l2.6-1.4A8 8 0 1 0 4 12a7.9 7.9 0 0 0 2 5.3Z" />
      <path d="M9 10c.3 2.5 1.8 4 4.2 4.2" />
    </svg>
  );
}

export function PackageIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3.5 8 12 3.5 20.5 8 12 12.5 3.5 8Z" />
      <path d="M3.5 8v8L12 20.5 20.5 16V8" />
      <path d="M12 12.5v8" />
    </svg>
  );
}

export function BoltIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function HeartIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20s-7.5-4.6-9.8-9.3C.7 7.2 2.3 4 5.7 3.5c2-.3 3.8.7 4.9 2.3 1.1-1.6 2.9-2.6 4.9-2.3 3.4.5 5 3.7 3.5 7.2C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function MoonIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function WhatsappGlyph({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.45L4 29l7.75-1.72A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.8a9.7 9.7 0 0 1-4.96-1.36l-.36-.21-4.6 1.02 1.05-4.48-.24-.37A9.75 9.75 0 1 1 25.76 15a9.75 9.75 0 0 1-9.74 9.8Z" />
      <path d="M21.2 17.5c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.2-.44-2.29-1.41-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
