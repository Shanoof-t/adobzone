import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { siteConfig, socialLinks } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FaMeta } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  // { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-highlight)]/60 to-transparent" />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_0.75fr_1fr] lg:px-8 lg:py-20">
        <div className="">
          {/* <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-3 py-2 backdrop-blur-sm">
            <Image
              src="/logo-light-notag.svg"
              alt="Adobzone logo"
              width={160}
              height={42}
              priority
              className="h-9 w-auto object-contain"
            />
          </div> */}

          <div className="space-y-0">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-2xl font-semibold tracking-[-0.04em] text-white transition-colors hover:text-[var(--color-highlight)] sm:text-[2rem]"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="block text-2xl font-semibold tracking-[-0.04em] text-white transition-colors hover:text-[var(--color-highlight)] sm:text-[2rem]"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/70">
            Branding, design, print, packaging, signage, and promotional
            solutions built for businesses that want to stand out.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Explore
          </p>
          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors duration-200 hover:text-[var(--color-highlight)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <div className="space-y-3 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Visit us
            </p>
            <div className="mt-2">
              {" "}
              <p className="max-w-[220px] leading-relaxed text-white/80">
                Malappuram, Kerala
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-highlight)] transition-colors hover:text-white"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-white/60">Community</p>

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

      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center  text-base font-semibold tracking-tight text-white">
            <Image
              src="/logo-light-notag.svg"
              alt="Adobzone logo"
              width={80}
              height={42}
              priority
              className="h-4 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/60 sm:text-xs">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>

          <span>
            © {new Date().getFullYear()} Adobzone. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
