"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const clients = [
  "GEMS Arts and Science College",
  "PSMO College, Tirurangadi",
  "PMST College, Kundoor",
  "Nasra College of Arts and Science, Tirurkad",
  "KHMHSS, Valakulam",
  "Albirr School, Kundoor",
  "Al Fathah International School, Thennala",
  "New Caravans Food Court",
  "Chickago Cafe",
  "C&B Bakes, Tamil Nadu",
  "Shanu Bakes, Chennai",
  "Rainbow Bakes, Chennai",
  "Sulthan Restaurant, Kottakkal",
  "Bismillah Restaurant, Kuwait",
  "Al Majal Jewellery",
  "Venniyoor",
  "Tea Break, Thanjavur",
  "TAJ Home Appliances, Venniyoor",
  "VMR Store, Velliyappuram",
  "Noorani Nuts & Dates, Venniyoor",
  "Barath Supermarket, Venniyoor",
  "Keepee Supermarket, Venniyoor",
  "QQNet, Malaysia",
  "Pathras Textiles, Venniyoor",
  "Hamzas Textiles, Venniyoor",
  "Mangosteen Cool & Bar, Venniyoor",
  "SIPCOT, Tamil Nadu",
];

export function ClientsSection() {
  return (
    <Section
      id="clients"
      className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32"
    >
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,133,28,0.12),transparent_35%)]" /> */}

      <Container className="relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 sm:mb-14 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {/* <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-highlight)]/80">
              Our clients
            </span> */}

            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white">
              Trusted by
              <span className="ml-3 text-highlight">brands we believe in.</span>
            </h2>
          </div>

          {/* <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-[var(--color-highlight)]/50 hover:bg-[var(--color-highlight)] hover:text-black"
          >
            <span>Work with us</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current bg-transparent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </a> */}

            <Link
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-highlight)]/30 bg-[var(--color-highlight)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"
          >
            Work with us
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>

        {/* Client List */}
        <div className="border-t border-white/10">
          {clients.map((client, index) => (
            <div
              key={client}
              className="group relative flex items-center gap-5 border-b border-white/10 py-6 transition-all duration-300 sm:py-7 lg:py-8"
            >
              <span className="w-8 shrink-0 text-[10px] font-medium tabular-nums tracking-[0.15em] text-[var(--color-highlight)]/60 transition-colors duration-300 group-hover:text-[var(--color-highlight)] sm:w-10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="min-w-0 flex-1 text-xl font-medium tracking-[-0.02em] text-white/75 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-2xl lg:text-[2rem]">
                {client}
              </h3>

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-white/20 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-highlight)] group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/35">
          <span>Our growing network</span>
          <span>{String(clients.length).padStart(2, "0")} clients</span>
        </div>
      </Container>
    </Section>
  );
}