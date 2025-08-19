import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
  <Project showAll={false} />
      <Contact />
      <Footer />
    </>
  );
}
