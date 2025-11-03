import { Button } from "../../../components/ui/button";
import { PlaceHolderImages } from "../../../lib/placeholder-images";
import { ArrowRight } from "lucide-preact";
import Robot2 from "./robot2";
export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-spline");

  const handleContactClick = (e: Event) => {
    e.preventDefault();
    window.location.href =
      "mailto:deepudagar90@gmail.com?subject=Hello&body=Hi, I visited your website!";
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = (e: Event) => {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="bg-secondary/50 pt-16 md:pt-4">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Transform Your Business with {" "}
              <span className={"text-gradient"}> AI Computer Vision & IoT Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              We design and develop full-stack applications that help startups
              and enterprises grow faster.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="#contact" onClick={handleContactClick}>
                  Get a Free Consultation{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects" onClick={handleProjectsClick}>
                  View Our Work
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {heroImage && (
              <img
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-2xl object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                loading="eager"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black">
              <Robot2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
