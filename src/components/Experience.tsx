"use client";

import { motion } from "motion/react";

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Hivecore Technologies",
    period: "Jul 2025 - Apr 2026",
    duration: "10 mos",
  },
  {
    role: "Full Stack Intern",
    company: "Hivecore Technologies",
    period: "Apr 2025 - Jul 2025",
    duration: "4 mos",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative">
        <span
          aria-hidden
          className="absolute left-0 top-3 bottom-3 w-px bg-linear-to-b from-accent/60 via-white/10 to-white/5"
        />
        <div className="flex flex-col gap-8 pl-8">
          {experience.map((job, index) => (
            <motion.article
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="glass glass-hover relative rounded-2xl p-6"
            >
              <span
                aria-hidden
                className="absolute -left-8 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20"
              />
              <h3 className="font-display text-lg font-semibold sm:text-xl">
                {job.role}
              </h3>
              <p className="mt-1 font-medium text-accent-2">{job.company}</p>
              <p className="mt-2 text-sm text-muted">
                {job.period} · {job.duration}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="glass rounded-2xl p-6"
      >
        <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-2">
          Education
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold sm:text-xl">
          BSc in Computer Science and Information Technology
        </h3>
        <p className="mt-1 font-medium text-accent-2">
          Amrit Science Campus, Tribhuvan University
        </p>
        <p className="mt-2 text-sm text-muted">2022 - 2026</p>
      </motion.div>
    </div>
  );
}
