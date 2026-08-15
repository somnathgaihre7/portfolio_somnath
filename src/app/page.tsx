import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="flex flex-1 flex-col gap-24 py-28">
        <Hero />
        <Section id="experience" badge="Career" title="Experience & Education">
          <Experience />
        </Section>
        <Section id="stack" badge="Toolkit" title="Stack">
          <Stack />
        </Section>
        <Section id="work" badge="Projects" title="Work">
          <Work />
        </Section>
        <Section id="contact" badge="Let's talk" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
