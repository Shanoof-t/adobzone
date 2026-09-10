import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section className="bg-[#f7f3ee]">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]/70">Client feedback</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-[var(--color-primary)] sm:text-5xl">Words from the people we work with.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-[1.8rem] border border-[var(--color-primary)]/10 bg-white p-8">
              <p className="text-2xl leading-tight tracking-[-0.05em] text-[var(--color-primary)]">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <div className="text-base font-semibold text-[var(--color-primary)]">{testimonial.author}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.12em] text-[var(--color-primary)]/60">{testimonial.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
