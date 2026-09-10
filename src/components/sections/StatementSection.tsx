import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function StatementSection() {
  return (
    <Section className="bg-[var(--color-base)]">
      <Container>
        <div className="max-w-5xl border-t border-[var(--color-primary)]/15 pt-12">
          <p className="text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[var(--color-primary)] sm:text-5xl lg:text-[5rem]">
            One studio. Every format your brand needs — from a single visiting card to full store branding.
          </p>
        </div>
      </Container>
    </Section>
  );
}
