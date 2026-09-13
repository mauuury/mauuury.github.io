import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <div className="px-6 pb-8">
        <Marquee />
      </div>
      <Contact />
    </>
  );
}
