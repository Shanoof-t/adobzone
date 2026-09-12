"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StarsGalaxy } from "@/components/ui/StarsGalaxy";

export default function ServicesPage() {
  const handleServiceClick = (service: (typeof services)[number]) => {
    window.open(
      getWhatsAppLink(service.name, service.message),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="bg-black text-white">
      {/* ======================================== 
          HERO SECTION (dark, animated background)
      ======================================== */}
      <section className="relative overflow-hidden bg-black pb-16 pt-28 sm:pt-32 lg:pt-36">
        {/* Animated stars background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
        >
          <StarsGalaxy
            stars={400}
            speed={0.5}
            twinkle={0.4}
            size={1.4}
            background="transparent"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.82)_100%)]" />
        </div>

        <Container className="relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-6"
          >
            {/* <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
              What we create
            </span> */}

            <div className="space-y-4">
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.88] tracking-[-0.08em] text-white">
                Full-service Printing and{" "}
                <span className="text-[var(--color-highlight)]">Brand solutions.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                From premium stationery and posters to signage, gifting, and event
                materials, we help businesses and brands turn ideas into polished,
                print-ready experiences that feel memorable from the first glance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#services"
                className="group inline-flex items-center justify-center rounded-full bg-[var(--color-highlight)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"
              >
                See all services
                <ArrowRight
                  size={14}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <span className="text-sm font-medium text-white/50">
                {services.length}+ creative service options
              </span>
            </div>
          </motion.div>
        </Container>

        {/* Bottom fade into the services list */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ======================================== 
          SERVICES LIST
      ======================================== */}
      <Section id="services" className="relative bg-black py-8 sm:py-12 lg:py-16">
        <Container className="max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                All services
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-white sm:text-4xl">
                Print, design, and branded essentials.
              </h2>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-0">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}