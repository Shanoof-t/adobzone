import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr_0.7fr] lg:px-8">
        <div>
          <div className="text-3xl font-semibold tracking-[-0.08em] uppercase">adobzone</div>
          <p className="mt-4 max-w-sm text-sm text-white/70">{siteConfig.tagline}</p>
          <div className="mt-8 flex gap-4 text-sm text-white/80">
            <a href={socialLinks.instagram} aria-label="Instagram" className="rounded-full border border-white/15 px-3 py-2 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">IG</a>
            <a href={socialLinks.facebook} aria-label="Facebook" className="rounded-full border border-white/15 px-3 py-2 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">FB</a>
            <a href={socialLinks.whatsapp} aria-label="WhatsApp" className="rounded-full border border-white/15 px-3 py-2 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">WA</a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Quick links</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#work">Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3"><Phone size={16} className="text-[var(--color-accent)]" /> <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-[var(--color-accent)]" /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-[var(--color-accent)]" /> <span>Malappuram, Kerala</span></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">QR code</p>
          <div className="mt-5 flex h-24 w-24 items-center justify-center border border-white/15 bg-white/5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">QR</div>
          <div className="mt-6">
            <ButtonLink href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full text-[10px]">
              <MessageCircle className="mr-2" size={14} /> WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 text-xs text-white/60 sm:px-6 lg:px-8">
          <span>© 2026 Adobzone</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
