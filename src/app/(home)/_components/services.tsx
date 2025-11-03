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

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading title="What We Do Best" subtitle="Our Services" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
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
          </div>
        ))}
      </div>
    </Section>
  );
}
