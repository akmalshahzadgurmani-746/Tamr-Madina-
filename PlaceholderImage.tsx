import Motif, { type MotifType } from "./Motif";

type Tone = "cream" | "olive" | "brown";

type Props = {
  motif: MotifType;
  tone?: Tone;
  label: string;
  className?: string;
  iconClassName?: string;
  showCaption?: boolean;
};

const toneStyles: Record<Tone, { bg: string; arch: string; icon: string; text: string }> = {
  cream: {
    bg: "bg-[radial-gradient(circle_at_30%_20%,#F8F0E3_0%,#EDE0CD_55%,#DDCBA8_100%)]",
    arch: "text-gold/25",
    icon: "text-olive",
    text: "text-ink",
  },
  olive: {
    bg: "bg-[radial-gradient(circle_at_30%_20%,#2E3A1E_0%,#202814_65%,#171d0e_100%)]",
    arch: "text-gold/20",
    icon: "text-gold",
    text: "text-cream",
  },
  brown: {
    bg: "bg-[radial-gradient(circle_at_30%_20%,#4A3628_0%,#3A281C_60%,#2A1D14_100%)]",
    arch: "text-gold/20",
    icon: "text-gold-light",
    text: "text-cream",
  },
};

/**
 * A brand-consistent stand-in for product photography: a warm gradient field
 * with a tiled Arabic-arch line pattern and a centered line-art motif.
 * Fully vector-based, so it never breaks regardless of network access.
 */
export default function PlaceholderImage({
  motif,
  tone = "cream",
  label,
  className = "",
  iconClassName = "w-16 h-16",
  showCaption = false,
}: Props) {
  const styles = toneStyles[tone];
  const patternId = `arch-pattern-${motif}-${tone}`;

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${styles.bg} ${className}`}
    >
      <svg
        className={`absolute inset-0 h-full w-full ${styles.arch}`}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={patternId} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M8 48V32a12 12 0 0 1 24 0v16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="relative flex h-full w-full items-center justify-center">
        <Motif motif={motif} className={`${iconClassName} ${styles.icon}`} />
      </div>

      {showCaption && (
        <span
          className={`absolute bottom-3 left-4 font-serif text-lg italic ${styles.text}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
