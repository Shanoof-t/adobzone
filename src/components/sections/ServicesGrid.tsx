import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWhatsAppLink } from "@/lib/whatsapp";

const sizeClasses = {
  sm: "md:col-span-3",
  md: "md:col-span-4",
  lg: "md:col-span-6",
};

export function ServicesGrid() {
  return (
    <Section className="bg-[var(--color-base)]">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]/70">What we print</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-[var(--color-primary)] sm:text-5xl">Creative solutions for every touchpoint</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={getWhatsAppLink(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-base)] md:col-span-3 ${sizeClasses[service.size ?? "sm"]}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1000}
                  height={700}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-[-0.05em] text-[var(--color-primary)]">{service.name}</h3>
                  <ArrowUpRight className="text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </div>
                <p className="text-sm leading-6 text-[var(--color-ink)]/70">{service.description}</p>
                <span className="inline-block h-0.5 w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
