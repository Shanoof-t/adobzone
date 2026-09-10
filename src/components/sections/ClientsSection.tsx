"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StarsGalaxy } from "@/components/ui/StarsGalaxy";

export function ClientsSection() {
  const desktopRows = Array.from(
    { length: Math.ceil(clients.length / 4) },
    (_, rowIndex) => clients.slice(rowIndex * 4, rowIndex * 4 + 4),
  );

  const mobileRows = Array.from(
    { length: Math.ceil(clients.length / 3) },
    (_, rowIndex) => clients.slice(rowIndex * 3, rowIndex * 3 + 3),
  );

  const rows = desktopRows;

  return (
    <Section className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <StarsGalaxy
          stars={120}
          speed={0.45}
          twinkle={0.5}
          size={1.1}
          background="transparent"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      <Container className="relative z-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl flex-col space-y-3">
            <div>
              <h2 className="text-[clamp(3rem,5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
                Our Clients
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/60 sm:text-lg">
                Our diverse clientele trusts us as we bring their vision to life
                with innovative designs and custom typography.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-highlight)]/30 bg-[var(--color-highlight)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"
          >
            Be the next
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-[2px]"
        >
          <div className="hidden lg:block">
            {desktopRows.map((row, rowIndex) => (
              <div
                key={`desktop-row-${rowIndex}`}
                className="grid grid-cols-4 gap-0 border-b border-white/10"
              >
                {row.map((client) => (
                  <div
                    key={client.id}
                    className="flex min-h-[210px] items-center justify-center border-r border-white/10 bg-black/10 px-4 py-6"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={240}
                      height={120}
                      className="max-h-[88px] w-full object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.08)]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="block lg:hidden">
            {mobileRows.map((row, rowIndex) => (
              <div
                key={`mobile-row-${rowIndex}`}
                className="grid grid-cols-3 gap-0 border-b border-white/10"
              >
                {row.map((client) => (
                  <div
                    key={client.id}
                    className="flex min-h-[150px] items-center justify-center border-r border-white/10 bg-black/10 px-2 py-6"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={240}
                      height={120}
                      className="max-h-[56px] w-full object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.08)]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
