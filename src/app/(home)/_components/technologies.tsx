import { Section } from "../../../components/site/section";
import { technologies } from "../../../lib/data";

export default function Technologies() {
  // Duplicate technologies to create a seamless infinite scroll effect
  const allTechnologies = [...technologies, ...technologies];

  return (
    <Section className="py-12 md:py-16 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Marquee Container */}
        <div className="marquee flex gap-12">
          {/* 1st batch */}
          <div className="flex gap-12">
            {allTechnologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* 2nd batch (duplicate for infinite loop) */}
          <div className="flex gap-12" aria-hidden="true">
            {allTechnologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}
