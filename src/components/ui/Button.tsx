import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

function getStyles(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return "bg-[var(--color-accent)] text-[var(--color-base)] hover:bg-[#df7614]";
    case "secondary":
      return "border border-white/20 bg-transparent text-[var(--color-base)] hover:bg-white/5";
    default:
      return "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5";
  }
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 ${getStyles(variant)} ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 ${getStyles(variant)} ${className}`}
    >
      {children}
    </Link>
  );
}
