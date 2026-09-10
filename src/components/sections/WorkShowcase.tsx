import Image from "next/image";
import { workShowcase } from "@/data/work-showcase";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function WorkShowcase() {
  return (
    <Section className="bg-[var(--color-primary)] text-white" id="work">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/65">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">Finished pieces, stronger brands.</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {workShowcase.map((item, index) => (
            <div key={item.id} className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 md:col-span-${index % 2 === 0 ? "5" : "4"}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="h-72 w-full object-cover md:h-80"
              />
              <div className="flex items-center justify-between p-4 text-sm">
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-white/60">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
