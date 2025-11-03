import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M16 0L32 9.2376L24 13.8564V23.094L16 27.7128L0 18.4752V9.2376L16 0Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M16 4.6188L8 9.2376L16 13.8564L24 9.2376L16 4.6188Z"
          fill="currentColor"
        />
        <path
          d="M24 13.8564L16 18.4752V27.7128L24 23.094V13.8564Z"
          fill="currentColor"
        />
        <path
          d="M8 13.8564V23.094L16 27.7128V18.4752L8 13.8564Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
      </svg>
      <span className="font-headline text-xl font-bold text-foreground">
        Iotelligence
      </span>
    </Link>
  );
}
