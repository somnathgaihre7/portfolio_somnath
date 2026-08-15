import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  badge: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, badge, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="glass rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-2">
            {badge}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
