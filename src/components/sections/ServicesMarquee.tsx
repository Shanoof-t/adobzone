import { Sparkles } from "lucide-react";
import { services } from "@/data/services";

export function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div className="overflow-hidden border-y border-[var(--color-primary)]/10 bg-[var(--color-base)] py-5">
      <div className="marquee-track flex min-w-max items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.17em] text-[var(--color-primary)]/80">
        {items.map((service, index) => (
          <div key={`${service.id}-${index}`} className="flex items-center gap-3">
            <span>{service.name}</span>
            <Sparkles size={12} className="text-[var(--color-accent)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
