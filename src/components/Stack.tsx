"use client";

import { motion } from "motion/react";

const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "Nest.js"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS EC2"],
  },
];

export default function Stack() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-2">
            {category.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span
                key={item}
                className="glass glass-hover rounded-full px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-2"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
