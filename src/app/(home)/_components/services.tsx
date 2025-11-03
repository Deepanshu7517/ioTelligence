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
import { motion } from "framer-motion";
export default function Services() {
  return (
    <Section id="services">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <SectionHeading title="What We Do Best" subtitle="Our Services" />
      </motion.div>
      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ scale: 1 , opacity:1}}
            initial={{ scale: 0, opacity:0 }}
            transition={{ duration: 0.3, delay:index * 0.2, ease:"linear"}}
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
