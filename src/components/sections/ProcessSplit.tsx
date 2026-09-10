import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const processSteps = [
  { step: "01", title: "Brief", description: "We understand your brand, audience, and deadline." },
  { step: "02", title: "Design", description: "Creative layouts and print-ready concepts are shaped around your goal." },
  { step: "03", title: "Approval", description: "You review the work, refine where needed, and approve final output." },
  { step: "04", title: "Print & Delivery", description: "Production is completed with a careful finish and on-time handoff." },
];

export function ProcessSplit() {
  return (
    <Section className="bg-[#f7f3ee]">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-primary)]/10 bg-white p-3">
          <Image
            src="https://placehold.co/1000x1200/F9851C/FFFFFF?text=Our+Process"
            alt="Branding and print process"
            width={1000}
            height={1200}
            className="h-[560px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]/70">Our process</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-[var(--color-primary)] sm:text-5xl">Simple, clear, and built around your brand.</h2>

          <div className="mt-10 space-y-6">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-5 border-b border-[var(--color-primary)]/10 pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-primary)]">{item.title}</h3>
                  <p className="mt-2 max-w-md text-base text-[var(--color-ink)]/75">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
