import { ShieldIcon, TruckIcon } from "./Icons";

export default function AnnouncementBar() {
  return (
    <div className="bg-olive text-cream text-[11px] sm:text-xs py-2 border-b border-gold/20">
      <div className="container-page flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-6">
          <span className="flex items-center gap-1.5 text-gold-light font-medium">
            <TruckIcon className="h-3.5 w-3.5 text-gold" />
            FREE Delivery on orders above Rs. 10,000 across Pakistan
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-cream/70">
            <ShieldIcon className="h-3 w-3 text-gold" />
            Direct Airlift from Madinah
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-cream/80">
          <span>WhatsApp Helpline: <strong>+92 317 6591852</strong></span>
          <span className="text-gold">&bull;</span>
          <span className="text-gold-light font-semibold">PKR (Rs.)</span>
        </div>
      </div>
    </div>
  );
}
