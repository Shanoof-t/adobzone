"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Camera, Mail, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex h-12 items-center justify-center"
      aria-label="Go to homepage"
    >
      <span className="hidden h-full items-center sm:flex">
        <Image
          src="/logo-light-notag.svg"
          alt="Adobzone Logo"
          width={160}
          height={45}
          priority
          className="block h-8 w-auto object-contain sm:h-9 md:h-10"
        />
      </span>
      <span className="flex h-full items-center sm:hidden">
        <Image
          src="/logo-icon.svg"
          alt="Adobzone Logo Icon"
          width={36}
          height={36}
          priority
          className="block h-9 w-auto object-contain"
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">      
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between py-5 sm:py-6 lg:py-7">
          <Logo />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-12 w-12 place-items-center rounded-full transition-all duration-200"
          >
            <span className="grid grid-cols-2 gap-3" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${open ? "bg-white" : "bg-highlight"}`}
                />
              ))}
            </span>
          </button>
        </Container>
      </div>

      {/* Fullscreen mobile menu — sibling of the blurred wrapper above, not a descendant of it */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 h-full"
          >
            <Container className="flex h-full flex-col pt-5 sm:pt-6 lg:pt-7">
              <div className="mb-10 flex items-center justify-between">
                <Logo />

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-12 w-12 place-items-center rounded-full"
                >
                  <X className="h-10 w-10 text-white" strokeWidth={1.8} />
                </button>
              </div>

              <div className="flex flex-1 items-center justify-between gap-10">
                <nav className="flex flex-col gap-10">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                      className="text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-white transition-colors duration-200 hover:text-[var(--color-highlight)]"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="hidden min-w-[260px] max-w-sm flex-col gap-6 text-white lg:flex">
                  <div>
                    <p className="mb-3 text-sm font-medium text-white/60">
                      Get in touch
                    </p>
                    <a
                      href="mailto:fontspellingia@gmail.com"
                      className="block text-[clamp(1.3rem,2vw,2.1rem)] font-extrabold tracking-[-0.06em] text-white transition-colors hover:text-[var(--color-highlight)]"
                    >
                      adobzone@gmail.com
                    </a>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-[clamp(1.3rem,2vw,2.1rem)] font-extrabold tracking-[-0.06em] text-white transition-colors hover:text-[var(--color-highlight)]"
                    >
                      +91 8943171175
                    </a>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium text-white/60">
                      Community
                    </p>

                    <div className="flex items-center gap-3">
                      <a
                        href="https://instagram.com/adobzone"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>

                      <a
                        href="https://facebook.com/adobzone"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
                      >
                        <FaMeta className="h-4 w-4" />
                      </a>

                      <a
                        href="mailto:adobzone@gmail.com"
                        aria-label="Email"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[var(--color-highlight)] hover:text-[var(--color-highlight)]"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
