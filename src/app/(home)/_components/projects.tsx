import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Section, SectionHeading } from "../../../components/site/section";
import { projects } from "../../../lib/data";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Projects() {
  const navigate = useNavigate()
  const handleViewAllClick = (e: Event) => {
    e.preventDefault();
    console.log("View all projects clicked");
    navigate("/products")
    // Add your navigation logic here
  };

  return (
    <Section id="projects" className="bg-secondary/50">
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >

      <SectionHeading className={"[&>h2]:mb-2 [&>h2]:font-semibold [&>h2]:text-primary [&>h2]:text-lg [&>p]:font-headline [&>p]:font-bold [&>p]:tracking-tight [&>p]:text-3xl [&>p]:text-foreground [&>p]:md:text-4xl"} title="From Automobile to Consumer Goods, a wide range of applications for every manufacturing" subtitle="Featured Projects" />
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline text-lg">
                {project.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline">
          <button onClick={handleViewAllClick}>See All Projects</button>
        </Button>
      </div>
    </Section>
  );
}