"use client";

import { FormEvent, useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

import { StarsGalaxy } from "@/components/ui/StarsGalaxy";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const WORDS = ["ideas.", "projects.", "campaigns.", "stories."];

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
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: "0%",
            opacity: 1,
          }}
          exit={{
            y: "-100%",
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block leading-none"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (success) {
      setSuccess(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setError("");
    setSuccess(false);

    // Validation
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!form.subject.trim()) {
      setError("Please enter a subject.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      let result: {
        success?: boolean;
        message?: string;
        error?: string;
      };

      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid response from server.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit contact form.");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission failed:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white">
      {/* =====================================================
    HERO
===================================================== */}

      <section className="relative min-h-[100svh] overflow-hidden bg-black">
        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <StarsGalaxy
            stars={220}
            speed={0.35}
            twinkle={0.45}
            size={1.1}
            background="transparent"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        </div>

        {/* Hero content */}

        <Container className="relative z-10 flex min-h-[100svh] w-full items-center justify-center px-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]"
            >
              Let&apos;s{" "}
              <span className="text-[var(--color-highlight)]">Talk .</span>
            </motion.h1>

            {/* Large separation */}

            <div className="h-2 sm:h-5" />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mx-auto max-w-xl px-2 text-center text-[15px] leading-7 text-white/50 sm:text-lg sm:leading-8"
            >
              Have an idea, a project, or simply a question? Tell us what&apos;s
              on your mind. We&apos;d love to hear from you.
            </motion.p>

            {/* CTA */}

            <motion.a
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              href="#contact-form"
              className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[var(--color-highlight)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.3)] sm:mt-12"
            >
              Let&apos;s connect
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </Container>

        {/* Scroll indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-[var(--color-highlight)]"
          />
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
        className="relative z-10 border-t border-white/10 py-24 md:py-32"
      >
        <Container className="w-full">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
              {/* =================================================
                  LEFT INTRO
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-[var(--color-highlight)]" />

                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
                    Quick inquiry
                  </span>
                </div>

                <h2 className="mt-7 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                  Tell us
                  <br />
                  <span className="font-bold text-[var(--color-highlight)]">
                    everything.
                  </span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
                  Give us a little context about your project. You don&apos;t
                  need to have everything figured out yet.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["Branding", "Packaging", "Printing", "Signage"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/40"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                {/* Contact details */}

                <div className="mt-12 space-y-5">
                  <a
                    href="mailto:adobzone@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-highlight)] transition-transform duration-300 group-hover:scale-150" />

                    <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                      adobzone@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:+918943171175"
                    className="group flex items-center gap-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-highlight)] transition-transform duration-300 group-hover:scale-150" />

                    <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                      +91 8943171175
                    </span>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-highlight)]" />

                    <span className="text-sm text-white/50">
                      Malappuram, Kerala
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FORM
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name + Email */}

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-white/40"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        autoComplete="name"
                        required
                        className="h-12 w-full border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[var(--color-highlight)] disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-white/40"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={isSubmitting}
                        autoComplete="email"
                        required
                        className="h-12 w-full border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[var(--color-highlight)] disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-white/40"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        disabled={isSubmitting}
                        autoComplete="tel"
                        required
                        className="h-12 w-full border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[var(--color-highlight)] disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-white/40"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        disabled={isSubmitting}
                        required
                        className="h-12 w-full border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[var(--color-highlight)] disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[0.65rem] uppercase tracking-[0.25em] text-white/40"
                    >
                      Message
                      <span className="ml-2 text-white/20">Optional</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[var(--color-highlight)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Error */}

                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      role="alert"
                      className="border-l border-red-400 px-4 py-3 text-sm text-red-300"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Success */}

                  {success && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      role="status"
                      className="border-l border-[var(--color-accent)] px-4 py-3 text-sm text-[var(--color-accent)]"
                    >
                      Your message has been sent successfully. We&apos;ll get
                      back to you soon.
                    </motion.div>
                  )}

                  {/* Submit */}

                  <div className="flex items-center justify-between gap-6 pt-2">
                    <p className="hidden max-w-xs text-[0.65rem] leading-5 text-white/25 sm:block">
                      Tell us what you have in mind and we&apos;ll take it from
                      there.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group ml-auto inline-flex h-13 items-center gap-4 rounded-full bg-[var(--color-highlight)] px-7 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,133,28,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send message</span>

                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
