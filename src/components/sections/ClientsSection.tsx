import Image from "next/image";
import { Building2, Globe2 } from "lucide-react";
import { clients } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const categories = [
  { key: "education", label: "Education" },
  { key: "food-hospitality", label: "Food & Hospitality" },
  { key: "retail-jewellery", label: "Retail & Jewellery" },
] as const;

export function ClientsSection() {
  const hasInternational = clients.some((client) => client.country);

  return (
    <Section className="bg-[var(--color-base)]">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]/70">Trusted by</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-[var(--color-primary)] sm:text-5xl">Who we’ve worked with</h2>
          </div>
          {hasInternational && (
            <div className="hidden items-center gap-2 rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/5 px-4 py-2 text-sm text-[var(--color-primary)] md:flex">
              <Globe2 size={16} className="text-[var(--color-accent)]" />
              Proudly serving clients across Kerala, Tamil Nadu & the Gulf
            </div>
          )}
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.key}>
              <div className="mb-5 flex items-center gap-3">
                <Building2 size={16} className="text-[var(--color-accent)]" />
                <h3 className="text-xl font-semibold tracking-[-0.05em] text-[var(--color-primary)]">{category.label}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {clients
                  .filter((client) => client.category === category.key)
                  .map((client) => (
                    <div
                      key={client.id}
                      className="flex h-28 items-center justify-center rounded-[1.25rem] border border-[var(--color-primary)]/10 bg-[var(--color-base)] px-4 text-center transition-transform duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
                    >
                      <Image
                        src={client.logo ?? "https://placehold.co/240x120/003E4C/FFFFFF?text=Client"}
                        alt={client.name}
                        width={240}
                        height={120}
                        className="max-h-12 w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
