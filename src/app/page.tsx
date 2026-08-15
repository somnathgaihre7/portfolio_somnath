import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="flex flex-1 flex-col gap-24 py-28">
        <Hero />
        <Section id="experience" badge="Career" title="Experience & Education">
          <div className="glass rounded-2xl p-8 text-muted">
            Experience placeholder — Phase 4
          </div>
        </Section>
        <Section id="stack" badge="Toolkit" title="Stack">
          <div className="glass rounded-2xl p-8 text-muted">
            Stack placeholder — Phase 5
          </div>
        </Section>
        <Section id="work" badge="Projects" title="Work">
          <div className="glass rounded-2xl p-8 text-muted">
            Work placeholder — Phase 5
          </div>
        </Section>
        <Section id="contact" badge="Let's talk" title="Contact">
          <div className="glass rounded-2xl p-8 text-muted">
            Contact placeholder — Phase 6
          </div>
        </Section>
      </main>
    </>
  );
}
