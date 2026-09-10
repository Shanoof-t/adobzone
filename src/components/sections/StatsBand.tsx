import { stats } from "@/data/stats";
import { Container } from "@/components/ui/Container";

export function StatsBand() {
  return (
    <section className="bg-[var(--color-primary)] py-10 text-white">
      <Container className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-4xl font-semibold tracking-[-0.08em] text-[var(--color-accent)] sm:text-5xl">{stat.value}</div>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
