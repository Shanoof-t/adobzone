export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-[var(--color-base)]">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-[var(--color-primary)]/10 border-t-[var(--color-accent)]" />
    </div>
  );
}
