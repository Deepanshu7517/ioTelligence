import "../index.css"
import Header from "../components/site/header";
import Footer from "../components/site/footer";
import Hero from "./(home)/_components/hero";
import About from "./(home)/_components/about";
import Services from "./(home)/_components/services";
import Projects from "./(home)/_components/projects";
import Technologies from "./(home)/_components/technologies";
import Testimonials from "./(home)/_components/testimonials";
import Contact from "./(home)/_components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
