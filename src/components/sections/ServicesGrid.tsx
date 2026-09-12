"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StarsGalaxy } from "../ui/StarsGalaxy";
import { ServiceCard } from "./ServiceCard";

type ServicesGridProps = {
  limit?: number;
};

export function ServicesGrid({ limit = 7 }: ServicesGridProps) {
  const visibleServices = limit >= services.length ? services : services.slice(0, limit);

  return (
    <Section
      id="services"
      className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-20"
    >
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

      {/* Header only */}
      <Container className="relative z-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl space-y-3">
            <div>
              <h2 className="text-[clamp(2rem,3vw,4rem)] font-medium leading-[0.9] text-white">
                Our Services
              </h2>
            </div>

            <div>
              <p className="text-base leading-relaxed text-white/60 sm:text-lg">
                We are a full-service digital agency that builds immersive user
                experiences. Our team creates exceptional visualization and
                thought-out functionality.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-highlight)]/30 bg-[var(--color-highlight)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"
          >
            See all services
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </motion.div>

        {/* Full-width service cards */}
        <div className="relative z-10 flex flex-col gap-0">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}