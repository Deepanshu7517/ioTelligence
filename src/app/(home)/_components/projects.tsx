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

export default function Projects() {
  const handleViewAllClick = (e: Event) => {
    e.preventDefault();
    console.log("View all projects clicked");
    // Add your navigation logic here
  };

  return (
    <Section id="projects" className="bg-secondary/50">
      <SectionHeading title="Featured Projects" subtitle="Our Work" />
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
          <a href="#" onClick={handleViewAllClick}>See All Projects</a>
        </Button>
      </div>
    </Section>
  );
}