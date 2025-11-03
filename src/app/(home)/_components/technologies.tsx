import { Section } from "../../../components/site/section";
import { technologies } from "../../../lib/data";

export default function Technologies() {
  // Triple the technologies for smoother infinite scroll
  const allTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <Section className="py-12 md:py-16 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Marquee Container */}
        <div className="flex animate-marquee gap-12">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
            >
              {tech}
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 5s linear infinite;
        }

    
      `}</style>
    </Section>
  );
}