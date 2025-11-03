import { Section, SectionHeading } from "../../components/site/section";
import Header from "../../components/site/header";
import Footer from "../../components/site/footer";
import { Building, CheckCircle, Handshake } from "lucide-preact";
import { PlaceHolderImages } from "../../lib/placeholder-images";
import { Card, CardContent } from "../../components/ui/card";
import hanonLogo from "../../assets/hanon.png";
import aliconLogo from "../../assets/aliconLogo.png";
import bartechLogo from "../../assets/bartech.png";
import sensingAutomationLogo from "../../assets/sensingAutomationLogo.png";
import omIndustriesLogo from "../../assets/omIndustriesLogo.png";
import ModernCursor from "../../components/site/modernCursor";
import { motion } from "framer-motion";
const expertise = [
  "Real-time data monitoring",
  "Intelligent dashboards",
  "Computer vision solutions",
  "Traceability systems",
  "Advanced analytics",
];

const clients = [
  { name: "Hanon Systems", location: "Bhiwadi", note: "", logo: hanonLogo },
  {
    name: "Subros",
    location: "Manesar & Karsanpura",
    logo: "https://www.subros.com/public/upload/logo/20241221112238.webp",
  },
  {
    name: "IFB",
    location: "Binola & Kolkata",
    logo: "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/icons/ifb-logo.svg",
  },
  { name: "Alicon", location: "Binola", logo: aliconLogo },
  {
    name: "Munjal Kiriu",
    location: "Manesar",
    logo: "https://munjalkiriu.co.in/wp-content/uploads/2020/03/logo.png",
  },
  {
    name: "Amem",
    location: "Bhiwadi",
    logo: "https://www.anandgroupindia.com/wp-content/uploads/2021/08/amem-new.png",
  },
  {
    name: "Anchemco",
    location: "Parwanoo",
    logo: "https://www.anandgroupindia.com/wp-content/uploads/2019/05/i-logo.png",
  },
];

const collaborators = [
  {
    name: "Unique Controls & Solutions",
    location: "Kolhapur",
    logo: "https://www.uniquecontrols.net/images/logo.png",
  },
  { name: "Bartech", location: "Pune & Nashik", logo: bartechLogo },
  { name: "Sensing Automations", location: "NCR", logo: sensingAutomationLogo },
  { name: "OM Industries", location: "NCR", logo: omIndustriesLogo },
];

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find((p) => p.id === "about-team");

  return (
    <>
      <ModernCursor />
      <Header />
      <main className={"md:pt-20"}>
        <Section className="pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <SectionHeading
                  title="About iotelligence Software Solutions"
                  className="text-left"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-6 text-lg text-foreground/80"
              >
                We specialise in delivering technology-driven IIoT and AI-based
                solutions that optimise operations, enhance product quality and
                drive digital transformation across various industries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-8 space-y-4"
              >
                <h3 className="font-headline text-2xl font-bold">
                  Our Expertise
                </h3>
                <ul className="space-y-3">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span className="text-lg text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            {teamImage && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={teamImage.imageUrl}
                  alt={teamImage.description}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            )}
          </div>
        </Section>

        <Section className="bg-secondary/50">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h3
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="font-headline text-2xl font-bold"
            >
              Our Value Proposition
            </motion.h3>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.2 }}
              className="mt-4 text-xl text-foreground/80"
            >
              &quot;By combining technology, transformation, transparency and
              traceability, we help our clients achieve operational excellence
              and future-ready smart manufacturing.&quot;
            </motion.p>
          </div>
        </Section>

        <Section>
          <SectionHeading title="Our Clients & Collaborators" />

          <div className="grid grid-cols-1 gap-12">
            <div>
              <h3 className="mb-8 flex items-center gap-3 font-headline text-2xl font-bold">
                <Building className="h-7 w-7 text-primary" />
                Our Clients
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {clients.map((client, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {client.logo ? (
                        <div className="relative h-16 w-32 flex items-center justify-center">
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.innerHTML = `<span class="text-lg font-bold">${client.name}</span>`;
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <span className="text-lg font-bold">{client.name}</span>
                      )}
                      <p className="mt-2 text-sm text-foreground/70">
                        {client.location}
                      </p>
                      {client.note && (
                        <p className="text-xs text-foreground/50">
                          {client.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 flex items-center gap-3 font-headline text-2xl font-bold">
                <Handshake className="h-7 w-7 text-primary" />
                Our Collaborators
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {collaborators.map((collaborator, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {collaborator.logo ? (
                        <img src={collaborator.logo} alt="" />
                      ) : (
                        <p className="font-bold">{collaborator.name}</p>
                      )}
                      <p className="mt-1 text-sm text-foreground/70">
                        {collaborator.location}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
