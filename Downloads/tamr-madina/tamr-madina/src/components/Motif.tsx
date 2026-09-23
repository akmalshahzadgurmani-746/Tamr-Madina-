export type MotifType = "branch" | "bowl" | "cluster" | "palm" | "box";

type Props = {
  motif: MotifType;
  className?: string;
};

/**
 * Minimal line-art icons standing in for product photography.
 * Rendered in currentColor so callers can tint them per-context.
 */
export default function Motif({ motif, className = "w-16 h-16" }: Props) {
  const common = {
    className,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (motif) {
    case "branch":
      return (
        <svg {...common}>
          <path d="M10 50 Q32 46 54 14" />
          <ellipse cx="18" cy="44" rx="5.5" ry="4" transform="rotate(-30 18 44)" />
          <ellipse cx="28" cy="36" rx="5.5" ry="4" transform="rotate(-30 28 36)" />
          <ellipse cx="38" cy="27" rx="5.5" ry="4" transform="rotate(-30 38 27)" />
          <ellipse cx="47" cy="19" rx="5" ry="3.6" transform="rotate(-30 47 19)" />
        </svg>
      );
    case "cluster":
      return (
        <svg {...common}>
          <path d="M32 10c0 4-3 6-3 6" />
          <path d="M32 10c0 4 3 6 3 6" />
          <ellipse cx="24" cy="26" rx="7" ry="9" />
          <ellipse cx="40" cy="26" rx="7" ry="9" />
          <ellipse cx="32" cy="36" rx="7.5" ry="9.5" />
          <ellipse cx="20" cy="42" rx="6.5" ry="8" />
          <ellipse cx="44" cy="42" rx="6.5" ry="8" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M12 30h40" />
          <path d="M12 30c0 12 9 21 20 21s20-9 20-21" />
          <path d="M12 30c0-3 2-5 5-5h30c3 0 5 2 5 5" />
          <ellipse cx="26" cy="24" rx="4.5" ry="3.5" />
          <ellipse cx="35" cy="21" rx="4.5" ry="3.5" />
          <ellipse cx="30" cy="17" rx="4" ry="3" />
        </svg>
      );
    case "palm":
      return (
        <svg {...common}>
          <path d="M32 58V30" />
          <path d="M32 30c-10-4-16-2-20-10 8 0 14 2 20 8" />
          <path d="M32 30c10-4 16-2 20-10-8 0-14 2-20 8" />
          <path d="M32 26c-6-8-8-14-6-20 6 4 9 12 6 20" />
          <path d="M32 26c6-8 8-14 6-20-6 4-9 12-6 20" />
          <path d="M32 24c-2-6 0-10 0-10s2 4 0 10" />
        </svg>
      );
    case "box":
    default:
      return (
        <svg {...common}>
          <path d="M12 22 32 12l20 10-20 10-20-10Z" />
          <path d="M12 22v22l20 10 20-10V22" />
          <path d="M32 32v22" />
          <path d="M22 17.5 42 27.5" />
        </svg>
      );
  }
}
