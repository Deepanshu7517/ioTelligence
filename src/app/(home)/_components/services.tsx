import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Section, SectionHeading } from "../../../components/site/section";
import { services } from "../../../lib/data";
import { Button } from "../../../components/ui/button";
import { motion, type Variants } from "framer-motion";
export default function Services() {
  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between child animations
        delayChildren: 0.3, // optional
      },
    },
  };

  const itemMotion: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0,
        ease: "easeOut" as any, // 👈 TypeScript fix
      },
    },
  };
  return (
    <Section id="services">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <SectionHeading title="What We Do Best" subtitle="Our Services" />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            variants={itemMotion}
            key={index}
            className="relative rounded-2xl p-[2px] bg-transparent transition-all
             before:absolute before:inset-0 before:rounded-2xl 
             before:bg-gradient-to-r before:from-[#f75bc3] before:via-[#7c3aed] before:to-[#91316b]
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 transition-transform duration-300 hover:-translate-y-2"
          >
            <Card className="relative z-10 rounded-[15px] bg-card">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
