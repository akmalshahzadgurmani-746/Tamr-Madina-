import type { ComponentType } from "react";

export type Benefit = {
  title: string;
  Icon: ComponentType<{ className?: string }>;
};

export default function Benefits({
  items,
  tone = "light",
}: {
  items: Benefit[];
  tone?: "light" | "dark";
}) {
  const textColor = tone === "dark" ? "text-cream" : "text-ink";
  const borderColor = tone === "dark" ? "border-cream/15" : "border-ink/10";

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map(({ title, Icon }) => (
        <li
          key={title}
          className={`flex items-center gap-3.5 rounded-md border ${borderColor} px-4 py-4`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
            <Icon className="h-5 w-5" />
          </span>
          <span className={`text-sm leading-snug ${textColor}`}>{title}</span>
        </li>
      ))}
    </ul>
  );
}
