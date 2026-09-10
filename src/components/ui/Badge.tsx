import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/5 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
      {children}
    </span>
  );
}
