import Header from "../../components/site/header";
import Footer from "../../components/site/footer";
import { techStackProjects } from "../../lib/data";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFlask,
  SiPython,
  SiOpencv,
  SiTensorflow,
  SiFirebase,
  SiRedux,
  SiMqtt,
} from "react-icons/si";
import { FaReact, FaRobot } from "react-icons/fa";
import { DiFirebase, DiReact } from "react-icons/di";
import { TbChartInfographic } from "react-icons/tb";

const iconMap: { [key: string]: React.ElementType } = {
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  "tailwind css": SiTailwindcss,
  recharts: TbChartInfographic,
  react: FaReact,
  "node.js": SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  timescaledb: FaRobot,
  mongodb: SiMongodb,
  "material-ui": DiReact,
  python: SiPython,
  flask: SiFlask,
  opencv: SiOpencv,
  tensorflow: SiTensorflow,
  "react native": FaReact,
  redux: SiRedux,
  firebase: SiFirebase,
  firestore: DiFirebase,
  mqtt: SiMqtt,
};

function TechIcon({ name }: { name: string }) {
  const Icon = iconMap[name.toLowerCase()];
  if (!Icon) {
    return <span>{name}</span>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <Icon className="h-10 w-10" />
      <span className="text-sm text-foreground/80">{name}</span>
    </div>
  );
}


export default function TechStackPage() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col">
          {techStackProjects.map((project, index) => (
            <section
              key={index}
              className={`flex min-h-screen items-center justify-center py-16 md:py-24 ${index % 2 === 1 ? 'bg-secondary/50' : 'bg-background'}`}
            >
              <div className="container mx-auto px-4">
                <div
                  className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-video w-full overflow-hidden rounded-lg ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full rounded-lg object-cover shadow-lg"
                      loading="lazy"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <div className="lg:col-start-1 lg:row-start-1">
                    <h2 className="font-headline text-3xl font-bold text-primary">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-lg text-foreground/80">
                      {project.description}
                    </p>
                    <div className="mt-8 space-y-8">
                      {Object.entries(project.stack).map(
                        ([category, techs]) => (
                          <div key={category}>
                            <h3 className="mb-4 text-xl font-semibold capitalize text-foreground">
                              {category}
                            </h3>
                            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
                              {(techs as string[]).map((tech) => (
                                <TechIcon key={tech} name={tech} />
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}