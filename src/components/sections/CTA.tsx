import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="bg-[var(--color-accent)] py-16 text-white sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">Let’s talk</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">Ready to give your brand a new face?</h2>
        </div>

        <ButtonLink href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="secondary" className="gap-2 border-white/25 bg-white px-8 text-[var(--color-primary)] hover:bg-white/90">
          <MessageCircle size={18} /> Start on WhatsApp <ArrowRight size={18} />
        </ButtonLink>
      </Container>
    </section>
  );
}
