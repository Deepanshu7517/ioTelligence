import { motion, type Variants } from "framer-motion";
import { Section, SectionHeading } from "../../components/site/section";
import Header from "../../components/site/header";
import Footer from "../../components/site/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Users,
  BarChart,
  HardHat,
  Share2,
  Activity,
  Route,
  Settings,
  Plug,
  Battery,
  Check,
  ScanLine,
  Search,
  Weight,
  Gauge,
} from "lucide-preact";
import { PlaceHolderImages } from "../../lib/placeholder-images";
import ModernCursor from "../../components/site/modernCursor";

const digitalOperations = [
  {
    title: "End-to-End Connectivity",
    icon: Share2,
  },
  {
    title: "Effective System Performance",
    icon: BarChart,
  },
  {
    title: "Visibility of Plant Operations",
    icon: HardHat,
  },
  {
    title: "Identification of KPI's to Monitor Performance",
    icon: CheckCircle,
  },
  {
    title: "Strategic Decision Making",
    icon: Users,
  },
  {
    title: "Operational Excellence: Processes & Technologies",
    icon: CheckCircle,
  },
  {
    title: "Effective Dashboards",
    icon: BarChart,
  },
];

const transformationSteps = [
  "DATA",
  "INSIGHTS",
  "DECISIONS",
  "ACTIONS",
  "Better Outcomes Create Value",
];

const smartPeopleLayers = [
  "Standard way of working",
  "Empower and engage people",
  "Performance Culture",
];

const useCases = [
  {
    title: "Part Inspection",
    icon: Search,
    features: [
      "Insert Detection",
      "Thread Detection (0.76, 0.78, 0.84, 0.86)",
      "Counter Sunk Detection",
      "Rivet Detection",
      "Packing Inspection",
    ],
    imageHint: "conveyor belt",
  },
  {
    title: "Insert Thread Inspection",
    icon: Check,
    features: [
      "Insert Thread NG/OK detection",
      "Camera inspection setup images",
      "Thread missing insert detection",
      "Software results visualization",
      "PLC validation integration",
    ],
    imageHint: "factory machine",
  },
  {
    title: "Radiator Fan Orientation Detection",
    icon: Gauge,
    features: [
      "Clock-wise vs anti-clockwise detection",
      "Real-time visual feedback",
      "Setup and implementation images",
    ],
    imageHint: "industrial fan",
  },
  {
    title: "OCR-Based Part Validation",
    icon: ScanLine,
    features: [
      "Serial number reading",
      "Part code validation",
      "Batch code tracking",
      'Rating labels (e.g., "LUMAX 2911")',
      "Multiple text recognition examples",
    ],
    imageHint: "barcode scan",
  },
  {
    title: "Quality Module Features",
    icon: Check,
    features: [
      "Process tracking with grease inspection",
      "Face movement tracking for operator monitoring",
      "Process validation in real-time",
    ],
    imageHint: "quality control",
  },
  {
    title: "Dimension Measurement",
    icon: Gauge,
    features: [
      "Camera-based dimension measurement",
      "Rivet detection (detected vs not detected)",
      "Measurement accuracy (Width: 10.99, Length: 13.34)",
      "Concentricity and pin-to-pin distance",
      "Dashboard integration",
    ],
    imageHint: "technical drawing",
  },
  {
    title: "Part Weight and Count Validation",
    icon: Weight,
    features: [
      "Real-time weight checking",
      "QR code scanning",
      "Counting validation systems",
      "Mobile integration for validation",
    ],
    imageHint: "warehouse scale",
  },
];

const eolFeatures = [
  "Real-time visibility into manufacturing processes and product quality",
  "Actionable insights for continuous improvement",
  "Product traceability through IIoT solutions",
  "Interface for action plans addressing abnormalities",
  "Proactive problem-solving",
  "Root cause identification",
  "Cost reduction (warranty claims, returns, rework)",
];

const traceabilityGoals = [
  "End-to-End Traceability",
  "Process Integration across all manufacturing processes",
  "Identification and Labeling",
  "Real-time Monitoring",
  "Compliance and Reporting for audit purposes",
];

const oeeFeatures = [
  "Monitor and maintain product quality standards",
  "Detect and address issues in real time",
  "Identify opportunities for process optimization",
  "Deliver high-quality products consistently",
];

const energyBenefits = [
  "Enhanced Visibility into energy patterns",
  "Cost Savings through efficiency improvements",
  "Data-Driven Decision Making",
  "Sustainability goals support",
  "Integration with Production Data",
];

