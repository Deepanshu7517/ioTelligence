import {
  CodeXml,
  Smartphone,
  Cloud,
  BrainCircuit,
  PenTool,
  type LucideIcon,
  Linkedin,
  Instagram,
} from "lucide-preact";
import { PlaceHolderImages } from "./placeholder-images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
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
  link:string
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
    icon: CodeXml,
    link:"https://en.wikipedia.org/wiki/Web_development"
  },
  {
    title: "Mobile Apps",
    description:
    "Designing and developing native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link:""
  },
  {
    title: "Cloud Integration",
    description:
    "Leveraging cloud platforms like AWS and Google Cloud to build scalable and resilient infrastructure.",
    icon: Cloud,
    link:""
  },
  {
    title: "AI & Automation",
    description:
    "Implementing AI-powered solutions and automation to enhance efficiency and drive growth.",
    icon: BrainCircuit,
    link:""
  },
  {
    title: "UI/UX Design",
    description:
    "Creating intuitive and visually appealing user interfaces that provide an exceptional user experience.",
    icon: PenTool,
    link:""
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
  { href: "https://www.linkedin.com/company/iotelligence-software-solutions/", icon: Linkedin },
  { href: "https://www.instagram.com/iotelligence?utm_source=qr&igsh=aHZnbTY2eWZqYWVi", icon: Instagram },
];
export const techStackProjects = [
  {
    title: "IIoT Data Platform",
    description: "A real-time data monitoring and analytics platform for industrial machinery, providing insights into operational efficiency and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "industrial dashboard",
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      backend: ["Node.js", "Express", "MQTT"],
      database: ["PostgreSQL", "TimescaleDB"],
    },
  },
  {
    title: "Computer Vision QA System",
    description: "An AI-powered quality assurance system that uses computer vision to detect defects in manufacturing lines with high accuracy.",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "computer vision",
    stack: {
      frontend: ["React", "Material-UI"],
      backend: ["Python", "Flask", "OpenCV", "TensorFlow"],
      database: ["MongoDB"],
    },
  },
  {
    title: "Field Service Mobile App",
    description: "A cross-platform mobile app for technicians to manage work orders, track parts inventory, and access technical documentation in the field.",
    image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    imageHint: "mobile interface",
    stack: {
      frontend: ["React Native", "Redux"],
      backend: ["Firebase"],
      database: ["Firestore"],
    },
  },
];