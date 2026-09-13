"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { StarsGalaxy } from "@/components/ui/StarsGalaxy";
import AboutSection from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ClientsSection } from "@/components/sections/ClientsSection";

const WORDS = ["brands.", "identities.", "campaigns.", "stories."];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom leading-none"
      style={{ color: "var(--color-highlight)" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block leading-none"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black sm:min-h-screen">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <StarsGalaxy
            stars={260}
            speed={0.45}
            twinkle={0.5}
            size={1.2}
            background="transparent"
          />

          {/* <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
            style={{ backgroundColor: "var(--color-highlight)" }}
          /> */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        </div>

        <Container className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 sm:min-h-screen">
          <div className="flex w-full flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto max-w-6xl text-center text-[clamp(2.75rem,9vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.04em] sm:leading-[0.86] sm:tracking-[-0.075em]"
            >
              We turn ideas
              <br />
              into <RotatingWord />
            </motion.h1>

            {/* fluid gap: scales with viewport instead of jumping between breakpoints */}
            <div
              aria-hidden="true"
              style={{ height: "clamp(1rem, 4vw, 2.5rem)" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto max-w-2xl text-center text-[15px] leading-7 text-white/50 sm:text-lg sm:leading-9"
            >
              Adobzone is a creative partner for businesses that want to stand
              out. We bring together strategy, design, and print to create
              brands that feel clear, confident, and memorable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex justify-center sm:mt-12"
            >
              <Link
                href="/contact"
                 className="group inline-flex items-center gap-4 rounded-full bg-[var(--color-highlight)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"                
              >
                Start a conversation
                <ArrowRight size={14} />
              </Link>
            </motion.div>
            

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-7 w-[1px] sm:h-9"
                style={{ backgroundColor: "var(--color-highlight)" }}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Existing Sections */}
      <AboutSection />
      <ServicesGrid />
      <ClientsSection />
    </main>
  );
}