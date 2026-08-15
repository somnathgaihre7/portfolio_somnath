"use client";

import { motion } from "motion/react";

const projects = [
  {
    name: "Wellness Automate",
    description:
      "CRM platform for beauty parlours, salons, spas and all beauty shops — appointment booking and booking courses.",
  },
  {
    name: "FitnSync",
    description:
      "Gym management system to manage booking trainers and scheduling.",
  },
  {
    name: "Garage Sewa",
    description:
      "Online system to book and call garages and mechanics for emergencies that happen to any two-wheelers and four-wheelers vehicles.",
  },
];

export default function Work() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
          className="glass glass-hover flex flex-col rounded-2xl p-7 transition-transform hover:-translate-y-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-sky-500 text-sm font-bold text-white">
            {project.name.charAt(0)}
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">
            {project.name}
          </h3>
          <p className="mt-2 text-muted">{project.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
