import { Section } from "../../../components/site/section";
import { technologies } from "../../../lib/data";

export default function Technologies() {
  const allTechnologies = [...technologies, ...technologies];

  return (
    <Section className="py-12 md:py-16">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </Section>
  );
}
