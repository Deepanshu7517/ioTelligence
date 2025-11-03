import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      {subtitle && (
        <p className="mb-2 font-semibold text-primary">{subtitle}</p>
      )}
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
