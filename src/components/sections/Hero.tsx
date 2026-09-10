"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { StarsGalaxy } from "../ui/StarsGalaxy";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const words = ["BRANDING", "PACKAGING", "PRINTING", "SIGNAGE"];

/**
 * Interactive typography
 *
 * The hovered character becomes heavier.
 * Characters next to it get a smaller weight increase.
 */
function InteractiveText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <span
      className={className}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {Array.from(text).map((char, index) => {
        const distance =
          hoveredIndex === null
            ? Infinity
            : Math.abs(index - hoveredIndex);

        let weight = 400;

        if (distance === 0) {
          weight = 900;
        } else if (distance === 1) {
          weight = 650;
        } else if (distance === 2) {
          weight = 500;
        }

        return (
          <motion.span
            key={`${char}-${index}`}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{
              fontWeight: weight,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
            className="inline-block cursor-default"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
}

/**
 * Right-side animated service typography
 */
function AnimatedHeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden items-center justify-center lg:flex"
    >
      <div className="relative w-full max-w-lg">

        {/* Background number */}
        <div className="pointer-events-none absolute -right-8 -top-20 select-none text-[12rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025]">
          01
        </div>

        <div className="relative">

          {/* Small label */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-10 bg-[var(--color-highlight)]" />

            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
              We create
            </span>
          </div>

          {/* Animated service */}
          <div className="relative h-[100px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index]}
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center"
              >
                <InteractiveText
                  text={words[index]}
                  className="text-5xl font-light tracking-[-0.06em] text-white xl:text-7xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress line */}
          <div className="mt-6 h-px w-full bg-white/10">
            <motion.div
              key={index}
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2.2,
                ease: "linear",
              }}
              className="h-full bg-[var(--color-highlight)]"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            className="mt-7 max-w-md text-sm leading-relaxed text-white/45"
          >
            We transform ideas into visual experiences that
            make businesses look distinctive, memorable, and
            ready to be noticed.
          </motion.p>

          {/* Counter */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-xs font-medium tracking-[0.2em] text-white">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-16 bg-white/20" />

            <span className="text-xs tracking-[0.2em] text-white/30">
              {String(words.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 110,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(y, {
    stiffness: 110,
    damping: 18,
    mass: 0.8,
  });

  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const rect = sectionRef.current?.getBoundingClientRect();

    if (!rect) return;

    const px =
      ((event.clientX - rect.left) / rect.width - 0.5) * 26;

    const py =
      ((event.clientY - rect.top) / rect.height - 0.5) * 26;

    x.set(px);
    y.set(py);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative h-screen overflow-hidden bg-black"
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

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

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <Container className="relative z-10 flex h-full items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* ========================================
              LEFT SIDE
          ======================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >

            {/* Small label */}

            {/* <motion.div
              variants={item}
              className="mb-8 flex items-center gap-4"
            >
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
                Complete Branding & Printing Solutions
              </span>

              <span className="h-px w-12 bg-white/20" />
            </motion.div> */}

            {/* ========================================
                INTERACTIVE HEADLINE
            ======================================== */}

            <h1 className="font-sans text-[clamp(4rem,10vw,8.5rem)] font-light leading-[0.90] tracking-[-0.085em] text-white">

              {/* Your */}
              <motion.span
                variants={item}
                className="block"
              >
                <InteractiveText text="Your brand" />
              </motion.span>

              {/* deserves to */}
              <motion.span
                variants={item}
                className="block"
              >
                <InteractiveText text="Deserves to" />
              </motion.span>

              {/* Be seen */}
              <motion.span
                variants={item}
                className="mt-2 block font-bold text-[var(--color-highlight)]"
              >
                <InteractiveText text="Be seen." />
              </motion.span>

            </h1>

            {/* ========================================
                DESCRIPTION
            ======================================== */}

            <motion.div
              variants={item}
              className="mt-9 max-w-xl"
            >
              <p className="text-base leading-relaxed text-white/60 sm:text-lg">
                We build bold identities, memorable packaging,
                powerful signage, and print experiences that
                help your business stand out in the real world.
              </p>
            </motion.div>

            {/* ========================================
                BUTTONS
            ======================================== */}

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >

              {/* Primary button */}

              <a
                href="#services"
                className="group inline-flex items-center gap-4 rounded-full bg-[var(--color-highlight)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)]"
              >
                <span>
                  Explore our work
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>

              {/* WhatsApp */}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--color-highlight)] transition-transform duration-300 group-hover:scale-150" />

                WhatsApp us
              </a>
            </motion.div>

          </motion.div>

          {/* ========================================
              RIGHT SIDE
          ======================================== */}

          <AnimatedHeroText />

        </div>
      </Container>

      {/* ========================================
          BOTTOM GRADIENT
      ======================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* ========================================
          BRAND MARK
      ======================================== */}

      <div className="pointer-events-none absolute bottom-8 right-8 hidden text-[0.6rem] uppercase tracking-[0.3em] text-white/20 lg:block">
        ADOBZONE®
      </div>

    </section>
  );
}