export default function SolutionsPage() {
  const caseImages = PlaceHolderImages.filter((p) =>
    p.id.startsWith("project-")
  );

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
        duration: 0.5,
        ease: "easeOut" as any, // 👈 TypeScript fix
      },
    },
  };

  return (
    <>
      <ModernCursor />
      <Header />
      <main>
        <Section className="md:py-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="Our Solutions"
              subtitle="Driving Digital Transformation"
            />
          </motion.div>
          <div className="grid gap-16">
            <div id="digital-operations">
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 text-center font-headline text-2xl font-bold"
              >
                Digital Operations Focus
              </motion.h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {digitalOperations.map((item, index) => (
                  <motion.div key={index} variants={itemMotion}>
                    <Card
                      key={index}
                      className="text-center hover:scale-105 transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              id="digital-transformation"
              className="text-center"
            >
              <h3 className="mb-8 font-headline text-2xl font-bold">
                Digital Transformation Framework
              </h3>
              <p className="mb-4 text-lg text-foreground/80">
                Our journey from data to value:
              </p>
              <div className="relative mb-16 flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {transformationSteps.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div className="rounded-lg border bg-card p-4 px-6 text-center shadow-md">
                      <span className="font-semibold">{step}</span>
                    </div>
                    {index < transformationSteps.length - 1 && (
                      <ArrowRight className="mx-2 hidden h-8 w-8 text-primary md:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mx-auto max-w-4xl">
                <h4 className="mb-6 font-headline text-xl font-bold">
                  Smart People Approach
                </h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {smartPeopleLayers.map((layer, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <p className="text-center font-semibold">{layer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <p className="mt-12 text-lg text-foreground/80">
                We build an end-to-end digital ecosystem with integrated and
                contextualized data.
              </p>
            </motion.div>
          </div>
        </Section>
        <Section id="camera-solutions" className="bg-secondary/50">
          <SectionHeading
            title="Camera-Based Solutions"
            subtitle="Our Use Cases"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="relative aspect-video w-full">
                    <img
                      src={
                        caseImages[index % caseImages.length]?.imageUrl ||
                        `https://picsum.photos/seed/${index + 30}/400/300`
                      }
                      alt={useCase.title}
                      className="rounded-t-lg object-cover h-56 w-full"
                      data-ai-hint={useCase.imageHint}
                    />
                  </div>
                  <CardTitle className="mt-4 flex items-center gap-2 pt-2">
                    <useCase.icon className="h-6 w-6 text-primary" />
                    <span>{useCase.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {useCase.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="technology">
          <SectionHeading title="Our Technology" />

          <Tabs defaultValue="eol" className="w-full">
            <TabsList className="h-auto flex-wrap justify-around md:flex">
              <TabsTrigger value="eol">EOL Testing</TabsTrigger>
              <TabsTrigger value="traceability">Part Traceability</TabsTrigger>
              <TabsTrigger value="oee">OEE Dashboard</TabsTrigger>
              <TabsTrigger value="connectivity">
                Machine Connectivity
              </TabsTrigger>
              <TabsTrigger value="energy">Energy Management</TabsTrigger>
            </TabsList>
            <TabsContent value="eol" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6 text-primary" />
                    EOL Testing Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    Visualization dashboard for End of Line testing with a
                    real-time monitoring interface, alarms and notifications,
                    and control limits tracking.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {eolFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="traceability" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Route className="h-6 w-6 text-primary" />
                    Part Traceability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 font-semibold">Goals:</p>
                  <ul className="mb-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {traceabilityGoals.map((goal, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-2 font-semibold">Process Flow:</p>
                  <p className="rounded-md bg-muted p-4 text-sm text-foreground/80">
                    Parts Production → QR Code generation and pasting on
                    crates/SFG → Outward Scanning on dispatch → All Processes →
                    Parts Received for Assembly → Issue Observed (Record
                    Critical Parameters, Check and validate process-specific
                    details to identify batch)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="oee" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    OEE Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    16 Major Loss capturing according to TPM, real-time OEE
                    monitoring, and performance/quality monitoring with
                    real-time SPC calculation.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {oeeFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="connectivity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plug className="h-6 w-6 text-primary" />
                    Machine Connectivity Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Live machine running status dashboard with real-time
                    connectivity monitoring and device status visualization
                    (Green: connected, Red: idle/disconnected) for various
                    machine types including Vertical IMM, Horizontal IMM, Rotary
                    IMM, VMC, etc.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="energy" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-6 w-6 text-primary" />
                    Energy Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    Monitor overall energy consumption (in kWh) with a real-time
                    analysis dashboard, hourly tracking, and area-wise
                    breakdown.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {energyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Section>
      </main>
      <Footer />
    </>
  );
}
