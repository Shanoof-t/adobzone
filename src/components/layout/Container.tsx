import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared horizontal rhythm for every section — same max-width and
 * responsive padding everywhere, so nothing drifts out of alignment
 * as new sections get added.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}