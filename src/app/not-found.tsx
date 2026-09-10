import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[var(--color-base)] px-4 py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-primary)]/70">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-[var(--color-primary)]">Page not found</h1>
        <p className="mt-4 text-lg text-[var(--color-ink)]/70">The page you were looking for no longer exists or has moved.</p>
        <div className="mt-8">
          <ButtonLink href="/" className="gap-2">Back to home</ButtonLink>
        </div>
      </div>
    </main>
  );
}
