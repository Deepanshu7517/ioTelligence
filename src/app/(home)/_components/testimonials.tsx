import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import {
  Card,
  CardContent,
} from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Section, SectionHeading } from "../../../components/site/section";
import { testimonials } from "../../../lib/data";
import { Star } from "lucide-preact";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-secondary/50">
      <SectionHeading title="What Our Clients Say" subtitle="Testimonials" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-xs sm:max-w-xl lg:max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 text-foreground/80">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
