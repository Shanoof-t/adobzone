"use client";

import { Button } from "@/components/ui/Button";

export default function Error() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[var(--color-base)] px-4 py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-primary)]/70">Something went wrong</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-[var(--color-primary)]">We hit an issue.</h1>
        <p className="mt-4 text-lg text-[var(--color-ink)]/70">Please refresh the page or try again in a moment.</p>
        <div className="mt-8">
          <Button onClick={() => window.location.reload()}>Reload page</Button>
        </div>
      </div>
    </main>
  );
}
