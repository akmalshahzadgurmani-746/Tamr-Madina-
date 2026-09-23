import { LeafIcon, ShieldIcon, TruckIcon, PackageIcon } from "../components/Icons";

const items = [
  {
    Icon: ShieldIcon,
    title: "100% Madinah Origin",
    desc: "Airlifted directly with farm provenance",
  },
  {
    Icon: TruckIcon,
    title: "Free Nationwide Shipping",
    desc: "On all orders above Rs. 2,999",
  },
  {
    Icon: LeafIcon,
    title: "Fresh 2026 Harvest",
    desc: "Unprocessed, raw & pesticide-free",
  },
  {
    Icon: PackageIcon,
    title: "Aroma-Lock Packaging",
    desc: "Preserves natural moisture and softness",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gold/20 bg-beige/40">
      <div className="container-page grid grid-cols-2 divide-y divide-ink/8 sm:grid-cols-2 lg:grid-cols-4 sm:divide-y-0 sm:divide-x divide-gold/15 py-2">
        {items.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-3.5 p-4 sm:p-6"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-olive text-gold-light shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-ink">
                {title}
              </h4>
              <p className="text-[11px] text-ink/65 line-clamp-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
