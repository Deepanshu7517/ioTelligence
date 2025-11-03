import {
  CodeXml,
  Smartphone,
  Cloud,
  BrainCircuit,
  PenTool,
  type LucideIcon,
  Linkedin,
  Github,
  Instagram,
} from "lucide-preact";
import { PlaceHolderImages } from "./placeholder-images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const milestones = [
  { year: "2025", description: "Founded" },
  { data: "10+", description: "Happy Clients" },
  { data: "15+", description: "Projects Completed" },
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
    icon: CodeXml,
  },
  {
    title: "Mobile Apps",
    description:
      "Designing and developing native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Cloud Integration",
    description:
      "Leveraging cloud platforms like AWS and Google Cloud to build scalable and resilient infrastructure.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description:
      "Implementing AI-powered solutions and automation to enhance efficiency and drive growth.",
    icon: BrainCircuit,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces that provide an exceptional user experience.",
    icon: PenTool,
  },
];

const projectImages = PlaceHolderImages.filter(p => p.id.startsWith("project-")).map(p => p.imageUrl);

export const projects = [
  {
    title: "Enterprise CRM Platform",
    description:
      "A comprehensive CRM solution that improved user engagement by 40% through intuitive design and powerful features.",
    image: projectImages[0],
    imageHint: "dashboard ui"
  },
  {
    title: "E-commerce Mobile App",
    description:
      "A sleek and performant mobile app that boosted sales and customer retention for a major retail brand.",
    image: projectImages[1],
    imageHint: "mobile app"
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An advanced analytics dashboard providing real-time insights, helping the client make data-driven decisions.",
    image: projectImages[2],
    imageHint: "website analytics"
  },
];

export const technologies = [
  "React",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Microsoft",
  "Google Cloud",
  "Stripe",
  "Next.js",
  "TypeScript",
  "Docker",
];

const testimonialAvatars = PlaceHolderImages.filter(p => p.id.startsWith("testimonial-")).map(p => p.imageUrl);


export const testimonials = [
  {
    quote:
      "NovaTech Solutions transformed our digital presence. Their team is professional, skilled, and delivered beyond our expectations. Highly recommended!",
    name: "Sarah Johnson",
    company: "CEO, Innovate Inc.",
    avatar: testimonialAvatars[0],
    avatarHint: "profile portrait",
  },
  {
    quote:
      "The mobile app they developed for us is a masterpiece. It's fast, intuitive, and has received amazing feedback from our users.",
    name: "Michael Chen",
    company: "Founder, TechGurus",
    avatar: testimonialAvatars[1],
    avatarHint: "professional headshot",
  },
  {
    quote:
      "Working with NovaTech was a breeze. Their expertise in cloud integration helped us scale our services seamlessly.",
    name: "Emily Rodriguez",
    company: "CTO, CloudScape",
    avatar: testimonialAvatars[2],
    avatarHint: "ceo portrait",
  },
];

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "#", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: services.map(service => ({ href: "#services", label: service.title })),
};

export const socialLinks = [
  { href: "#", icon: Linkedin },
  { href: "#", icon: Github },
  { href: "#", icon: Instagram },
];
