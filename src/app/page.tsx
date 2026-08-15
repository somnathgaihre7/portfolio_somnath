import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="flex flex-1 flex-col gap-24 py-28">
        <section id="hero" className="scroll-mt-28 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-muted">Hero placeholder — Phase 3</p>
        </section>
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
