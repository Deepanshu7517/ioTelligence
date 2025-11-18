import { Section, SectionHeading } from "../../../components/site/section";
import { PlaceHolderImages } from "../../../lib/placeholder-images";
import Count from "../../../components/countUp";
import { motion } from "framer-motion";
export default function About() {
  const teamImage = PlaceHolderImages.find((p) => p.id === "about-team");

  return (
    <Section id="about">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <SectionHeading title="Our Mission" />
      </motion.div>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="text-center text-lg text-foreground/80 lg:text-left">
            We aim to build technology that inspires confidence—delivering
            precise, data-driven AI and IoT solutions that help organizations
            operate smarter and grow sustainably.
          </p>
          {teamImage && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={teamImage.imageUrl}
                alt={teamImage.description}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                data-ai-hint={teamImage.imageHint}
              />
            </div>
          )}
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <h3 className="font-headline text-2xl font-bold">Our Journey</h3>
          <Count />
          {/* <div className="flex w-full max-w-sm justify-between gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative  flex flex-1 flex-col items-center text-center"
              >
                <div className="mb-2 hover:scale-150 duration-300 transition-all text-3xl font-bold text-primary">
                  {milestone.data || milestone.year}
                </div>
                <div className="text-sm text-foreground/80">
                  {milestone.description}
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute left-full top-4 h-0.5 w-full -translate-x-1/2 bg-border" />
                )}
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </Section>
  );
}
