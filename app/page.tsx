import { AnimatedBackground } from "@/components/animated-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Services } from "@/components/sections/services";
import { Principles } from "@/components/sections/principles";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Services />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
