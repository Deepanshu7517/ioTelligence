import { useState, useEffect } from "preact/hooks";
import { Button } from "../../../components/ui/button";
import { PlaceHolderImages } from "../../../lib/placeholder-images";
import { ArrowRight } from "lucide-preact";
import Robot2 from "../../../components/ui/robot2";
import robot2 from "../../../assets/robot2.png";
import { motion } from "framer-motion";
export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-spline");
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint (768px)
    };

    // Check initially
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    <section id="home" className="bg-secondary/50 pt-16 md:pt-12">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Transform Your Business with{" "}
              <span className={"text-gradient"}>
                Intelligent AI & IoT Ecosystems{" "}
              </span>
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-6 text-lg text-foreground/80"
            >
              We create reliable AI-powered IoT solutions that transform complex
              data into precise insights and predictive intelligence.
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
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
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            {heroImage && (
              <img
                src={robot2}
                alt={heroImage.description}
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-2xl object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                loading="eager"
              />
            )}
            {isLargeScreen && (
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black">
                <Robot2 />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
