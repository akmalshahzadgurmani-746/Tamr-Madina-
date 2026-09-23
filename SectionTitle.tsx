type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: Props) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-cream/70" : "text-ink/60";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-base leading-relaxed ${subtitleColor}`}>{subtitle}</p>}
    </div>
  );
}
